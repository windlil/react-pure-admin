import { type FC } from "react";
import { Layout } from "antd";
import LayoutSider from "../components/sider";
import { Outlet } from "react-router-dom";

const BasicLayout: FC = () => {
  const { Header, Content, Footer } = Layout;

  const layoutStyle = {
    width: "100%",
    height: "100%",
  };

  return (
    <Layout style={layoutStyle}>
      <LayoutSider />
      <Layout>
        <Header>header</Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>footer</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
