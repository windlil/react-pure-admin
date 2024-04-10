import { useEffect, useState, type FC } from "react";
import { Layout } from "antd";
import LayoutSider from "../components/sider";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import { Spin } from 'antd'

const BasicLayout: FC = () => {
  const { Content } = Layout;
  const [isShowLoading, setIsShowLoading] = useState(true)

  const layoutStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    overflow: "hidden",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false)
    }, 1000)
  }, [])
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
      <Layout style={layoutStyle}>
        <LayoutSider />
        <Layout>
          <Header />
          <Content className="p-4 bg-[#f7fafc]">
            <div className="bg-white h-full p-4 rounded-md">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default BasicLayout;
