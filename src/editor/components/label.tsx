import { Flex, Text } from "@mantine/core";
import ClearStyle from "./buttons/clear-style";
import classes from "./sidebar.module.css";
import { FC } from "react";

type LabelType = {
  value: string;
  clearAttr: string;
}

const Label: FC<LabelType> = (props) => {
  return (
    <Flex align="center" gap={1}>
      <Text className={classes.lable}>{props.value}</Text>
      <ClearStyle attr={props.clearAttr} />
    </Flex>
  );
};

export default Label;
