import Recipe from "./Recipe";

interface RecipeResults {
  results: [Recipe];
  page: number;
  totalPages: number;
}

export default RecipeResults;