import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBb63bKBE_IFh3a-ue328Xhan-XvzQ1v0E",
  authDomain: "smit-batch-gulshan.firebaseapp.com",
  projectId: "smit-batch-gulshan",
  storageBucket: "smit-batch-gulshan.appspot.com",
  messagingSenderId: "921238872392",
  appId: "1:921238872392:web:c157d4845986cc64d9537d",
  measurementId: "G-9TFYSKV8ND",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
