import { Plus } from "lucide-react";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/internal/test";

import { Button } from "@/components";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Clicar",
    onClick: () => fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Clicar",
    onClick: () => fn(),
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Clicar",
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "default",
    children: "Clicar",
    leftIcon: <Plus />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "default",
    children: "Clicar",
    rightIcon: <Plus />,
  },
};
