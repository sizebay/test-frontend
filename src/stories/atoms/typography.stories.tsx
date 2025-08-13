import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Typography, TypographyProps } from "@/components";

const meta: Meta<typeof Typography> = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
    as: {
      control: false,
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
