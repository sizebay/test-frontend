import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input",
  },
};

export const WithValue: Story = {
  args: {
    placeholder: "Input",
    defaultValue: "Com valores",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Input desabilitado",
    disabled: true,
  },
};
