import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: ThemeButton;
}

export const Button = ({ className, children, theme, ...other }: IButton) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...other}
    >
      {children}
    </button>
  );
};
