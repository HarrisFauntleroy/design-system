import { Decorator, Meta, StoryObj } from "@storybook/react";
import Markdown from "./Markdown";

const decorators: Decorator[] = [];

const meta: Meta<typeof Markdown> = {
  component: Markdown,
  decorators,
};

export default meta;

type Story = StoryObj<typeof Markdown>;

const markdown = `
## Table of Contents
1. [Introduction](#introduction)
2. [Requirements](#-materialsparts-required)
3. [Warnings & Disclaimer](#-disclaimer)
4. [Instructions](#-instructions)
1. [Gathering Your Materials](#-step-1-gathering-your-materials)
2. [Connection and Calibration of the Power supply module](#-step-2-connection-and-calibration-of-the-power-supply-module)
5. [Final Result 🏆](#-expected-outcome)
6. [Troubleshooting / FAQs](#-troubleshooting--faqs)
7. [Further Reading 📚](#-further-reading)

# H1
## H2
### H3
#### H4
##### H5
###### H6
*italic* and **bold** text.
[link](https://example.com).
![image](https://raw.githubusercontent.com/HarrisFauntleroy/harrisfauntleroy.com/main/public/favicon-32x32.png?token=GHSAT0AAAAAACE2FE5OUR45BTDUOPDZ5PFUZGURJKQ)

A paragraph with _emphasis_ and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

- Lists
- [ ] todo
- [x] done

A table:

| a   | b   |
| --- | --- |

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a   | b   |   c |  d  |
| --- | :-- | --: | :-: |

## Tasklist

- [ ] to do
- [x] done

Inline: $e=mc^2$

Block:
$$
e=mc^2
$$
`;

export const Default: Story = {
  render: (args) => <Markdown {...args} source={markdown}></Markdown>,
};
