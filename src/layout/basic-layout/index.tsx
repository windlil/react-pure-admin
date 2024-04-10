import { useEffect, useState, type FC } from "react";
import { Layout } from "antd";
import LayoutSider from "../components/sider";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Spin } from "antd";

const BasicLayout: FC = () => {
  const { Content } = Layout;
  const [isShowLoading, setIsShowLoading] = useState(true);

  const layoutStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isShowLoading ? (
        <Spin
          fullscreen
          style={{ backgroundColor: "#ffffff" }}
          size="large"
          tip="正在加载资源"
        ></Spin>
      ) : null}
      <Layout style={layoutStyle} className="shadow-md">
        <LayoutSider />
        <Layout>
          <Header />
          <Content className="p-4 bg-[#f5fcfc] overflow-y-scroll scrollbar">
            <div className="h-full">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BasicLayout;
