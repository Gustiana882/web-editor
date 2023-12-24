import "grapesjs/dist/css/grapes.min.css";
import "@mantine/core/styles.css";
import "./index.css";
import grapesjs, {
  EditorConfig,
  Editor as EditorType,
  ProjectData,
} from "grapesjs";
import React, { FC, ReactNode, useEffect, useState } from "react";
import { Flex, MantineProvider } from "@mantine/core";
import { Sidebar } from "./components/sidebar";
import plugin from "grapesjs-blocks-basic";

export const EditorContext = React.createContext<null | EditorType>(null);

export type EditorConfigType = {
  config?: EditorConfig;
  children?: ReactNode;
  btnSaveTitle?: string;
  loadingSave?: boolean;
  onSave?: (obj: ProjectData) => void;
  onEditor?: (editor: EditorType) => void;
};

const Editor: FC<EditorConfigType> = (props) => {
  const [editor, setEditor] = useState<EditorType | null>(null);

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#canvas",
      fromElement: true,
      height: "100vh",
      width: "auto",
      storageManager: false,
      panels: { defaults: [] },

      plugins: [plugin],

      selectorManager: {
        appendTo: "#classname",
      },

      traitManager: {
        appendTo: "#setting",
      },

      blockManager: {
        appendTo: "#blocks",
      },

      styleManager: {
        appendTo: "#style",
      },

      canvas: {
        styles: ["http://localhost:5173/style.css"],
      },

      deviceManager: {
        devices: [
          {
            name: "Desktop",
            width: "",
          },
          {
            name: "Tablet",
            width: "768px",
            widthMedia: "768px",
          },
          {
            name: "Mobile",
            width: "425px",
            widthMedia: "425px",
          },
        ],
      },

      ...props.config,
    });

    setEditor(editor);
    if (props.onEditor) props.onEditor(editor);

    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <MantineProvider>
      <EditorContext.Provider value={editor}>
        <Flex>
          <Sidebar
            btnSaveTitle={props.btnSaveTitle}
            loadingSave={props.loadingSave}
            onSave={props.onSave}
          />
          <div id="canvas">{props.children}</div>
        </Flex>
      </EditorContext.Provider>
    </MantineProvider>
  );
};

export default Editor;
