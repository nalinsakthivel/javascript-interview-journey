function missingNumber(nums) {
  let missing = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] > 1) {
      for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
        missing.push(j);
      }
    }
  }

  return missing;
}

console.log(missingNumber([0, 1, 3]));
