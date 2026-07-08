function firstNonRepeating(arr) {
  const count = {};

  for (const num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (const num of arr) {
    if (count[num] === 1) {
      return num;
    }
  }

  return null;
}

console.log(firstNonRepeating([4, 5, 1, 2, 0, 4]));
