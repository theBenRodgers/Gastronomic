import React, { useState } from "react";
import { Image, StyleSheet, FlatList, TouchableHighlight, View } from "react-native";
import ThemeText from "@/components/theme/ThemeText";

import infoIng from "@/api/ingredients/ingExtraInfo";
import AddIngredientModal from "../modals/IngredientModal";
import PantryType from "@/types/PantryType";
import AddProductModal from "../modals/AddProductModal";
import SearchResults from "@/interfaces/SearchResults";
import SearchResult from "@/interfaces/SearchResult";
import IngredientModal from "../modals/IngredientModal";
import ingExtraInfo from "@/api/ingredients/ingExtraInfo";

interface Props {
  list: SearchResults | null;
  type: PantryType
}

const ResultsList = ({ list, type}: Props) => {
  const [ingredientVisible, setIngredientVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);

  const get_image_url = (item: SearchResult) => {
    let url;
    switch (type) {
      case 'ingredient':
        url = `https://img.spoonacular.com/ingredients_100x100/${item.image}`;
        return url;
      case 'product':
        url = `https://img.spoonacular.com/products/${item.id}-90x90.${item.imageType}`;
        return url;
    }
  }
  
  const selectItem = async (item: SearchResult) => {
    switch (item.kind) {
      case "ingredient":
        item = await ingExtraInfo(item);
        console.log(item.possibleUnits);
        setSelectedResult(item);
        setIngredientVisible(true);
        break;
      case "product":
        setSelectedResult(item);
        setProductVisible(true);
        break;
    }
  };

  const closeModal = () => {
    if (selectedResult == null) { return; }
    switch (selectedResult.kind) {
      case "ingredient":
        setIngredientVisible(false);
        break;
      case "product":
        setProductVisible(false);
        break;
    }
    setSelectedResult(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list?.results}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <TouchableHighlight onPress={() => selectItem(item)}>
            <View style={styles.item}>

              <Image
                style={styles.image}
                source={{
                  uri: get_image_url(item),
                }}
              />
                <ThemeText style={styles.ingredientText}>
                  {item.name}
                </ThemeText>
                {(type === 'product') && (
                  <ThemeText style={styles.ingredientText}>
                    Brand: {item.brand}
                  </ThemeText>
                )}
            </View>
          </TouchableHighlight>
        )}
      />

      {selectedResult && (
        <IngredientModal
          isVisible={ingredientVisible}
          ingredient={selectedResult}
          onClose={closeModal} viewMore={false}        />
      )}
      {selectedResult && (
        <AddProductModal 
          isVisible={productVisible}
          product={selectedResult}
          onClose={closeModal} editing={false}       />
      )}
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  item: {
    backgroundColor: '#EFEFEE',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
  ingredientText: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
    flexShrink: 1,
    flexWrap: "wrap",

  },
  image: {
    width: 90,
    height: 90,
    margin: 10,
  },
});

export default ResultsList;