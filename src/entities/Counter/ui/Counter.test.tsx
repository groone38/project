import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/config/jest/componentRender/componentRender';

import { Counter } from './Counter';

describe('Counter', () => {
  test('with only params', () => {
    componentRender(<Counter />, {
      intialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });
  test('increment', () => {
    componentRender(<Counter />, {
      intialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('increment-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });
  test('decrement', () => {
    componentRender(<Counter />, {
      intialState: { counter: { value: 10 } },
    });
    fireEvent.click(screen.getByTestId('decrement-button'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
