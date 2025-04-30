import { auth } from "@/firebaseConfig";
import { getURL } from "@/backendConfig";
import Nutrition from "../../interfaces/Nutrition"; // you'll define this too

const getNutrition = async (recipeId: number): Promise<Nutrition> => {
  try {
    const API_URL = getURL(`/recipes/${recipeId}/nutrition`);

    const user = auth.currentUser;
    if (!user) {
      throw new Error("No authenticated user.");
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${idToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Nutrition = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching nutrition info:", error);
    throw error;
  }
};

export default getNutrition;
