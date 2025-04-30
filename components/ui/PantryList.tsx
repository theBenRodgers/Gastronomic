import React, { useState } from "react";
import { Image, StyleSheet, FlatList, TouchableHighlight, View, TextStyle } from "react-native";
import ThemeText from "@/components/theme/ThemeText";

import PantryModal from "../modals/PantryModal";
import ingExtraInfo from "@/api/ingredients/ingExtraInfo";

import PantryItem from "@/interfaces/PantryItem";

interface Props {
  list: PantryItem[];
  search: Boolean;
}

const ResultsList = ({ list, search }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState<PantryItem | null>(null);

  const expirationStyle = (item: PantryItem): TextStyle => {
    if (!item.expirationDate) { return {}; }
    const exp = new Date(item.expirationDate);
    const now = new Date();

    const diffMs = exp.getTime() - now.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays < 0) {
      return styles.expired;
    } else if (diffDays < 3) {
      return styles.warn;
    } else {
      return {};
    }
  };

  const get_image_url = (item: PantryItem) => {
    let url;
    switch (item.kind) {
      case 'ingredient':
        url = `https://img.spoonacular.com/ingredients_250x250/${item.image}`;
        return url;
      case 'product':
        url = `https://img.spoonacular.com/products/${item.id}-312x231.${item.imageType}`;
        return url;
    }
  }

  const selectItem = async (item: PantryItem) => {
    if (item.kind === "ingredient" && search) {
      item = await ingExtraInfo(item);
    }
    setSelectedResult(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    if (selectedResult == null) { return; }
    setModalVisible(false);
    setSelectedResult(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
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
              {(item.kind === 'product') && (
                <ThemeText style={styles.ingredientText}>
                  Brand: {item.brand}
                </ThemeText>
              )}
              {(!search) && (
                <ThemeText style={[styles.ingredientText, expirationStyle(item)]}>
                  {item.expirationDate}
                </ThemeText>
              )}
            </View>
          </TouchableHighlight>
        )
        }
      />

      {
        selectedResult && (
          <PantryModal
            isVisible={modalVisible}
            item={selectedResult}
            newEntry={true}
            onClose={closeModal}
          />
        )
      }
    </View >

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
  warn: {
    color: 'red',
  },
  expired: {
    color: 'gray',
    textDecorationLine: 'line-through',
  },
});

export default ResultsList;