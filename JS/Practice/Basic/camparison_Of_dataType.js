0 == false        // true → false is coerced to 0
0 === false       // false → different types: number vs boolean

'42' == 42        // true → '42' is coerced to number 42
'42' === 42       // false → string vs number

null == undefined // true → special rule: only equal to each other
null === undefined// false → different types




'hello' === 'hello'    // true
42 == 42               // true
true === true          // true



let a = { value: 1 };
let b = { value: 1 };

a === b    // false → different objects, even if content matches
a == b     // false → same reason



'5' < 10     // true → '5' becomes 5
true < 2     // true → true becomes 1



'apple' < 'banana'   // true
'25' < '3'           // true → because '2' comes before '3'




null == undefined      // true → special rule
null === undefined     // false

null > 0               // false
null >= 0              // true → null becomes 0
undefined > 0          // false → undefined becomes NaN
undefined == 0         // false → undefined only == null
