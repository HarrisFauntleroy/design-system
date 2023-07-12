import { Person, Shield } from "@phosphor-icons/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Role } from "database/generated/prisma-client";
import { MainLink } from "./MainLink";

const meta: Meta<typeof MainLink> = {
  title: "Example/MainLink",
  component: MainLink,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "color",
    },
    expectedRole: {
      control: {
        type: "select",
        options: Object.values(Role),
      },
    },
    userRole: {
      control: {
        type: "select",
        options: Object.values(Role),
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MainLink>;

export const UserLink: Story = {
  args: {
    label: "User Link",
    href: "/user",
    expectedRole: Role.USER,
    userRole: Role.USER,
    color: "blue",
    icon: <Person />,
  },
};

export const AdminLink: Story = {
  args: {
    label: "Admin Link",
    href: "/admin",
    expectedRole: Role.ADMIN,
    userRole: Role.ADMIN,
    color: "red",
    icon: <Shield />,
  },
};
