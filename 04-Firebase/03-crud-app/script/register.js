import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

import { auth, db, storage } from "./config.js";

const form = document.querySelector("#form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const profileImage = document.querySelector("#profile-image");

// register user

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log(email.value);
  console.log(password.value);
  console.log(firstname.value);
  console.log(lastname.value);
  console.log(profileImage.files[0]);

  const profileImageUrl = await showUrl(profileImage.files[0]);
  console.log("url image ==>", profileImageUrl);

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async (userCredential) => {
      const user = userCredential.user;
      console.log(user.uid);

      try {
        const docRef = await addDoc(collection(db, "users"), {
          firstname: firstname.value,
          lastname: lastname.value,
          email: email.value,
          profileImage: profileImageUrl,
          uid: user.uid,
        });
        console.log("Document written with ID: ", docRef.id);
        window.location = "login.html";
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// save image on storage
async function showUrl(files) {
  const storageRef = ref(storage, email.value);
  try {
    const uploadImg = await uploadBytes(storageRef, files);
    const url = await getDownloadURL(storageRef);
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
  }
}
