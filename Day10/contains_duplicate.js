function containsDuplicate1(nums) {
  let isTrue;
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (nums[i] == nums[j]) {
        isTrue = true;
        break;
      } else {
        isTrue = false;
      }
    }
  }
  return isTrue;
}

function containsDuplicate(nums) {
  const newNums = [...new Set(nums)];
  return newNums.length != nums.length;
}

console.log("containsDuplicate >>", containsDuplicate([2, 3, 1]));
console.log("containsDuplicate >>", containsDuplicate1([2, 3, 1]));
