import { ConfigProvider } from "antd";
import BasicLayout from "@/layout/basic-layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import routes from "./router/routes";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const firstAppChildrenPath = routes[0].children![0].path;

  useEffect(() => {
    if (pathname === "/") navigate(firstAppChildrenPath as string);
  }, [pathname, navigate, firstAppChildrenPath]);
  return (
    <>
      <ConfigProvider>
        <BasicLayout />
      </ConfigProvider>
    </>
  );
};

export default App;
