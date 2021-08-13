import React, {ReactChild, ReactChildren, useEffect, useState} from "react";
import {Button, Col, Layout, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {AiOutlineAlignLeft, AiOutlineAlignRight} from "react-icons/ai";
import {Scrollbars} from "react-custom-scrollbars-2";
import {Link, useHistory} from "react-router-dom";
import {RootState} from "src/redux/rootReducer";
import {Div} from "./protectedLayout.styles";
import themeAction from "src/redux/changelayout/changelayout.action";
import Logo from "src/components/logo/logo";
import AuthInfo from "src/components/HeardeAuth/AuthInfo.component";

import SideMenu from "src/components/SideMenu/sidemenu.component";

const { Header, Footer, Sider, Content } = Layout;

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const ProtectedLayouts: React.FC<AuxProps> = ({ children }) => {
  const [searchHide, setSearchHide] = useState<boolean>(true);
  const history = useHistory();

  const theme = useSelector((state: RootState) => state.themeLayout);
  const loggedIn = useSelector((state: RootState) => state.auth.userLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(themeAction.getLayoutTheme());
  }, []);

  // useEffect(() => {
  //   if (Cookies.get("refreshToken")) {
  //     dispatch(authAction.fetchAdminRequest());
  //   } else {
  //     dispatch(authAction.logOutUser());
  //   }
  // }, []);

  useEffect(() => {
    if (!loggedIn) {
      history.push("/login");
    }
  }, [loggedIn]);
  const toggleCollaps = () => {
    dispatch(themeAction.setCollapsSidebar(!theme.collaps));
  };

  const handelSearchHide = () => {
    setSearchHide(!searchHide);
  };

  return (
    <Div darkMode={theme.darkMode}>
      <Layout className="layout">
        <Header
          style={{
            position: "fixed",
            width: "100%",
            top: 0,
            color: "#ffff",
            left: 0,
          }}
        >
          <Row>
            <Col lg={5} md={8} sm={12} xs={10}>
              <Button type="link" onClick={toggleCollaps}>
                {theme.collaps ? (
                  <AiOutlineAlignRight
                    size="24px"
                    style={{ marginBottom: "-8px" }}
                    color="#999696"
                  />
                ) : (
                  <AiOutlineAlignLeft
                    size="24px"
                    style={{ marginBottom: "-8px" }}
                    color="#999696"
                  />
                )}
              </Button>
              <Link to="/" className="logo">
                <Logo className="logo-class" />
              </Link>
            </Col>
            <Col lg={14} md={10} sm={0} xs={0}>
              {/* <Search /> */}
            </Col>
            {/* <Col md={1} sm={2} xs={2}>
              <div className="mobile-action">
                <a className="btn-search" onClick={handelSearchHide}>
                  {searchHide ? <FiSearch size={22} /> : <FiX size={22} />}
                </a>
              </div>
            </Col> */}
            <Col lg={5} md={6} sm={12} xs={14}>
              <AuthInfo
                searchHide={searchHide}
                handelSearchHide={handelSearchHide}
              />
            </Col>
          </Row>
        </Header>
        {/* <div className="header-more">
          <Row>
            <Col md={0} sm={24} xs={24}>
              <div className="small-screen-headerRight">
                <SmallScreenSearch hide={searchHide} darkMode={theme.darkMode}>
                  <Search />
                </SmallScreenSearch>
              </div>
            </Col>
          </Row>
        </div> */}
        <Layout>
          <Sider
            width={280}
            theme={theme.darkMode ? "dark" : "light"}
            collapsed={theme.collaps}
            style={{
              margin: "56px 0 0 0",
              padding: "15px 15px 55px 15px",
              // overflowY: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              zIndex: 998,
            }}
          >
            <Scrollbars
              autoHide
              autoHideTimeout={500}
              autoHideDuration={200}

              // renderThumbHorizontal={renderThumbHorizontal}
              // renderThumbVertical={renderThumbVertical}
              // renderView={renderView}
              // renderTrackVertical={renderTrackVertical}
            >
              <p className="sidebar-nav-title">MAIN MENU</p>
              <SideMenu
                toggleCollapsedMode={theme.collaps}
                darkMode={theme.darkMode}
              />
            </Scrollbars>
          </Sider>
          <Layout className="atbd-main-layout">
            <Content style={{ minHeight: "calc(100vh - 64px)" }}>
              {children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Div>
  );
};

export default ProtectedLayouts;
