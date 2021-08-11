import React, {useState} from "react";
import {AutoComplete, Button, Col, DatePicker, Form, Input, Radio, Row} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import {LogInText} from "@Pages/login/styles/loginpage.style";
import {LockOutlined} from "@ant-design/icons";
import authAction from "@Redux/auth/auth.action";
import {RootState} from "@Redux/rootReducer";
import moment from "moment";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const [autopass, setAutoPass] = useState<string>("");
  const [option, setRendomPass] = useState<{ value: string }[]>([]);
  const loading = useSelector((state: RootState) => state.auth.fetchadminload);
  const onFinish = (value: any) => {
    dispatch(
      authAction.registerRequest(
        { ...value, birthDate: moment(value.birthDate).format("YYYY-MM-DD") },
        history
      )
    );
  };
  const onSelect = (value: string) => {
    setAutoPass(value);
    form.setFieldsValue({ varifypassword: value });
  };

  const onRendomPass = () => {
    const randomstring = [
      { value: Math.random().toString(36).slice(-8) },
      { value: Math.random().toString(36).slice(-8) },
      { value: Math.random().toString(36).slice(-8) },
      { value: Math.random().toString(36).slice(-8) },
      { value: Math.random().toString(36).slice(-8) },
    ];

    setRendomPass(randomstring);
  };

  return (
    <>
      <Row justify="center">
        <Col
          xs={24}
          sm={22}
          md={12}
          lg={10}
          xl={10}
          xxl={12}
          style={{
            background: "#ffff",
            padding: "32px 42px",
            margin: "68px 0",
            borderRadius: "10px",
          }}
        >
          <LogInText>Register</LogInText>

          <Form
            name="registerForm"
            form={form}
            layout="vertical"
            requiredMark={true}
            onFinish={onFinish}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: "Please input first name." },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Last Name"
                  name="lastName"
                  rules={[
                    { required: true, message: "Please input lastname." },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please Select Gender." }]}
            >
              <Radio.Group>
                <Radio value="MALE">male</Radio>
                <Radio value="FEMALE">female</Radio>
                <Radio value="OTHER">other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please input Email.",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Birthdate"
              rules={[
                {
                  required: true,
                  message: "Please Select Birthdate.",
                },
              ]}
              name="birthDate"
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your Address." },
              ]}
            >
              <Input />
            </Form.Item>
            {/* --------------------------------- */}

            <Form.Item
              name="password"
              label="Password"
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
              hasFeedback
            >
              <AutoComplete
                options={option}
                style={{ width: "100%" }}
                onSelect={onSelect}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="New Password"
                  onFocus={onRendomPass}
                  onChange={onRendomPass}
                />
              </AutoComplete>
            </Form.Item>

            <Form.Item
              name="varifypassword"
              label="Confirm Password"
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
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                value={autopass}
              />
            </Form.Item>

            {/* ---------------------------------------- */}
            <Form.Item>
              <Button loading={loading} type="primary" block htmlType="submit">
                Register
              </Button>
              <div style={{ marginTop: "4px" }}>
                {/* <span style={{ color: "black", marginRight: "5px" }}> Or </span> */}
                Already have an Account?
                <Link to="/login"> Click here </Link>to SignIn
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
