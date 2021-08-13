import React from "react";
import {Switch} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import Profile from "src/pages/Profile/inedx";
import ChangePassword from "src/pages/changePassword/changePassword";
import FavoritesBooks from "src/pages/favoritesbooks/favoritesbooks";
import Customer from "src/pages/customer/customer";
import Orders from "src/pages/Orders/orders";
import BooksPage from "src/pages/Books/Books";
import userLogPage from "src/pages/userLog/userlog.page";
import {useSelector} from "react-redux";
import {RootState} from "src/redux/rootReducer";
import AdminMessagePage from "src/pages/message/adminMessage";
import UserMessagePage from "src/pages/message/userMessagePage";

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
