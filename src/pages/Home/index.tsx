import React, {
  useState,
  useEffect,
  ReactElement
} from "react";
import { useAppSelector } from "../../store/hooks";
import { searchResults } from "../../store/searchResultsSlice";
import PageContainer from "../../containers/PageContainer";
import BodyPageContainer from "../../containers/BodyPageContainer";
import Search from "../../components/Search";
import Spinner from "../../components/Spinner";
import SearchResults, { SearchResultsViewState } from "../../components/SearchResults";
import { GetNewsResult } from "../../services/api/types";


export default (): ReactElement => {
  const resultsFromStore = useAppSelector(searchResults);

  const [searchResponse, setSearchResponse] = useState<GetNewsResult[]>(undefined);
  const [searchResultsViewState, setSearchResultsViewState] = useState<SearchResultsViewState>(SearchResultsViewState.Empty);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateSearchResultsViewState = () => {
    if (resultsFromStore.length) {
      setSearchResponse(resultsFromStore);
      return setSearchResultsViewState(SearchResultsViewState.Results);
    }
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
  }, [searchResponse, resultsFromStore]);

  return (
    <PageContainer>
      <BodyPageContainer>
        <Search
          setIsLoading={setIsLoading}
          setSearchResponse={setSearchResponse}
        />
        {isLoading ? (
          <Spinner />
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