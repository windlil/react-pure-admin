import { FC } from "react";
import { Result } from "antd";
import BackHomeButton from "./BackHomeButton";

const Page404: FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<BackHomeButton />}
    />
  );
};

export default Page404;
