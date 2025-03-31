import React, { useState } from "react";
import {
  ImageBackground,
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import ThemeText from "@/components/ui/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebaseConfig";
import { router } from 'expo-router';
import postIngredient from "@/api/ingredients/postIngredient";


const NewIngredient = () => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [servings, setServings] = useState("");
  const [amount, setAmount] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const onSubmit = async () => {
    const ingredient = {
      name: title,
      brand: brand,
      servings: parseInt(servings),
      amount: parseInt(amount),
      calories: parseInt(calories),
      protein: parseInt(protein),
      fat: parseInt(fat),
      carbs: parseInt(carbs),
    }

    postIngredient(ingredient);
    router.back();
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <Text style={styles.title}>New Ingredient</Text>
            <Text style={styles.text}>Title</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Peanut Butter"
              value={title}
              onChangeText={setTitle}
            />
            <Text style={styles.text}>Brand</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Jif"
              value={brand}
              onChangeText={setBrand}
            />
            <Text style={styles.text}>Servings</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="3"
              value={servings}
              onChangeText={setServings}
            />
            <Text style={styles.text}>Amount</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="1"
              value={amount}
              onChangeText={setAmount}
            />
            <Text style={styles.text}>Calories</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="100"
              value={calories}
              onChangeText={setCalories}
            />
            <Text style={styles.text}>Protein</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="10"
              value={protein}
              onChangeText={setProtein}
            />
            <Text style={styles.text}>Fat</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="10"
              value={fat}
              onChangeText={setFat}
            />
            <Text style={styles.text}>Carbs</Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="10"
              value={carbs}
              onChangeText={setCarbs}
            />

            <Pressable style={styles.button} onPress={onSubmit}>
              <ThemeText style={styles.buttonText}>Submit</ThemeText>
            </Pressable>
          </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  inputContainer: {
    height: 40,
    width: "80%",
    marginTop: 20,
    textAlign: "center",
    backgroundColor: "white",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#497941",
    height: 40,
  },
  buttonText: {
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
  },
  keyboardAvoidingContainer: {
    flex: 1,
    width: "100%",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewIngredient;
