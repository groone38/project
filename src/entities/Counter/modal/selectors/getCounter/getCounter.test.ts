import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';
import { DeepPartial } from 'shared/config/types/types';

describe('getCounter', () => {
  test('should return counter value', () => {
    const state: Partial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
  });
});
