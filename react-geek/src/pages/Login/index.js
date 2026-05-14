import "./index.scss";
import { Card, Form, Input, Button, message } from "antd";
import logo from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { fetchToken } from "@/store/modules/userStore";
import { useNavigate } from "react-router-dom";

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
   * 表单默认值 - 测试用
   */
  const initialValues = {
    mobile: "13800000002",
    code: "246810",
  };

  /**
   * 登录逻辑:
   *   1. 收集表单数据 + 触发登录请求
   *   2. 跳转到首页
   *   3. 提示
   */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    // 1. 收集数据 + 触发登录请求
    await dispatch(fetchToken(values));
    // 2. 跳转到首页
    navigate("/");
    // 3. 提示
    message.success("Login successful!");
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger="onBlur"
          onFinish={onFinish}
          initialValues={initialValues}
        >
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
