import { auth } from "@/firebaseConfig";
import PantryItem from "@/interfaces/PantryItem";

const deleteItem = async (pantry_id: number): Promise<void> => {
  try {
    const LOCAL_IP = '10.0.2.2';
    const API_URL = `http://${LOCAL_IP}:8000/pantry?pantry_id=${pantry_id}`;

    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user.");
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export default deleteItem;