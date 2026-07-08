function isPalindrome(str) {
  let firstLetter = str[0];
  let lastLetter = str[str.length - 1];

  return firstLetter == lastLetter;
}

console.log("isPalindrome >>>", isPalindrome("adc"));
