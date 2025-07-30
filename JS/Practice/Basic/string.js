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



// String primitives and String objects

const strPrim = "Prabaht";  // A literal is a string primitive
const strPrim2 = String(2)    // Coerced into the string primitive "1"
const strPrim3 = String(true)    // Coerced into the string primitive "true"
const strObj = new String(strPrim3)   // String with new returns a string wrapper object.


// console.log(typeof strPrim); // "string"
// console.log(typeof strPrim2); // "string"
// console.log(typeof strPrim3); // "string"
// console.log(typeof strObj); // "object"


const a1 = "2 + 2"   // creates a string primitive
const a2 = new String("2 + 2")     // creates a String object

// console.log(eval(a1));   // returns the number 4
// console.log(eval(a2));   // returns the string "2 + 2"


// console.log(eval(a2.valueOf()));   // returns the number 4


// at()
const sentence = "The at() method of String values takes an integer value and returns a new String"
console.log(sentence.at(10));
console.log(sentence.at(-10));


// charAt()
const sentence2 = "The charAt() method of String values returns a new string"
console.log(sentence2.charAt(7));
// console.log(sentence2.charAt(-1));



// charCodeAt()
const sentence3 = "The charCodeAt() method of String values returns an integer between 0 and 65535"
console.log(sentence3.charCodeAt(5));
