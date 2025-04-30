import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, Alert, Image, Pressable, } from 'react-native';
import Modal from 'react-native-modal';
import ThemeText from '../theme/ThemeText';
import { Dropdown } from 'react-native-element-dropdown';
import { useFocusEffect } from 'expo-router';
import PantryItem from '@/interfaces/PantryItem';
import colors from '../theme/colors';
import addItem from '@/api/pantry/addItem';
import extraIng from '@/api/ingredients/extraIng';
import changeItem from '@/api/pantry/changeItem';
import DatePicker from 'react-native-date-picker';


interface Props {
  isVisible: boolean;
  item: PantryItem;
  newEntry: boolean;
  onClose: () => void;
}

const PantryModal = ({ isVisible, item, newEntry, onClose }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(newEntry);
  const [buttonText, setButtonText] = useState("");
  const [unit, setUnit] = useState("");
  const [amount, setAmount] = useState("");

  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");

  const [expDate, setExpDate] = useState("");

  const [data, setData] = useState<any[]>([]);


  //date-picker
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const setStates = () => {
    if (item.unit) setUnit(item.unit);
    if (item.amount != null) setAmount(item.amount.toString());
    if (item.calories != null) setCalories(item.calories.toString());
    if (item.protein != null) setProtein(item.protein.toString());
    if (item.fat != null) setFat(item.fat.toString());
    if (item.carbs != null) setCarbs(item.carbs.toString());
  }

  const populateDropdown = () => {
    if (!item.possibleUnits) return;
    const formattedData = item.possibleUnits.map((unit) => ({
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

  const updateButton = () => {
    if (editMode) {
      if (newEntry) {
        setButtonText("Add Item");
      } else {
        setButtonText("Update Item");
      }
    } else {
      setButtonText("Edit");
    }
  }

  const onSubmit = async () => {
    if (!editMode) {
      setEditMode(true);
      updateButton();
    } else if (checkRequired()) {
      item.unit = unit;
      item.amount = parseInt(amount);
      item.calories = parseInt(calories, 10) || 0;
      item.protein = parseInt(protein, 10) || 0;
      item.fat = parseInt(fat, 10) || 0;
      item.carbs = parseInt(carbs, 10) || 0;
      if (newEntry) {
        addItem(item);
      } else {
        changeItem(item)
      }

    }
  }

  const getMacros = async () => {
    if (checkRequired()) {
      item.unit = unit;
      item = await extraIng(item);
      if (item.calories != null) setCalories(item.calories.toString());
      if (item.protein != null) setProtein(item.protein.toString());
      if (item.fat != null) setFat(item.fat.toString());
      if (item.carbs != null) setCarbs(item.carbs.toString());
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      populateDropdown();
      setStates();
    }, [])
  );
  if (item.kind === 'ingredient') {
    return (
      <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.modalContent}>
          <Image
            style={styles.image}
            source={{
              uri: `https://img.spoonacular.com/ingredients_250x250/${item.image}`,
            }}
          />
          <ThemeText type='title' style={styles.title}>{item.name}</ThemeText>
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
                editable={editMode}
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
  } else {
    return (
      <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.modalContent}>
          <Image
            style={styles.image}
            source={{
              uri: `https://img.spoonacular.com/products/${item.id}-312x231.${item.imageType}`,
            }}
          />
          <ThemeText type='title' style={styles.title}>{item.name}</ThemeText>
          <ThemeText type='title' style={styles.title}>{item.brand}</ThemeText>
          <View style={styles.row}>
            <View style={[styles.inputGroup]}>
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
            <View style={styles.inputGroup}>
              <Text style={styles.text}>ExpirationDate:</Text>
              <Pressable
                onPress={() => setOpen(true)}>
                <Text> {expDate} </Text>
              </Pressable>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                  setExpDate(date.toISOString)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>
          </View>



          <View style={styles.inputGroup}>
            <Text style={styles.text}>Carbs: {item.carbs}</Text>
          </View>

          <TouchableHighlight style={styles.button} onPress={onSubmit}>
            <ThemeText style={styles.buttonText}>Add to Pantry!</ThemeText>
          </TouchableHighlight>
        </View>
      </Modal>
    );
  }
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

export default PantryModal;
