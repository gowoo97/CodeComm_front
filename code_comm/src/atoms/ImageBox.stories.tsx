import type { Meta, StoryObj } from '@storybook/react';

import ImageBox from './ImageBox';

const meta = {
  component: ImageBox,
} satisfies Meta<typeof ImageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    url:"https://via.placeholder.com/300x300",
    width:"224px",
    height:"132px",
  }
};