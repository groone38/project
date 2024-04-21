import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, SizeButton, ThemeButton } from './Button';
import '../../../app/styles/index.scss';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  //   argTypes: {
  //     backgroundColor: { control: "color" },
  //   },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Text' },
};

export const Clear: Story = {
  args: { children: 'Text', theme: ThemeButton.CLEAR },
};

export const ClearInverted: Story = {
  args: { children: 'Text', theme: ThemeButton.CLEAR_INVERTED },
};

export const Outline: Story = {
  args: { children: 'Text', theme: ThemeButton.OUTLINE },
};

export const BackgroundTheme: Story = {
  args: { children: 'Text', theme: ThemeButton.BACKGROUND },
};

export const BackgroundInvertedTheme: Story = {
  args: { children: 'Text', theme: ThemeButton.BACKGROUND_INVERTED },
};

export const SquaerSizeM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.M,
  },
};

export const SquaerSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
  },
};

export const SquaerSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: '>',
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
};
