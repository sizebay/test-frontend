import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "@/components";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **Badge** é usado para exibir pequenas informações contextuais ou status, geralmente associado a outro elemento da interface.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary"],
      description: "Define a variante do Badge.",
      table: {
        type: {
          summary: "default | secondary",
        },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo exibido dentro do Badge.",
      type: "string",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Badge",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Badge",
  },
};
