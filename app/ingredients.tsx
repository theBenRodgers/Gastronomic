import React, { useState } from 'react';
import { View } from 'react-native';
import IngredientList from '@/components/ui/IngredientList';
import getIngredients from '@/api/ingredients/getIngredients';
import Ingredient from '@/interfaces/Ingredient';
import { useFocusEffect } from '@react-navigation/native';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';


const Ingredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const loadIngredients = async () => {
    const data = await getIngredients();
    setIngredients([...data]);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadIngredients(); // fetch and setIngredients
    }, [])
  );

  return (
    <View style={{ flex: 1 , backgroundColor: 'white'}}>
      <Header>Ingredients</Header>
      <IngredientList ingredients={ingredients} onRefresh={loadIngredients} />
      <Footer />
    </View>
  );
};

export default Ingredients;
