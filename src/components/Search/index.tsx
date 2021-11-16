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
  const [searchValue, setSearchValue] = useState<string>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const payload: GetNews = {
      searchKey: searchValue
    };

    try {
      const data = await getNews(payload);
      const results = data.response.results;
  
      if (results.length) {
        setSearchResponse(results);
      }
      setIsLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // TODO: Handle error
        console.error(error.message);
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
    <section className="search-component block">
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
          placeholder="Search..."
          onChange={handleInputChange}
        />
        <Button
          content={"Search"}
          type="submit"
          action={() => {}}
        />
      </form>
    </section>
  );
};