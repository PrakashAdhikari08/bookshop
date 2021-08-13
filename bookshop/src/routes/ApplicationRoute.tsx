import React from "react";
import {Switch} from "react-router-dom";
import PublicRoute from "./PublicRoutes";
import LogInPage from "src/pages/login/loginpage";
import RegisterPage from "src/pages/register/register";
import Home from "src/pages/home/home";

const ApplicationRoute = () => {
  return (
    <>
      <Switch>
        {/* Public Route ---------------- */}
        <PublicRoute path="/" exact component={Home} />
        <PublicRoute path="/login" exact component={LogInPage} />
        <PublicRoute path="/register" exact component={RegisterPage} />
      </Switch>
    </>
  );
};

export default ApplicationRoute;
