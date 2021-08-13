import React from "react";
import {Redirect, Route, RouteProps} from "react-router-dom";
import {useSelector} from "react-redux";
import ProtectedLayouts from "./../layouts/ProtectedLayouts";
import {RootState} from "src/redux/rootReducer";

export interface ProtectedRouteProps extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,

  ...rest
}) => {
  const isAuth = useSelector((state: RootState) => state.auth.userLogin);
  return isAuth ? (
    <Route
      {...rest}
      render={(props) => (
        <>
          <ProtectedLayouts>
            <Component {...props} />
          </ProtectedLayouts>
        </>
      )}
    />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
