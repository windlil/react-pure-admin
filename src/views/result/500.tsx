import { FC } from "react";
import { Result } from "antd";
import BackHomeButton from "./BackHomeButton";

const Page500: FC = () => {
  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<BackHomeButton />}
    />
  );
};

export default Page500;
