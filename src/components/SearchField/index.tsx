import React, {
  ReactElement,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
} from "react";
import { useAppSelector } from "../../store/hooks";
import { searchKey } from "../../store/searchResultsSlice";

import "./styles.css";

const INPUT_ID = "search-input"

interface SearchFieldProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
}

export default ({
  setSearchValue,
}: SearchFieldProps): ReactElement => {
  const searchKeyFromStore = useAppSelector(searchKey);

  const handleInputChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <div>
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
    </div>
  );
};
