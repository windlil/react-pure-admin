import React, { createElement } from "react";
import { useAuth } from "./useAuth";

/**
 * 传入等待被限权的组件
 * @param Component
 * @param authcode
 * @returns
 */
export function createAuthComponent(
  Component: React.FunctionComponent,
  authcode: string
) {
  return function useAuthComponent(props: any) {
    return useAuth(authcode) ? createElement(Component, props) : null;
  };
}
