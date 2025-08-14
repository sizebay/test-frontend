import { Search } from "lucide-react";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "@/components";

const meta = {
  title: "Molecules/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **Input** é utilizado para entrada de dados de texto ou número.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido quando o campo está vazio.",
      table: {
        type: { summary: "string" },
      },
    },
    defaultValue: {
      control: "text",
      description: "Valor inicial do campo.",
      table: {
        type: { summary: "string | number" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo, impedindo interações.",
      table: {
        type: { summary: "boolean" },
      },
    },
    leftIcon: {
      control: false,
      description: "Ícone exibido à esquerda do campo.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    rightIcon: {
      control: false,
      description: "Ícone exibido à direita do campo.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
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

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Input",
    leftIcon: <Search />,
    id: "input-with-left-icon",
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Input",
    rightIcon: <Search />,
    id: "input-with-right-icon",
  },
};
