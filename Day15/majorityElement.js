function majorityElement(nums) {
  if (nums.length <= 1) {
    return nums[0];
  }

  let values = [];

  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];

    let filteredValues = nums.filter((item) => item == val);

    values.push({ num: val, count: filteredValues.length });
  }

  let sortedValues = values.sort((a, b) => a.count + b.count);

  return sortedValues[0].num;
}

console.log(majorityElement([5]));

//Correct one

function majorityElement(nums) {
  const count = {};

  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > nums.length / 2) {
      return num;
    }
  }
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
