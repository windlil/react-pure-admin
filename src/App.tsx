import { ConfigProvider } from "antd";
import BasicLayout from "@/layout/basic-layout";

const App = () => {
  return (
    <>
      <ConfigProvider>
        <BasicLayout />
      </ConfigProvider>
    </>
  );
};

export default App;
