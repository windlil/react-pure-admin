import { type FC } from "react";
import { Layout } from "antd";
import LayoutSider from "../components/sider";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const BasicLayout: FC = () => {
  const { Content } = Layout;

  const layoutStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  };

  return (
    <Layout style={layoutStyle}>
      <LayoutSider />
      <Layout>
        <Header />
        <Content className="p-5 bg-white">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
