// ________________Exercise 1 _________________________________________
//Write a function sumArray(arr) that takes an array of numbers and returns the sum of all numbers.

const numbers = [5, 10, 15, 20];

function sumArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }

  return sum;
}
console.log(sumArray(numbers));

//____________________________Exercise 2_________________________________________

// . Given an array of names, write a function longNames(names) that returns an array of names longer than 4 characters.  Hint: You can use filter() and string properties.
const names = ["Ali", "Sara", "Omar", "Lina", "Mohamed"];

function longNames(names) {
  return names.filter((nam) => nam.length >= 4);
}
console.log(longNames(names));

// _________________________Exercise 3_________________________________________

function countRepeatedWords(sentence) {
  let words = sentence.split(" ").filter((sentence) => sentence != "");

  let namesCountList = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = namesCountList[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    namesCountList[words[i]] = count + 1;
  }
  return namesCountList;
}

console.log(countRepeatedWords("hello World hello"));
