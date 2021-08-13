import {Button, Col, Input, Row, Typography} from "antd";
import React, {useEffect, useState} from "react";
import {AiOutlineSend} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "src/redux/rootReducer";
import customerAction from "src/redux/Customer/customer.action";
import messageAction from "src/redux/messages/message.action";
import {NavLink, useParams} from "react-router-dom";
import {GridContainers} from "src/styles/globalStyle";

const { Title } = Typography;

const AdminMessagePage: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [message, setMessgae] = useState<string>("");
  const { customer } = useSelector((state: RootState) => state.customerReducer);
  const { loading, messages, clearField } = useSelector(
    (state: RootState) => state.messageReducer
  );
  // @ts-ignore
  const { id } = params;

  const sendMssage = () => {
    if (message) {
      dispatch(
        messageAction.sendMessageReq({
          message: message,
          sender: "ADMIN",
          userId: id,
        })
      );
    }
  };
  useEffect(() => {
    setMessgae("");
  }, [clearField]);
  useEffect(() => {
    dispatch(customerAction.fetchAllUserReq());
  }, [id]);

  useEffect(() => {
    if (
      customer.some((el: any) => {
        return el.id === Number(id);
      })
    ) {
      setShow(true);
      dispatch(messageAction.fetchMessages(id));
    } else {
      setShow(false);
    }
  }, [id, customer]);

  return (
    <>
      <div className="mt-2"></div>
      <Row justify="center">
        <Col
          xs={8}
          md={6}
          lg={6}
          xl={8}
          style={{
            height: "90vh",
            background: "#ffff",
            overflowY: "scroll",
          }}
        >
          <Title
            style={{
              textAlign: "center",
              fontSize: "18px",
              padding: "20px 12px 20px 0px",
              background: "#003153",
              color: "#fff",
            }}
          >
            Customers
          </Title>
          <div className="list-group ">
            {customer.map((item: any, i: number) => (
              <NavLink
                key={item.id}
                to={`/admin-message/${item.id}`}
                className="list-group-item border-0 hover-list"
                activeStyle={{ display: "block", background: "#eee" }}
                onClick={() => {
                  setUsername(`${item.firstName} ${item.lastName}`);
                }}
              >
                <li
                  className="list-group-item border-0  "
                  style={{ color: "#000" }}
                >
                  {item.firstName}&nbsp;{item.lastName}
                  <br></br>
                  <small>{item.email}</small>
                </li>
              </NavLink>
            ))}
          </div>
        </Col>
        <Col
          xs={16}
          md={18}
          lg={16}
          xl={12}
          style={{
            background: "#EEEE",

            height: "90vh",
            position: "relative",
          }}
        >
          {show ? (
            <>
              <div className="message-box">
                {messages.map((item: any, i: number) => (
                  <div
                    key={item.id}
                    className={`${
                      item.sender === "ADMIN" && "userMessage"
                    } adminMessage`}
                  >
                    <Title style={{ fontSize: "12px" }}>
                      {item.sender === "ADMIN"
                        ? "Admin"
                        : username
                        ? username
                        : "Customer"}
                    </Title>
                    <p className="message">{item.message} </p>
                  </div>
                ))}
              </div>
              <Input
                style={{
                  position: "absolute",
                  bottom: "0",
                  paddingRight: "100px",
                }}
                placeholder="input search text"
                size="large"
                value={message}
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
              >
                Send
              </Button>
            </>
          ) : (
            <GridContainers>No User Is Selected!</GridContainers>
          )}
        </Col>
      </Row>
    </>
  );
};

export default AdminMessagePage;
