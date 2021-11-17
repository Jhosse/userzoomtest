import React, {
  useState,
  ReactElement,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from "react";
import ArrowDropDown from "../ArrowDropDown";

import "./styles.css";

export enum SortValue {
  Relevance = "Relevance",
  Newest = "Newest",
  Oldest = "Oldest",
}

interface SortNewsProps {
  setOrderBy: Dispatch<SetStateAction<SortValue>>;
}

export default ({
  setOrderBy,
}: SortNewsProps): ReactElement => {
  const [sortValue, setSortValue] = useState<SortValue>(SortValue.Relevance);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);

  const handleSortButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDropDownOpen(!isDropDownOpen);
  };

  const handleClickOption = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonTextContent = e.currentTarget.textContent as SortValue;
    setSortValue(buttonTextContent);
    setOrderBy(buttonTextContent);
    setIsDropDownOpen(false);
  };

  return (
    <div className="sort-dropdown-container">
      <span>Sort by: </span>
      <ul className="sort-dropdown">
        <li>
          <button
            className="sort-dropdown-button"
            onClick={handleSortButton}
          >
            <ArrowDropDown className={`arrow-dropdown ${isDropDownOpen ? "arrow-dropdown-open" : ""}`} />
            {sortValue}
          </button>
        </li>
        <li className={`sort-dropdown-content ${isDropDownOpen ? "sort-dropdown-content-open" : ""}`}>
          <ul className="sort-dropdown-list">
            <li>
              <button
                className="sort-dropdown-list-item"
                onClick={handleClickOption}
                >
                {SortValue.Relevance}
              </button>
            </li>
            <li>
              <button
                className="sort-dropdown-list-item"
                onClick={handleClickOption}
                >
                {SortValue.Newest}
              </button>
            </li>
            <li>
              <button
                className="sort-dropdown-list-item"
                onClick={handleClickOption}
                >
                {SortValue.Oldest}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
