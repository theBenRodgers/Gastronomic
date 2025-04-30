import React from 'react';
import { StyleSheet, View, } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/components/theme/ThemeText'
import HeaderA from '@/components/ui/HeaderA'
import Footer from '@/components/ui/Footer'
import { router } from 'expo-router';

const GroceryScreen = () => {
return(
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <HeaderA>Grocery List</HeaderA>  
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
