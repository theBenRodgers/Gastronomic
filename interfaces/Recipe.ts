import Ingredient from './Ingredient';

interface Recipe {
  title: string;
  ingredients: Ingredient[];
  instructions: string;
  prep_time?: number;      // Time in minutes
  cook_time?: number;
  servings?: number;
  calories?: number;
  protein?: number;
  fat?: number;
  carbs?: number;
  source_url?: string;     // URL to the recipe source
}

export default Recipe;