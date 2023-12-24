import { ColorInput } from "@mantine/core";
import { FC, useContext, useState } from "react";
import Label from "./label";
import { EditorContext } from "..";

type ColorStyleType = {
  label: string;
  attr: string;
};

const ColorStyle: FC<ColorStyleType> = (props) => {
  const editor = useContext(EditorContext);
  const [value, setValue] = useState<string | undefined>();

  const handleAddStyle = (val: string) => {
    editor?.getSelected()?.addStyle(props.attr, val);
  };

  const getStyleComponent = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as
      | string
      | undefined;
    setValue(val);
  };

  editor?.on("style:target", getStyleComponent);
  editor?.on("style:property:update", getStyleComponent);

  return (
    <div>
      <Label value={props.label} clearAttr={props.attr} />
      <ColorInput size="xs" value={value || ""} onChange={handleAddStyle} />
    </div>
  );
};

export default ColorStyle;
