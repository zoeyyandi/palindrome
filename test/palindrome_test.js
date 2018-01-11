const assert = require('chai').assert;
const isPalindrome = require('../palindrome');

describe('palindrome', () => {
  let words1 = ['aabbaa', 'a', 'noon'];
  let words2 = ['abac', 'zoey', 'palindrome'];

  words1.forEach(word => {
    it(`should return true if ${word} is a palindrome`, () => {
      let result = isPalindrome(word);
      assert.isTrue(result);
    });
  });

  words2.forEach(word => {
    it(`should return false if ${word} is NOT a palindrome`, () => {
      assert.isFalse(isPalindrome(word));
    });
  });

  it('should return true if a phrase is a palindrome', () => {
    let phrase = 'a man a plan a canal panama';
    assert.isTrue(isPalindrome(phrase));
  });

  it('should return false if a phrase is NOT a palindrome', () => {
    let phrase = 'this is not a palindrome';
    assert.isFalse(isPalindrome(phrase));
  });
});
