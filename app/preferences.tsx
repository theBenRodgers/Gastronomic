import Checkbox from 'expo-checkbox';
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
  Text
} from "react-native";
import ThemeText from "@/components/ui/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebaseConfig";
import { useRouter } from "expo-router";

const Preferences = () => {
  const [isVegetarian, setVegetarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isPescetarian, setPescetarian] = useState(false);
  const [isPaleo, setPaleo] = useState(false);
  const [isKosher, setKosher] = useState(false);
  const [isHalal, setHalal] = useState(false);

  const [isDairy, setDairy] = useState(false);
  const [isEgg, setEgg] = useState(false);
  const [isGluten, setGluten] = useState(false);
  const [isGrain, setGrain] = useState(false);
  const [isPeanut, setPeanut] = useState(false);
  const [isSeafood, setSeafood] = useState(false);
  const [isSesame, setSesame] = useState(false);
  const [isShellfish, setShellfish] = useState(false);
  const [isSoy, setSoy] = useState(false);
  const [isSulfite, setSulfite] = useState(false);
  const [isTreeNut, setTreeNut] = useState(false);
  const [isWheat, setWheat] = useState(false);
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ThemeText type="title">Customize Your Account</ThemeText>
        <SafeAreaView style={styles.section}>
          <Text style={styles.subheader}>Dietary Preferences</Text>
          <View style={styles.columns}>
            {/* Column 1 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isVegetarian} onValueChange={setVegetarian} />
                <Text>Vegetarian</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isPescetarian} onValueChange={setPescetarian} />
                <Text>Pescetarian</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isKosher} onValueChange={setKosher} />
                <Text>Kosher</Text>
              </View>
            </View>

            {/* Column 2 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isVegan} onValueChange={setVegan} />
                <Text>Vegan</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isPaleo} onValueChange={setPaleo} />
                <Text>Paleo</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isHalal} onValueChange={setHalal} />
                <Text>Halal</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <SafeAreaView style={styles.section}>
          <Text style={styles.subheader}>Allergies/Intolerances</Text>
          <View style={styles.columns}>
            {/* Column 1 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isDairy} onValueChange={setDairy} />
                <Text>Dairy</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isEgg} onValueChange={setEgg} />
                <Text>Egg</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isGluten} onValueChange={setGluten} />
                <Text>Gluten</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isGrain} onValueChange={setGrain} />
                <Text>Grain</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isPeanut} onValueChange={setPeanut} />
                <Text>Peanut</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isSeafood} onValueChange={setSeafood} />
                <Text>Seafood</Text>
              </View>
            </View>

            {/* Column 2 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isSesame} onValueChange={setSesame} />
                <Text>Sesame</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isShellfish} onValueChange={setShellfish} />
                <Text>Shellfish</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isSoy} onValueChange={setSoy} />
                <Text>Soy</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isSulfite} onValueChange={setSulfite} />
                <Text>Sulfite</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isTreeNut} onValueChange={setTreeNut} />
                <Text>Tree Nut</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isWheat} onValueChange={setWheat} />
                <Text>Wheat</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => alert("HEy!")}>
          <View style={styles.button}>
            <ThemeText style={styles.buttonText}>Submit</ThemeText>
          </View>
        </TouchableHighlight>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  section: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 10,
  },
  columns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 8,
  },
  subheader: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#497941',
    height: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold', 
  },
});



export default Preferences;