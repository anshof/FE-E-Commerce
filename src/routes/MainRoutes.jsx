import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import store from "../store";
import StartSelling from "../pages/StartSelling";
import Products from "../pages/Products";
// import MoreDetails from "../pages/MoreDetails";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/shopnow" component={Products} />
          {/* <Route exact path="/:detail" component={MoreDetails} /> */}
          <Route exact path="/:category" component={Products} />
          <Route exact path="/startselling" component={StartSelling} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
