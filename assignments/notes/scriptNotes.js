// 1. Add two numbers
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// 2. FizzBuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}

// 3. Palindrome Check
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('fart')); // Output: false
console.log(isPalindrome('poop')); // Output: true

// 4. Factorial
function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 5. Find Longest Word
function longestWord(str) {
  return str
    .split(' ')
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      '',
    );
}
console.log(longestWord('The quick brown fox jumped over the lazy dog')); // Output: jumped

// 6. Prime Check
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return true;
}
console.log(isPrime(7)); // Output: true

// 7. Array Sum
function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// 8. Remove Duplicates
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5])); // Output: [1, 2, 3, 4, 5]

// 9. Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords('hello world')); // Output: "Hello World"

// 10. Reverse String
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello')); // Output: "olleh"

// 11. Find Max Number
function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([1, 2, 3, 4, 5])); // Output: 5

// 12. Count Object Properties
function countProperties(obj) {
  return Object.keys(obj).length;
}
console.log(countProperties({ name: 'John', age: 30, city: 'New York' })); // Output: 3

// 13. Flatten Nested Array
function flattenArray(arr) {
  return arr.reduce(
    (flat, toFlatten) =>
      flat.concat(
        Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten,
      ),
    [],
  );
}
console.log(flattenArray([1, [2, [3, 4], 5]])); // Output: [1, 2, 3, 4, 5]

// 14. Sum of Digits
function sumDigits(num) {
  return num
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}
console.log(sumDigits(1234)); // Output: 10

// 15. Count Vowels
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels('hello world')); // Output: 3

// 16. Random Hex Color
function randomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0')}`;
}
console.log(randomHexColor()); // Output: Random hex color

// 17. Fibonacci Sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) fib.push(fib[i - 1] + fib[i - 2]);
  return fib;
}
console.log(fibonacci(10)); // Output: First 10 Fibonacci numbers

// 18. Check if String Contains Only Digits
function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}
console.log(isOnlyDigits('12345')); // Output: true
console.log(isOnlyDigits('123a5')); // Output: false

// 19. Sort Numbers in Array
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortNumbers([3, 1, 4, 1, 5, 9])); // Output: [1, 1, 3, 4, 5, 9]

// 20. Merge Two Arrays
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(mergeArrays([1, 2, 3], [2, 3, 4])); // Output: [1, 2, 3, 4]

// 21. Check for Anagrams
function areAnagrams(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
}
console.log(areAnagrams('listen', 'silent')); // Output: true

// 22. Find Duplicates in Array
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  arr.forEach((num) => (seen.has(num) ? duplicates.add(num) : seen.add(num)));
  return [...duplicates];
}
console.log(findDuplicates([1, 2, 3, 4, 4, 5, 5, 6])); // Output: [4, 5]

// 23. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(f) {
  return ((f - 32) * 5) / 9;
}
console.log(fahrenheitToCelsius(100)); // Output: 37.7778

// 24. Check if Object is Empty
function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmptyObject({})); // Output: true
console.log(isEmptyObject({ name: 'Alice' })); // Output: false

// 25. Flatten Deeply Nested Array (Any Level)
function deepFlatten(arr) {
  return arr.flat(Infinity);
}
console.log(deepFlatten([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

// 26. Convert Array to Object
function arrayToObject(arr) {
  return arr.reduce((obj, item) => ({ ...obj, [item[0]]: item[1] }), {});
}
console.log(
  arrayToObject([
    ['name', 'Alice'],
    ['age', 25],
  ]),
); // Output: { name: 'Alice', age: 25 }

// 27. Get Random Element from Array
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomElement([1, 2, 3, 4, 5])); // Output: Random element from array

// 28. Remove Specific Element from Array
function removeElement(arr, elem) {
  return arr.filter((item) => item !== elem);
}
console.log(removeElement([1, 2, 3, 4], 3)); // Output: [1, 2, 4]

// 29. Sum of Array with Initial Value
function sumWithInitial(arr, initialValue) {
  return arr.reduce((acc, current) => acc + current, initialValue);
}
console.log(sumWithInitial([1, 2, 3, 4], 10)); // Output: 20

// 30. Convert String to Title Case
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt[0].toUpperCase() + txt.slice(1).toLowerCase(),
  );
}
console.log(toTitleCase('hello world, this is a test')); // Output: "Hello World, This Is A Test"

// 31. Get Intersection of Two Arrays
function arrayIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}
console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 32. Get Difference Between Two Arrays
function arrayDifference(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}
console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Output: [1]

// 33. Generate Random Number within a Range
function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(1, 10)); // Output: Random number between 1 and 10

// 34. Debounce Function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}
const logMessage = debounce(() => console.log('Hello'), 2000);
logMessage(); // Will only log "Hello" if 2 seconds pass without it being called again

// 35. Throttle Function
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}
const throttledLog = throttle(() => console.log('Throttled Hello'), 1000);
throttledLog(); // Throttles the function to only run once per second

// 36. Chunk Array into Smaller Arrays
function chunkArray(arr, size) {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]

// 37. Get Unique Values from Two Arrays
function getUnique(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
console.log(getUnique([1, 2, 3], [3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// 38. Check if String is a Substring
function isSubstring(str, subStr) {
  return str.includes(subStr);
}
console.log(isSubstring('hello world', 'world')); // Output: true
console.log(isSubstring('hello world', 'worlds')); // Output: false

// 39. Generate Array of Random Integers
function generateRandomArray(length, min, max) {
  return Array.from({ length }, () => randomInRange(min, max));
}
console.log(generateRandomArray(5, 1, 10)); // Output: [Random array of integers]

// 40. Shuffle Array
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffleArray([1, 2, 3, 4, 5])); // Output: Random shuffled array
