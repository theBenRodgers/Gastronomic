import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/theme/ThemeText'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import RecipesLogo from '@/assets/images/recipeslogo.png';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const RecipesScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <Header>
          <Image
            source={RecipesLogo}
            style={styles.logo}
            resizeMode="contain"
          />
        </Header>

        <View style={styles.centerContent}>
          {/* Your recipes content */}
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
    paddingHorizontal: '5%',
  },
  logo: {
    width: 250,
    height: 250,
    maxWidth: 300,
    maxHeight: 100,
  },
});

export default RecipesScreen;