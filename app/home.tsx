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
        <View style={styles.innerContainer}>
          <Header>Welcome Back!</Header>

          <View style={[styles.centerContent, Platform.OS === 'android' && styles.androidCenter]}>
            <View style={styles.row}>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/search_screen')}
              >
                <ThemeText type="title">My Pantry</ThemeText>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/recipes')}
              >
                <ThemeText type="title">My Recipes</ThemeText>
              </TouchableHighlight>
            </View>

            <View style={styles.row}>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/search_screen')}
              >
                <ThemeText type="title">Search P</ThemeText>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/recipes_search')}
              >
                <ThemeText type="title">Search R</ThemeText>
              </TouchableHighlight>
            </View>

            <View style={styles.row}>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/grocery')}
              >
                <ThemeText type="title">Grocery</ThemeText>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, isSmallScreen && styles.smallButton]}
                onPress={() => router.navigate('/settings')}
              >
                <ThemeText type="title">Profile</ThemeText>
              </TouchableHighlight>
            </View>
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
  innerContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // extra padding for Android status bar
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
    margin: 5,
  },
  smallButton: {
    padding: 8,
    margin: 3,
  },
});

export default HomeScreen;