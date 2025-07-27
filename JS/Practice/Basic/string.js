// Create Strings

const string1 = "A string primitive"
const string2 = "Also a string primitive"
const string3 = "Yet another string primitive"

const string4 = new String("A String object")


// Character access
// console.log(string1.charAt(2));

// console.log(string2[0]);


// Comparing strings
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}


function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}
// console.log(areEqualCaseInsensitive(string1, string1));



