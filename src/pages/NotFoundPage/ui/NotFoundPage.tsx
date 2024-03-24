import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface INotFoundPage {
  className?: string;
}

export const NotFoundPage = ({ className }: INotFoundPage) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
