import classnames from "classnames";
import { PropsWithChildren, createElement } from "react";
import {
  ReactMarkdownProps,
  SpecialComponents,
} from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  a11yLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
import "react-syntax-highlighter/dist/esm/styles/hljs/a11y-light";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkMermaid from "remark-mermaid-plugin";
import "../../styles/github-markdown.css";
import "../../styles/katex/katex.css";

type TableOfContentsProperties = PropsWithChildren<{
  node: {
    tagName: string;
  };
  children: string[];
}>;

function addToTableOfContents({
  children,
  ...properties
}: TableOfContentsProperties) {
  const level = Number(properties.node.tagName.match(/h(\d)/)?.slice(1));
  if (level && children && typeof children[0] === "string") {
    const id = children[0].toLowerCase().replaceAll(/[^\da-z]+/g, "-");
    return createElement(properties.node.tagName, { id }, children);
  } else {
    return createElement(properties.node.tagName, properties, children);
  }
}

export type MarkdownComponents = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>;

export type MarkdownProperties = {
  value: string;
  colorScheme: "light" | "dark";
  className?: string;
};

export function Markdown({
  value,
  className,
  colorScheme,
}: MarkdownProperties) {
  const markdownClassNames = classnames(
    "markdown-body",
    `markdown-body-${colorScheme}`,
    className
  );

  const renderers = {
    h1: addToTableOfContents,
    h2: addToTableOfContents,
    h3: addToTableOfContents,
    h4: addToTableOfContents,
    h5: addToTableOfContents,
    h6: addToTableOfContents,
    code({
      inline,
      className,
      children,
      ...properties
    }: ReactMarkdownProps & {
      inline: boolean;
      className: string;
    }) {
      const match = /language-(\w+)/.exec(className || "");

      // Exclude Mermaid from syntax highlighting
      if (match && match[1] === "mermaid") {
        return children;
      }

      function copyToClipboard() {
        navigator.clipboard.writeText(String(children));
      }

      return !inline && match ? (
        <div style={{ position: "relative" }}>
          <SyntaxHighlighter
            language={match[1]}
            style={colorScheme === "dark" ? a11yDark : a11yLight}
            showLineNumbers
            {...properties}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
          <button
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              padding: "5px",
            }}
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
      ) : (
        <code className={className} {...properties}>
          {children}
        </code>
      );
    },
  };

  return (
    <ReactMarkdown
      className={markdownClassNames}
      components={renderers as MarkdownComponents}
      remarkPlugins={[remarkGfm, remarkMath, remarkMermaid]}
      rehypePlugins={[rehypeKatex, rehypeFormat, rehypeRaw, rehypeStringify]}
    >
      {value}
    </ReactMarkdown>
  );
}
