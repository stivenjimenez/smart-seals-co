import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./components/Layout";
import Monitoring from "./Pages/Monitoring";
import Companies from "./Pages/Companies";
import System from "./Pages/System";
import Settlement from "./Pages/Settlement";
import Analysis from "./Pages/Analysis";

import Login from "./Pages/auth/Login";
import { AuthenticationContext } from "./context/AuthenticationContext";

const App = () => {
  const { isLogin } = useContext(AuthenticationContext);

  return (
    <Router>
      <Switch>
        {isLogin ? (
          <Layout>
            <Route exact path="/" component={Monitoring} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/system" component={System} />
            <Route exact path="/settlement" component={Settlement} />
            <Route exact path="/analysis" component={Analysis} />
            <Redirect to={{ pathname: "/" }} />
          </Layout>
        ) : (
          <>
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
            <Route exact path="/login" component={Login} />
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
