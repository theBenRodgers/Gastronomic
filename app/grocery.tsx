import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
<<<<<<< HEAD
import ThemeText from '@/components/ui/ThemeText'
=======
import ThemeText from '@/components/theme/ThemeText'
>>>>>>> a039d7c8e86091c9a535e2d9c8640d086b8d64e9
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import { router } from 'expo-router';

const GroceryScreen = () => {
return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <Header>Grocery List</Header>  
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

export default GroceryScreen;
