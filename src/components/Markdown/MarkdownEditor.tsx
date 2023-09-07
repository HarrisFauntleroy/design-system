import MDEditor, { MDEditorProps } from "@uiw/react-md-editor";
import classnames from "classnames";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaid-plugin";
import "../../styles/github-markdown.css";
import "../../styles/katex/katex.css";

type MarkdownEditorProps = MDEditorProps & {
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
  colorScheme = "light",
  className,
  ...props
}: MarkdownEditorProps) => {
  const markdownClassNames = classnames(
    "markdown-body",
    `markdown-body-${colorScheme}`,
    className
  );

  return (
    <>
      {showEditor && (
        <MDEditor
          className={markdownClassNames}
          value={value}
          onChange={onChange}
          contentEditable
          {...props}
        />
      )}
      {showViewer && (
        <MDEditor.Markdown
          className={markdownClassNames}
          source={value}
          remarkPlugins={[remarkGfm, remarkMath, remarkMermaid]}
          rehypePlugins={[
            rehypeKatex,
            rehypeFormat,
            rehypeRaw,
            rehypeStringify,
          ]}
          {...props}
        />
      )}
    </>
  );
};
