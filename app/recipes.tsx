import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText'
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
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipesScreen;
