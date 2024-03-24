import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('width additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
      'someClass class1 class2',
    );
  });
  test('width mods', () => {
    expect(
      classNames('someClass', { hoverd: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hoverd scrollable');
  });
  test('width mods false', () => {
    expect(
      classNames('someClass', { hoverd: true, scrollable: false }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hoverd');
  });
  test('width mods undefined', () => {
    expect(
      classNames('someClass', { hoverd: true, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe('someClass class1 class2 hoverd');
  });
});
