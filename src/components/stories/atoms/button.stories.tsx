import { Plus } from "lucide-react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { fn } from "storybook/internal/test";

import { Button } from "@/components";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **Button** é usado para acionar ações ou eventos no sistema. Pode conter texto, ícones ou ambos, além de suportar diferentes variações visuais e estados.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "tertiary"],
      description: "Define a variante do botão.",
      table: {
        type: {
          summary: "default | secondary | tertiary",
        },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["default"],
      description: "Define o tamanho do botão.",
      table: {
        type: { summary: "default" },
        defaultValue: { summary: "default" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo exibido dentro do botão.",
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
    leftIcon: {
      control: false,
      description: "Ícone exibido à esquerda do conteúdo.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    rightIcon: {
      control: false,
      description: "Ícone exibido à direita do conteúdo.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desativa o botão, impedindo interações.",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Função chamada ao clicar no botão.",
    },
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Clicar",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Clicar",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Clicar",
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
