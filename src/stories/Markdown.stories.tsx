import { useMantineColorScheme } from "@mantine/core";
import { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "../components/Markdown";
import ExampleMarkdown from "../components/example.md?raw";
import { ThemeWrapper } from "./decorators";

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  decorators: [ThemeWrapper],
};

export default meta;

type Story = StoryObj<typeof Markdown>;

const MarkdownWithHooks = () => {
  const { colorScheme } = useMantineColorScheme();

  return <Markdown colorScheme={colorScheme} source={ExampleMarkdown} />;
};

export const Default: Story = {
  render: () => {
    return <MarkdownWithHooks />;
  },
};
