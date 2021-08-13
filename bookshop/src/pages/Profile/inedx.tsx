import React from "react";
import {Avatar, Button, Col, DatePicker, Form, Input, Radio, Row} from "antd";
import moment from "moment";
import {ImageContainer} from "./styles/Profile.styles";
import {UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import authAction from "src/redux/auth/auth.action";
import {RootState} from "src/redux/rootReducer";

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { loading, userData } = useSelector((state: RootState) => state.auth);
  const onFinish = (value: any) => {
    dispatch(
      authAction.updateProfileRequest(
        {
          ...value,
          birthDate: moment(value.birthDate).format("YYYY-MM-DD"),
        },
        // @ts-ignore
        userData.id
      )
    );
  };
  const data = {
    first_name: "Prabhaw",
    last_name: "Soti",
    email: "mail.prabhaw@gmail.com",
    gender: "male",
    phone_number: "9845697677",
    address: "Bharatpur-13,Chitwan,Nepal",
  };
  return (
    <>
      <Row justify="center">
        <Col
          xs={24}
          sm={22}
          md={18}
          lg={16}
          xl={14}
          xxl={12}
          style={{
            background: "#eee",
            padding: "16px 42px",
            margin: "32px 0",
            borderRadius: "10px",
          }}
        >
          <ImageContainer>
            <Avatar shape="square" size={100} icon={<UserOutlined />} />
          </ImageContainer>

          <Form
            name="editProfile"
            form={form}
            layout="vertical"
            initialValues={{
              ...userData,
              // @ts-ignore
              birthDate: moment(userData.birthDate, "YYYY/MM/DD"),
            }}
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

            <Form.Item name="gender" label="Gender">
              <Radio.Group>
                <Radio value="MALE">male</Radio>
                <Radio value="FEMALE">female</Radio>
                <Radio value="OTHER">other</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input disabled={true} />
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
              <DatePicker format="YYYY/MM/DD" style={{ width: "100%" }} />
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

            <Form.Item>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  // width: "100%",
                }}
              >
                <div></div>
                {/* <Button type="primary" danger htmlType="button">
                  Cancle
                </Button> */}
                <Button loading={loading} type="primary" htmlType="submit">
                  Update
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Profile;
