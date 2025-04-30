import React, { useState } from "react";
import {
  ImageBackground,
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import ThemeText from "@/components/ui/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "expo-router";
import postUser from "@/api/users/postUser";
import AppUser from "@/interfaces/AppUser";

const SignUpScreen = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confPassword) {
      Alert.alert("Error", "Passwords do not match");
      setPassword("");
      setConfPassword("");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: AppUser = {
        fname: fname,
        lname: lname,
        diets: [],
        intolerances: [],
      }
      await postUser(user);
      

      router.replace("./signup2");
    } catch (error) {
      const e = error as Error;
      Alert.alert("Sign-Up Failed", e.message);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingContainer}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <ImageBackground
              source={require("../assets/images/splash1-blur-mobile.jpg")}
              resizeMode="cover"
              style={styles.image}
            >
              <ThemeText type="title">Create new</ThemeText>
              <ThemeText type="title">account</ThemeText>
              <ThemeText type="caption">Already Registered? Log in here.</ThemeText>

              <ThemeText type="subtitle" style={styles.text}>First Name</ThemeText>
              <TextInput
                style={styles.inputContainer}
                placeholder="John"
                value={fname}
                onChangeText={setfName}
              />

              <ThemeText type="subtitle" style={styles.text}>Last Name</ThemeText>
              <TextInput
                style={styles.inputContainer}
                placeholder="Doe"
                value={lname}
                onChangeText={setlName}
              />

              <ThemeText type="subtitle" style={styles.text}>Email</ThemeText>
              <TextInput
                style={styles.inputContainer}
                placeholder="example@email.com"
                value={email}
                onChangeText={setEmail}
              />

              <ThemeText type="subtitle" style={styles.text}>Password</ThemeText>
              <TextInput
                style={styles.inputContainer}
                placeholder="*****"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />

              <ThemeText type="subtitle" style={styles.text}>Confirm Password</ThemeText>
              <TextInput
                style={styles.inputContainer}
                placeholder="*****"
                secureTextEntry
                value={confPassword}
                onChangeText={setConfPassword}
              />

              <TouchableHighlight style={styles.buttonContainer} onPress={handleSignUp}>
                <View style={styles.button}>
                  <ThemeText style={styles.buttonText}>Sign Up</ThemeText>
                </View>
              </TouchableHighlight>
            </ImageBackground>
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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

export default SignUpScreen;
