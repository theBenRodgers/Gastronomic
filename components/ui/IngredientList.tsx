import React, { useState } from 'react';
import { TouchableHighlight, View, StyleSheet, FlatList } from 'react-native';
import ThemeText from './ThemeText';
import IngredientModal from './IngredientModal';
import Ingredient from '@/interfaces/Ingredient';

interface Props {
  ingredients: Ingredient[];
}

const IngredientList = ({ ingredients }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  const openModal = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedIngredient(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ingredients}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => openModal(item)}>
            <View style={styles.ingredientItem}>
              <ThemeText style={styles.ingredientText}>
                {item.name} - {item.brand}
              </ThemeText>
            </View>
          </TouchableHighlight>
        )}
      />

      {selectedIngredient && (
        <IngredientModal
          isVisible={modalVisible}
          ingredient={selectedIngredient}
          onClose={closeModal}
        />
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 70,
  },
  ingredientItem: {
    backgroundColor: '#EFEFEE',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  ingredientText: {
    fontSize: 16,
    color: 'black',
  },
});

export default IngredientList;