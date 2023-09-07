import { useMantineColorScheme } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { Markdown, MarkdownProps } from "../components";
import ExampleMarkdown from "../components/Markdown/example.md?raw";
import "./Markdown.css";
import { ThemeWrapper } from "./decorators";

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  decorators: [ThemeWrapper],
};

export default meta;

type Story = StoryObj<typeof Markdown>;

const MarkdownWithHooks = ({ className }: Partial<MarkdownProps>) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Markdown
      className={className}
      colorScheme={colorScheme}
      source={ExampleMarkdown}
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
