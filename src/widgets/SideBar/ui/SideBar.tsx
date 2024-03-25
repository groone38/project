/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import cls from './SideBar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';

interface ISideBar {
  className?: string;
}

export const SideBar = ({ className }: ISideBar): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = async () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid={'sidebar'}
      className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
     
      <Button data-testid="sidebar-toggle" onClick={onToggle}>
        toggle
      </Button>
      <div className={cls.swichers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};
