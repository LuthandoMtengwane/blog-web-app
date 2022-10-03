import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="USERNAME *" />
        <input required type="password" placeholder="PASSWORD *" />
        <button>LOG IN</button>
        <span>
          DON'T HAVE AN ACCOUNT? <Link to="/register">REGISTER NOW</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
