import React, {
  useState,
  ReactElement,
  FormEvent,
  ChangeEventHandler
} from "react";
import Button from "../Button";

import "./styles.css";

const INPUT_ID = "search-input"

export default (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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