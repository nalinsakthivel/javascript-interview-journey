function reverseWords(sentence) {
  let splitSentence = sentence.split(" ");
  let reversedSentence = [];

  for (let i = splitSentence.length - 1; i >= 0; i--) {
    reversedSentence.push(splitSentence[i]);
  }

  return reversedSentence.join(" ");
}

console.log("reverseWords >>", reverseWords("I love JavaScript"));
