import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    label:"검색",
    width:"100px",
    height:"50px",
    backgroundColor:"#FFA238",
    color:"white"
  }
};