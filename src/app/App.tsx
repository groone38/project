import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { AppRouter } from './providers/router';
import { useAppDispatch } from './providers/StoreProvider/config/store';
import { userActions } from 'entities/User';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
