import React, { useState } from 'react';
import { View } from 'react-native';
import PantryItem from '@/interfaces/PantryItem';
import { useFocusEffect } from '@react-navigation/native';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import getAll from '@/api/pantry/getAll';
import ResultsList from '@/components/ui/PantryList';


const PantryScreen = () => {
  const [results, setResults] = useState<PantryItem[]>([])

  const loadPantry = async () => {
    const data = await getAll();
    setResults(data);
  };

  useFocusEffect(
    React.useCallback(() => {
      loadPantry();
    }, [])
  );

  return (
    <View style={{ flex: 1 , backgroundColor: 'white'}}>
      <Header>Ingredients</Header>
      <ResultsList list={results} />
      <Footer />
    </View>
  );
};

export default PantryScreen;
