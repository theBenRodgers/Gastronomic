import React, { useState } from "react";
import { TextInput, View } from "react-native";
import PantryModal from "@/components/modals/PantryModal";
import PantryItem from "@/interfaces/PantryItem";
import prodUPC from "@/api/products/prodUPC";

const ScanScreen = () => {
  const [upc, setUpc] = useState("")
  const [item, setItem] = useState<PantryItem | null>(null);

  const handleSubmit = async () => {
    const prod = await prodUPC(upc);
    setItem(prod);
  }
  return (
    <View>
      <TextInput
        placeholder="*****"
        secureTextEntry
        value={upc}
        onChangeText={setUpc}
      />
    </View>
  )
}

export default ScanScreen

