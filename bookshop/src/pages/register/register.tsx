import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {GridContainer} from "src/styles/globalStyle";
import background from "src/assets/background/login_bg.png";
import {RootState} from "src/redux/rootReducer";
import RegisterForm from "./components/registerForm.components";
import MainPageNav from "src/components/Navbar/Navbar.component";

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
