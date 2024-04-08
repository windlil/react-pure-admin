import type { FormRule } from "antd";
import { FC } from "react";
import {
  Button,
  Checkbox,
  Form,
  type FormProps,
  Input,
  notification,
} from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import routes from "@/router/routes";

type FieldType = {
  username?: string;
  password?: string;
  autoLogin?: string;
};

/**
 * 处理登录逻辑
 * @param values
 */

/**
 * 处理表单错误
 * @param errorInfo
 */
const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const usernameRules: FormRule[] = [
  { required: true, message: "请输入用户名！" },
];
const passwordRules: FormRule[] = [{ required: true, message: "请输入密码！" }];

const openNotification = () => {
  notification.success({
    message: "登录成功",
    description:
      "欢迎使用PureAdmin！",
  });
};

const LoginForm: FC = () => {
  const Navigate = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    Navigate(`/${routes![0]!.children![0]!.path}`);
    openNotification()
  };

  return (
    <div
      className={["p-10", "pb-5", "border", "bg-slate-50", "select-none"].join(
        " "
      )}
    >
      <div className="text-center text-2xl mb-8">
        <div className="font-bold mb-1">PureAdmin</div>
        <div className="text-sm text-stone-400">
          一款简单高效的中后台管理系统模板
        </div>
      </div>
      <Form
        name="basic"
        wrapperCol={{ span: 24 }}
        style={{ width: 310 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        size="large"
      >
        <Form.Item<FieldType> name="username" rules={usernameRules}>
          <Input
            placeholder="用户名：admin or user"
            prefix={<UserOutlined />}
          />
        </Form.Item>

        <Form.Item<FieldType> name="password" rules={passwordRules}>
          <Input.Password
            placeholder="密码：123456"
            prefix={<LockOutlined />}
          />
        </Form.Item>
        <Form.Item<FieldType> name="autoLogin" valuePropName="checked">
          <div className="flex w-full justify-between items-center">
            <Checkbox>自动登录</Checkbox>
            <Button type="link">忘记密码</Button>
          </div>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
