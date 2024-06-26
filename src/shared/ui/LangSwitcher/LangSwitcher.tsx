import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';

interface ILangSwitcher {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: ILangSwitcher) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(short ? 'Язык' : 'Короткий язык')}
    </Button>
  );
};
