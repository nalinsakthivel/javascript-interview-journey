function findTheDifference(s, t) {
  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) {
      return t[i];
    }
    charCount[t[i]]--;
  }

  return "";
}

console.log("findTheDifference :>>", findTheDifference("hello", "helolx"));
