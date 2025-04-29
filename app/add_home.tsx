import React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from "react-native";
import ThemeText from "@/components/theme/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { router } from 'expo-router';

const AddHome = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <View style={styles.centerContent}>
          <ThemeText type="title">Add to your pantry!</ThemeText>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/add_ingredient')}>
            <ThemeText type='title'>Add a Basic Ingredient</ThemeText>
          </TouchableHighlight>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/product_search')}>
            <ThemeText type='title'>Search for a Grocery Product</ThemeText>
          </TouchableHighlight>
          <TouchableHighlight style={styles.optionContainer} onPress={() => router.push('/scan')}>
            <ThemeText type='title'>Scan a Grocery Product</ThemeText>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

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

export default AddHome;