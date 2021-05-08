import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import firebase from "./firebase";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import store from "./store/store";
import { useHistory } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import App from "./App";
import SignUp from "./components/auth/SignUp";

import SignIn from "./components/auth/SignIn";

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
};

const Root = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
