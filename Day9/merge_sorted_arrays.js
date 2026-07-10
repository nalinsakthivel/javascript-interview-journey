function mergeSortedArrays(arr1, arr2) {
  let finalArr = [];

  if (arr1.length == 0) {
    finalArr.push(...finalArr, ...arr2);
    return finalArr;
  }

  if (arr2.length == 0) {
    finalArr.push(...finalArr, ...arr1);
    return finalArr;
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] <= arr2[j]) {
        finalArr.push(arr1[i]);
      } else {
        finalArr.push(arr2[j]);
      }
    }
  }

  return finalArr;
}

console.log("mergeSortedArrays >>>>>", mergeSortedArrays([2, 3], [5, 6]));

// correct one

function mergeSortedArrays(arr1, arr2) {
  let result = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 2, 4], [1, 3, 4]));
