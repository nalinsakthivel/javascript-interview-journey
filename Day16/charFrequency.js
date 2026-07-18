function charFrequency(str) {
  if (str.length <= 1) {
    return [];
  }

  let values = {};

  for (let i = 0; i < str.length; i++) {
    let val = str[i];
    let filteredValues = str.split("").filter((item) => item == val);
    values[val] = filteredValues.length;
  }

  return values;
}

console.log("charFrequency :>> ", charFrequency("hello"));

// Correct one

function charFrequency(str) {
  const count = {};

  for (const ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  return count;
}

console.log(charFrequency("hello"));
