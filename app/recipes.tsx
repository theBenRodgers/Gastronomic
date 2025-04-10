import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, Platform, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { getRecipes } from '../api/recipes/getRecipes';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

const RecipesScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const insets = useSafeAreaInsets(); // Get the safe area insets to account for the Dynamic Island

  const handleSearchRecipes = async () => {
    try {
      const recipesData = await getRecipes(ingredients); // Call the helper function
      setRecipes(recipesData);
    } catch (error) {
      console.error('Error searching for recipes:', error);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Header>Recipes</Header>

          <ScrollView contentContainerStyle={[styles.centerContent, { paddingTop: insets.top }]}>
            <TextInput
              placeholder="Enter ingredients (comma separated)"
              value={ingredients}
              onChangeText={setIngredients}
              style={styles.input}
            />
            <Button title="Search Recipes" onPress={handleSearchRecipes} />

            {recipes.length > 0 ? (
              <FlatList
                data={recipes}
                keyExtractor={(item) => item.recipe_id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.recipeItem}>
                    <Text style={styles.recipeTitle}>{item.title}</Text>
                    <Text>{item.instructions}</Text>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.noRecipesText}>No recipes found.</Text>
            )}
          </ScrollView>

          <Footer />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: width < 375 ? 10 : 20, // Adjust padding for smaller screens
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 20 : 40, // Adjust margin for iOS/Android
  },
  recipeItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    width: '100%',
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noRecipesText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RecipesScreen;
