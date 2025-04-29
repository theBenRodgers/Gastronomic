<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Pressable, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/ui/ThemeText'
import Header from '@/components/ui/Header'
import { router } from 'expo-router';
import { getAuth } from 'firebase/auth';
=======
import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import ThemeText from '@/components/theme/ThemeText'
import Header from '@/components/ui/Header'
import colors from '@/components/theme/colors';

>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
<<<<<<< HEAD
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
=======
        <Header>Welcome Back!</Header>

        <View style={styles.centerContent}>
          <View style={styles.row}>
            <TouchableHighlight style={styles.button} onPress={() => router.navigate('/search_screen')}>
              <ThemeText type='title'>My Pantry</ThemeText>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => router.navigate('/recipes')}>
              <ThemeText type='title'>My Recipes</ThemeText>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
          <TouchableHighlight style={styles.button} onPress={() => router.navigate('/search_screen')}>
              <ThemeText type='title'>Search P</ThemeText>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => router.navigate('/recipes_search')}>
              <ThemeText type='title'>Search R</ThemeText>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight style={styles.button} onPress={() => router.navigate('/grocery')}>
              <ThemeText type='title'>Grocery</ThemeText>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => router.navigate('/settings')}>
              <ThemeText type='title'>Profile</ThemeText>
            </TouchableHighlight>
          </View>
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: 'white',
=======
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD
  optionContainer: {
    backgroundColor: '#f7e7c5',
    width: '80%',
    height: '20%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
=======
  button: {
    backgroundColor: '#f7e7c5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    margin: 5,
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
  },
});

export default HomeScreen;
