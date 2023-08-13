import { Meta, StoryObj } from "@storybook/react";
import { decorators } from "../../.storybook/preview";
import Markdown from "../components/Markdown";
import ExampleMarkdown from "../components/example.md?raw";

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  decorators,
};

export default meta;

type Story = StoryObj<typeof Markdown>;

export const Default: Story = {
  render: (args) => <Markdown {...args} source={ExampleMarkdown}></Markdown>,
};
