import { useMantineColorScheme } from "@mantine/core";
import { PropsWithChildren, createElement } from "react";
import { SpecialComponents } from "react-markdown/lib/ast-to-react";
import { NormalComponents } from "react-markdown/lib/complex-types";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeFormat from "rehype-format";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

type TableOfContentsProps = PropsWithChildren<{
  node: {
    tagName: string;
  };
  children: string[];
}>;

function addToTableOfContents({ children, ...props }: TableOfContentsProps) {
  const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
  if (level && children && typeof children[0] === "string") {
    const id = children[0].toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return createElement(props.node.tagName, { id }, children);
  } else {
    return createElement(props.node.tagName, props, children);
  }
}

type MarkdownComponents = Partial<
  Omit<NormalComponents, keyof SpecialComponents> & SpecialComponents
>;

const renderers = {
  h1: addToTableOfContents,
  h2: addToTableOfContents,
  h3: addToTableOfContents,
  h4: addToTableOfContents,
  h5: addToTableOfContents,
  h6: addToTableOfContents,
};

export function Markdown({ source }: { source: string }) {
  const { colorScheme } = useMantineColorScheme();

  return (
    <ReactMarkdown
      className={`markdown-body markdown-body-${colorScheme}`}
      components={renderers as MarkdownComponents}
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeFormat, rehypeStringify]}
    >
      {source}
    </ReactMarkdown>
  );
}
