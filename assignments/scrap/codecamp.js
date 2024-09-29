// 1. Square Each Number in an Array
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num ** 2);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const students = [5, 33, 2323, 6, 466];
const doubleStudents = students.map((num) => num ** 2);
console.log(doubleStudents);

// 2. Convert Strings to Uppercase
const names = ['john', 'jane', 'doe'];
const upperCaseNames = names.map((name) => name.toUpperCase());
console.log(upperCaseNames); // Output: ['JOHN', 'JANE', 'DOE']

const classMates = [
  'KAYDEN',
  'VOANN',
  'KEVIN',
  'RODNEY',
  'JACOB',
  'ZAC',
  'TIGER',
];
const lowerClassMates = classMates.map((name) => name.toLowerCase());
console.log(lowerClassMates);

// 3. Extract Object Properties
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];
const userNames = users.map((user) => user.name);
console.log(userNames); // Output: ['Alice', 'Bob', 'Charlie']

const mates = [
  { name: 'Kayden', age: 19 },
  { name: 'Voann', age: 19 },
  { name: 'Matt', age: 20 },
  { name: 'Rodney', age: 19 },
  { name: 'Kevin', age: 20 },
  { name: 'Matt', age: 20 },
  { name: 'Ahmed', age: 18 },
];
const matesNames = mates.map((mates) => mates.age);
console.log(matesAge);

// 4. Add a Property to Each Object
const products = [
  { product: 'Laptop', price: 1000 },
  { product: 'Phone', price: 500 },
];
const updatedProducts = products.map((product) => ({
  ...product,
  inStock: true,
}));
console.log(updatedProducts);
/* Output:
[
  { product: 'Laptop', price: 1000, inStock: true },
  { product: 'Phone', price: 500, inStock: true }
]
*/

// 5. Get the Length of Each String
const words = ['apple', 'banana', 'cherry'];
const wordLengths = words.map((word) => word.length);
console.log(wordLengths); // Output: [5, 6, 6]

// 6. Convert Array of Arrays into Object Array
const keyValuePairs = [
  ['name', 'Alice'],
  ['age', 25],
  ['job', 'developer'],
];
const arrayToObject = keyValuePairs.map(([key, value]) => ({ [key]: value }));
console.log(arrayToObject);
/* Output:
[
  { name: 'Alice' },
  { age: 25 },
  { job: 'developer' }
]
*/

// 7. Calculate Final Prices with Tax
const prices = [10, 20, 30];
const taxRate = 0.1; // 10% tax
const finalPrices = prices.map((price) => price + price * taxRate);
console.log(finalPrices); // Output: [11, 22, 33]

// 8. Replace Specific Elements in an Array
const arr = [1, 2, 3, 2, 4, 2];
const newArr = arr.map((num) => (num === 2 ? 'replaced' : num));
console.log(newArr); // Output: [1, 'replaced', 3, 'replaced', 4, 'replaced']

// 9. Convert Boolean Values to Strings
const booleanArr = [true, false, true, false];
const stringArr = booleanArr.map((bool) => (bool ? 'Yes' : 'No'));
console.log(stringArr); // Output: ['Yes', 'No', 'Yes', 'No']

// 10. Calculate Areas of Circles
const radii = [1, 2, 3, 4];
const areas = radii.map((radius) => Math.PI * radius ** 2);
console.log(areas); // Output: [3.14, 12.57, 28.27, 50.27] (approximately)

// 11. Capitalize First Letter of Each String
const lowerCaseWords = ['javascript', 'map', 'function'];
const capitalizedWords = lowerCaseWords.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1),
);
console.log(capitalizedWords); // Output: ['Javascript', 'Map', 'Function']

// 12. Transform Nested Arrays (Double each number)
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattened = nestedArr.map((arr) => arr.map((num) => num * 2));
console.log(flattened); // Output: [[2, 4], [6, 8], [10, 12]]

// 13. Conditional Mapping (Double numbers greater than 10)
const numbersForCondition = [5, 10, 15, 20];
const modifiedNumbers = numbersForCondition.map((num) =>
  num > 10 ? num * 2 : num,
);
console.log(modifiedNumbers); // Output: [5, 10, 30, 40]

// 14. Chain map(), filter(), and reduce()
const numbersChain = [1, 2, 3, 4, 5];
const result = numbersChain
  .map((num) => num * 2) // Double each number
  .filter((num) => num > 5) // Keep only numbers greater than 5
  .reduce((sum, num) => sum + num, 0); // Sum the remaining numbers
console.log(result); // Output: 18

// 15. Calculate Grades
const scores = [80, 90, 75, 60, 95];
const grades = scores.map((score) =>
  score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D',
);
console.log(grades); // Output: ['B', 'A', 'C', 'D', 'A']

// 16. Convert Temperatures from Celsius to Fahrenheit
const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map((temp) => (temp * 9) / 5 + 32);
console.log(fahrenheitTemps); // Output: [32, 50, 68, 86]

// 17. Extract the First Character of Each String
const stringArray = ['apple', 'banana', 'cherry'];
const firstChars = stringArray.map((word) => word.charAt(0));
console.log(firstChars); // Output: ['a', 'b', 'c']

// 18. Round Numbers in an Array
const floatNumbers = [1.2, 2.5, 3.8, 4.3];
const roundedNumbers = floatNumbers.map((num) => Math.round(num));
console.log(roundedNumbers); // Output: [1, 3, 4, 4]

// 19. Repeat Each String N Times
const stringsToRepeat = ['a', 'b', 'c'];
const repeatedStrings = stringsToRepeat.map((str, index) =>
  str.repeat(index + 1),
);
console.log(repeatedStrings); // Output: ['a', 'bb', 'ccc']

// 20. Convert Array of Strings to Numbers
const stringNumbers = ['10', '20', '30'];
const numberArray = stringNumbers.map(Number);
console.log(numberArray); // Output: [10, 20, 30]
