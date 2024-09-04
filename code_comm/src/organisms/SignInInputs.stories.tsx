import type { Meta, StoryObj } from '@storybook/react';

import SignInInputs from './SignInInputs';

const meta = {
  component: SignInInputs,
} satisfies Meta<typeof SignInInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};