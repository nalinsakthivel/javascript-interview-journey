function mostFrequentChar(str) {
  const letters = str.split("");

  let charCount = {};

  for (let char of letters) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let maxChar = "";
  let maxCount = 0;

  for (let [char, count] of Object.entries(charCount)) {
    if (count > maxCount) {
      maxChar = char;
      maxCount = count;
    }
  }

  return maxChar;
}

console.log("mostFrequentChar :>>", mostFrequentChar("javascript"));
