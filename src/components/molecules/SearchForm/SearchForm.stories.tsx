import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './SearchForm';

const meta: Meta<typeof SearchForm> = {
    title: 'Molecules/SearchForm',
    component: SearchForm,
};

export default meta;

type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState(args.value || '');
        return (
            <SearchForm
                {...args}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSearch={() => alert('Searching for: ' + value)}
            />
        );
    },
    args: {
        loading: false,
        disabled: false,
        value: '',
    },
};

export const Loading: Story = {
    args: {
        value: 'loading',
        loading: true,
        disabled: false,
    },
};
