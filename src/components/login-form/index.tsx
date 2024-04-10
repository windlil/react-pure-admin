import type { FormRule } from "antd";
import { FC, useState } from "react";
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
import { setUserState } from "@/store/user";
import { Spin } from "antd";

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

const openNotification = (type: "success" | "error") => {
  const message = type === "success" ? "登录成功" : "登录失败";
  const description =
    type === "success" ? "欢迎使用本系统" : "请重新检查账号或密码是否正确！";
  notification[type]({
    message,
    description,
  });
};

const usernameList = ["user", "admin"];
const adminAuthList = ["access:button1", "access:button2"];
const userAuthList = ["access:button1"];
const authMap = {
  user: userAuthList,
  admin: adminAuthList,
};

const LoginForm: FC = () => {
  const Navigate = useNavigate();
  const [isShowLoading, setIsShowLoading] = useState(false);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    const { username, password } = values;
    if (usernameList.includes(username as string) && password === "123456") {
      const newUserState = {
        token: "Bearer 123456",
        authList: authMap[username as "admin" | "user"],
        role: username?.toUpperCase()
      };
      setIsShowLoading(true);
      setTimeout(() => {
        setUserState(newUserState);
        Navigate(`/${routes![0]!.children![0]!.path}`);
        openNotification("success");
      }, 1500);
    } else {
      openNotification("error");
    }
  };

  return (
    <>
      {isShowLoading ? (
        <Spin
          fullscreen
          style={{ backgroundColor: "#fff" }}
          size="large"
          tip="正在加载资源"
        ></Spin>
      ) : null}
      <div
        className={[
          "p-10",
          "pb-5",
          "border",
          "bg-slate-50",
          "select-none",
          "rounded-xl",
          "shadow-sm"
        ].join(" ")}
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
              <Checkbox>记住密码</Checkbox>
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
    </>
  );
};

export default LoginForm;
