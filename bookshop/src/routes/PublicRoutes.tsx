import React from "react";
import {Route, RouteProps} from "react-router-dom";

export interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const PublicRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  ...props
}) => {
  return (
    <Route
      {...props}
      render={(props) => (
        <>
          <Component {...props} />
        </>
      )}
    />
  );
};

export default PublicRoute;
