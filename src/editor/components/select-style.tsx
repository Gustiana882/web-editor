import { FC, useContext, useState } from "react";
import { EditorContext } from "../";
import { ComboboxData, Select } from "@mantine/core";
import Label from "./label";

type SelectAddStyleType = {
  label: string;
  attr: string;
  data: ComboboxData;
  defaultValue?: string;
};

const SelectAddStyle: FC<SelectAddStyleType> = (props) => {
  const editor = useContext(EditorContext);
  const [active, setActive] = useState<string | undefined>(props.defaultValue);

  const handleAddStyle = (val: string | null) => {
    editor?.getSelected()?.addStyle(props.attr, val);
  };

  const getStyleComponent = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as
      | string
      | undefined;
    setActive(val);
  };

  editor?.on("style:target", getStyleComponent);
  editor?.on("style:property:update", getStyleComponent);

  return (
    <div>
      <Label value={props.label} clearAttr={props.attr} />
      <Select
        size="xs"
        value={active || "none"}
        onChange={handleAddStyle}
        data={props.data}
      />
    </div>
  );
};

export default SelectAddStyle;
