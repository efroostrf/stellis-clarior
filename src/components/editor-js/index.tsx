// @ts-ignore
import Delimiter from "@editorjs/delimiter";
import EditorJS, { OutputData } from "@editorjs/editorjs";
// @ts-ignore
import Embed from "@editorjs/embed";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import NestedList from "@editorjs/nested-list";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Quote from "@editorjs/quote";
// @ts-ignore
import Underline from "@editorjs/underline";
// @ts-ignore
import Strikethrough from "@sotaproject/strikethrough";
// @ts-ignore
import InlineImage from "editorjs-inline-image";
// @ts-ignore
import TelegramPost from "editorjs-telegram-post";
import { FC, useEffect, useRef, useState } from "react";

type Props = {
  initialData?: OutputData;
  onChange?: (data: OutputData) => void;
};

const Editor: FC<Props> = (props) => {
  const { initialData, onChange } = props;
  const instance = useRef<EditorJS>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded || instance.current) return;
    if (typeof window === "undefined") return;

    const editor = new EditorJS({
      /**
       * Id of Element that should contain the Editor
       */
      holder: "editorjs",

      /**
       * Focus on the first load
       */
      autofocus: true,

      /**
       * Data to render in the Editor
       */
      data: initialData,

      /**
       * Pass data to onChange function
       * @param data
       */
      onChange: async () => {
        const content = await editor.saver.save();

        onChange?.(content);
      },

      /**
       * Available Tools list.
       * Pass Tool's class or Settings object for each Tool you want to use
       */
      tools: {
        header: {
          class: Header,
          inlineToolbar: ["link"],
        },
        list: {
          class: NestedList,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        quote: {
          class: Quote,
          inlineToolbar: true,
          shortcut: "CMD+SHIFT+O",
          config: {
            quotePlaceholder: "Enter a quote",
            captionPlaceholder: "Quote's author",
          },
        },
        image: {
          class: InlineImage,
          inlineToolbar: true,
          config: {
            embed: {
              display: true,
            },
            unsplash: {
              appName: "your_app_name",
              clientId: "your_client_id",
            },
          },
        },
        embed: Embed,
        elimiter: Delimiter,
        underline: Underline,
        strikethrough: Strikethrough,
        telegramPost: TelegramPost,
      },
      onReady: () => {
        instance.current = editor;
      },
    });

    instance.current = editor;

    setIsLoaded(true);
  }, [isLoaded]);

  return (
    <div
      data-loaded={isLoaded}
      className="blog-content bg-brand-800 px-6 py-2"
      id="editorjs"
    />
  );
};

export default Editor;
