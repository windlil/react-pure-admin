import { FC } from "react";
import { Layout, Menu, type MenuProps } from "antd";
import { BASIC_CONFIG } from "@/config/base";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const LayoutSider: FC = () => {
  const { Sider } = Layout;
  const items: MenuItem[] = [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("User", "sub1", "", [
      getItem("Tom", "3"),
      getItem("Bill", "4"),
      getItem("Alex", "5"),
    ]),
    getItem("Team", "sub2", "", [
      getItem("Team 1", "6"),
      getItem("Team 2", "8"),
    ]),
    getItem("Files", "9"),
  ];

  /**
   * event: click
   * @param param0 MenuItem唯一值
   */
  const handleMenuItemClick: MenuProps['onClick'] = ({ key }) => {
    console.log(key)
  };

  return (
    <Sider>
      <div className="flex ml-6 align-center items-center text-white w-full h-20 text-2xl font-bold ">
        {BASIC_CONFIG.TITLE}
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={handleMenuItemClick}
      />
    </Sider>
  );
};

export default LayoutSider;
