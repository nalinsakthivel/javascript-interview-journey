function longestWord(sentence) {
  const splitWord = sentence.split(" ");

  let largestWord;
  let largestIndex = 0;

  for (index in splitWord) {
    if (splitWord[index].length > largestIndex) {
      largestIndex = splitWord[index].length;
      largestWord = splitWord[index];
    }
  }

  return largestWord;
}

console.log("longestWord >>>", longestWord("The quick brown fox"));

// Recommended one

function longestWord(sentence) {
  const words = sentence.split(" ");

  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest;
}
