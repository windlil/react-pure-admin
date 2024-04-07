import { createElement, lazy, type FunctionComponent } from "react";
import { type FullRouteObject } from "@/types/route";

function lazyCreateElement(src: () => Promise<{ default: FunctionComponent }>) {
  return createElement(lazy(src));
}

const routes: FullRouteObject[] = [
  {
    path: "/",
    element: lazyCreateElement(() => import("@/App")),
    children: [
      {
        path: "dashboard",
        title: "分析页",
        element: lazyCreateElement(() => import('@/views/dashboard/index'))
      },
      {
        path: "access",
        title: "权限模块",
        children: [
          {
            path: '/access/admin',
            title: '管理员',
            element: lazyCreateElement(() => import('@/views/access/admin'))
          },
          {
            path: '/access/user',
            title: '普通用户',
            element: lazyCreateElement(() => import('@/views/access/user'))
          }
        ]
      },
    ],
  },
];

export default routes;
