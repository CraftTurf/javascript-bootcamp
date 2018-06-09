var howManyArgs = require('./howManyArgs.js');

describe('howManyArgs', () => {
  describe('when called', () => {
    it('is initiated using spread operator ', () => {
      const a = [2, 5, 7];
      expect(howManyArgs('okiki', 'test', 9)).toBe(a.length);
    });
  });
});
