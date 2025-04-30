interface RecipeRequest {
  query?: string;
  cuisine?: string;
  ingredients?: string[];
  mtype?: string;
  page: number;
}

export default RecipeRequest;