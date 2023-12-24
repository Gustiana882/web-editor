import { Flex, NumberInput, Select } from "@mantine/core";
import { FC, useContext, useState } from "react";
import { EditorContext } from "..";
import Label from "./label";

type InputStyleType = {
  label: string;
  attr: string;
  width?: string;
};

const InputStyle: FC<InputStyleType> = (props) => {
  const editor = useContext(EditorContext);
  const [inputValue, setInputValue] = useState<string | number>("");
  const [selectValue, setSelectValue] = useState<string>("px");

  const handleAddStyle = (n: string | number, d: string) => {
    editor?.getSelected()?.addStyle(props.attr, `${n}${d}`);
  };

  const getStyleComponent = () => {
    const val = editor?.getSelected()?.getStyle()[props.attr] as
      | string
      | undefined;
    if (val) {
      setInputValue(val.replace(/[^0-9.]/g, ""));
      setSelectValue(val.replace(/\d+/g, ""));
    } else {
      setInputValue("");
      setSelectValue("px");
    }
  };

  editor?.on("style:target", getStyleComponent);
  editor?.on("style:property:update", getStyleComponent);

  return (
    <div>
      <Label value={props.label} clearAttr={props.attr} />
      <Flex>
        <NumberInput
          size="xs"
          value={inputValue}
          onChange={setInputValue}
          onBlur={() => handleAddStyle(inputValue, selectValue)}
          onKeyUp={(event) => {
            if (event.key == "Enter") handleAddStyle(inputValue, selectValue);
          }}
          styles={{
            input: {
              width: props.width,
              padding: "0px 10px",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
            section: {
              display: "none",
            },
          }}
        />
        <Select
          w={85}
          size="xs"
          value={selectValue}
          withCheckIcon={false}
          allowDeselect={false}
          onChange={(val) => {
            if (val) {
              setSelectValue(val);
              handleAddStyle(inputValue, val);
            }
          }}
          data={["px", "%", "em", "rem", "vh", "vw"]}
          styles={{
            root: {
              maxWidth: 50,
            },
            input: {
              paddingRight: 16,
              borderLeft: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
            section: {
              width: 16,
            },
          }}
        />
      </Flex>
    </div>
  );
};

export default InputStyle;
