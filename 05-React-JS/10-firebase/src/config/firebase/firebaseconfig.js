import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNX-mMh6fB5XkFp63pMhKjVhluoiOAgMM",
  authDomain: "react-practice-12.firebaseapp.com",
  projectId: "react-practice-12",
  storageBucket: "react-practice-12.appspot.com",
  messagingSenderId: "117233741152",
  appId: "1:117233741152:web:9763428b69aee7f8ba0205",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
