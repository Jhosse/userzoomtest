import React, {
  useState,
  ReactElement,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
import Button from "../Button";
import { getNews } from "../../services/api";
import { GetNews, GetNewsResult } from "../../services/api/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchResults, setSearchKey, searchResultsReset, searchKey } from "../../store/searchResultsSlice";
import SortNews, { SortValue } from "../SortNews";
import DateFilter, { DateFilterType } from "../DateFilter";
import SearchField from "../SearchField";

import "./styles.css";

interface SearchProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setSearchResponse: Dispatch<SetStateAction<GetNewsResult[]>>;
}

export default ({
  setIsLoading,
  setSearchResponse,
}: SearchProps): ReactElement => {
  const dispatch = useAppDispatch();
  const searchKeyFromStore = useAppSelector(searchKey);
  
  const [searchValue, setSearchValue] = useState<string>(searchKeyFromStore);
  const [sortValue, setSortValue] = useState<SortValue>();
  const [dateFrom, setDateFrom] = useState<string>();
  const [dateTo, setDateTo] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchResultsReset());
    setIsLoading(true);
    const payload: GetNews = {
      searchKey: searchValue,
      orderBy: sortValue,
    };

    /**
     * - Proper date validation should be put in place.
     */
    if (dateFrom) payload.dateFrom = dateFrom;
    if (dateTo) payload.dateTo = dateTo;

    try {
      const data = await getNews(payload);
      const results = data.results;
  
      setSearchResponse(results);
      setIsLoading(false);
      /**
       * - I wouldn't use Redux to store the results in a real application.
       * - However, as we dont have BE to cache it and I will not implement 
       * - pagination (Im only pulling 10 results from the API), redux sounds
       * - better than only storing the search key and calling again the service.
       */
      dispatch(setSearchResults(results));
      dispatch(setSearchKey(searchValue));
    } catch (error: unknown) {
      if (error instanceof Error) {
        // TODO: Handle error
        console.error(error.message);
        dispatch(searchResultsReset());
      }
      setIsLoading(false);
    }
  };

  return (
    <section className="search-component">
      <h1 className="montserrat-bold m-zero">Search</h1>
      <form className="" onSubmit={handleSubmit}>
        <SearchField setSearchValue={setSearchValue} />

        <div className="filter-data-block">
          <SortNews setOrderBy={setSortValue}/>

          <DateFilter filterType={DateFilterType.DateFrom} setValue={setDateFrom} />
          <DateFilter filterType={DateFilterType.DateTo} setValue={setDateTo} />
        </div>

        <Button
          className={"search-button"}
          content={"Search"}
          type="submit"
          action={() => {}}
          isDisabled={!searchValue}
        />
      </form>
    </section>
  );
};