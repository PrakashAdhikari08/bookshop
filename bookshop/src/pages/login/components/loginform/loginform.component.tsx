import React from "react";
import {Alert, Button, Col, Form, Input, Row} from "antd";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import authAction from "@Redux/auth/auth.action";
import {RootState} from "@Redux/rootReducer";
import {LogInText} from "@Pages/login/styles/loginpage.style";

const LoginForm: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.errorMessage);

  const onFinish = (values: any) => {
    dispatch(authAction.authLoginRequest(values, history));
  };
  return (
    <Row justify="center">
      <Col
        xs={22}
        sm={14}
        md={12}
        lg={10}
        xl={8}
        xxl={6}
        style={{ background: "#ffff", padding: "30px", borderRadius: "10px" }}
      >
        <LogInText>LOGIN</LogInText>
        {error && (
          <Alert
            style={{ marginBottom: "15px" }}
            message={error}
            type="error"
            showIcon
          />
        )}

        <Form
          name="loginform"
          //   initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Email" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div style={{ marginTop: "4px" }}>
              <span style={{ color: "black", marginRight: "5px" }}> Or </span>
              <Link to="/register">register your Account!</Link>
              <Link className="login-form-forgot" to="/forget-password">
                Forgot password
              </Link>
            </div>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginForm;
