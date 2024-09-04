import type { Meta, StoryObj } from '@storybook/react';

import SignInput from './SignInput';

const meta = {
  component: SignInput,
} satisfies Meta<typeof SignInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    placeholder:"ID"
  }
};