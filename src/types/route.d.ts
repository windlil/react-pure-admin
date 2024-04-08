import type { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";

interface _IndexRouteObject extends IndexRouteObject {
  title?: string
  icon?: any
}

interface _NonIndexRouteObject extends NonIndexRouteObject {
  title?: string
  children?: FullRouteObject[]
  icon?: any
}

type FullRouteObject = _IndexRouteObject |  _NonIndexRouteObject