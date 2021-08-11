import React from "react";
import {Button, Col, Form, Input, Row} from "antd";
import {ArrowLeftOutlined, MailOutlined} from "@ant-design/icons";

import {LogInText} from "@Pages/login/styles/loginpage.style";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Back = styled.div`
  display: inline-block;
  padding: 4px 6px;
  font-size: 14px;

  border-radius: 10px;
  cursor: pointer;
  color: red;
  &:hover {
    background-color: #eeee;
  }
  .back-arrow {
    font-size: 18px;
  }
`;

const ForgetPasswordForm: React.FC = () => {
  const onFinish = (values: any) => {};
  return (
    <Row justify="center">
      <Col
        xs={22}
        sm={14}
        md={12}
        lg={10}
        xl={8}
        xxl={6}
        style={{
          background: "#ffff",
          padding: "15px 30px",
          borderRadius: "10px",
        }}
      >
        <Link to="/login">
          <Back>
            <ArrowLeftOutlined className="back-arrow" />
            &nbsp; Cancle
          </Back>
        </Link>
        <div style={{ marginTop: "15px" }}></div>
        <LogInText>Reset Password</LogInText>

        <Form
          name="loginform"
          //   initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email Address"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              block
              size="large"
              htmlType="submit"
              className="login-form-button"
              //   loading={loading}
            >
              Send Verification Link
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ForgetPasswordForm;
