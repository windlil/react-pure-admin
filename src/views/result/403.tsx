import { FC } from "react";
import { Result } from "antd";
import BackHomeButton from "./BackHomeButton";

const Page403: FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<BackHomeButton />}
    />
  );
};

export default Page403;
