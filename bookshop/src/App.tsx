import React from "react";
import {useSelector} from "react-redux";
import ApplicationRoute from "./routes/ApplicationRoute";
import {ThemeProvider} from "styled-components";
import {BrowserRouter, Switch} from "react-router-dom";
import {theme} from "./../config/theme.config";
import ProtetedApplicationRoute from "./routes/ProtectedApplication.route";
import {RootState} from "@Redux/rootReducer";
import LogInModal from "@Components/LogInModel/LoginModal.componenst";

function App() {
  const darkMode = useSelector(
    (state: RootState) => state.themeLayout.darkMode
  );
  const login = useSelector((state: RootState) => state.auth.userLogin);
  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...theme, darkMode }}>
        <ApplicationRoute />
        <LogInModal />
        {login && (
          <Switch>
            <ProtetedApplicationRoute />
          </Switch>
        )}
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
