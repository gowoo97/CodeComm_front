import type { Meta, StoryObj } from '@storybook/react';

import BoardWriter from './BoardWriter';

const meta = {
  component: BoardWriter,
} satisfies Meta<typeof BoardWriter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    url:"https://via.placeholder.com/300x300",
    writer:"tom",
    star:12
  }
};