import type { Meta, StoryObj } from '@storybook/react';

import BoardInfo from './BoardInfo';

const meta = {
  component: BoardInfo,
} satisfies Meta<typeof BoardInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    title:"이것좀 고쳐 주세요",
    content:"로렙입숨",
    createdAt:"2020-08-24"
  }
};