import { useMantineColorScheme } from "@mantine/core";
import dynamic from "next/dynamic";
import { PropsWithChildren, createElement } from "react";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import "../styles/github-markdown.css";
import "../styles/katex/katex.css";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactMarkdown = dynamic<any>(() => import("react-markdown"), {
  ssr: false,
});

type TableOfContents = {
  level: number;
  id: string;
  title: string;
};

const tableOfContents: TableOfContents[] = [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addToTableOfContents({ children, ...props }: PropsWithChildren<any>) {
  const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
  if (level && children && typeof children[0] === "string") {
    const id = children[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
    tableOfContents.push({
      level,
      id,
      title: children[0],
    });
    return createElement(props.node.tagName, { id }, children);
  } else {
    return createElement(props.node.tagName, props, children);
  }
}

const renderers = {
  h2: addToTableOfContents,
  h3: addToTableOfContents,
  h4: addToTableOfContents,
  h5: addToTableOfContents,
  h6: addToTableOfContents,
};

export default function Markdown({ source }: { source: string }) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <ReactMarkdown
      className={`markdown-body markdown-body-${colorScheme}`}
      components={renderers}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeFormat, rehypeStringify]}
    >
      {source}
    </ReactMarkdown>
  );
}
