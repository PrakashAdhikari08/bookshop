import React from "react";
import {Menu} from "antd";
import {NavLink, useHistory} from "react-router-dom";
import {HeartFilled, ProfileOutlined, UserOutlined} from "@ant-design/icons";
import {ImBooks} from "react-icons/im";
import {BiUserPin} from "react-icons/bi";
import {useSelector} from "react-redux";
import {RootState} from "@Redux/rootReducer";
import {AiOutlineMessage} from "react-icons/ai";

// const { SubMenu } = Menu;

interface SubmenuProps {
  toggleCollapsedMode: boolean;
  darkMode: boolean;
}

const SideMenu: React.FC<SubmenuProps> = ({
  toggleCollapsedMode,
  darkMode,
}) => {
  const { location } = useHistory();
  // @ts-ignore
  const { role } = useSelector((state: RootState) => state.auth.userData);

  const toggleCollapsed = () => {};

  return (
    <Menu
      style={{ width: "100%" }}
      defaultSelectedKeys={["/favorites-books"]}
      selectedKeys={[location.pathname]}
      mode="inline"
      theme={darkMode ? "dark" : "light"}
    >
      {role === "ADMIN" ? (
        <>
          <Menu.Item key="/customers" icon={<UserOutlined />}>
            <NavLink onClick={toggleCollapsed} to="/customers">
              Customer
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/orders" icon={<ProfileOutlined />}>
            <NavLink onClick={toggleCollapsed} to="/orders">
              Orders
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/books" icon={<ImBooks />}>
            <NavLink onClick={toggleCollapsed} to="/books">
              Books
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/user-log" icon={<BiUserPin />}>
            <NavLink onClick={toggleCollapsed} to="/user-log">
              User log
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/admin-message" icon={<AiOutlineMessage />}>
            <NavLink onClick={toggleCollapsed} to="/admin-message">
              Messages
            </NavLink>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="/favorites-books" icon={<HeartFilled />}>
            <NavLink onClick={toggleCollapsed} to="/favorites-books">
              Favorites Books
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/orders" icon={<ProfileOutlined />}>
            <NavLink onClick={toggleCollapsed} to="/orders">
              Orders
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/user-message" icon={<AiOutlineMessage />}>
            <NavLink onClick={toggleCollapsed} to="/user-message">
              Messages
            </NavLink>
          </Menu.Item>
        </>
      )}

      {/* <SubMenu key="dashboard" icon={<HomeOutlined />} title="Dashboard">
        <Menu.Item key="home">
          <NavLink onClick={toggleCollapsed} to={`${path}`}>
            Social Media
          </NavLink>
        </Menu.Item>
        <Menu.Item key="business">
          <NavLink onClick={toggleCollapsed} to={`${path}/business`}>
            Fintech / Business
          </NavLink>
        </Menu.Item>
        <Menu.Item key="performance">
          <NavLink onClick={toggleCollapsed} to={`${path}/performance`}>
            Site Performance
          </NavLink>
        </Menu.Item>
        <Menu.Item key="eco">
          <NavLink onClick={toggleCollapsed} to={`${path}/eco`}>
            Ecommerce
          </NavLink>
        </Menu.Item>
        <Menu.Item key="crm">
          <NavLink onClick={toggleCollapsed} to={`${path}/crm`}>
            CRM
          </NavLink>
        </Menu.Item>
        <Menu.Item key="sales">
          <NavLink onClick={toggleCollapsed} to={`${path}/sales`}>
            Sales Performance
          </NavLink>
        </Menu.Item>
      </SubMenu> */}
    </Menu>
  );
};

export default SideMenu;
