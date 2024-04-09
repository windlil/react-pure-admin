import { useAuth } from "@/hooks/useAuth";
import React, { FC } from "react";

const Auth: FC<{ authCode: string; children: React.ReactElement }> = ({
  authCode,
  children,
}) => {
  const isAuth = useAuth(authCode);
  if (isAuth) return children;
  return null;
};

export default Auth;
