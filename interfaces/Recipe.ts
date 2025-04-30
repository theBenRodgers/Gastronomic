import Instruction from "./Instruction";
import PantryItem from "./PantryItem";

interface Recipe {
  id: number;
  name: string;
  image: string;

  servings?: number;
  readyInMinutes?: number;
  preparationMinutes?: number;
  cookingMinutes?: number;

  ingredients?: PantryItem[];
  missedIngredientCount?: number;
  missedIngredients?: PantryItem[];
  usedIngredientCount?: number;
  usedIngredients?: PantryItem[];

  instructions?: Instruction[];

  cuisines?: string[];
  dishTypes?: string[];
  occasions?: string[];

  sourceUrl?: string;
}

export default Recipe
