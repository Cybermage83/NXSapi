import { add } from '../src/add-demo-npm';

describe('add-demo-npm unit tests', (): void => {
  test('adding two postestive numbers', (): void => {
    const actual: number = add(1, 2);
    expect(actual).toBe(3);
  });
  test('adding two negative numbers', (): void => {
    const actual: number = add(-5, -2);
    expect(actual).toBe(-7);
  });
  test('adding one positive and one negative number', (): void => {
    const actual: number = add(7, -2);
    expect(actual).toBe(5);
  });
});
