import { createStore } from "./utils"

type UserInfo = {
  username: string | undefined
  password: string | undefined
}

const useLoginStore = createStore((): UserInfo => ({
  username: undefined,
  password: undefined
}))

export const updateUserInfo = (userinfo: UserInfo) => useLoginStore.setState(() => ({
  ...userinfo
}))

export default useLoginStore