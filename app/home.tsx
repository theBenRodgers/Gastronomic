import React from 'react';
import { StyleSheet, View, TouchableHighlight, Platform, useWindowDimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';

import ThemeText from '@/components/theme/ThemeText'
import Header from '@/components/ui/Header'
import colors from '@/components/theme/colors';


const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        <Header 
          type="home"
          title='Welcome Back!'
          leftNavLink='./scan'
          rightNavLink='./settings'
        />
        <View style={[styles.centerContent, Platform.OS === 'android' && styles.androidCenter]}>
          <TouchableHighlight
            style={[styles.button, isSmallScreen && styles.smallButton]}
            onPress={() => router.push('./PantryScreen')}
          >
            <ThemeText type="title">My Pantry</ThemeText>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, isSmallScreen && styles.smallButton]}
            onPress={() => router.push('./recipes')}
          >
            <ThemeText type="title">My Recipes</ThemeText>
          </TouchableHighlight>

          <TouchableHighlight
            style={[styles.button, isSmallScreen && styles.smallButton]}
            onPress={() => router.push('./RecipeView')}
          >
            <ThemeText type="title">Groceries</ThemeText>
          </TouchableHighlight>
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
  innerContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  androidCenter: {
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#f7e7c5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    height: 100,
    width: 250,
  },
  smallButton: {
    padding: 8,
    margin: 3,
  },
});

export default HomeScreen;