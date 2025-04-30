import React, { useState } from 'react';
import { View } from 'react-native';
import PantryItem from '@/interfaces/PantryItem';
import { useFocusEffect } from '@react-navigation/native';
import HeaderA from '@/components/ui/HeaderA';
import Footer from '@/components/ui/Footer';
import getAll from '@/api/pantry/getAll';
import PantryList from '@/components/ui/PantryList';


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
      <HeaderA>Pantry</HeaderA>
      <PantryList 
        list={results}
        search={false}  
      />
      
      <Footer />
    </View>
  );
};

export default PantryScreen;
