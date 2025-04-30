import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyD1Rcp0Aq6rbqD3jJlCv4-4xy9rtfokWs4",
  authDomain: "gastronomic-55fad.firebaseapp.com",
  projectId: "gastronomic-55fad",
  storageBucket: "gastronomic-55fad.firebasestorage.app",
  messagingSenderId: "619000615933",
  appId: "1:619000615933:web:1258807b128fe5fb44bf94",
  measurementId: "G-VDD5X5QBZ0"
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage for persistence
const auth = initializeAuth(app, {
  persistence: browserLocalPersistence // Using browserLocalPersistence for React Native apps
});

// Initialize Cloud Firestore and get a reference to the service
export { app, auth};
