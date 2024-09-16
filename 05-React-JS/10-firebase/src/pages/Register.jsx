import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { auth } from "../config/firebase/firebaseconfig";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const registerUser = (event) => {
    event.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h1>Register user</h1>
      <form onSubmit={registerUser}>
        <input type="email" placeholder="enter your email" ref={email} />
        <input
          type="password"
          placeholder="enter your password"
          ref={password}
        />
        <button>register</button>
      </form>
    </>
  );
};

export default Register;
