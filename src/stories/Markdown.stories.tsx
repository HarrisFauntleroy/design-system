import { Meta, StoryObj } from "@storybook/react";
import { useDarkMode } from "storybook-dark-mode";
import { Markdown, MarkdownProperties } from "../components";
import ExampleMarkdown from "../components/Markdown/example.md?raw";
import "./Markdown.css";

const meta: Meta<typeof Markdown> = {
  component: Markdown,
};

export default meta;

type Story = StoryObj<typeof Markdown>;

const MarkdownWithHooks = ({ className }: Partial<MarkdownProperties>) => {
  const darkMode = useDarkMode();

  return (
    <Markdown
      className={className}
      colorScheme={darkMode ? "dark" : "light"}
      value={ExampleMarkdown}
    />
  );
};

export const Default: Story = {
  render: () => {
    return <MarkdownWithHooks />;
  },
};

export const WithCustomClassName: Story = {
  render: () => {
    return <MarkdownWithHooks className="custom-class-name" />;
  },
};
