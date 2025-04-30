import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight, Alert, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker'

import ThemeText from '../theme/ThemeText';
import SearchResult from '@/interfaces/PantryItem';
import PantryType from '@/types/PantryType';



interface Props {
  isVisible: boolean;
  editing: boolean;
  product: SearchResult;
  onClose: () => void;
}

const ProductModal = ({ isVisible, product, onClose }: Props) => {
  // user alterable
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");
  const [expDate, setExpDate] = useState("");

  //un-alterable
  const [brand, setBrand] = useState("");

  //date-picker
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  const newProduct = product.pantry_id === null;
  const setStates = () => {
    if (product.amount != null) setAmount(product.amount.toString());
    if (product.price != null) setPrice(product.price.toString());
    if (product.calories != null) setCalories(product.calories.toString());
    if (product.protein != null) setProtein(product.protein.toString());
    if (product.fat != null) setFat(product.fat.toString());
    if (product.carbs != null) setCarbs(product.carbs.toString());
    if (product.expirationDate != null) { 
      setExpDate(product.expirationDate);
      setDate(new Date(expDate));
    }

    if (product.brand != null) setBrand(product.brand);
  }


  const checkRequired = () => {
    if (amount == "") {
      Alert.alert("Please choose an amount!");
      return false;
    }
    return true;
  }

  const onSubmit = async () => {
    if (checkRequired()) {
      product.amount = parseInt(amount);
    }
  }

  
};

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
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
    marginTop: 40,
    alignSelf: "center",
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
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
  numInput: {
    height: 40,
    width: 100,
    textAlign: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  text: {
    marginTop: 20,
  },
});

export default ProductModal;
