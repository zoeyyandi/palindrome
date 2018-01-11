const isPalindrome = str => {
  let originalStr = str.replace(/\s/g, '');
  let newStr = str
    .replace(/\s/g, '')
    .split('')
    .reverse()
    .join('');
  return originalStr === newStr;
};

module.exports = isPalindrome;
