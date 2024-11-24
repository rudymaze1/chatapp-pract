import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCZuQSYvhwp0eiI2Y5XqUWHVZIll2v_jto",
  authDomain: "porulesamis2.firebaseapp.com",
  projectId: "porulesamis2",
  storageBucket: "porulesamis2.appspot.com", // Corrected domain
  messagingSenderId: "494298046157",
  appId: "1:494298046157:web:7e2d50e124343bcd4ed384"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firestore
const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Initialize Firebase Auth with AsyncStorage for persistence
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { FIREBASE_APP, FIREBASE_DB, FIREBASE_AUTH };
