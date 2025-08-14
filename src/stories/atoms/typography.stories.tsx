import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography, TypographyProps } from "@/components";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "O componente **Typography** padroniza estilos tipográficos, garantindo consistência visual no sistema de design.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
      description: "Define o tamanho da tipografia.",
      table: {
        type: { summary: "sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl" },
        defaultValue: { summary: "md" },
      },
    },
    as: {
      control: "text",
      description: "Tag HTML ou componente a ser usado como wrapper semântico.",
      table: {
        type: { summary: "string | React.ElementType" },
        defaultValue: { summary: "p" },
      },
    },
    children: {
      control: "text",
      description: "Conteúdo de texto a ser exibido.",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
};

export const Sizes: Story = {
  render: (args: TypographyProps) => (
    <div className="flex flex-col gap-2">
      <Typography {...args} size="sm">
        Size: sm
      </Typography>
      <Typography {...args} size="md">
        Size: md
      </Typography>
      <Typography {...args} size="lg">
        Size: lg
      </Typography>
      <Typography {...args} size="xl">
        Size: xl
      </Typography>
      <Typography {...args} size="2xl">
        Size: 2xl
      </Typography>
      <Typography {...args} size="3xl">
        Size: 3xl
      </Typography>
      <Typography {...args} size="4xl">
        Size: 4xl
      </Typography>
      <Typography {...args} size="5xl">
        Size: 5xl
      </Typography>
    </div>
  ),
};
