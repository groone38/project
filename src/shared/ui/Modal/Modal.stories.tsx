import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { isOpen: true, children: 'Text test test' },
  decorators: (Story) => (
    <div className="app light">
      <Story />
    </div>
  ),
};
