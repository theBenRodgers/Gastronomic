import { auth } from "@/firebaseConfig";
import { getURL } from "@/backendConfig";
import Recipe from "@/interfaces/Recipe";
import RecipeRequest from "@/interfaces/RecipeRequest";

const recipeSearch = async (request: RecipeRequest): Promise<Recipe[]> => {
  try {
    const API_URL = getURL(`/recipes/search`);

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
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: Recipe[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};

export default recipeSearch;