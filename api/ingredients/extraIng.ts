import { auth } from "@/firebaseConfig";
import { getURL } from "@/backendConfig";
import SearchResult from "@/interfaces/PantryItem";

const extraIng = async (item: SearchResult): Promise<SearchResult> => {
  try {
    const API_URL = getURL(`ingredients/extra?id=${item.id}&unit=${item.unit}`);

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
    item.calories = data.calories;
    item.protein = data.protein;
    item.fat = data.fat;
    item.carbs = data.carbs;
    item.estimatedCost = data.estimatedCost;
    item.weightPerServing = data.weightPerServing;
    return item;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};

export default extraIng;