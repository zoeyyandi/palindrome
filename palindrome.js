const isPalindrome = str => {
  let originalStr = str.split(' ').join('');
  let newStr = str
    .replace(/\s/g, '')
    .split('')
    .reverse()
    .join('')
    .toLowerCase();
  return originalStr === newStr;
};

module.exports = isPalindrome;
