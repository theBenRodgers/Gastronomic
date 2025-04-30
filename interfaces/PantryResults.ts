import PantryItem from "./PantryItem";

interface PantryResults {
  results: [PantryItem];
  page: number;
  totalPages: number;
}

export default PantryResults;