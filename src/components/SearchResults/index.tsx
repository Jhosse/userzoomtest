import React, { ReactElement } from "react";
import { GetNewsResult } from "../../services/api/types";

export enum SearchResultsViewState {
  Empty,
  NoResults,
  Results,
};

interface SearchResultsProps {
  viewState: SearchResultsViewState;
  results?: GetNewsResult[];
};

export default ({
  viewState,
  results
}: SearchResultsProps): ReactElement => {
  return <h1>Results</h1>
}