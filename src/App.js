import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Monitoring from "./Pages/Monitoring";
import Companies from "./Pages/Companies";
import System from "./Pages/System";
import Settlement from "./Pages/Settlement";
import Analysis from "./Pages/Analysis";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/" component={Monitoring} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/system" component={System} />
            <Route exact path="/settlement" component={Settlement} />
            <Route exact path="/analysis" component={Analysis} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
