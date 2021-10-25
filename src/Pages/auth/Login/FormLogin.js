import React from "react";
const FormLogin = () => {
  return (
    <div>
      <form className="login__form">
        <label className="login__form--label" for="fname">
          E-mail
        </label>
        <input
          className="login__form--input"
          type="email"
          placeholder="@mail.com"
        />
        <label className="login__form--label" for="fname">
          Password
        </label>
        <input
          className="login__form--input"
          type="password"
          placeholder="Password"
        />
        <button className="login__form--button">Sign in</button>
        <small className="copy-Rights">© 2021 All Rights Reserved</small>
      </form>
    </div>
  );
};

export default FormLogin;
