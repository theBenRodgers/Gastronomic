import React from "react";
import { Pressable, StyleSheet, Image, View, Text } from "react-native";
import Ingredient from "@/interfaces/Ingredient";

interface Props {
  ingredient: Ingredient
}

const IngredientResult = ({ ingredient }: Props) => {
  const handlePress = async () => {

  };
  return (
    <Pressable style={styles.container} onPress={()=>alert("test")}>
      <View style={styles.columns}>
        <View style={styles.column}>
          <View style={styles.row}>
          <Image 
            style={styles.image}
            source={{
              uri: `https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`,
            }}/>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row}>
            <Text>{ ingredient.name }</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  image: {

  },
  section: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 10,
  },
  columns: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    gap: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});