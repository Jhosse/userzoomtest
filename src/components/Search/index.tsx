import React, {
  useState,
  ReactElement,
  FormEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction
} from "react";
import Button from "../Button";
import { getNews } from "../../services/api";
import { GetNews, GetNewsResult } from "../../services/api/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setSearchResults, setSearchKey, searchResultsReset, searchKey } from "../../store/searchResultsSlice";

import "./styles.css";

const INPUT_ID = "search-input"

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

  const [searchValue, setSearchValue] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchResultsReset());
    setIsLoading(true);
    const payload: GetNews = {
      searchKey: searchValue
    };

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

  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <section className="search-component">
      <h1 className="montserrat-bold m-zero">Search</h1>
      <form className="" onSubmit={handleSubmit}>
        <label className="search-label display-block" htmlFor={INPUT_ID}>
          Add a description.
        </label>
        <input
          id={INPUT_ID}
          className="search-field display-block"
          type="input"
          name="Search"
          placeholder={!!searchKeyFromStore ? searchKeyFromStore : "Search..."}
          onChange={handleInputChange}
        />
        <Button
          className={"search-button"}
          content={"Search"}
          type="submit"
          action={() => {}}
        />
      </form>
    </section>
  );
};