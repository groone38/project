import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
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
}

export const Button = ({
  className,
  children,
  theme,
  square,
  size = SizeButton.M,
  ...other
}: IButton) => {
  const mods = {
    [cls.square]: square,
    [cls[size]]: true,
  };
  console.log(mods);
  return (
    <button
      className={classNames(cls.Button, mods, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
