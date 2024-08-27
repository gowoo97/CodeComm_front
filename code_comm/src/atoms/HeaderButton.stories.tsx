import type { Meta, StoryObj } from '@storybook/react';

import HeaderButton from './HeaderButton';

const meta = {
  component: HeaderButton,
} satisfies Meta<typeof HeaderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'click me',
    onClick: () => {}
  }
};

export const Home: Story = {
  args:{
    label:'Home',
    onClick: () => {}
  }
}

export const Login: Story = {
  args:{
    label:'Login',
    onClick: () => {}
  }
}
