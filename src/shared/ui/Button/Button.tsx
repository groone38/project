import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum SizeButton {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
}

export const Button = ({
  className,
  children,
  theme,
  square,
  disabled,
  size = SizeButton.M,
  ...other
}: IButton) => {
  const mods = {
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};
