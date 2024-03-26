import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './SideBar';

const meta = {
  title: 'widgets/SideBar',
  component: SideBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: (Story) => (
    <div className="app light">
      <Story />
    </div>
  ),
};

export const Dark: Story = {
  args: {},
  decorators: (Story) => (
    <div className="app dark">
      <Story />
    </div>
  ),
};
