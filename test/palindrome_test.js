const assert = require('chai').assert;
const isPalindrome = require('../palindrome');

describe('palindrome', () => {
  let arr1 = ['aabbaa', 'a', 'noon', 'a man a plan a canal panama'];
  let arr2 = ['abac', 'zoey', 'palindrome', 'this is not a palindrome'];

  arr1.forEach(item => {
    it(`should return true if ${item} is a palindrome`, () => {
      assert.isTrue(isPalindrome(item));
    });
  });

  arr2.forEach(item => {
    it(`should return false if ${item} is NOT a palindrome`, () => {
      assert.isFalse(isPalindrome(item));
    });
  });
});
