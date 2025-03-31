interface Ingredient {
  name: string;
  brand: string;
  servings?: number;
  amount?: number;
  calories?: number | null;
  protein?: number | null;
  fat?: number | null;
  carbs?: number | null;
}

export default Ingredient;