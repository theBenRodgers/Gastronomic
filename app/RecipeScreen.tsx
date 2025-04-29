import ThemeText from '@/components/theme/ThemeText';
import Recipe from '@/interfaces/Recipe';
import React from 'react';
import { View, StyleSheet, Image, Text} from 'react-native';

interface Props {
  recipe: Recipe;
}

const RecipeScreen = ({ recipe }: Props) => {
  const instructions = recipe.instructions;
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: recipe.image,
        }}
      />
      <ThemeText type='title'>
        { recipe.name }
      </ThemeText>
      <View style={styles.subHeader}>
        <Text> Total: {recipe.readyInMinutes} </Text>
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {

  },
  subHeader: {
    flexDirection: 'row',
  },
  instructionBox: {

  },
  instruction: {

  },
  image: {

  },
  row: {

  },
});

export default RecipeScreen;