import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { MarkdownEditor } from "../components/Markdown";
import ExampleMarkdown from "../components/Markdown/example.md?raw";
import "./Markdown.css";
import { ThemeWrapper } from "./decorators";

const meta: Meta<typeof MarkdownEditor> = {
  component: MarkdownEditor,
  decorators: [ThemeWrapper],
};

export default meta;

type Story = StoryObj<typeof MarkdownEditor>;

export const Uncontrolled: Story = {
  render: () => {
    return <MarkdownEditor value={ExampleMarkdown} />;
  },
};

const MarkdownEditorWithUseStateHooks = () => {
  const [value, setValue] = useState(ExampleMarkdown);

  function handleChange(value?: string) {
    setValue(value || "");
  }

  return <MarkdownEditor value={value} onChange={handleChange} />;
};

export const Controlled: Story = {
  render: MarkdownEditorWithUseStateHooks,
};
