import type { Meta, StoryObj } from '@storybook/react';

import LoginBox from './LoginBox';

const meta = {
  component: LoginBox,
} satisfies Meta<typeof LoginBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    title:"Login"
  }

};