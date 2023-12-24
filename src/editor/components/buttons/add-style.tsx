import { FC, ReactNode, useContext, useState } from "react";
import { EditorContext } from "../..";
import { Button } from "@mantine/core";

type ButtonAddStyleType = {
  icon: ReactNode;
  value: string;
  attr: string;
};

const ButtonAddStyle: FC<ButtonAddStyleType> = (props) => {
  const editor = useContext(EditorContext);
  const [active, setActive] = useState<string | undefined>();

  const handleAddStyle = () => {
    editor?.getSelected()?.addStyle(props.attr, props.value);
  };

  const getStyleComponent = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as
      | string
      | undefined;
    setActive(val);
  };

  editor?.on("component:selected", getStyleComponent);
  editor?.on("component:styleUpdate", getStyleComponent);

  return (
    <Button
      variant={active == props.value ? "filled" : "default"}
      size="xs"
      style={{ flex: 1 }}
      onClick={handleAddStyle}
    >
      {props.icon}
    </Button>
  );
};

export default ButtonAddStyle;
