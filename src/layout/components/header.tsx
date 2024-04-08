import { Layout, Avatar, Divider } from "antd";
import { TranslationOutlined, GithubFilled } from "@ant-design/icons";
import type { FC } from "react";

const Header: FC = () => {
  const { Header } = Layout;
  return (
    <Header
      style={{ backgroundColor: "#fff", padding: 0 }}
      className="flex select-none"
    >
      <div className="w-5/6"></div>
      <div className="flex-1 flex">
        <div className="mr-4">
          <TranslationOutlined className="text-xl mr-6 text-gray-500" />
          <GithubFilled className="text-xl mr-6 text-gray-500" />
          <Divider type="vertical" style={{backgroundColor: '#e4e4e4'}} />
        </div>
        <div className="w-[100px] h-full flex items-center overflow-hidden">
          <Avatar
            size={"small"}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            className="cursor-pointer"
            style={{ backgroundColor: "#ebebeb" }}
          />
          <span className="ml-2">管理员</span>
        </div>
      </div>
    </Header>
  );
};

export default Header;
