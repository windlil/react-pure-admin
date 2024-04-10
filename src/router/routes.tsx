import { createElement, lazy, type FunctionComponent } from "react";
import { type FullRouteObject } from "@/types/route";
import { Suspense } from "react";
import {
  BarChartOutlined,
  ApartmentOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";

function lazyCreateElement(src: () => Promise<{ default: FunctionComponent }>) {
  return <Suspense>{createElement(lazy(src))}</Suspense>;
}

const routes: FullRouteObject[] = [
  {
    path: "/",
    element: lazyCreateElement(() => import("@/App")),
    children: [
      {
        path: "dashboard",
        title: "分析页",
        icon: <BarChartOutlined />,
        element: lazyCreateElement(() => import("@/views/dashboard/index")),
      },
      {
        path: "access",
        title: "权限示例",
        icon: <ApartmentOutlined />,

        children: [
          {
            path: "/access/button",
            title: "按钮权限",
            element: lazyCreateElement(() => import("@/views/access/button")),
          },
        ],
      },
      {
        path: "list",
        title: "列表页",
        icon: <TableOutlined />,
        children: [
          {
            path: "/list/base-list",
            title: "基本列表",
            element: lazyCreateElement(() => import("@/views/list/basic-list")),
          },
          {
            path: "/list/card-list",
            title: "卡片列表",
            element: lazyCreateElement(() => import("@/views/list/card-list")),
          },
        ],
      },
      {
        path: 'result',
        title: '异常页',
        children: [
          {
            path: '/result/403',
            title: '403',
            element: lazyCreateElement(() => import('@/views/result/403'))
          },
          {
            path: '/result/404',
            title: '404',
            element: lazyCreateElement(() => import('@/views/result/404'))
          },
          {
            path: '/result/500',
            title: '500',
            element: lazyCreateElement(() => import('@/views/result/500'))
          }
        ]
      },
      {
        path: "account",
        title: "个人页",
        icon: <UserOutlined />,
        children: [
          {
            path: "/account/base",
            title: "个人中心",
            element: lazyCreateElement(() => import("@/views/account/base")),
          },
          {
            path: "/account/setting",
            title: "个人中心",
            element: lazyCreateElement(() => import("@/views/account/setting")),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: lazyCreateElement(() => import("@/views/login/index")),
  },
  {
    path: "*",
    element: lazyCreateElement(() => import("@/views/404/index")),
  },
];

export default routes;
