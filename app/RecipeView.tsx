import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ListRenderItem,
  ActivityIndicator,
} from 'react-native';
import ThemeText from '@/components/theme/ThemeText';
import Recipe from '@/interfaces/Recipe';
import PantryItem from '@/interfaces/PantryItem';
import Instruction from '@/interfaces/Instruction';
import recipeSearch from '@/api/recipes/recipeSearch';

const RecipeView = () => {
  const recipe: Recipe = {
    id: 645646,
    name: "Grilled Chicken Gyros With Tzatziki",
    image: "https://img.spoonacular.com/recipes/645646-312x231.jpg",
    servings: 2,
    readyInMinutes: 75,

    sourceUrl: "https://www.foodista.com/recipe/8KQH5NQ3/grilled-chicken-gyros-with-tzatziki",
    ingredients: [
      {
        kind: "ingredient",
        id: 11206,
        name: "cucumber",
        image: "https://spoonacular.com/cdn/ingredients_100x100/cucumber.jpg",
        unit: "",
        possibleUnits: [""],
        amount: 1.0,
        aisle: "Produce",
        meta: [],
      },
      {
        kind: "ingredient",
        id: 1034053,
        name: "extra virgin olive oil",
        image: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
        unit: "tablespoons",
        possibleUnits: ["tablespoons"],
        amount: 2.0,
        aisle: "Oil, Vinegar, Salad Dressing",
        meta: [],
      },
      // ...continue mapping each extendedIngredient here
    ],
    missedIngredientCount: 10,
    missedIngredients: [
      {
        kind: "ingredient",
        id: 11206,
        name: "cucumber",
        image: "https://img.spoonacular.com/ingredients_100x100/cucumber.jpg",
        unit: "",
        possibleUnits: [""],
        amount: 1.0,
        aisle: "Produce",
        meta: [],
      },
      // ...other missed ingredients
    ],
    usedIngredientCount: 2,
    usedIngredients: [
      {
        kind: "ingredient",
        id: 18413,
        name: "pita bread",
        image: "https://img.spoonacular.com/ingredients_100x100/pita-bread.jpg",
        unit: "servings",
        possibleUnits: ["servings"],
        amount: 2.0,
        aisle: "Bakery/Bread",
        meta: [],
      },
      // ...other used ingredients
    ],
    instructions: [
      {
        number: 1,
        step: "Whisk together the garlic, lemon juice, vinegar, oil, yogurt, and oregano in a bowl.",
        ingredients: [
          {
            kind: "ingredient",
            id: 9152,
            name: "lemon juice",
            image: "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
          },
          {
            kind: "ingredient",
            id: 2027,
            name: "oregano",
            image: "https://spoonacular.com/cdn/ingredients_100x100/oregano.jpg",
          },
          {
            kind: "ingredient",
            id: 2053,
            name: "vinegar",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg",
          },
          {
            kind: "ingredient",
            id: 11215,
            name: "garlic",
            image: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
          },
          {
            kind: "ingredient",
            id: 1116,
            name: "yogurt",
            image: "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg",
          },
          {
            kind: "ingredient",
            id: 4582,
            name: "cooking oil",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg",
          }
        ]
      },
      {
        number: 2,
        step: "Add the chicken and rub the marinade in. Cover and refrigerate for at least an hour. Preheat the grill to medium heat (or broiler, or pan on the stove).",
        ingredients: [
          {
            kind: "ingredient",
            id: 0,
            name: "marinade",
            image: "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
          },
          {
            kind: "ingredient",
            id: 0,
            name: "chicken",
            image: "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          },
          {
            kind: "ingredient",
            id: 1012034,
            name: "dry seasoning rub",
            image: "https://spoonacular.com/cdn/ingredients_100x100/seasoning.png"
          }
        ]
      },
      {
        number: 3,
        step: "Sprinkle the chicken with salt and pepper on both sides, and then grill until cooked through, about 5 minutes per side. Allow the chicken to rest before slicing. Meanwhile, heat your pitas and top with chicken, tzatziki, tomatoes, and onions. For the Tzatziki: shred cucumbers and squeeze out moisture.",
        ingredients: [
          {
            kind: "ingredient",
            id: 1102047,
            name: "salt and pepper",
            image: "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
          },
          {
            kind: "ingredient",
            id: 11206,
            name: "cucumber",
            image: "https://spoonacular.com/cdn/ingredients_100x100/cucumber.jpg"
          },
          {
            kind: "ingredient",
            id: 11529,
            name: "tomato",
            image: "https://spoonacular.com/cdn/ingredients_100x100/tomato.png"
          },
          {
            kind: "ingredient",
            id: 93777,
            name: "tzatziki",
            image: "https://spoonacular.com/cdn/ingredients_100x100/raita-or-tzaziki.png"
          },
          {
            kind: "ingredient",
            id: 0,
            name: "chicken",
            image: "https://spoonacular.com/cdn/ingredients_100x100/whole-chicken.jpg"
          },
          {
            kind: "ingredient",
            id: 11282,
            name: "onion",
            image: "https://spoonacular.com/cdn/ingredients_100x100/brown-onion.png"
          },
          {
            kind: "ingredient",
            id: 18413,
            name: "pita",
            image: "https://spoonacular.com/cdn/ingredients_100x100/pita-bread.jpg"
          },
          {
            kind: "ingredient",
            id: 10018364,
            name: "wrap",
            image: "https://spoonacular.com/cdn/ingredients_100x100/flour-tortilla.jpg"
          },
          {
            kind: "ingredient",
            id: 4582,
            name: "cooking oil",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg"
          }
        ]
      },
      {
        number: 4,
        step: "Mix together the strained yogurt, shredded cucumbers, garlic, vinegar and lemon juice.",
        ingredients: [
          {
            kind: "ingredient",
            id: 1256,
            name: "greek yogurt",
            image: "https://spoonacular.com/cdn/ingredients_100x100/plain-yogurt.jpg"
          },
          {
            kind: "ingredient",
            id: 9152,
            name: "lemon juice",
            image: "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg"
          },
          {
            kind: "ingredient",
            id: 11206,
            name: "cucumber",
            image: "https://spoonacular.com/cdn/ingredients_100x100/cucumber.jpg"
          },
          {
            kind: "ingredient",
            id: 2053,
            name: "vinegar",
            image: "https://spoonacular.com/cdn/ingredients_100x100/vinegar-(white).jpg"
          },
          {
            kind: "ingredient",
            id: 11215,
            name: "garlic",
            image: "https://spoonacular.com/cdn/ingredients_100x100/garlic.png"
          }
        ]
      },
      {
        number: 5,
        step: "Add salt and pepper to taste. It's best to refrigerate for 30 minutes or more before serving, so flavors can meld.",
        ingredients: [
          {
            kind: "ingredient",
            id: 1102047,
            name: "salt and pepper",
            image: "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg"
          }
        ]
      },
      {
        number: 6,
        step: "Drizzle a little olive oil over the top.",
        ingredients: [
          {
            kind: "ingredient",
            id: 4053,
            name: "olive oil",
            image: "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg"
          }
        ]
      }
    ],
    cuisines: ["Mediterranean", "European", "Greek"],
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    occasions: ["father's day", "4th of july", "summer"],
  };

  const renderIngredient: ListRenderItem<PantryItem> = ({ item }) => {
    const metaText = item.meta?.join(', ') || '';
    return (
      <View style={styles.ingredient}>
        <Image style={styles.smallImage} source={{ uri: item.image }} />
        <Text>
          {item.amount} {item.unit} {metaText && `(${metaText})`} {item.name}
        </Text>
      </View>
    );
  };

  const renderInstruction: ListRenderItem<Instruction> = ({ item }) => (
    <View style={styles.instruction}>
      <Text>{item.number}. {item.step}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: recipe.image }} />
      <ThemeText type="title">{recipe.name}</ThemeText>

      <View style={styles.subCapBox}>
        {recipe.readyInMinutes != null && <Text>Total: {recipe.readyInMinutes} min</Text>}
        {recipe.preparationMinutes != null && <Text>Prep: {recipe.preparationMinutes} min</Text>}
        {recipe.cookingMinutes != null && <Text>Cooking: {recipe.cookingMinutes} min</Text>}
      </View>

      {recipe.ingredients && (
        <View style={styles.ingredientBox}>
          <ThemeText type="title" style={styles.subHeader}>Ingredients</ThemeText>
          <FlatList
            data={recipe.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(ing) => ing.id.toString()}
          />
        </View>
      )}

      {recipe.instructions && (
        <View style={styles.instructionBox}>
          <ThemeText type="title" style={styles.subHeader}>Instructions</ThemeText>
          <FlatList
            data={recipe.instructions}
            renderItem={renderInstruction}
            keyExtractor={(instr) => instr.number.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  subHeader: {
    marginBottom: 8,
    marginTop: 16,
  },
  subCapBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientBox: {
    marginTop: 16,
  },
  ingredient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  smallImage: {
    width: 32,
    height: 32,
    marginRight: 8,
    borderRadius: 4,
  },
  instructionBox: {
    marginTop: 24,
  },
  instruction: {
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
});

export default RecipeView;
