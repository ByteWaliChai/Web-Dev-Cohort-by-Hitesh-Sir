// Object literal
const user = { name: "Prabhat", age: 25 };

// Object constructor
const student = new Object({ name: "Aman", course: "JS" });

// Using Object.create
const proto = { greet() { console.log("Hello"); } };
const newObj = Object.create(proto);
newObj.greet(); // "Hello"

// Using class syntax
class Person {
  constructor(name) {
    this.name = name;
  }
}
const p1 = new Person("Prabhat");




const obj = { a: 1, b: 2, c: 3 };

// Keys, values, entries
console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [["a",1], ["b",2], ["c",3]]

// Object.freeze
Object.freeze(obj);
obj.a = 99; // No change
console.log(obj.a); // 1

// Object.seal
const sealedObj = { name: "JS" };
Object.seal(sealedObj);
sealedObj.name = "JavaScript"; // Allowed
sealedObj.newProp = "no"; // Not allowed

// Object.defineProperty
const myObj = {};
Object.defineProperty(myObj, "secret", {
  value: 42,
  writable: false, // can't change
  enumerable: false, // won't show in loops
  configurable: false // can't delete
});
console.log(myObj.secret); // 42



const dynamicKey = "score";
const game = {
  name: "Cricket",
  [dynamicKey]: 100
};
console.log(game.score); // 100





const person = { name: "Prabhat", age: 25, city: "Patna" };
const { name, ...rest } = person;
console.log(name); // Prabhat
console.log(rest); // { age: 25, city: "Patna" }





const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // {a:1, b:2}





function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hi, I'm ${this.name}`);
};

const p0 = new Person("Prabhat");
p0.sayHello(); // Hi, I'm Prabhat




console.log(p1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true



Person.prototype.walk = function () {
  console.log(`${this.name} is walking`);
};
p1.walk(); // Prabhat is walking




Array.prototype.push = function (...items) {
  console.log("Custom push called");
  return items.length;
};

const arr = [];
arr.push(1, 2); // Custom push called




function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  console.log(`${this.type} makes a sound`);
};

function Dog(name) {
  Animal.call(this, "Dog");
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog1 = new Dog("Buddy");
dog1.speak(); // Dog makes a sound




if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined) {
        callback.call(thisArg, this[i], i, this);
      }
    }
  };
}





if (!Array.prototype.map) {
  Array.prototype.map = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback.call(thisArg, this[i], i, this));
    }
    return result;
  };
}




if (!Array.prototype.filter) {
  Array.prototype.filter = function (callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}







if (!Object.assign) {
  Object.assign = function (target, ...sources) {
    sources.forEach(source => {
      for (let key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    });
    return target;
  };
}




if (typeof Promise !== "function") {
  function PromisePolyfill(executor) {
    let onResolve, onReject;
    this.then = function (callback) {
      onResolve = callback;
      return this;
    };
    this.catch = function (callback) {
      onReject = callback;
      return this;
    };
    function resolve(value) {
      if (onResolve) onResolve(value);
    }
    function reject(reason) {
      if (onReject) onReject(reason);
    }
    executor(resolve, reject);
  }
  window.Promise = PromisePolyfill;
}
