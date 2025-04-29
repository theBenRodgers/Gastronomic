import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import ThemeText from '@/components/theme/ThemeText'
import Header from '@/components/ui/Header'
import colors from '@/components/theme/colors';


const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
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
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#f7e7c5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    margin: 5,
  },
});

export default HomeScreen;
