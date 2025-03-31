import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import ThemeText from './ThemeText';
import Ingredient from '@/interfaces/Ingredient';

interface Props {
  isVisible: boolean;
  ingredient: Ingredient;
  onClose: () => void;
}

const IngredientModal = ({ isVisible, ingredient, onClose }: Props) => {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContent}>
        <Text style={styles.title}>{ingredient.name} - {ingredient.brand}</Text>
        <Text style={styles.detail}>Servings: {ingredient.servings}</Text>
        <Text style={styles.detail}>Amount: {ingredient.amount}</Text>
        <Text style={styles.detail}>Calories: {ingredient.calories}</Text>
        <Text style={styles.detail}>Protein: {ingredient.protein}</Text>
        <Text style={styles.detail}>Fat: {ingredient.fat}</Text>
        <Text style={styles.detail}>Carbs: {ingredient.carbs}</Text>

        <Pressable style={styles.closeButton} onPress={onClose}>
          <ThemeText style={styles.buttonText}>Close</ThemeText>
        </Pressable>
      </View>
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

export default IngredientModal;
