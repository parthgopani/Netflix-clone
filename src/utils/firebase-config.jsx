import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCiSh2Wiq5tQU4HiaeN-kExkEwhOx5exeY",
  authDomain: "netflix-clone-baa26.firebaseapp.com",
  projectId: "netflix-clone-baa26",
  storageBucket: "netflix-clone-baa26.appspot.com",
  messagingSenderId: "1045047060162",
  appId: "1:1045047060162:web:3cd2cff0f2c23bfd6d7d5b",
  measurementId: "G-XZ81E8KY0L",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
