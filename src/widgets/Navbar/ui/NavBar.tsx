import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './NavBar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation('main');
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links, {}, [])}></div>
    </div>
  );
};
