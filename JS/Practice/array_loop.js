// 1️⃣ Create array and print first & last element
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "orange"

// 2️⃣ Add "grape" to end, "mango" to start
fruits.push("grape");
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana", "orange", "grape"]

// 3️⃣ Check length
console.log("The number of fruits is: " + fruits.length); // 5

// 4️⃣ Replace "banana" with "kiwi"
fruits[2] = "kiwi";
console.log(fruits); // ["mango", "apple", "kiwi", "orange", "grape"]




// 5️⃣ For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6️⃣ For...of loop
for (let fruit of fruits) {
  console.log(fruit);
}

// 7️⃣ forEach + uppercase
fruits.forEach(fruit => {
  console.log(fruit.toUpperCase());
});




let numbers = [5, 10, 15, 20];

// 8️⃣ Add 25
numbers.push(25);
console.log(numbers); // [5, 10, 15, 20, 25]

// 9️⃣ Remove last number
let removed = numbers.pop();
console.log(removed); // 25
console.log(numbers); // [5, 10, 15, 20]

// 🔟 Remove first, add 0 to start
let firstRemoved = numbers.shift(); // removes 5
numbers.unshift(0); // adds 0
console.log(numbers); // [0, 10, 15, 20]

// 1️⃣1️⃣ Check if 15 is in array
console.log(numbers.includes(15)); // true

// 1️⃣2️⃣ Find index of 20
console.log(numbers.indexOf(20)); // 3






// 1️⃣3️⃣ Slice last two numbers
let lastTwo = numbers.slice(-2);
console.log(lastTwo); // [15, 20]

// 1️⃣4️⃣ Splice: remove second element
let spliced = numbers.splice(1, 1); // remove 1 element at index 1
console.log(spliced); // [10]
console.log(numbers); // [0, 15, 20]





// 1️⃣5️⃣ Double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [0, 30, 40]

// 1️⃣6️⃣ Numbers > 10
let greaterThan10 = numbers.filter(num => num > 10);
console.log(greaterThan10); // [15, 20]

// 1️⃣7️⃣ Find sum
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 35





let nums = [30, 5, 12, 100];

// 1️⃣8️⃣ Ascending
nums.sort((a, b) => a - b);
console.log(nums); // [5, 12, 30, 100]

// 1️⃣9️⃣ Descending
nums.sort((a, b) => b - a);
console.log(nums); // [100, 30, 12, 5]

// 2️⃣0️⃣ Reverse
nums.reverse();
console.log(nums); // [5, 12, 30, 100]





let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 2️⃣1️⃣ Print middle number
console.log(matrix[1][1]); // 5

// 2️⃣2️⃣ Print all numbers
for (let row of matrix) {
  for (let num of row) {
    console.log(num);
  }
}





let students = ["John", "Ali", "Emma", "John", "Emma"];

// Remove duplicates
let unique = [...new Set(students)];

// Sort
unique.sort();
console.log(unique); // ["Ali", "Emma", "John"]




// 2️⃣4️⃣ Flatten
let nested = [1, 2, [3, 4, [5, 6]]];
let flat = nested.flat(2);
console.log(flat); // [1, 2, 3, 4, 5, 6]

// 2️⃣5️⃣ Combine arrays
let arr1 = [1, 2];
let arr2 = [3, 4];

let combined1 = arr1.concat(arr2);
console.log(combined1); // [1, 2, 3, 4]

let combined2 = [...arr1, ...arr2];
console.log(combined2); // [1, 2, 3, 4]
