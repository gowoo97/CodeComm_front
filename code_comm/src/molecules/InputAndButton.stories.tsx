import type { Meta, StoryObj } from '@storybook/react';

import InputAndButton from './InputAndButton';

const meta = {
  component: InputAndButton,
} satisfies Meta<typeof InputAndButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

  args:{
    label:"검색",
    placeholder:"검색어"
  }
};