import { FC, createElement } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackHomeButton: FC = () => {
  const Navigate = useNavigate();
  const back = () => {
    Navigate("/");
  };
  return createElement(
    Button,
    {
      type: "primary",
      onClick: back,
    },
    "回到首页"
  );
};

export default BackHomeButton;
