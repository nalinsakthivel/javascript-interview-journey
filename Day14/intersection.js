function intersection(nums1, nums2) {
  let intersectionValues = [];

  for (let item of nums1) {
    let isNumPresent = nums2.includes(item);
    if (isNumPresent) {
      intersectionValues.push(item);
    }
  }

  return [...new Set(intersectionValues)];
}

console.log("intersection >>>", intersection([4, 9, 5], [9, 4, 9, 8, 4]));
