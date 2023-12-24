import { ActionIcon } from "@mantine/core";
import { FC, ReactNode, useContext, useState } from "react";
import { EditorContext } from "../..";

type ButtonDeviceType = {
  icon: ReactNode;
  device: "Desktop" | "Tablet" | "Mobile";
};

const ButtonDevice: FC<ButtonDeviceType> = (props) => {
  const editor = useContext(EditorContext);
  const [deviceActive, setDeviceActive] = useState<string>("Desktop");

  const setSizeDevice = (device: string) => {
    editor?.setDevice(device);
  };

  const isDeviceSelected = (device: string): string => {
    return deviceActive == device ? "filled" : "outline";
  };

  editor?.on("canvas:device", () => setDeviceActive(editor.getDevice()));

  return (
    <ActionIcon
      variant={isDeviceSelected(props.device)}
      onClick={() => {
        setSizeDevice(props.device);
        editor?.trigger("canvas:device");
      }}
    >
      {props.icon}
    </ActionIcon>
  );
};

export default ButtonDevice;
