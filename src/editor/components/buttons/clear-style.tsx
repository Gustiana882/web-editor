import { ActionIcon } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { FC, useContext, useState } from "react";
import { EditorContext } from "../..";

type ButtonClearStyleType = {
  attr: string;
}

const ButtonClearStyle: FC<ButtonClearStyleType> = (props) => {
  const [active, setActive] = useState<string | undefined>();
  const editor = useContext(EditorContext);

  const getStyleAttr = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as string | undefined;
    setActive(val);
  };

  const handleClearStyle = () => {
    editor?.getSelected()?.removeStyle(props.attr);
  }

  editor?.on("component:selected", getStyleAttr);
  editor?.on("component:styleUpdate", getStyleAttr);

  if (active) {
    return (
      <ActionIcon variant="subtle" size={16} onClick={handleClearStyle}>
        <IconX/>
      </ActionIcon>
    );
  }
  return <></>
};

export default ButtonClearStyle;
