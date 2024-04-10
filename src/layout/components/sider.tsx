import { FC, useMemo } from "react";
import { Layout, Menu, type MenuProps } from "antd";
import { BASIC_CONFIG } from "@/config/base";
import routes from "@/router/routes";
import { FullRouteObject } from "@/types/route";
import { useLocation, useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

/**
 * 用于映射路由表为菜单的方法
 * @param routes
 * @returns
 */
const setRouteList = (routes: FullRouteObject[]): MenuItem[] => {
  return routes.map((c) => {
    return {
      key: c.path?.startsWith("/") ? c.path : `/${c.path}`,
      label: c.title,
      children: c.children ? setRouteList(c.children) : null,
      icon: c.icon ?? null,
    };
  });
};

/**
 * 菜单列表
 */
const routeList: MenuItem[] = setRouteList(
  routes[0].children as FullRouteObject[]
);

/**
 * 获取当前页面展开项ID
 * @param path 当前页面地址
 * @returns
 */
const getCurrentMenuOpenKey = (path: string) => {
  const pathArr = path.split("/").splice(1);
  if (pathArr.length >= 2) {
    return ["/", `/${pathArr[0]}`];
  } else {
    return ["/"];
  }
};

const LayoutSider: FC = () => {
  const { Sider } = Layout;
  const Navigate = useNavigate();
  const Location = useLocation();

  let { pathname } = Location;

  const getPathName = () => {
    return pathname === "/" ? routeList[0]?.key?.toString() ?? "" : pathname;
  };

  const currentSelectedKey = useMemo(() => {
    console.log(getPathName(), "刷新了");
    return getPathName();
  }, [pathname]);
  /**
   * 点击菜单的每一项 跳转到对应页
   * @param param0 MenuItem唯一值
   */
  const handleMenuItemClick: MenuProps["onClick"] = ({ key }) => {
    Navigate(key);
  };

  return (
    <Sider style={{ backgroundColor: "#fff", userSelect: "none" }}>
      <div className="flex ml-6 align-center items-center text-[#64affa] w-full h-20 text-2xl font-bold ">
        {BASIC_CONFIG.TITLE}
      </div>
      <Menu
        defaultOpenKeys={getCurrentMenuOpenKey(pathname)}
        selectedKeys={[currentSelectedKey]}
        mode="inline"
        items={routeList}
        onClick={handleMenuItemClick}
      />
    </Sider>
  );
};

export default LayoutSider;
