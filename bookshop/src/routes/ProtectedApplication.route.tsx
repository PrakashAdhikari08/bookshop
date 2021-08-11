import React from "react";
import {Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "@Pages/Profile/inedx";
import ChangePassword from "@Pages/changePassword/changePassword";
import FavoritesBooks from "@Pages/favoritesbooks/favoritesbooks";
import Customer from "@Pages/customer/customer";
import Orders from "@Pages/Orders/orders";
import BooksPage from "@Pages/Books/Books";
import userLogPage from "@Pages/userLog/userlog.page";
import {useSelector} from "react-redux";
import {RootState} from "@Redux/rootReducer";
import AdminMessagePage from "@Pages/message/adminMessage";
import UserMessagePage from "@Pages/message/userMessagePage";

const ProtetedApplicationRoute = () => {
  // @ts-ignore
  const { role } = useSelector((state: RootState) => state.auth.userData);
  return (
    <>
      <Switch>
        {role === "ADMIN" ? (
          <>
            <ProtectedRoute path="/books" exact component={BooksPage} />
            <ProtectedRoute path="/customers" exact component={Customer} />
            <ProtectedRoute path="/orders" exact component={Orders} />
            <ProtectedRoute path="/user-log" exact component={userLogPage} />
            <ProtectedRoute
              path={`/profile`}
              //   isAuthenticated={isAuth}
              exact
              component={Profile}
            />

            <ProtectedRoute
              path="/change-password"
              exact
              component={ChangePassword}
            />
            <ProtectedRoute
              path={["/admin-message", "/admin-message/:id"]}
              exact
              component={AdminMessagePage}
            />
          </>
        ) : (
          <>
            <ProtectedRoute
              path="/user-message"
              exact
              component={UserMessagePage}
            />
            <ProtectedRoute path="/orders" exact component={Orders} />
            <ProtectedRoute
              path="/favorites-books"
              exact
              component={FavoritesBooks}
            />
            <ProtectedRoute
              path={`/profile`}
              //   isAuthenticated={isAuth}
              exact
              component={Profile}
            />

            <ProtectedRoute
              path="/change-password"
              exact
              component={ChangePassword}
            />
          </>
        )}
      </Switch>
    </>
  );
};

export default ProtetedApplicationRoute;
