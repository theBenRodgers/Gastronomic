import SearchResult from "./SearchResult";

interface SearchResults {
  results: [SearchResult];
  page: number;
  totalPages: number;
}

export default SearchResults;