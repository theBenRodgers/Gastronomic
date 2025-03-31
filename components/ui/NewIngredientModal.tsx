import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, TextInput, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import ThemeText from './ThemeText';
import Ingredient from '@/interfaces/Ingredient';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const NewIngredientModal = ({ isVisible, onClose, onSubmit }: Props) => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [servings, setServings] = useState("");
  const [amount, setAmount] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [carbs, setCarbs] = useState("");
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
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
      </View>
      <Pressable style={styles.closeButton} onPress={onSubmit}>
        <ThemeText style={styles.buttonText}>Submit</ThemeText>
      </Pressable>
      <Pressable style={styles.closeButton} onPress={onClose}>
        <ThemeText style={styles.buttonText}>Cancel</ThemeText>
      </Pressable>
    </Modal>
  );
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
  text: {

  },
  inputContainer: {

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
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NewIngredientModal;