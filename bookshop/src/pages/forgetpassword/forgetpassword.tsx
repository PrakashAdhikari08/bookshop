import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {GridContainer} from "src/styles/globalStyle";
import background from "src/assets/background/login_bg.png";
import {RootState} from "src/redux/rootReducer";

import MainPageNav from "src/components/Navbar/Navbar.component";
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
