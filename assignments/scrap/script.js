const number = 12;
const string = 'word';
const condition = true;
const zero = null;

function addNumbers(num1, num2) {
  // Calculate the sum
  const sum = num1 + num2;

  // Log the result
  console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

  // Return the sum
  return sum;
}

function button() {
  const randomNumber = Math.floor(Math.random() * number);
  console.log(randomNumber);

  return;
  if (condition === false) {
    console.log('Condition is false');
  } else {
    console.log('Condition is true');
  }

  return randomNumber;
}

button();

const divElement = () => {};

// Function to perform basic arithmetic operations
function calculate(num1, num2, operation) {
  let result;

  // Perform different operations based on the 'operation' parameter
  switch (operation) {
    case 'add':
      result = num1 + num2;
      console.log(`The sum of ${num1} and ${num2} is: ${result}`);
      break;
    case 'subtract':
      result = num1 - num2;
      console.log(`The difference between ${num1} and ${num2} is: ${result}`);
      break;
    case 'multiply':
      result = num1 * num2;
      console.log(`The product of ${num1} and ${num2} is: ${result}`);
      break;
    case 'divide':
      if (num2 !== 0) {
        result = num1 / num2;
        console.log(`The quotient of ${num1} divided by ${num2} is: ${result}`);
      } else {
        console.error('Error: Cannot divide by zero!');
        return;
      }
      break;
    default:
      console.error(
        "Error: Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.",
      );
      return;
  }

  // Return the result for future use
  return result;
}

// Example usage
calculate(5, 10, 'add'); // The sum of 5 and 10 is: 15
calculate(10, 4, 'subtract'); // The difference between 10 and 4 is: 6
calculate(3, 7, 'multiply'); // The product of 3 and 7 is: 21
calculate(20, 4, 'divide'); // The quotient of 20 divided by 4 is: 5
calculate(20, 0, 'divide'); // Error: Cannot divide by zero!
calculate(10, 4, 'modulus'); // Error: Invalid operation

for (let i = 1; i <= 100, i++; ) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('pop');
}

for (let j = 1; j <= 1000, j++; ) {
  if (i % 4 === 0 && i % 7 === 0) console.log('PooButt');
  else if (i % 4 === 0) console.log('Poo!');
  else if (i % 7 === 0) console.log('Butt!');
}

// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"

// 2. Find the Largest Number in an Array
function findLargestNumber(arr) {
  return Math.max(...arr);
}
console.log(findLargestNumber([3, 8, 2, 7, 9])); // Output: 9

// 3. Palindrome Checker
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('hello')); // Output: false

// 4. Sum of Array Elements
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 5. Factorial of a Number
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorial(5)); // Output: 120

// 6. Find the Longest Word in a String
function findLongestWord(str) {
  const words = str.split(' ');
  let longest = '';
  words.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return longest;
}
console.log(findLongestWord('The quick brown fox jumps over the lazy dog')); // Output: "jumps"

// 7. FizzBuzz Exercise
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15); // Output: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

// 8. Flatten a Nested Array
function flattenArray(arr) {
  return arr.flat();
}
console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]

// 9. Count Vowels in a String
function countVowels(str) {
  const vowels = 'aeiou';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels('Hello World')); // Output: 3

// 10. Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 11. Merge Two Arrays and Sort Them
function mergeAndSort(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeAndSort([3, 1, 4], [6, 2, 5])); // Output: [1, 2, 3, 4, 5, 6]

// 12. Find the Index of an Element
function findIndex(arr, target) {
  return arr.indexOf(target);
}
console.log(findIndex([10, 20, 30, 40], 30)); // Output: 2

// 13. Check if an Array is a Subset of Another Array
function isSubset(arr1, arr2) {
  return arr2.every((elem) => arr1.includes(elem));
}
console.log(isSubset([1, 2, 3, 4, 5], [2, 3])); // Output: true
console.log(isSubset([1, 2, 3, 4, 5], [6, 7])); // Output: false

// 14. Convert Array of Objects to Object
function arrayToObject(arr) {
  return arr.reduce((obj, item) => {
    obj[item.key] = item.value;
    return obj;
  }, {});
}
console.log(
  arrayToObject([
    { key: 'name', value: 'John' },
    { key: 'age', value: 30 },
  ]),
);
// Output: { name: 'John', age: 30 }

// 15. Convert Number to Binary
function convertToBinary(num) {
  return num.toString(2);
}
console.log(convertToBinary(10)); // Output: "1010"

// 16. Sum of Digits in a Number
function sumDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((acc, curr) => acc + Number(curr), 0);
}
console.log(sumDigits(123)); // Output: 6

// 17. Find the Average of an Array
function findAverage(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3

// 18. Filter Even Numbers from an Array
function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

// 19. Find Prime Numbers in an Array
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findPrimes(arr) {
  return arr.filter(isPrime);
}
console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 3, 5, 7]

// 20. Fibonacci Sequence
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
