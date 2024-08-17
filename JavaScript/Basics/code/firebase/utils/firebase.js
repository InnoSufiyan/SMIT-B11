import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCK9l5QXk1FFKyoE57Q3RuxXPaWvlycShc",
  authDomain: "innotest3201.firebaseapp.com",
  projectId: "innotest3201",
  storageBucket: "innotest3201.appspot.com",
  messagingSenderId: "948692112432",
  appId: "1:948692112432:web:3f99bf490fc8af60a109f5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage, "images");

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  getDocs,
  storageRef,
  storage,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL
};
