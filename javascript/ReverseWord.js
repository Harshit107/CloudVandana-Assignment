function reverse(s) {
  const words = s.split(" ");
  const revWord = words.map((word) => {
    return word.split("").reverse().join("");
  });

  return revWord.join(" ");
}

const input = "This is a sunny day";
console.log("Given words:", input);
const reversedWords = reverse(input);
console.log("Reversed words:", reversedWords);
