import Instruction from "./Instruction";
import SearchResult from "./PantryItem";

interface Recipe {
  id: number;
  name: string;
  image: string;

  servings?: number;
  readyInMinutes?: number;
  preparationMinutes?: number;
  cookingMinutes?: number;

  ingredients?: SearchResult[];
  missedIngredientCount?: number;
  missedIngredients?: SearchResult[];
  usedIngredientCount?: number;
  usedIngredients?: SearchResult[];

  instructions?: Instruction[];

  cuisines?: string[];
  dishTypes?: string[];
  occasions?: string[];

  sourceUrl?: string;
}

export default Recipe
