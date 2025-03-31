import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Pressable, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText'
import Header from '@/components/ui/Header'
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <Header>Welcome</Header>

        <View style={styles.centerContent}>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/ingredients')}>
            <ThemeText type='title'>Ingredients</ThemeText>
          </TouchableHighlight>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/recipes')}>
            <ThemeText type='title'>Saved Recipes</ThemeText>
          </TouchableHighlight>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/grocery')}>
            <ThemeText type='title'>Grocery List</ThemeText>
          </TouchableHighlight>
        </View>
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
  optionContainer: {
    backgroundColor: '#f7e7c5',
    width: '80%',
    height: '20%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});

export default HomeScreen;
