import { auth } from '@/firebaseConfig';

export const getRecipes = async (ingredients: string) => {
  try {
    const LOCAL_IP = '172.27.94.230'; // ← your Mac's IP on the same Wi-Fi
    const API_URL = `http://${LOCAL_IP}:8000/search-recipes?ingredients=${ingredients}`;
    const user = auth.currentUser;

    if (!user) {
      throw new Error('No authenticated user.');
    }

    const idToken = await user.getIdToken(true);

    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch recipes: ${response.statusText}`);
    }

    const data = await response.json();
    return data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
