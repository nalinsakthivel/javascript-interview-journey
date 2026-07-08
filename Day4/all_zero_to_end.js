function moveZeroes(arr) {
  let arr1 = [];
  let arr2 = [];

  for (let val of arr) {
    if (val === 0) {
      arr1.push(val);
    } else {
      arr2.push(val);
    }
  }

  return [...arr2, ...arr1];
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
