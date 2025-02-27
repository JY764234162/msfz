import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, message } from "antd";
import "./index.css";
import account from "../../constant/account";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const { username, password } = values;
    const hasAccount = account.find((item) => {
      return item.username === username;
    });
    const randomTime = Math.random() * 300 + 300;
    setTimeout(() => {
      setLoading(false);
      if (!hasAccount) {
        message.error("用户名错误，请联系管理员申请账号");
      }
      if (hasAccount?.password === password) {
        message.success("登录成功");
        sessionStorage.setItem("token", window.uuid);
        navigate("/");
        setTimeout(async () => {
          message.info("登陆过期，请重新登录");
          sessionStorage.removeItem("token");
          navigate("/login");
        }, 2 * 60 * 60 * 1000);
      }
    }, randomTime);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>面试题库</h2>
          <p>专注技术面试题整理与分享</p>
        </div>
        <Form
          form={form}
          className="login-form"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="用户名" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password placeholder="密码" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
