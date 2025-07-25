// Explicit conversion  ( I control it )

Number('45')   // 42 (stringm -> number)
String(34)      // '34' (number -> string)
Boolean('hello')   // true
parseInt('123abc')   // 123


// Implicit conversion (JS decides)
'5' * 2        // 10 (string → number)
'5' - 2        // 3  (string → number)
'5' + 2        // '52' (number → string)




// String Conversion
let value = true
console.log(typeof value);  // boolean

value = String(value)
console.log(typeof value);   // string



// Numeric Conversion

console.log( "6" / "2" );  // 3, strings are converted to numbers

let str = "123"
console.log(typeof str);  // string

let num = Number(str)  // becomes a number 123

console.log(typeof num);

let age = Number("Prabhat")
console.log(typeof age);  // NaN,  conversion failed


// Please note that null and undefined behave differently here: null becomes zero while undefined becomes NaN
console.log( Number("    123    ") );  // 123
console.log( Number(" 123s") );     // NaN (error reading a number at "z")
console.log( Number(true) );     // 1
console.log( Number(false) );     // 0




// Boolean Conversion

console.log(Boolean(1));  // true
console.log(Boolean(0));    // false  
console.log(Boolean('hello'));   // true
console.log(Boolean(''));   // false
console.log(Boolean(' '));  // true


// Please note: the string with zero "0" is true

console.log(Boolean('0'));  // true
console.log(Boolean(' '));  // true