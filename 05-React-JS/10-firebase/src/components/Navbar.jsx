import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-center gap-5 m-5">
      <h3>
        <Link to="">Profile</Link>
      </h3>
      <h3>
        <Link to="newsfeed">News Feed</Link>
      </h3>
      <h3>
        <Link to="userdata">User Data</Link>
      </h3>
      <h3>
        <Link to="login">Login</Link>
      </h3>
      <h3>
        <Link to="register">Register</Link>
      </h3>
    </div>
  );
};

export default Navbar;
