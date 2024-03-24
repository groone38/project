import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface IPageError {
  className?: string;
}

export const PageError = ({ className }: IPageError) => {
  const { t } = useTranslation();

  const ReloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <Button onClick={ReloadPage}>{t('Обновить страницу')}</Button>
    </div>
  );
};
