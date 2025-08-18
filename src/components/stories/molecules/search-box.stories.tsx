import type { Meta, StoryObj } from "@storybook/nextjs";

import { SearchBox } from "@/components";

const meta = {
  title: "Molecules/SearchBox",
  component: SearchBox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **SearchBox** é utilizado para realizar buscas em um serviço.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido no input quando o campo está vazio.",
      table: {
        type: { summary: "string" },
      },
    },
    defaultValue: {
      control: "text",
      description: "Valor inicial do campo.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o campo, impedindo interações.",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Busca por...",
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
