import { getPasswordStrength } from './passwordStrength';

describe('getPasswordStrength', () => {
  test('should return Weak ', () => {
    expect(getPasswordStrength('12345')).toBe('Weak');
  });

  test('should return Medium ', () => {
    expect(getPasswordStrength('test123')).toBe('Weak');
  });

  test('should return Weak ', () => {
    expect(getPasswordStrength('Test1')).toBe('Medium');
  });

  test('should return Medium', () => {
    expect(getPasswordStrength('test$123')).toBe('Medium');
  });

  test('should return Strong', () => {
    expect(getPasswordStrength('Testttt1!')).toBe('Strong');
  });
});
