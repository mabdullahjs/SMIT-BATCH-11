import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase/firebaseconfig";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <h1>Login user</h1>
      <form onSubmit={loginUser}>
        <input type="email" placeholder="enter your email" ref={email} />
        <input
          type="password"
          placeholder="enter your password"
          ref={password}
        />
        <button>login</button>
      </form>
    </>
  );
};

export default Login;


