import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import LoginForm from "./components/loginform/loginform.component";
import {GridContainer} from "@Styles/globalStyle";
import background from "@Assets/background/login_bg.png";
import {RootState} from "@Redux/rootReducer";
// import authAction from "@Redux/auth/auth.action";
import MainPageNav from "@Components/Navbar/Navbar.component";

const LogInPage: React.FC = () => {
  // const dispatch = useDispatch();
  const history = useHistory();
  const loggedInUser = useSelector((state: RootState) => state.auth.userLogin);

  useEffect(() => {
    if (loggedInUser) {
      history.push(`/profile`);
    }
  }, [loggedInUser]);

  return (
    <>
      <MainPageNav authPage={true} />
      <GridContainer background={background}>
        <div style={{ width: "100vw" }}>
          <LoginForm />
        </div>
      </GridContainer>
    </>
  );
};

export default LogInPage;
