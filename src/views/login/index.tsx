import { FC } from "react";
import LoginForm from "@/components/login-form";

const Login: FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full bg-[#f0f2f5]">
      <LoginForm />
    </div>
  );
};

export default Login;
