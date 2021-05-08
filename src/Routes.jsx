import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import firebase from "./firebase";

import App from "./App";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { Home } from "./components/Home";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
