//  Create an object 'person' with name, age, and city
let person = {
  name: "Prabhat",
  age: 25,
  city: "Bihar"
};

// Print name and age
console.log(person.name); // "Prabhat"
console.log(person.age);  // 25

// Access using bracket notation
console.log(person["city"]); // "Bihar"


// Add new property: profession
person.profession = "Devloper";

// Update age
person.age = 26;

// Delete city
delete person.city;

console.log(person);
// { name: "Prabhat", age: 26, profession: "Devloper" }




let student = {
  name: "Bob",
  grade: "A",
  age: 20
};

// Use for...in loop
for (let key in student) {
  console.log(key + ": " + student[key]);
}
// Output:
// name: Bob
// grade: A
// age: 20




// Create object with dynamic key
let dynamicKey = "score";

let game = {
  [dynamicKey]: 99,
  level: 5
};

console.log(game.score); // 99





// Add method to object
let car = {
  brand: "Range Rover",
  model: "Autobiography 3.0 SWB PHEV",
  start: function() {
    console.log("Car has started");
  }
};

car.start(); // Car has started

// Use 'this' keyword
car.describe = function() {
  console.log("This is a " + this.brand + " " + this.model);
};

car.describe(); // This is a Range Rover Autobiography 3.0 SWB PHEV



// Object inside object
let company = {
  name: "TechCorp",
  location: "Bangalore",
  ceo: {
    name: "Jane Doe",
    age: 40
  }
};

// Access nested properties
console.log(company.ceo.name); // "Jane Doe"
console.log(company["ceo"]["age"]); // 40



// Extract values into variables
let user = {
  username: "dev123",
  email: "dev@example.com"
};

let { username, email } = user;
console.log(username); // dev123
console.log(email);   // dev@example.com





let book = {
  title: "JS Basics",
  pages: 150
};

// Get all keys
console.log(Object.keys(book)); // ["title", "pages"]

// Get all values
console.log(Object.values(book)); // ["JS Basics", 150]

// Get entries (key-value pairs)
console.log(Object.entries(book));
// [["title", "JS Basics"], ["pages", 150]]





let obj1 = {a: 1, b: 2};
let obj2 = {b: 3, c: 4};

// Merge using spread
let merged = {...obj1, ...obj2};
console.log(merged); // {a: 1, b: 3, c: 4}

// Shallow copy
let copy = {...obj1};
console.log(copy); // {a: 1, b: 2}




let settings = {theme: "dark"};

// Freeze: prevent changes
Object.freeze(settings);
settings.theme = "light"; // won't change
console.log(settings.theme); // "dark"

// Seal: prevent adding/removing keys but allow value change
let profile = {name: "Leo"};
Object.seal(profile);
profile.name = "Leonardo"; // allowed
profile.age = 30;          // won't add
console.log(profile); // {name: "Leonardo"}




// Create object with prototype
let animal = {
  sound() {
    console.log("Some generic sound");
  }
};

let dog = Object.create(animal);
dog.sound(); // Some generic sound

dog.bark = function() {
  console.log("Woof!");
};
dog.bark(); // Woof!



// Store user profile
let userProfile = {
  username: "coder01",
  followers: 120,
  isOnline: true,
  bio: "Loves JavaScript"
};

// Add method to display profile
userProfile.display = function() {
  console.log(this.username + ": " + this.bio);
};

userProfile.display(); // coder01: Loves JavaScript




let a = { x: 1 };
let b = a; // b points to same object
b.x = 99;
console.log(a.x); // 99




// Prototypes & Inheritance (Prototype Chain)
let dog = { bark() { console.log("Woof"); } };
let puppy = Object.create(dog);
puppy.bark(); // "Woof"




// Constructor Functions & new
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.brand); // "Toyota"




// Classes (syntactic sugar over prototypes)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I’m ${this.name}`);
  }
}

let p = new Person("Alice");
p.greet(); // Hello, I’m Alice




// Shallow vs Deep Copy
let obj = { name: "A", nested: { age: 20 } };
let copy0 = {...obj};

copy0.nested.age = 30;
console.log(obj.nested.age); // 30


// Dynamic property names & symbols
let key = "price";
let product = {
  name: "Pen",
  [key]: 10
};
console.log(product.price); // 10



// Objects as maps
let m = new Map();
let objKey = {};
m.set(objKey, "value");
console.log(m.get(objKey)); // "value"
