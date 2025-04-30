import ThemeText from '@/components/theme/ThemeText';
import Recipe from '@/interfaces/Recipe';
import SearchResult from '@/interfaces/PantryItem';
import Instruction from '@/interfaces/Instruction';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  ListRenderItem,
} from 'react-native';
import HeaderB from './HeaderB';

interface Props {
  recipe: Recipe;
}

const RecipeView = ({ recipe }: Props) => {
  const renderIngredient: ListRenderItem<SearchResult> = ({ item }) => {
    const metaText = item.meta?.length ? `(${item.meta.join(', ')})` : '';

    return (
      
      <View style={styles.ingredient}>
        <HeaderB />
        <Image style={styles.smallImage} source={{ uri: item.image }} />
        <Text>
          {item.amount} {item.unit} {metaText} {item.name}
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
        {recipe.readyInMinutes != null && (
          <Text>Total: {recipe.readyInMinutes} min</Text>
        )}
        {recipe.preparationMinutes != null && (
          <Text>Prep: {recipe.preparationMinutes} min</Text>
        )}
        {recipe.cookingMinutes != null && (
          <Text>Cooking: {recipe.cookingMinutes} min</Text>
        )}
      </View>

      {recipe.ingredients && (
        <View style={styles.ingredientBox}>
          <ThemeText type="title" style={styles.subHeader}>
            Ingredients
          </ThemeText>
          <FlatList<SearchResult>
            data={recipe.ingredients}
            renderItem={renderIngredient}
            keyExtractor={(ing) => ing.id.toString()}
          />
        </View>
      )}

      {recipe.instructions && (
        <View style={styles.instructionBox}>
          <ThemeText type="title" style={styles.subHeader}>
            Instructions
          </ThemeText>
          <FlatList<Instruction>
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
