import { auth } from "@/firebaseConfig";
import SearchResult from "@/interfaces/PantryItem";

const addItem = async (pantry_item: SearchResult): Promise<void> => {
  try {
    const LOCAL_IP = '10.0.2.2';
    const API_URL = `http://${LOCAL_IP}:8000/pantry`;

    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user.");
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pantry_item),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    console.error("Error adding to pantry:", error);
    throw error;
  }
};

export default addItem;