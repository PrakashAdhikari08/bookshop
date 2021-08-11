import React from "react";

import {Alert, Button, Form, Input, Modal} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import authAction from "@Redux/auth/auth.action";
import {RootState} from "@Redux/rootReducer";
import {LogInText} from "@Pages/login/styles/loginpage.style";
import ModalAction from "@Redux/LoginModal/LoginModal.action";

const LogInModal: React.FC = () => {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.errorMessage);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const modalOpen = useSelector(
    (state: RootState) => state.loginModal.openmodal
  );
  const onFinish = (values: any) => {
    dispatch(authAction.authLoginRequest(values));
  };

  const closeModal = () => {
    dispatch(ModalAction.modalOpenRequest(false));
  };

  return (
    <Modal visible={modalOpen} footer={false} onCancel={closeModal}>
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
        name="loginformModal"
        //   initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Email",
            },
            {
              type: "email",
              message: "Email is Invalid.",
            },
          ]}
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
            loading={loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default LogInModal;
