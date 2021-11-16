import React, {
  useState,
  useEffect,
  ReactElement
} from "react";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";
import Search from "../../components/Search";
import SearchResults, { SearchResultsViewState } from "../../components/SearchResults";
import { GetNewsResult } from "../../services/api/types";

export default (): ReactElement => {
  const [searchResponse, setSearchResponse] = useState<GetNewsResult[]>(undefined);
  const [searchResultsViewState, setSearchResultsViewState] = useState<SearchResultsViewState>(SearchResultsViewState.Empty);
  const [loading, setIsLoading] = useState<boolean>(false);

  const updateSearchResultsViewState = () => {
    if (searchResponse === undefined) {
      return setSearchResultsViewState(SearchResultsViewState.Empty);
    }
    if (!searchResponse.length && searchResponse !== undefined) {
      return setSearchResultsViewState(SearchResultsViewState.NoResults);
    }
    if (searchResponse.length) {
      return setSearchResultsViewState(SearchResultsViewState.Results);
    }
  }

  useEffect(() => {
    updateSearchResultsViewState();
  }, [searchResponse]);

  return (
    <PageContainer>
      <BodyPageContainer>
        <Search
          setIsLoading={setIsLoading}
          setSearchResponse={setSearchResponse}
        />
        {loading ? (
          <h1>LOADING</h1>
        ) : (
          <SearchResults
            viewState={searchResultsViewState}
            results={searchResponse}
          />
        )}
      </BodyPageContainer>
    </PageContainer>
  );
};