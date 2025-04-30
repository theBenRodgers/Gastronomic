import { auth } from "@/firebaseConfig";
import { getURL } from "@/backendConfig";
import PantryItem from "@/interfaces/PantryItem";

const ingSearch = async (query: string, page: number): Promise<PantryItem[]> => {
  try {
    const API_URL = getURL(`ingredients/search?query=${query}&page=${page}`);

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

    const data: PantryItem[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching ingredients:", error);
    throw error;
  }
};

export default ingSearch;