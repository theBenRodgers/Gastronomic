<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import IngredientList from '@/components/ui/IngredientList';
import { router } from 'expo-router';
import { app } from '@/firebaseConfig';
import { getAuth } from 'firebase/auth';
import Ingredient from '@/interfaces/Ingredient';
import getIngredients from '@/api/ingredients/getIngredients'



const IngredientsScreen = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    const fetchIngredients = async () => {
      const data = await getIngredients();
      setIngredients(data);
    };
    fetchIngredients();
  }, []);
  
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <Header>Ingredients</Header>

        <IngredientList ingredients={ingredients} />

        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  ingredientItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  ingredientText: {
    fontSize: 16,
    color: 'black',
  },
});

export default IngredientsScreen;
=======
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
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
