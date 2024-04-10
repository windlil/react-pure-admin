import { Layout, Avatar, Divider, Dropdown } from "antd";
import {
  TranslationOutlined,
  GithubFilled,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { FC } from "react";

import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const Navigate = useNavigate()
  const { Header } = Layout;

  const logOut = () => {
    Navigate('/login')
  }

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={() => Navigate('/account/base')}>个人中心</span>,
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: <a onClick={logOut}>退出登录</a>,
      icon: <PoweroffOutlined />,
    },
  ];

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
          <Divider type="vertical" style={{ backgroundColor: "#e4e4e4" }} />
        </div>

        <Dropdown menu={{ items }} className="cursor-pointer">
          <div className="flex items-center">
            <Avatar
              size={"small"}
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              style={{ backgroundColor: "#ebebeb" }}
            />
            <span className="ml-2">管理员</span>
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Header;
