import { FC } from "react";
import { Row, Col, Button, Divider } from "antd";
import { useUserStore } from "@/store/user";
import { useAuth } from "@/hooks/useAuth";
import Auth from "@/components/auth";
import { createAuthComponent } from "@/hooks/useCreateAuthComponent";

const ButtonAccess: FC = () => {
  const { role } = useUserStore();
  const AuthButton1 = createAuthComponent(Button, "access:button1");
  const AuthButton2 = createAuthComponent(Button, "access:button2");

  return (
    <div>
      <div className="">
        当前用户拥有的权限：
        <span className="text-blue-400 font-bold mr-4">{role}</span>
      </div>
      <div className="my-2">
        <div>使用方法 useIsAuth 进行按钮控制</div>
        <Row gutter={16} className="mt-3">
          <Col className="gutter-row" span={2}>
            {useAuth("access:button1") && <Button>普通用户</Button>}
          </Col>
          <Col className="gutter-row" span={2}>
            {useAuth("access:button2") && (
              <Button type="primary">管理员</Button>
            )}
          </Col>
          <Col className="gutter-row" span={6}></Col>
        </Row>
      </div>
      <Divider style={{ backgroundColor: "#f2f2f2" }}></Divider>
      <div className="my-2">
        <div>使用权限组件 Auth 进行按钮控制</div>
        <Row gutter={16} className="mt-3">
          <Col className="gutter-row" span={2}>
            <Auth authCode="access:button1">
              <Button>普通用户</Button>
            </Auth>
          </Col>
          <Col className="gutter-row" span={2}>
            <Auth authCode="access:button2">
              <Button type="primary">管理员</Button>
            </Auth>
          </Col>
          <Col className="gutter-row" span={6}></Col>
        </Row>
      </div>
      <Divider style={{ backgroundColor: "#f2f2f2" }}></Divider>
      <div className="my-2">
        <div>使用高阶自定义权限组件 AuthButton 进行按钮控制</div>
        <Row gutter={16} className="mt-3">
          <Col className="gutter-row" span={2}>
            <AuthButton1>普通用户</AuthButton1>
          </Col>
          <Col className="gutter-row" span={2}>
            <AuthButton2 type="primary">管理员</AuthButton2>
          </Col>
          <Col className="gutter-row" span={6}></Col>
        </Row>
      </div>
    </div>
  );
};

export default ButtonAccess;
