import { ConfigProvider } from "antd";
import BasicLayout from "@/layout/basic-layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import routes from "./router/routes";
import { Spin } from "antd";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const firstAppChildrenPath = routes[0].children![0].path;
  const [isShowLoading, setIsShowLoading] = useState(false);

  useEffect(() => {
    if (pathname === "/") navigate(firstAppChildrenPath as string);
  }, [pathname, navigate, firstAppChildrenPath]);

  useEffect(() => {
    setTimeout(() => {
      setIsShowLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <ConfigProvider>
        {isShowLoading ? (
          <Spin
            fullscreen
            style={{ backgroundColor: "#515151" }}
            size="large"
            tip="Loading"
          ></Spin>
        ) : null}
        <div className="w-full h-full p-5 bg-[#e0e4e7]">
          <BasicLayout />
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
