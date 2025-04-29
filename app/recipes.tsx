import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/theme/ThemeText'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { router } from 'expo-router';

const RecipesScreen = () => {
  return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <Header>Recipes</Header>

        <View style={styles.centerContent}>
        </View>
        <Footer />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
<<<<<<< HEAD
    padding: width < 375 ? 10 : 20, // Adjust padding for smaller screens
  },
  keyboardAvoidingContainer: {
    flex: 1,
=======
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
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
=======
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
  },
});

export default RecipesScreen;
