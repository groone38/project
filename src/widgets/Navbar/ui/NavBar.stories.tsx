import type { Meta, StoryObj } from '@storybook/react';
import '../../../app/styles/index.scss';
import { NavBar } from './NavBar';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'widgets/NavBar',
  component: NavBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: (Story) => (
    <BrowserRouter>
      <div className="app light">
        <Story />
      </div>
    </BrowserRouter>
  ),
};

export const Dark: Story = {
  args: {},
  decorators: (Story) => (
    <BrowserRouter>
      <div className="app dark">
        <Story />
      </div>
    </BrowserRouter>
  ),
};
