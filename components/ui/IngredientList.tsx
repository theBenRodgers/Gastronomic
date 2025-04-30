import React, { useState } from 'react';
import { TouchableHighlight, View, StyleSheet, FlatList } from 'react-native';
import ThemeText from '../theme/ThemeText';
import IngredientModal from '../modals/PantryModal';
import SearchResult from '@/interfaces/PantryItem';
import deleteIngredient from '@/api/ingredients/deleteIngredient';

interface Props {
  ingredients: Ingredient[];
  onRefresh: () => void;
}

const IngredientList = ({ ingredients, onRefresh }: Props) => {
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

  const onDelete = async (ingredient: Ingredient) => {
    if (ingredient.ingredient_id != null) {
      await deleteIngredient(ingredient.ingredient_id);
      onRefresh();
    }
    closeModal();
  };

  return (

    <View style={styles.container}>
      <FlatList
        data={ingredients}
        extraData={ingredients}
        keyExtractor={(item) => item.ingredient_id?.toString() ?? Math.random().toString()}
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
          onDelete={onDelete}
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