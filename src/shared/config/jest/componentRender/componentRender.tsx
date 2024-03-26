import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/I18n/I18nForTest';

export interface componentRenderOptions {
  route?: string;
}

export function componentRender(
  components: ReactNode,
  options: componentRenderOptions = {},
) {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{components}</I18nextProvider>
    </MemoryRouter>,
  );
}
