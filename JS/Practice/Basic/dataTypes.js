// Primitive types

// Number
let myAge = 42;

// String
let myNme = "Panakj"

// Boolean
let buyCar = false  // true

// Null
let user = null;

// Undefined
let myName;

// Symbol
let sym = Symbol('Id')

// BigInt
let big = 123499585894958584950n;

console.log(typeof myAge);
console.log(typeof myNme);
console.log(typeof buyCar);
console.log(typeof user);   // historical bug
console.log(typeof myName);
console.log(typeof sym);
console.log(typeof big);




// Non-primitive types (Objects)

// Object: collection of key-value pairs

let user0 = {
    name: 'Prabaht',
    age: 25
}

console.log( typeof user0 )
console.log( typeof [1, 2, 3, 4] );
console.log( typeof function(){} );



// Special objects: Arrays, Functions, Dates, RegExp, Maps, Sets, EventCounts.


// Because it’s dynamically typed, type is decided at runtime
let data = 42;      // Number
data = 'hello';     // Now String


let age = "5" - 2;    // 3 (string coerced to number)
age = '5' + 2;  // '52'  (nuber coerced to string)
