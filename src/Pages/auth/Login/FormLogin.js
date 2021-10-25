import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthenticationContext } from "../../../context/AuthenticationContext";

const FormLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const { setIsLogin } = useContext(AuthenticationContext);

  const BASE_URL = "https://prueba.smartseals.co/prueba-frontend";

  const getToken = async () => {
    await axios
      .post(`${BASE_URL}/api/auth/login`, data)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        setIsLogin(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    getToken();
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="login__form" onSubmit={handleSubmit}>
        <label className="login__form--label">E-mail</label>
        <input
          className="login__form--input"
          type="email"
          value={data.email}
          name="email"
          placeholder="@mail.com"
          onChange={(e) => handleChange(e)}
        />
        <label className="login__form--label">Password</label>
        <input
          className="login__form--input"
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
        <button className="login__form--button">Sign in</button>
        <small className="copy-Rights">© 2021 All Rights Reserved</small>
      </form>
    </div>
  );
};

export default FormLogin;
