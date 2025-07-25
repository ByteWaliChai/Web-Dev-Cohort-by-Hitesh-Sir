// Var

/* 
It’s function-scoped
It supports hoisting
*/    
function demo() {
    console.log(a);  // undefined (due to hoisting)
    var a = 10;
    console.log(a);  // 10
}


// Hoisting confusion
// No block scope
if (true) {
    var x = 5;
}
console.log(x);   // 5 - still accessible



// Redeclaration
var name = "Prabhat";
var name = "Pankaj";   // No error, just overwrites



// Let

// Block-scoped
// Still hoisted, but not initialized until the declaration is reached
{
    console.log(a);    // ReferenceError: Cannot access 'a' before initialization
    let a = 10;
}



// Clearer, safer scoping
// Cannot redeclare the same variable in the same scope
let name = 'Prabhat';
// let name = 'Pankaj'; // Error: Identifier 'name' has already been declared




// Const

// block-scoped
// Must be initialized at declaration
// cannot reassign the variable
const pi = 3.1416;
// pi = 3; // TyypeError: Assignment to constant varible



// For objects and arrays, the binding is constant, not the content
const user = { name: 'Prabhat' };
user.name = 'Pankaj';  // this is fine
// user = { name: "Mayank" }   // // Error



