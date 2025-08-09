import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atoms/Button/Button";

const meta: Meta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Botão Teste",
        variant: "default",
    },
};
