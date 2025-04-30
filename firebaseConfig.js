import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD1Rcp0Aq6rbqD3jJlCv4-4xy9rtfokWs4",
  authDomain: "gastronomic-55fad.firebaseapp.com",
  projectId: "gastronomic-55fad",
  storageBucket: "gastronomic-55fad.firebasestorage.app",
  messagingSenderId: "619000615933",
  appId: "1:619000615933:web:1258807b128fe5fb44bf94",
  measurementId: "G-VDD5X5QBZ0",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };