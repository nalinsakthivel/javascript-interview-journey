// const arr = [1, 2, 3];

// const result = arr.map((num) => {
//   if (num > 1) {
//     return num * 2;
//   }
// });

// console.log(result);

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function countVowels(str) {
  let vowelsInWords = [];

  for (let i = 0; i < vowels.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (vowels[i] == str[j]) {
        vowelsInWords.push(str[j]);
      }
    }
  }

  return {
    count: vowelsInWords.length,
    vowels: vowelsInWords,
  };
}

console.log("countVowels >>>>", countVowels("OpenAI"));
