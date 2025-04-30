import { auth } from "@/firebaseConfig";
import { getURL } from "@/backendConfig";
import PantryItem from "@/interfaces/PantryItem";

const ingExtraInfo = async (item: PantryItem): Promise<PantryItem> => {
  try {
    const API_URL = getURL(`ingredients/info?id=${item.id}`);

    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user.");
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    item.possibleUnits = data.possibleUnits;
    item.shoppingListUnits = data.shoppingListUnits;
    item.aisle = data.aisle;
    item.categoryPath = data.categoryPath;
    return item;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};

export default ingExtraInfo;