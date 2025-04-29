import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, Alert, Image, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import ThemeText from '../theme/ThemeText';
import { Dropdown } from 'react-native-element-dropdown';
import getCaloricData from '@/api/ingredients/extraIng';
import { useFocusEffect } from 'expo-router';
import SearchResult from '@/interfaces/SearchResult';
import colors from '../theme/colors';
import ingExtraInfo from '@/api/ingredients/ingExtraInfo';
import addItem from '@/api/pantry/addItem';
import extraIng from '@/api/ingredients/extraIng';


interface Props {
  isVisible: boolean;
  viewMore: boolean;
  ingredient: SearchResult;
  onClose: () => void;
}

const IngredientModal = ({ isVisible, ingredient, onClose }: Props) => {
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");

  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const [expDate, setExpDate] = useState("");

  const [data, setData] = useState<any[]>([]);
  const newIngredient = ingredient.pantry_id === null;

  //date-picker
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const setStates = () => {
    if (ingredient.unit) setUnit(ingredient.unit);
    if (ingredient.amount != null) setAmount(ingredient.amount.toString());
    if (ingredient.calories != null) setCalories(ingredient.calories.toString());
    if (ingredient.protein != null) setProtein(ingredient.protein.toString());
    if (ingredient.fat != null) setFat(ingredient.fat.toString());
    if (ingredient.carbs != null) setCarbs(ingredient.carbs.toString());
  }

  const populateDropdown = () => {
    if (!ingredient.possibleUnits) return;
    const formattedData = ingredient.possibleUnits.map((unit) => ({
      label: unit,
      value: unit,
    }));
    setData(formattedData);
  };

  const checkRequired = () => {
    if (unit == "") {
      Alert.alert("Please select a unit!");
      return false;
    } else if (amount == "") {
      Alert.alert("Please choose an amount!");
      return false;
    } else if (parseInt(amount) == 0) {
      Alert.alert("Please choose greater than 0!");
      return false;
    }
    return true;
  }

  const onSubmit = async () => {
    if (checkRequired()) {
      ingredient.unit = unit;
      ingredient.amount = parseInt(amount);
      ingredient.calories = parseInt(calories, 10) || 0;
      ingredient.protein = parseInt(protein, 10) || 0;
      ingredient.fat = parseInt(fat, 10) || 0;
      ingredient.carbs = parseInt(carbs, 10) || 0;
      addItem(ingredient);
    }
  }

  const getMacros = async () => {
    if (checkRequired()) {
      ingredient.unit = unit;
      ingredient = await extraIng(ingredient);
      if (ingredient.calories != null) setCalories(ingredient.calories.toString());
      if (ingredient.protein != null) setProtein(ingredient.protein.toString());
      if (ingredient.fat != null) setFat(ingredient.fat.toString());
      if (ingredient.carbs != null) setCarbs(ingredient.carbs.toString());
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      populateDropdown();
      setStates();
    }, [])
  );
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Image
          style={styles.image}
          source={{
            uri: `https://img.spoonacular.com/ingredients_250x250/${ingredient.image}`,
          }}
        />
        <ThemeText type='title' style={styles.title}>{ingredient.name}</ThemeText>
        <View style={styles.row}>
          <View style={[styles.inputGroup, { flex: 0.2 }]}>
            <Text style={styles.text}>Amount</Text>
            <TextInput
              style={styles.numInput}
              placeholder="-"
              value={amount}
              onChangeText={(text) => {
                const filtered = text.replace(/[^0-9]/g, '');
                setAmount(filtered);
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={[styles.inputGroup, { flex: 0.8 }]}>
            <Text style={styles.text}>Unit</Text>
            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Select a unit..."
              onChange={item => {
                setUnit(item.value);
              }}
            />
          </View>
        </View>


        <View style={[styles.row, { justifyContent: "space-evenly" }]}>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Calories</Text>
            <TextInput
              style={styles.numInput}
              placeholder="-"
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
              placeholder="-"
              value={protein}
              onChangeText={(text) => {
                const filtered = text.replace(/[^0-9]/g, '');
                setProtein(filtered);
              }}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.text}>Fat</Text>
            <TextInput
              style={styles.numInput}
              placeholder="-"
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
              placeholder="-"
              value={carbs}
              onChangeText={(text) => {
                const filtered = text.replace(/[^0-9]/g, '');
                setCarbs(filtered);
              }}
              keyboardType="numeric"
            />
          </View>
        </View>
        <TouchableHighlight style={styles.button} onPress={getMacros}>
          <ThemeText style={styles.buttonText}>Get Nutrition Data</ThemeText>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={onSubmit}>
          <ThemeText style={styles.buttonText}>Add to Pantry!</ThemeText>
        </TouchableHighlight>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: colors.background,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
    alignSelf: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'center',
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#497941',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#497941",
    height: 40,
    width: "60%",
    marginBottom: 5,
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  row: {
    flexDirection: "row",
    width: "100%",
  },
  inputGroup: {
    alignItems: "center",
    marginBottom: 5,
  },
  numInput: {
    height: 40,
    backgroundColor: "lightgrey",
    textAlign: "center",
    width: 60,
  },
  dropdown: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  text: {
    marginBottom: 2,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 5,
    alignSelf: 'center',
  },
});

export default IngredientModal;
