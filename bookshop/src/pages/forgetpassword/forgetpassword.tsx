import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {GridContainer} from "@Styles/globalStyle";
import background from "@Assets/background/login_bg.png";
import {RootState} from "@Redux/rootReducer";

import MainPageNav from "@Components/Navbar/Navbar.component";
import ForgetPasswordForm from "./Components/forgetPasswordFomr.components";

const ForgetPasswordPage: React.FC = () => {
  const history = useHistory();
  const loggedInUser = useSelector((state: RootState) => state.auth.userLogin);

  useEffect(() => {
    if (loggedInUser) {
      history.push(`/dashboard`);
    }
  }, [loggedInUser]);

  return (
    <>
      <MainPageNav authPage={true} />
      <GridContainer background={background}>
        <div style={{ width: "100vw" }}>
          <ForgetPasswordForm />
        </div>
      </GridContainer>
    </>
  );
};

export default ForgetPasswordPage;
