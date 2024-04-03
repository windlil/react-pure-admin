import type { IndexRouteObject, NonIndexRouteObject } from "react-router-dom";

interface _IndexRouteObject extends IndexRouteObject {
  title?: string
}

interface _NonIndexRouteObject extends NonIndexRouteObject {
  title?: string
  children?: FullRouteObject[]
}

type FullRouteObject = _IndexRouteObject |  _NonIndexRouteObject