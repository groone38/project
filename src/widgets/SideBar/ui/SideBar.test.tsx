import { fireEvent, render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { SideBar } from 'widgets/SideBar';

describe('SideBar', () => {
  test('with only params', () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    renderWithTranslation(<SideBar />);
    const button = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
  // test("with only params", () => {
  //   renderWithTranslation(<SideBar />);
  //   expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  // });
});
