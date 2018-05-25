// @flow
import hello from './hello';

describe('hello', () => {
  describe('when called', () => {
    it('says "Hello Magnificient 7"', () => {
      expect(hello()).toBe('Hello Magnificient 7');
    });
  });
});
