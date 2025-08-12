import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from '@/components/atoms/Skeleton/Skeleton';

const meta: Meta<typeof Skeleton> = {
    title: 'Atoms/Skeleton',
    component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        className: 'h-5 w-3/4 rounded-md',
    },
};

export const Multiple: Story = {
    render: () => (
        <div>
            <Skeleton className="h-5 w-3/4 rounded-md mb-2" />
            <Skeleton className="h-4 w-full rounded-md mb-2" />
            <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>
    ),
};
