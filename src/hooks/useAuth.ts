import { useUserStore } from "@/store/user";
import { useMemo } from "react";

export function useAuth(authcode: string): boolean {
  const currentUser = useUserStore();
  const { authList = [] } = currentUser;
  const auth = useMemo(() => {
    return authList.includes(authcode);
  }, [authcode, currentUser.authList]);
  return auth;
}
