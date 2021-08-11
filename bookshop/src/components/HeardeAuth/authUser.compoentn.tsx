import React from "react";
import {Avatar, Switch} from "antd";
import {Link, useHistory} from "react-router-dom";
import Heading from "@Components/Heading/Heading.component";
import {FiUser} from "react-icons/fi";
import {VscSignOut} from "react-icons/vsc";
import {IoMdSettings} from "react-icons/io";
import {UserDropDwon} from "./auth-info.style";
import {Popover} from "@Components/popup/popup.component";
import {useDispatch, useSelector} from "react-redux";
import themeAction from "@Redux/changelayout/changelayout.action";
import {RootState} from "@Redux/rootReducer";
import authAction from "@Redux/auth/auth.action";

const AuthUser: React.FC = () => {
  const history = useHistory();
  const dark = useSelector((state: RootState) => state.themeLayout.darkMode);
  const { userData } = useSelector((state: RootState) => state.auth);
  const disptch = useDispatch();
  const onChange = (checked: boolean) => {
    disptch(themeAction.changeLayoutTheme(checked));
  };
  const SignOut = () => {
    disptch(authAction.logOutUser());
    history.push("/login");
  };
  const userCOntent = (
    <UserDropDwon>
      <div className="user-dropdwon">
        <figure className="user-dropdwon__info">
          <Avatar size={48} shape="square" icon={<FiUser size={20} />} />
          <figcaption>
            {/* @ts-ignore */}
            <Heading as="h5">{userData.firstName}</Heading>
            {/* @ts-ignore */}
            <p>{userData.role}</p>
          </figcaption>
        </figure>
        <div className="switch-dark">
          <span>Light</span>
          <Switch
            checkedChildren="dark"
            unCheckedChildren="light"
            checked={dark}
            onChange={onChange}
          />
          <span>Dark</span>
        </div>
        <ul className="user-dropdwon__links">
          <li>
            <Link to="/Profile">
              <FiUser /> Profile
            </Link>
          </li>
          <li>
            <Link to="/change-password">
              <IoMdSettings /> Change Password
            </Link>
          </li>
        </ul>
        <a className="user-dropdwon__bottomAction" onClick={SignOut}>
          <VscSignOut /> Sign Out
        </a>
      </div>
    </UserDropDwon>
  );
  return (
    <div className="nav-author">
      <Popover placement="bottomRight" content={userCOntent} action="click">
        <a className="head-example">
          <Avatar icon={<FiUser size={20} />} />
        </a>
      </Popover>
    </div>
  );
};

export default AuthUser;
