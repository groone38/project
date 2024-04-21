import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../../../app/styles/index.scss';
import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  //   args: { onClick: fn() },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { title: 'Title', text: 'Text' },
};

export const Error: Story = {
  args: { title: 'Title', text: 'Text', theme: TextTheme.ERROR },
};

export const OnlyTitle: Story = {
  args: { title: 'Title' },
};

export const OnlyText: Story = {
  args: { text: 'Text' },
};
