import type { Meta, StoryObj } from '@storybook/react';

import SignupInputs from './SignupInputs';

const meta = {
  component: SignupInputs,
} satisfies Meta<typeof SignupInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};