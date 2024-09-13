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
                console.error("Error: Cannot divide by zero!");
                return;
            }
            break;
        default:
            console.error("Error: Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
            return;
    }

    // Return the result for future use
    return result;
}

// Example usage
calculate(5, 10, 'add');        // The sum of 5 and 10 is: 15
calculate(10, 4, 'subtract');   // The difference between 10 and 4 is: 6
calculate(3, 7, 'multiply');    // The product of 3 and 7 is: 21
calculate(20, 4, 'divide');     // The quotient of 20 divided by 4 is: 5
calculate(20, 0, 'divide');     // Error: Cannot divide by zero!
calculate(10, 4, 'modulus');    // Error: Invalid operation
