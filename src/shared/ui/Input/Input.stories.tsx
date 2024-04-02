import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../../../app/styles/index.scss';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { placeholder: 'Type Text', value: '123' },
};
