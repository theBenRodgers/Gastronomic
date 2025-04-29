import React, { useState } from 'react';
import { View, StyleSheet, Pressable, TextInput, FlatList } from 'react-native';

interface Props {
  placeholder: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ placeholder, onSearch}: Props) => {
  const [query, setQuery] = useState("");

  return(
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.inputContainer}
          placeholder={placeholder}
          value={query}
          onChangeText={setQuery}
        />
        <Pressable 
          style={styles.button}
          onPress={onSearch(query)}>

        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  inputContainer: {
    height: 40,
    width: "80%",
    textAlign: "center",
    backgroundColor: "white",
  },
  button: {
    height: 40,
    width: 40,
    backgroundColor: "grey",
  },
});

export default SearchBar;