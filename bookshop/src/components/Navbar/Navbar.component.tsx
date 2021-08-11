import React from "react";
import {Navbar, WrapperNav} from "./navbar.styles";
import {Container} from "@Styles/globalStyle";
import {useDispatch, useSelector} from "react-redux";
import {HeartFilled, UserOutlined} from "@ant-design/icons";
import {Link, useHistory} from "react-router-dom";
import {RootState} from "@Redux/rootReducer";
import ModalAction from "@Redux/LoginModal/LoginModal.action";

interface authPage {
  authPage?: boolean;
}

const MainPageNav: React.FC<authPage> = ({ authPage }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.userLogin);

  const wishList = () => {
    if (auth) {
      history.push("/favorites-books");
    } else {
      dispatch(ModalAction.modalOpenRequest(true));
    }
  };

  return (
    <>
      <WrapperNav authPage={authPage}>
        <Container>
          <Navbar>
            <div className="logo-on-nav">
              <Link to="/">
                <h5>Book Store</h5>
              </Link>
            </div>

            <div className="auth-info">
              <HeartFilled onClick={wishList} className="icon" />
              <Link to="/login">
                <UserOutlined className="icon" />
              </Link>
            </div>
          </Navbar>
        </Container>
      </WrapperNav>
    </>
  );
};

export default MainPageNav;
