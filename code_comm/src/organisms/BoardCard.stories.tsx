import type { Meta, StoryObj } from '@storybook/react';

import BoardCard from './BoardCard';

const meta = {
  component: BoardCard,
} satisfies Meta<typeof BoardCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    imageBoxUrl:"https://via.placeholder.com/300x300",
    boardInfoTitle:"이것 좀 고쳐주세요",
    boardInfoContent:"내용",
    boardInfoCreatedAt:"2024-08-22",
    boardWriterStar:12,
    boardWriter:"Tom",
    boardWriterUrl:"https://via.placeholder.com/300x300"
  }
};