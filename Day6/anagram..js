function isAnagram(s, t) {
  let isTrue;
  for (let i = 0; i < t.length; i++) {
    if (s.includes(t[i])) {
      isTrue = true;
    } else {
      isTrue = false;
      break;
    }
  }

  return isTrue;
}

console.log("isAnagram >>>>", isAnagram("aabb", "bbaa"));
