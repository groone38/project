import cls from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';

interface IPageLoader {
  className?: string;
}

export const PageLoader = ({ className }: IPageLoader) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <div className={cls.loader}></div>
    </div>
  );
};
