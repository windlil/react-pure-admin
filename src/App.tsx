import { ConfigProvider } from "antd";
import BasicLayout from "@/layout/basic-layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import routes from "./router/routes";

import { useUserStore } from "./store/user";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const firstAppChildrenPath = routes[0].children![0].path as string;

  const userStore = useUserStore();
  const { token } = userStore;

  useEffect(() => {
    // token不存在跳转到登录页面
    // if (!token) {
    //   return navigate("/login");
    // }
    // 重定向
    if (pathname === "/") navigate(firstAppChildrenPath);
  }, [pathname, navigate, firstAppChildrenPath, token]);

  return (
    <>
      <ConfigProvider>
        <div
          className="w-full h-full p-5 "
          style={{
            backgroundImage:
              "linear-gradient(to top, #eaeaea 0%, #e3ebff 100%)",
          }}
        >
          <BasicLayout />
        </div>
      </ConfigProvider>
    </>
  );
};

export default App;
