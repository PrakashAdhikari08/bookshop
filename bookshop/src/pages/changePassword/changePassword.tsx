import React, {useEffect} from "react";
import passAction from "src/redux/changePassword/password.action";
import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Form, Input, Row, Typography} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {RootState} from "src/redux/rootReducer";

const { Title } = Typography;
const ChangePassword: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  // @ts-ignore
  const { id } = useSelector((state: RootState) => state.auth.userData);
  const { resetForm, loading } = useSelector(
    (state: RootState) => state.passReducer
  );
  const onFinish = (value: any) => {
    dispatch(passAction.changePassRequest({ ...value, userId: id }));
  };

  useEffect(() => {
    if (resetForm) {
      form.resetFields();
    }
  }, [resetForm]);

  return (
    <Row justify="center">
      <Col
        xs={22}
        sm={18}
        md={16}
        lg={13}
        xl={12}
        xxl={8}
        style={{
          background: "#eee",
          padding: "30px",
          marginTop: " 100px",
          borderRadius: "10px",
        }}
      >
        <Title level={4} style={{ textAlign: "center" }}>
          Change Password
        </Title>
        <Form name="changePassword" form={form} onFinish={onFinish}>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your New Password!",
              },
              {
                pattern: new RegExp(
                  "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z@$&!\\d]{8,32}$"
                ),

                message: "Password must be 8 character long and One Number!",
              },
              // { validator: validatePassword },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="New Password"
            />
          </Form.Item>
          <Form.Item
            name="varifypassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },

              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Password not match!");
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item
            name="oldPassword"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              name="password"
              placeholder="Old Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              className="login-form-button"
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default ChangePassword;
