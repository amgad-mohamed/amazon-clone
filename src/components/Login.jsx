import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import loginLogo from "../images/login-logo.png";

const Login = () => {
  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={loginLogo} alt="login-logo" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button type="submit" className="login__signInButton">
            Sign In
          </button>
          <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice</p>
          <Link to="/register">
            <button type="submit" className="login__registerButton">
              Create your Amazon Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
