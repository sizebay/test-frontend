import type { Meta, StoryObj } from "@storybook/nextjs";

import { Skeleton } from "@/components";

const meta = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "O componente **Skeleton** é usado como um placeholder visual para indicar que um conteúdo ainda está carregando. Ele ajuda a reduzir a percepção de tempo de espera do usuário, simulando a forma e o tamanho do conteúdo final.",
      },
    },
  },
  argTypes: {
    className: {
      control: "text",
      description:
        "Classes do Tailwind para definir tamanho, forma e estilos adicionais do Skeleton.",
      table: {
        type: { summary: "string" },
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "h-8 w-24",
  },
};
