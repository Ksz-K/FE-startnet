import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";

import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ loadUser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <Router>
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Routes component={Routes} />
        </Switch>
      </Fragment>
    </Router>
  );
};

App.propTypes = {
  loadUser: PropTypes.func.isRequired,
};
export default connect(null, { loadUser })(App);
