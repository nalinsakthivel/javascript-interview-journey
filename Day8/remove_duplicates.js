function removeDuplicates(nums) {
  const nonDuplicateArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!nonDuplicateArr.includes(nums[i])) {
      nonDuplicateArr.push(nums[i]);
    }
  }
  return nonDuplicateArr.length;
}

console.log(
  "removeDuplicates >>>",
  removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]),
);

// correct code

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const k = removeDuplicates(nums);

console.log(k); // 5
console.log(nums.slice(0, k)); // [0,1,2,3,4]
