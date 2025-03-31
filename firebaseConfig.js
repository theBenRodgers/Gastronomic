import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCrqUozVlJPhEzWLlwWBuYEFYNNrKHHLIA",
  authDomain: "gastronomic-login.firebaseapp.com",
  projectId: "gastronomic-login",
  storageBucket: "gastronomic-login.firebasestorage.app",
  messagingSenderId: "920970902794",
  appId: "1:920970902794:web:3b5995a388f181be6ccef3"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };