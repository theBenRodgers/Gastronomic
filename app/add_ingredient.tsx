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
import ThemeText from "@/components/theme/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebaseConfig";
import { router } from 'expo-router';
import postIngredient from "@/api/ingredients/postIngredient";
import IngredientList from "@/components/ui/IngredientList";


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
      ingredient_id: null,
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
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text style={styles.title}>New Ingredient</Text>
              <Text style={styles.text}>Title</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Apple"
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

              <View style={styles.row}>
                <View style={styles.inputGroup}>
                  <Text style={styles.text}>Servings</Text>
                  <TextInput
                    style={styles.numInput}
                    placeholder="3"
                    value={servings}
                    onChangeText={(text) => {
                      const filtered = text.replace(/[^0-9]/g, '');
                      setServings(filtered);
                    }}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.text}>Amount</Text>
                  <TextInput
                    style={styles.numInput}
                    placeholder="1"
                    value={amount}
                    onChangeText={(text) => {
                      const filtered = text.replace(/[^0-9]/g, '');
                      setAmount(filtered);
                    }}
                    keyboardType="numeric"
                  />
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.inputGroup}>
                    <Text style={styles.text}>Calories</Text>
                    <TextInput
                      style={styles.numInput}
                      placeholder="100"
                      value={calories}
                      onChangeText={(text) => {
                        const filtered = text.replace(/[^0-9]/g, '');
                        setCalories(filtered);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.text}>Protein</Text>
                    <TextInput
                      style={styles.numInput}
                      placeholder="10"
                      value={protein}
                      onChangeText={(text) => {
                        const filtered = text.replace(/[^0-9]/g, '');
                        setProtein(filtered);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={styles.row}>
                  <View style={styles.inputGroup}>
                    <Text style={styles.text}>Fat</Text>
                    <TextInput
                      style={styles.numInput}
                      placeholder="10"
                      value={fat}
                      onChangeText={(text) => {
                        const filtered = text.replace(/[^0-9]/g, '');
                        setFat(filtered);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputGroup}>
                    <Text style={styles.text}>Carbs</Text>
                    <TextInput
                      style={styles.numInput}
                      placeholder="10"
                      value={carbs}
                      onChangeText={(text) => {
                        const filtered = text.replace(/[^0-9]/g, '');
                        setCarbs(filtered);
                      }}
                      keyboardType="numeric"
                    />
                  </View>
                </View>

              <Pressable style={styles.button} onPress={onSubmit}>
                <ThemeText style={styles.buttonText}>Submit</ThemeText>
              </Pressable>
            </ScrollView>
          </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
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

    textAlign: "center",
    backgroundColor: "white",
  },
  numInput: {
    height: 40,
    width: 100,
    textAlign: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
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
    width: "60%",
    marginTop: 40,
    alignSelf: "center",
    borderRadius: 5,
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
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  inputGroup: {
    flex: 1,
    alignItems: 'center',
  },
});

export default NewIngredient;
