import React from "react";
import ReactDOM from "react-dom";
import App from "./Router";
import { AuthenticationProvider } from "./context/AuthenticationContext";
import "./globalStyles.css";

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
