import Checkbox from 'expo-checkbox';
import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableHighlight,
  Text
} from "react-native";
import ThemeText from "@/components/theme/ThemeText";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFocusEffect, useRouter } from "expo-router";
import getUser from '@/api/users/getUser';
import putUser from '@/api/users/putUser';

const Settings = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const [isGluFree, setGluFree] = useState(false);
  const [isKeto, setKeto] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isPescetarian, setPescetarian] = useState(false);
  const [isPaleo, setPaleo] = useState(false);

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

  const loadUser = async () => {
    try {
      const user = await getUser();
      const intolerances = user.intolerances;
      const diets = user.diets;

      setfName(user.fname);
      setlName(user.lname);

      // Intolerances
      setDairy(intolerances.includes("dairy"));
      setGluFree(intolerances.includes("gluten"));
      setEgg(intolerances.includes("egg"));
      setGrain(intolerances.includes("grain"));
      setPeanut(intolerances.includes("peanut"));
      setSeafood(intolerances.includes("seafood"));
      setSesame(intolerances.includes("sesame"));
      setShellfish(intolerances.includes("shellfish"));
      setSoy(intolerances.includes("soy"));
      setSulfite(intolerances.includes("sulfite"));
      setTreeNut(intolerances.includes("treenut"));
      setWheat(intolerances.includes("wheat"));
  
      // Diets
      setGluFree(diets.includes("gluten free"));
      setKeto(diets.includes("ketogenic"));
      setVegetarian(diets.includes("vegetarian"));
      setVegan(diets.includes("vegan"));
      setPescetarian(diets.includes("pescetarian"));
      setPaleo(diets.includes("paleo"));
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };
  
  useFocusEffect(
    React.useCallback(() => {
      loadUser();
    }, [])
  );

  const handleSubmit = async () => {
    const newDiets = [];
    const newIntolerances = [];
  
    // Diets
    if (isGluFree) newDiets.push("gluten free");
    if (isKeto) newDiets.push("ketogenic");
    if (isVegetarian) newDiets.push("vegetarian");
    if (isVegan) newDiets.push("vegan");
    if (isPescetarian) newDiets.push("pescetarian");
    if (isPaleo) newDiets.push("paleo");
  
    // Intolerances
    if (isDairy) newIntolerances.push("dairy");
    if (isEgg) newIntolerances.push("egg");
    if (isGluten) newIntolerances.push("gluten");
    if (isGrain) newIntolerances.push("grain");
    if (isPeanut) newIntolerances.push("peanut");
    if (isSeafood) newIntolerances.push("seafood");
    if (isSesame) newIntolerances.push("sesame");
    if (isShellfish) newIntolerances.push("shellfish");
    if (isSoy) newIntolerances.push("soy");
    if (isSulfite) newIntolerances.push("sulfite");
    if (isTreeNut) newIntolerances.push("tree nut");
    if (isWheat) newIntolerances.push("wheat");
  
    try {
      const updatedUser = {
        fname: fName,
        lname: lName,
        diets: newDiets,
        intolerances: newIntolerances,
      };
  
      await putUser(updatedUser);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
  };
  
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ThemeText type="title">Settings</ThemeText>
        <View style={styles.section}>
          <Text style={styles.subheader}>Account</Text>
          {/* Column 1 */}
          <View style={styles.column}>
            <View style={styles.row}>
              <Text>First Name</Text>
              <TextInput
                style={styles.inputContainer}
                value={fName}
                onChangeText={setfName}
              />
            </View>
          </View>
        {/* Column 2 */}
        <View style={styles.column}>
          <View style={styles.row}>
            <Text>Last Name</Text>
            <TextInput
              style={styles.inputContainer}
              value={lName}
              onChangeText={setlName}
            />
          </View>
        </View>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => alert("HEy!")}>
          <View style={styles.button}>
            <ThemeText style={styles.buttonText}>Change Password</ThemeText>
          </View>
        </TouchableHighlight>
      </View>
        <View style={styles.section}>
          <Text style={styles.subheader}>Diet</Text>
          <View style={styles.columns}>
            {/* Column 1 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isGluFree} onValueChange={setGluFree} />
                <Text>Gluten Free</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isVegetarian} onValueChange={setVegetarian} />
                <Text>Vegetarian</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isPescetarian} onValueChange={setPescetarian} />
                <Text>Pescetarian</Text>
              </View>
            </View>

            {/* Column 2 */}
            <View style={styles.column}>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isKeto} onValueChange={setKeto} />
                <Text>Ketogenic</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isVegan} onValueChange={setVegan} />
                <Text>Vegan</Text>
              </View>
              <View style={styles.row}>
                <Checkbox style={styles.checkbox} value={isPaleo} onValueChange={setPaleo} />
                <Text>Paleo</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
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
        </View>
        <TouchableHighlight style={styles.buttonContainer} onPress={() => handleSubmit}>
          <View style={styles.button}>
            <ThemeText style={styles.buttonText}>Submit</ThemeText>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => alert("HEy!")}>
          <Text>Delete Account</Text>
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
  inputContainer: {

  },
});



export default Settings;