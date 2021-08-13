import { Row, Col, Button } from "antd";
import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { AiOutlineSend } from "react-icons/ai";
import { Typography } from "antd";
import { useSelector, useDispatch } from "react-redux";
import messageAction from "src/redux/messages/message.action";
import { RootState } from "src/redux/rootReducer";
const { Title } = Typography;

const UserMessagePage: React.FC = () => {
  const dispatch = useDispatch();

  const [message, setMessgae] = useState<string>("");
  const user = useSelector((state: RootState) => state.auth.userData);
  const { loading, messages, clearField } = useSelector(
    (state: RootState) => state.messageReducer
  );
  const sendMssage = () => {
    if (message) {
      dispatch(
        messageAction.sendMessageReq({
          message,
          sender: "CUSTOMER",
          // @ts-ignore
          userId: user.id,
        })
      );
    }
  };
  useEffect(() => {
    setMessgae("");
  }, [clearField]);

  useEffect(() => {
    // @ts-ignore
    dispatch(messageAction.fetchMessages(user.id));
  }, [user]);

  return (
    <>
      <Row justify="center">
        <Col
          xs={24}
          md={8}
          lg={14}
          xl={12}
          style={{
            background: "#EEEE",

            height: "90vh",
            position: "relative",
          }}
        >
          <div className="message-box">
            {messages.map((item: any) => (
              <div
                key={item.id}
                className={`${
                  item.sender === "CUSTOMER" && "userMessage"
                } adminMessage`}
              >
                <Title style={{ fontSize: "12px" }}>
                  {item.sender === "ADMIN" ? "Admin" : "Me"}
                </Title>
                <p className="message" style={{ color: "#000" }}>
                  {item.message}
                </p>
              </div>
            ))}
          </div>
          <Input
            style={{ position: "absolute", bottom: "0", paddingRight: "100px" }}
            placeholder="input search text"
            size="large"
            onChange={(e) => {
              setMessgae(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                sendMssage();
              }
            }}
          />
          <Button
            style={{ position: "absolute", bottom: "0", right: "0" }}
            icon={<AiOutlineSend />}
            type="primary"
            size="large"
            onClick={sendMssage}
            loading={loading}
            value={message}
          >
            Send
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default UserMessagePage;
