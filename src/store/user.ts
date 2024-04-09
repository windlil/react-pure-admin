import { createStore } from "./utils";

interface User {
  authList?: string[];
  token?: string
  role?: string
}

export const useUserStore = createStore((): User => {
  return {
    authList: ['dashboard:add'],
    token: '',
    role: ''
  };
});

/**
 * 设置用户基本状态
 * @param newUserState 
 * @returns 
 */
export const setUserState = (newUserState: User) =>
  useUserStore.setState(() => ({ ...newUserState }));
