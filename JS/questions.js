// Problem: Create an array containing diffrent types of teas.
const teas = [
  "Green Tea",
  "Black tea",
  "Oolong Tea",
  "White Tea",
  "Herbal tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas.
const index = teas.indexOf("Oolong Tea");

if (index > -1) {
  teas.splice(index, 1);
}

// Problem: Filter the list to only include teas that are caffinated.
const caffinatedTeas = teas.filter((tea) => tea !== "Herbal tea");

// Problem: Short the list of teas in alphabetical order.
teas.sort();

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffinated (excluding "Herbal Tea").
let caffinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal tea") {
    caffinatedMyTeas++;
  }
}

// Problem: Use a for loop to create a new array with all teas names in uppercase.
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}

// Problem: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}

// Problem: Use a for loop to reverse the order of the teas in the array.
const reversedArray = [];
for(let i = teas.length - 1; i >= 0; i--){
    reversedArray.push(teas[i])
}
