import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {GridContainer} from "@Styles/globalStyle";
import background from "@Assets/background/login_bg.png";
import {RootState} from "@Redux/rootReducer";
import RegisterForm from "./components/registerForm.components";
import MainPageNav from "@Components/Navbar/Navbar.component";

const RegisterPage: React.FC = () => {
  const history = useHistory();
  const loggedInUser = useSelector((state: RootState) => state.auth.userLogin);
  const userData = useSelector((state: RootState) => state.auth.userData);

  useEffect(() => {
    if (loggedInUser) {
      history.push("/dashboard");
    }
  }, [loggedInUser]);

  return (
    <>
      <MainPageNav />
      <GridContainer background={background}>
        <div style={{ width: "100vw" }}>
          <RegisterForm />
        </div>
      </GridContainer>
    </>
  );
};

export default RegisterPage;
