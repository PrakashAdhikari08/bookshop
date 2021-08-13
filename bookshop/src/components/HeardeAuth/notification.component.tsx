import React from "react";
import {Avatar, Badge} from "antd";
import {Link} from "react-router-dom";
import {Scrollbars} from "react-custom-scrollbars-2";
import {AtbdTopDropdwon} from "./auth-info.style";
import {Popover} from "src/components/popup/popup.component";
import Heading from "src/components/Heading/Heading.component";
import {FiBell} from "react-icons/fi";
import {UserOutlined} from "@ant-design/icons";

const Notification = () => {
  const renderThumb = ({ style, ...props }: { style: any }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: "#F1F2F6",
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrackVertical = () => {
    return (
      <div
        className="hello"
        style={{
          position: "absolute",
          width: "6px",
          transition: "opacity 200ms ease 0s",
          opacity: 0,
          right: "2px",
          bottom: "2px",
          top: "2px",
          borderRadius: "3px",
        }}
      />
    );
  };

  const renderView = ({ style, ...props }: { style: any }) => {
    const customStyle = {
      marginRight: "-17px",
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  };

  const content = (
    <AtbdTopDropdwon className="atbd-top-dropdwon">
      <Heading as="h5" className="atbd-top-dropdwon__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={3} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <ul className="atbd-top-dropdown_nav notification-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
            <li key={i}>
              <Link to="#">
                <div className="atbd-top-dropdwon__content notifications">
                  <div className="notification-icon bg-primary">
                    {/* <FeatherIcon icon="hard-drive" /> */}
                    <Avatar shape="square" icon={<UserOutlined size={36} />} />
                  </div>
                  <div className="notification-content d-flex">
                    <div className="notification-text">
                      <Heading as="h5" className="text-cut-3">
                        <span>James</span> sent you a message sent you a
                        messagesent you a messagesent you a message sent you a
                        message sent you a messagesent you a messagesent you a
                        message
                      </Heading>
                      <p>5 hours ago</p>
                    </div>
                    <div className="notification-status">
                      <Badge dot />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Scrollbars>
      <Link to="#" className="btn-seeAll">
        See all incoming activity
      </Link>
    </AtbdTopDropdwon>
  );

  return (
    <div className="notification">
      <Popover placement="bottomRight" content={content} action="click">
        <Badge count={10} overflowCount={9} offset={[-8, -5]}>
          <a className="head-example">
            <FiBell size={24} />
          </a>
        </Badge>
      </Popover>
    </div>
  );
};

export default Notification;
