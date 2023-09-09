import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaid-plugin";
import "../../styles/github-markdown.css";
import "../../styles/katex/katex.css";

type MarkdownEditorProperties = MDEditorProps & {
  value: string;
  onChange?: () => void;
  showEditor?: boolean;
  showViewer?: boolean;
  colorScheme?: "light" | "dark";
  className?: string;
};

export const MarkdownEditor = ({
  value,
  onChange,
  showEditor = true,
  showViewer = false,
  ...properties
}: MarkdownEditorProperties) => {
  return (
    <>
      {showEditor && (
        <MDEditor
          value={value}
          onChange={onChange}
          contentEditable
          {...properties}
        />
      )}
      {showViewer && (
        <MDEditor.Markdown
          source={value}
          remarkPlugins={[remarkGfm, remarkMath, remarkMermaid]}
          rehypePlugins={[
            rehypeKatex,
            rehypeFormat,
            rehypeRaw,
            rehypeStringify,
          ]}
          {...properties}
        />
      )}
    </>
  );
};
