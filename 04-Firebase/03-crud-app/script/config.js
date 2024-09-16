import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBEG7AqacqOq4VjQmXFEh0ohCd0mxCX0GU",
  authDomain: "buy-sell-corner.firebaseapp.com",
  projectId: "buy-sell-corner",
  storageBucket: "buy-sell-corner.appspot.com",
  messagingSenderId: "421490077082",
  appId: "1:421490077082:web:5261a624d5e4d6c9eb9e23",
  measurementId: "G-BBZTZB2ZCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const userAvatar = document.querySelector("#user-avatar");
const userImage = document.querySelector("#userImage");

export async function checkUserStatus() {
  try {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const uid = user.uid;
            console.log(uid);

            const q = query(collection(db, "users"), where("uid", "==", uid));
            const querySnapshot = await getDocs(q);

            let userData = null;
            querySnapshot.forEach((doc) => {
              userData = doc.data();
              userImage.src = userData.profileImage;
            });
            resolve(userData);
          } catch (error) {
            console.log(error);
            reject(error);
          }
        } else {
          userAvatar.innerHTML = `<button><a href="./login.html">Login</a></button>`;
          resolve(null);
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}
