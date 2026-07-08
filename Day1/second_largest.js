function secondLargest(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const val of arr) {
    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest && val !== largest) {
      secondLargest = val;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

console.log(secondLargest([10, 5, 20, 8, 15]));
