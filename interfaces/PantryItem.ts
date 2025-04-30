interface PantryItem {
  // For back end db purposes
  pantry_id?: number;

  // Elements needed for list view 
  //Both
  kind: string;
  id: number;
  name: string;
  // Ingredient
  image?: string;
  // Product
  brand?: string;
  imageType?: string;

  // Ingredient specific extra information
  unit?: string;
  possibleUnits?: [string];
  estimatedCost?: number;
  shoppingListUnits?: [string];
  aisle?: string;
  categoryPath?: [string];
  weightPerServing?: number;
  meta?: [string];

  // Product specific extra information
  upc?: string;
  price?: number;
  breadcrumbs?: [string];
  category?: string;

  // Both
  calories?: number;
  protein?: number;
  fat?: number
  carbs?: number;
  amount?: number;
  expirationDate?: string;
}

export default PantryItem;