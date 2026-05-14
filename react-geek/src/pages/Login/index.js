import "./index.scss";
import { Card, Form, Input, Button } from "antd";
import logo from "@/assets/logo.png";

const Login = () => {
  /**
   * 手机号校验规则
   */
  const mobileRules = [
    { required: true, message: "Please enter mobile number" },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: "Please enter a valid mobile number",
    },
  ];

  /**
   * 验证码校验规则
   */
  const codeRules = [
    { required: true, message: "Please enter verification code" },
  ];

  /**
   * 收集表单数据
   */
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item name="mobile" rules={mobileRules}>
            <Input size="large" placeholder="Please enter your mobile number" />
          </Form.Item>
          <Form.Item name="code" rules={codeRules}>
            <Input size="large" placeholder="Please enter verification code" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
