import type { Meta, StoryObj } from '@storybook/react';

import SignupTemplate from './SignupTemplate';

const meta = {
  component: SignupTemplate,
} satisfies Meta<typeof SignupTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};