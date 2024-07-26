import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { auth } from "./firebaseconfig.js";

// 10
// 9
// 7
// 7
// 9
// 8
// 10
// 8
// 8

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const forgotPassword = document.querySelector("#forgot-password");
const googleBtn = document.querySelector("#google-login");
const githubBtn = document.querySelector("#github-login");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = "home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

forgotPassword.addEventListener("click", () => {
  const resetEmail = prompt("enter email");
  sendPasswordResetEmail(auth, resetEmail)
    .then(() => {
      alert("email send");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

//google authentication
const provider = new GoogleAuthProvider();

googleBtn.addEventListener("click", () => {
  console.log("google login");

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      window.location = "home.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

//github authentication

const githubProvider = new GithubAuthProvider();

githubBtn.addEventListener("click", () => {
  console.log("github login");

  signInWithPopup(auth, githubProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

//Unable to process request due to missing initial state. This may happen if browser sessionStorage is inaccessible or accidentally cleared. Some specific scenarios are - 1) Using IDP-Initiated SAML SSO. 2) Using signInWithRedirect in a storage-partitioned browser environment.
