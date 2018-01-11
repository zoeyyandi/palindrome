const assert = require('chai').assert;
const isPalindrome = require('../palindrome');

describe('palindrome', () => {
  it('should return true if a word is a palindrome', () => {
    let word = 'aabbaa';
    let result = isPalindrome(word);
    assert.isTrue(result);
  });

  it('should return true if a word is a palindrome', () => {
    let word = 'a';
    let result = isPalindrome(word);
    assert.isTrue(result);
  });

  it('should return false if a word is NOT a palindrome', () => {
    let word = 'abac';
    assert.isFalse(isPalindrome(word));
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
