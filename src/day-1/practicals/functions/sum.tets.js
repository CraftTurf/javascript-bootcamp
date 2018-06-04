import sum from './sum';

describe('sum', () => {
  describe('when called', () => {
    it('adds two numbers together', () => {
      expect(sum(1, 3)).toBe(4);
    });
    it('checks to see if sum is greater than a given value', () => {
      const a = 1;
      const b = 3;
      expect(sum(a, b)).toBeGreaterThan(3);
    });
    it('checks to see if sum is less than given value', () => {
      const c = 2;
      const d = 5;
      expect(sum(c, d)).toBeLessThan(10);
    });
  });
});
