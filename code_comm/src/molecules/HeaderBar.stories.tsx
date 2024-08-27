import type { Meta, StoryObj } from '@storybook/react';

import HeaderBar from './HeaderBar';

const meta = {
  component: HeaderBar,
} satisfies Meta<typeof HeaderBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};