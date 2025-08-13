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
    children: "Botão Default",
    onClick: () => fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Botão Secondary",
    onClick: () => fn(),
  },
};

export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Desabilitado",
    disabled: true,
  },
};
