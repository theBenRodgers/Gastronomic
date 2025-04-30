import React, { useState } from "react";
import { Text, StyleSheet, Pressable, TouchableHighlight, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import colors from "@/components/theme/colors";

import prodSearch from "@/api/products/prodSearch";
import PantryType from "@/types/PantryType";
import ingSearch from "@/api/ingredients/ingSearch";
import PantryItem from "@/interfaces/PantryItem";
import PantryList from "@/components/ui/PantryList";

const SearchScreen = () => {
  const [kind, setKind] = useState<PantryType>('ingredient');
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const [results, setResults] = useState<PantryItem[]>([]);

  const onSearch = async () => {
    let response;
    if (kind === "ingredient") {
      response = await ingSearch(query, page);
    } else {
      response = await prodSearch(query, page);
    }
    setResults(response);
  }

  const onToggle = () => {
    if (kind === "ingredient") {
      setKind("product");
    } else {
      setKind("ingredient");
    }
    setResults([]);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Pressable
            onPress={onToggle}
            disabled={kind === "ingredient"}
            style={[styles.toggleButton, kind === "ingredient" ? styles.enabled : styles.disabled]}
          >
            <Text style={kind === "ingredient" ? styles.toggleTextEnabled : styles.toggleTextDisabled}>
              Ingredients
            </Text>
          </Pressable>

          <Pressable
            onPress={onToggle}
            disabled={kind === "product"}
            style={[styles.toggleButton, kind === "product" ? styles.enabled : styles.disabled]}
          >
            <Text style={kind === "product" ? styles.toggleTextEnabled : styles.toggleTextDisabled}>
              Products
            </Text>
          </Pressable>
        </View>

        <View style={styles.row}>
          <TextInput
            placeholder="Search..."
            value={query}
            onChangeText={setQuery}
            style={styles.input}
          />
          <TouchableHighlight
            onPress={onSearch}
            style={styles.button}
          >
            <Text style={styles.buttonText}>S</Text>
          </TouchableHighlight>
        </View>
          <PantryList
            list={results}
            search={true}
          />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background, // optional: background color for app
  },
  row: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  enabled: {
    backgroundColor: colors.dark_grey,
    borderColor: colors.dark_grey,
  },
  disabled: {
    backgroundColor: colors.light_grey,
    borderColor: colors.dark_grey,
  },
  toggleTextEnabled: {
    color: colors.white,
    fontWeight: "bold",
  },
  toggleTextDisabled: {
    color: colors.textPrimary,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.light_grey,
    padding: 10,
    borderRadius: 6,
    marginRight: 8, // push search button slightly
    backgroundColor: colors.white,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.green,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});


export default SearchScreen;