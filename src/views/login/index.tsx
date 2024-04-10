import { FC } from "react";
import LoginForm from "@/components/login-form";

const Login: FC = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to top, #eaeaea 0%, #e3ebff 100%)",
      }}
      className="flex justify-center items-center w-full h-full"
    >
      <LoginForm />
    </div>
  );
};

export default Login;
