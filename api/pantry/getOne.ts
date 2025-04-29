import { auth } from "@/firebaseConfig";
import SearchResult from "@/interfaces/SearchResult";

const getOne = async (pantry_id: number): Promise<SearchResult> => {
  try {
    const LOCAL_IP = '10.0.2.2';
    const API_URL = `http://${LOCAL_IP}:8000/pantry/item?pantry_id=${pantry_id}`;

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

    const data: SearchResult = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching item:", error);
    throw error;
  }
};

export default getOne;