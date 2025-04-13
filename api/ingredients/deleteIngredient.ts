import { auth } from "@/firebaseConfig";
import Ingredient from "@/interfaces/Ingredient";

const deleteIngredient = async (iid : Number): Promise<void> => {
  try {
    const LOCAL_IP = '10.0.2.2';
    const API_URL = `http://${LOCAL_IP}:8000/ingredients?iid=${iid}`;

    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user.");
    }

    const idToken = await user.getIdToken(true);
    
    const response = await fetch(API_URL, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

  } catch (error) {
    console.error("Error deleting ingredients:", error);
    throw error;;
  }
};

export default deleteIngredient;