/*
 * @Author: zzs 2650317325@qq.com
 * @Date: 2023-12-15 11:28:00
 * @LastEditors: zzs 2650317325@qq.com
 * @LastEditTime: 2023-12-18 14:34:09
 * @FilePath: \my-react-app\src\pages\home\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Form, Input, Button, Checkbox, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.css";
import api from "../../api/request";
import { useAuth } from "../../store/AuthContext";
import React, { useEffect } from "react";
const LoginForm = () => {
  const { dispatch, state } = useAuth();
  const { token } = state;
  useEffect(() => {
    // Log the token after the component re-renders due to state update
    console.log(token);
  }, [token]);
  const onFinish = async (values) => {
    try {
      const response = await api.post("/user/login", values);
      if (response.data.code === 200) {
        dispatch({ type: "SET_TOKEN", payload: response.data.data.token });
        message.success(response.data.msg);
      } else {
        message.success(response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="container">
      <div className="login-farm">
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userAccount"
            rules={[
              { required: true, message: "Please input your user account!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="User Account"
            />
          </Form.Item>
          <Form.Item
            name="userPwd" // Updated the name to userPwd
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="User Password" // Updated the placeholder
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <a href="/">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
