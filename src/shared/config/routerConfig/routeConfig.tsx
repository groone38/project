import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppPouters {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RouterPath: Record<AppPouters, string> = {
  [AppPouters.MAIN]: '/',
  [AppPouters.ABOUT]: '/about',
  [AppPouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppPouters, RouteProps> = {
  [AppPouters.MAIN]: {
    path: RouterPath.main,
    element: <MainPage />,
  },
  [AppPouters.ABOUT]: {
    path: RouterPath.about,
    element: <AboutPage />,
  },
  [AppPouters.NOT_FOUND]: {
    path: RouterPath.not_found,
    element: <NotFoundPage />,
  },
};
