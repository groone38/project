import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/I18n/I18nForTest';

export function renderWithTranslation(components: ReactNode) {
  return render(
    <I18nextProvider i18n={i18nForTests}>{components}</I18nextProvider>,
  );
}
