// Object Literal Notation
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hello, I'm ${this.name}!`;
    }
};
console.log(person.name); // Output: Alice
console.log(person.greet()); // Output: Hello, I'm Alice!


// Using the Object Constructor
const person0 = new Object();
person0.name = "Bob";
person0.age = 30;
console.log(person0); // Output: { name: "Bob", age: 30 }


// Using Object.create(): Creates an object with a specified prototype.
const proto = { greet: function() { return "Hello!"; } };
const obj = Object.create(proto);
console.log(obj.greet()); // Output: Hello!

// Accessing Properties
const key = "name";
console.log(person[key]); // Output: Alice

// Adding/Modifying Properties
person.job = "Developer"; // Add new property
person.age = 26; // Modify existing property
console.log(person); // Output: { name: "Alice", age: 26, greet: [Function], job: "Developer" }

// Deleting Properties
delete person.job;
console.log(person.job); // Output: undefined

