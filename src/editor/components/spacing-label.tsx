import classes from "./sidebar.module.css";
import { CSSProperties, FC, useContext, useState } from "react";
import { EditorContext } from "..";
import { Box } from "@mantine/core";

type SpacingLabelType = {
  attr: string;
  style: CSSProperties;
  pos: "x" | "y";
};

const SpacingLabel: FC<SpacingLabelType> = (props) => {
  const editor = useContext(EditorContext);
  const [value, setValue] = useState<string | undefined>("0px");

  const getStyleComponent = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as
      | string
      | undefined;
    setValue(val);
  };

  editor?.on("style:target", getStyleComponent);
  editor?.on("style:property:update", getStyleComponent);

  return (
    <Box
      className={
        props.pos == "x" ? classes.spacing_label_x : classes.spacing_label_y
      }
      style={props.style}
    >
      {value || "0px"}
    </Box>
  );
};

export default SpacingLabel;
