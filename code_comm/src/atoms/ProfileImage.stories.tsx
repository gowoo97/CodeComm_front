import type { Meta, StoryObj } from '@storybook/react';

import ProfileImage from './ProfileImage';

const meta = {
  component: ProfileImage,
} satisfies Meta<typeof ProfileImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    url:"https://via.placeholder.com/300x300",
    width:"50px",
    height:"50px"
  }
};