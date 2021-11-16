import React, {
  ReactElement,
  FunctionComponent,
  ReactNode,
 } from "react";
import { GetNewsResult } from "../../services/api/types";
import SearchResult from "../SearchResult";

import "./styles.css";

export enum SearchResultsViewState {
  Empty,
  NoResults,
  Results,
};

interface SearchResultsProps {
  viewState: SearchResultsViewState;
  results?: GetNewsResult[];
};

const SearchResultsViewContainer: FunctionComponent<
  { children: ReactNode, className?: string }
> = ({
  children,
  className
}) => {
  return (
    <section className={`view-container ${className}`}>
      {children}
    </section>
  )
};

export default ({
  viewState,
  results
}: SearchResultsProps): ReactElement => {
  switch(viewState) {
    case SearchResultsViewState.NoResults:
      return (
        <SearchResultsViewContainer
          className={"view-container-no-results"}
        >
          <h1>Please try one more time, seems there are no news for that topic.</h1>
        </SearchResultsViewContainer>
      );
    case SearchResultsViewState.Results:
      return (
        <SearchResultsViewContainer>
          {results.map((result) => {
            return (
              <SearchResult key={result.id} item={result} />
            );
          })}
        </SearchResultsViewContainer>
      );
    default:
      return (
        <SearchResultsViewContainer
          className={"view-container-no-results"}
        >
          <h1>Please search for any topic to see some news!</h1>
        </SearchResultsViewContainer>
      );
  };
};