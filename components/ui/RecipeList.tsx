import React, { useState } from "react";
import { Image, StyleSheet, FlatList, TouchableHighlight, View, TextStyle } from "react-native";
import ThemeText from "@/components/theme/ThemeText";

import Recipe from "@/interfaces/Recipe";
import { router } from "expo-router";

interface Props {
  list: Recipe[];
  search: Boolean;
}

const RecipeList = ({ list, search }: Props) => {
  const [selectedResult, setSelectedResult] = useState<Recipe | null>(null);

  const selectItem = async (item: Recipe) => {
    router.push('./RecipeView')
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
                  uri: item.image,
                }}
              />
              <ThemeText style={styles.ingredientText}>
                {item.name}
              </ThemeText>
            </View>
          </TouchableHighlight>
        )
        }
      />
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

export default RecipeList;