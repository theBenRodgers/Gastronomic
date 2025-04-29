import { auth } from "@/firebaseConfig";
import SearchResults from "@/interfaces/SearchResults";

const getAll = async (page: number, perPage: number): Promise<SearchResults> => {
  try {
    const LOCAL_IP = '10.0.2.2';
    const API_URL = `http://${LOCAL_IP}:8000/pantry?page=${page}&per_page=${perPage}`;

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

    const data: SearchResults = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pantry:", error);
    throw error;
  }
};

export default getAll;