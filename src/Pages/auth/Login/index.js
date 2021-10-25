import React from "react";
import LoginWithSolcialNetwork from "./LoginWithSolcialNetwork";
import FormLogin from "./FormLogin";
import "./index.css";

const Login = () => {
  return (
    <div className="login__pagues">
      <div className="login__container">
        <h1 className="login__title">
          Sign in to <br />
          Smart Seals co
        </h1>
        <LoginWithSolcialNetwork />
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
