import React, { useState } from 'react';
import { View } from 'react-native';
import PantryItem from '@/interfaces/PantryItem';
import { useFocusEffect } from '@react-navigation/native';
import HeaderA from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import getAll from '@/api/pantry/getAll';
import PantryList from '@/components/ui/PantryList';
import Header from '@/components/ui/Header';


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
    <View style={{ flex: 1 , paddingTop:60, backgroundColor: 'white'}}>
      <Header 
        type='add'
        title='My Pantry!'
        rightNavLink='./search_screen'
      />
      <PantryList 
        list={results}
        search={false}  
      />
      
      <Footer />
    </View>
  );
};

export default PantryScreen;
