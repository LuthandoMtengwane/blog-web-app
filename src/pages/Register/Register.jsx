import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="FIRST NAME *" />
        <input required type="text" placeholder="LAST NAME *" />
        <input required type="email" placeholder="EMAIL ADDRESS *" />
        <input required type="password" placeholder="PASSWORD *" />
        <button>CREATE ACCOUNT</button>
        <span>
          HAVE AN ACCOUNT? <Link to="/login">LOG IN</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
