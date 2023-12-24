import {
  Group,
  Code,
  Button,
  Tabs,
  rem,
  Accordion,
  Flex,
  Box,
  Text,
  ScrollArea,
  Space,
} from "@mantine/core";
import classes from "./sidebar.module.css";
import {
  IconSettings,
  IconAlignLeft,
  IconAlignCenter,
  IconAlignRight,
  IconMenu2,
  IconBrush,
  IconComponents,
  IconDeviceDesktop,
  IconDeviceTablet,
  IconDeviceMobile,
} from "@tabler/icons-react";
import ButtonAddStyle from "./buttons/add-style";
import SelectAddStyle from "./select-style";
import Label from "./label";
import InputStyle from "./input-style";
import ColorStyle from "./color-style";
import BoxSpacing from "./box-spacing";
import { FC, useContext } from "react";
import { EditorContext } from "..";
import { ProjectData } from "grapesjs";
import ButtonDevice from "./buttons/device";

type SidebarType = {
  btnSaveTitle?: string;
  loadingSave?: boolean;
  onSave?: (obj: ProjectData) => void;
};

export const Sidebar: FC<SidebarType> = (props) => {
  const editor = useContext(EditorContext);
  const iconStyle = { width: rem(12), height: rem(12) };

  const handleSave = () => {
    if (props.onSave && editor) props.onSave(editor.getProjectData());
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Code fw={700}>v3.1.2</Code>
          <Flex gap="xs">
            <ButtonDevice
              icon={<IconDeviceDesktop size="1.25rem" />}
              device="Desktop"
            />
            <ButtonDevice
              icon={<IconDeviceTablet size="1.25rem" />}
              device="Tablet"
            />
            <ButtonDevice
              icon={<IconDeviceMobile size="1.25rem" />}
              device="Mobile"
            />
          </Flex>
        </Group>
        <Tabs defaultValue="styles">
          <Tabs.List className={classes.tab__list}>
            <Tabs.Tab
              value="styles"
              leftSection={<IconBrush style={iconStyle} />}
            />
            <Tabs.Tab
              value="messages"
              leftSection={<IconComponents style={iconStyle} />}
            />
            <Tabs.Tab
              value="settings"
              leftSection={<IconSettings style={iconStyle} />}
            />
          </Tabs.List>

          <Tabs.Panel value="styles">
            <ScrollArea h="calc(100vh - 32px - 40px - 34px - 61px)" px="md">
              <div id="classname"></div>
              <Accordion defaultValue="text">
                <Accordion.Item value="text">
                  <Accordion.Control>Size</Accordion.Control>
                  <Accordion.Panel>
                    <Flex gap="xs" mb="xs">
                      <InputStyle label="Width" attr="width" />
                      <InputStyle label="Height" attr="height" />
                    </Flex>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
              <Accordion defaultValue="text">
                <Accordion.Item value="text">
                  <Accordion.Control>Text Options</Accordion.Control>
                  <Accordion.Panel>
                    <Box mb="xs">
                      <SelectAddStyle
                        label="Font family"
                        attr="font-family"
                        data={[
                          { label: "None", value: "none" },
                          { label: "Roboto", value: "'Roboto', sans-serif" },
                          {
                            label: "Open Sans",
                            value: "'Open Sans', sans-serif",
                          },
                          {
                            label: "Montserrat",
                            value: "'Montserrat', sans-serif",
                          },
                          { label: "Lato", value: "'Lato', sans-serif" },
                          { label: "Nunito", value: "'Nunito', sans-serif" },
                          {
                            label: "Playfair Display",
                            value: "'Playfair Display', serif",
                          },
                          {
                            label: "Merriweather",
                            value: "'Merriweather', serif",
                          },
                          { label: "Poppins", value: "'Poppins', sans-serif" },
                        ]}
                      />
                    </Box>
                    <Box mb="xs">
                      <Label value="Alignment" clearAttr="text-align" />
                      <Button.Group>
                        <ButtonAddStyle
                          value="left"
                          attr="text-align"
                          icon={<IconAlignLeft size="1rem" />}
                        />
                        <ButtonAddStyle
                          value="center"
                          attr="text-align"
                          icon={<IconAlignCenter size="1rem" />}
                        />
                        <ButtonAddStyle
                          value="right"
                          attr="text-align"
                          icon={<IconAlignRight size="1rem" />}
                        />
                        <ButtonAddStyle
                          value="justify"
                          attr="text-align"
                          icon={<IconMenu2 size="1rem" />}
                        />
                      </Button.Group>
                    </Box>
                    <Flex gap="xs" mb="xs">
                      <SelectAddStyle
                        label="Weight"
                        attr="font-weight"
                        data={[
                          { label: "Extra Light", value: "200" },
                          { label: "Light", value: "300" },
                          { label: "Normal", value: "400" },
                          { label: "Medium", value: "500" },
                          { label: "Semi-Bold", value: "600" },
                          { label: "Bold", value: "700" },
                          { label: "Extra Bold", value: "800" },
                        ]}
                      />
                      <InputStyle label="Size" attr="font-size" width="70px" />
                    </Flex>
                    <Box mb="xs">
                      <ColorStyle label="Color" attr="color" />
                    </Box>
                    <Box mb="xs">
                      <Label value="Transform" clearAttr="text-transform" />
                      <Button.Group>
                        <ButtonAddStyle
                          value="none"
                          attr="text-transform"
                          icon={
                            <Text size="xs" fw="500">
                              none
                            </Text>
                          }
                        />
                        <ButtonAddStyle
                          value="capitalize"
                          attr="text-transform"
                          icon={
                            <Text size="xs" fw="500">
                              Aa
                            </Text>
                          }
                        />
                        <ButtonAddStyle
                          value="uppercase"
                          attr="text-transform"
                          icon={
                            <Text size="xs" fw="500">
                              AA
                            </Text>
                          }
                        />
                        <ButtonAddStyle
                          value="lowercase"
                          attr="text-transform"
                          icon={
                            <Text size="xs" fw="500">
                              aa
                            </Text>
                          }
                        />
                      </Button.Group>
                    </Box>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultValue="text">
                <Accordion.Item value="text">
                  <Accordion.Control>Spacing</Accordion.Control>
                  <Accordion.Panel>
                    <Box mb="xl">
                      <BoxSpacing />
                    </Box>
                    <Flex gap="xs" mb="xs">
                      <InputStyle label="Margin left" attr="margin-left" />
                      <InputStyle label="Margin top" attr="margin-top" />
                    </Flex>
                    <Flex gap="xs" mb="xs">
                      <InputStyle label="Margin right" attr="margin-right" />
                      <InputStyle label="Margin bottom" attr="margin-bottom" />
                    </Flex>
                    <Flex gap="xs" mb="xs">
                      <InputStyle label="Padding left" attr="padding-left" />
                      <InputStyle label="Padding top" attr="padding-top" />
                    </Flex>
                    <Flex gap="xs" mb="xs">
                      <InputStyle label="Padding right" attr="padding-right" />
                      <InputStyle
                        label="Padding bottom"
                        attr="padding-bottom"
                      />
                    </Flex>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Accordion defaultValue="text">
                <Accordion.Item value="text">
                  <Accordion.Control>Decoration Options</Accordion.Control>
                  <Accordion.Panel>
                    <Box mb="xs">
                      <ColorStyle
                        label="Background color"
                        attr="background-color"
                      />
                    </Box>
                    <Flex gap="xs" mb="xs">
                      <InputStyle
                        label="Border width"
                        attr="font-size"
                        width="70px"
                      />
                      <SelectAddStyle
                        label="Border style"
                        attr="border-style"
                        defaultValue="solid"
                        data={[
                          { label: "Solid", value: "solid" },
                          { label: "Dashed", value: "dashed" },
                          { label: "Dotted", value: "dotted" },
                          { label: "Double", value: "double" },
                          { label: "Groove", value: "groove" },
                          { label: "Ridge", value: "ridge" },
                          { label: "Inset", value: "inset" },
                          { label: "Outset", value: "outset" },
                          { label: "Hidden", value: "hidden" },
                          { label: "None", value: "none" },
                        ]}
                      />
                    </Flex>
                    <Box mb="xs">
                      <ColorStyle label="Border color" attr="border-color" />
                    </Box>
                    <Flex gap="xs" mb="xs">
                      <InputStyle
                        label="Radius top left"
                        attr="border-top-left-radius"
                      />
                      <InputStyle
                        label="Radius top right"
                        attr="border-top-right-radius"
                      />
                    </Flex>
                    <Flex gap="xs" mb="xs">
                      <InputStyle
                        label="Radius bottom left"
                        attr="border-bottom-left-radius"
                      />
                      <InputStyle
                        label="Radius bottom right"
                        attr="border-bottom-right-radiusm"
                      />
                    </Flex>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Space h="24px" />
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="messages">
            <div id="blocks"></div>
          </Tabs.Panel>

          <Tabs.Panel value="settings">
            <div id="setting"></div>
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className={classes.footer}>
        <Button fullWidth onClick={handleSave} loading={props.loadingSave}>
          {props.btnSaveTitle || "Save & Publish"}
        </Button>
      </div>
    </nav>
  );
};
