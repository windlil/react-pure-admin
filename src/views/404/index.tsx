import { FC } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const Navigate = useNavigate()

  const back = () => Navigate('/')

  return (
    <Result
      status="404"
      title="404"
      subTitle="该页面不存在，请联系管理员"
      extra={<Button type="primary" onClick={back}>返回首页</Button>}
    />
  );
};

export default NotFound;
