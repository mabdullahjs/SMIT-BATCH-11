import { auth, checkUserStatus, db, storage } from "./config.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

let userData = null;

async function userDataObject() {
  const obj = await checkUserStatus();
  userData = obj;

  !userData
    ? (window.location = "login.html")
    : console.log("user mujood haa..");
}

userDataObject();

// logout user

const logoutUser = document.querySelector("#logout-user");

logoutUser.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "login.html";
    })
    .catch((error) => {
      alert(error);
    });
});

//post add

const form = document.querySelector("#form");
const adImage = document.querySelector("#dropzone-file");
const title = document.querySelector("#product_title");
const description = document.querySelector("#product_des");
const price = document.querySelector("#product_price");
const userName = document.querySelector("#person_name");
const userNumber = document.querySelector("#person_number");
const btnLoading = document.querySelector("#btn-loading");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  btnLoading.innerHTML = "loading..."
  // console.log(adImage.files[0]);
  // console.log(title);
  // console.log(description);
  // console.log(price);
  // console.log(userName);
  // console.log(userNumber);

  const profileImageUrl = await showUrl(adImage.files[0]);
  console.log("url image ==>", profileImageUrl);

  try {
    const docRef = await addDoc(collection(db, "postAd"), {
      fullname: userName.value,
      title: title.value,
      description: description.value,
      price: price.value,
      phoneNumber: userNumber.value,
      adImage: profileImageUrl,
      uid: userData.uid,
    });
    console.log("Document written with ID: ", docRef.id);
    btnLoading.innerHTML = "POST NOW"
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

// save image on storage
async function showUrl(files) {
  const storageRef = ref(storage, `${userData.uid}$abc${Date.now()}`);
  try {
    const uploadImg = await uploadBytes(storageRef, files);
    const url = await getDownloadURL(storageRef);
    console.log(url);
    return url;
  } catch (error) {
    console.log(error);
  }
}
