import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthContext from "./contexts/auth";

import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";

const Routes = () => {
  const { signed } = useContext(AuthContext);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  const PublicRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        signed ? (
          <Redirect
            to={{ pathname: "/dashboard", state: { from: props.location } }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/signin" component={SignIn} />
        <Redirect exact from="/" to="/signin" />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
