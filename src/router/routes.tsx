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
        index: true,
        path: "dashboard",
        title: "分析页",
      },
      {
        path: "access",
        title: "权限模块",
      },
    ],
  },
];

export default routes;
