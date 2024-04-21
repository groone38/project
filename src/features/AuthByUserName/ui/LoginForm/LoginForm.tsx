import { useAppDispatch } from 'app/providers/StoreProvider/config/store';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername/loginByUsername';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';
import { Text, TextTheme } from 'shared/ui/Text/Text';

interface ILoginForm {
  className?: string;
}

export const LoginForm = memo(function LoginForm({ className }: ILoginForm) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useSelector(getLoginState);

  const onChangeUserName = useCallback(
    (e: string) => {
      dispatch(loginActions.setUserName(e));
    },
    [dispatch],
  );

  const onChangeUserPassword = useCallback(
    (e: string) => {
      dispatch(loginActions.setPassword(e));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Авторизация')}/>
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите имя')}
        autofocus
        onChange={onChangeUserName}
        value={username}
      />
      <Input
        type="text"
        className={cls.input}
        placeholder={t('Введите пароль')}
        onChange={onChangeUserPassword}
        value={password}
      />
      <Button
        theme={ThemeButton.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});
