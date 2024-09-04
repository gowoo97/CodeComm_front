import type { Meta, StoryObj } from '@storybook/react';

import SignInTemplate from './SignInTemplate';

const meta = {
  component: SignInTemplate,
} satisfies Meta<typeof SignInTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};