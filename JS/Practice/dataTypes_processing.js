// Varibles

let admin;
let name0;

name0 = 'Johan';
admin = name;0

// console.log(admin);


// Data Types:

// Number
let n = 123;
n = 12.453;

console.log( 1 / 0 );  // Infinity
console.log( Infinity ); // Infinity
console.log( "not a number" / 2 ); // NaN, such division is erroneous


// BigInt
let bigInt = 1234567890123456789012345678901234567890n;


// String
let str1 = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;


// Boolean (logical type)
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked


// Null
let age0 = null;


// Undefined
let myName;


console.log("prabhat singh");

var score = 45;

var score = 40;
console.log(score); //Redeclare


let a = 34;
a = 56
console.log(a);

let x;
x =53
console.log(x);

let num0 = null;
num0 = 59;
console.log(num0);

let nameOur = "Pankaj"
console.log(nameOur);


const full = 45;
// const start; ---> Not do  this
console.log(full);



//STRINGS :

let firstName = "Prabhat";
let middleName = "Kumar";
let lastName = "Panakj";

console.log(firstName,middleName,lastName);

// STRING CONCATINATION  :
      // Method 1st Using '+' Operator

      let js = "I";
      let jsMiddle = "Love";
      let jsLast = "javaScript";
      let fullName = js + " " + jsMiddle + " " + jsLast;

      console.log(js+jsMiddle+jsLast);
      console.log(fullName);
      console.log(js+" "+jsMiddle+" "+jsLast);

    //   Method 2nd Using Template Literal  :

    let sportFirst = "Hockey Man";
    let sportSecond = "Cricketer";
    let sportThird = "Badminton Man";
    let sportFinal = `I Want To Become ${sportFirst} ${sportSecond} ${sportThird}`;

    console.log(`I Want To Become ${sportFirst} ${sportSecond} ${sportThird}`);
    console.log(sportFinal);

    // Getting String Character :

    console.log(sportFirst[0]);
    console.log(sportSecond[5]);
    console.log(sportThird[10]);
    console.log(sportThird[15]);  //Undefined

    //String Methods :

    console.log(sportFinal.toLocaleLowerCase());
    console.log(sportFinal.toUpperCase());


    console.log(sportFinal.indexOf("W"));
    console.log(sportFinal.indexOf("w")); //Case Sensitive
    console.log(sportFinal.indexOf("Become"));
    console.log(sportFinal.indexOf("become")); //Case Sensitive 

    //Trim Methods : 

    let hobbies = '     Coding Reading Running    ';
    let result = hobbies.trim();

    console.log(hobbies);
    console.log(hobbies.trim());
    console.log(result);

    console.log(result.lastIndexOf("Running"))
    console.log(result.lastIndexOf("running")) //Case Sensitive
    
    //Includes Methods :

    console.log(result.includes("Reading"));
    console.log(result.includes("reading")); //Case Sensitive

    //Slice Method :

    let code = "Wowprogrammer"
    let totalCode = code.slice(0,10); //Exculiding last one (0-9).


    console.log(totalCode); 
    console.log(code.slice(0,6)); //Exculiding last one (0-5).
    console.log(code.slice(0,4)); //Exculiding last one (0-3).

    //Imp Note Does Not Mutate Original Arry.
    console.log("Original String = ", code);
    console.log("Extracted String = ", totalCode);


    //String "Split" Method :

    let favoriteColor = "Brown Blue Black Gray";

    let arrcolors = favoriteColor.split(' ');

    console.log(arrcolors)
    console.log(favoriteColor.split(' ')); //String to Array Converson


    let play = "Hockey, Cricket, Badminton";
    console.log(play.split(','))  //Sting to Array Converson


    //JavaScript String Are Immutable : 
    let str = "Hello";
    str[0] = "p";
    str[1] = "q";
//There will be no change in "str" Variable.

console.log(str);

str = str + "Programmer";

console.log(str);

//Numbers :
//Mathematical Operators ---> *, /, %, **, +, - 

let scoreNum = 50;
 
let totalScore = scoreNum/2;  //Given Quotient

console.log(totalScore);

let remainder = scoreNum%2; //Given Remainder

console.log(remainder);

//Mathmatical Expression :

let one = scoreNum*2+(4*3)-8/2%4; // 100 + 12 - 0 = 112
//Using Priority And Precedence :
  // 1. () --- Brackets
  // 2. ** --- Power Operator
  // 3. *, /, % --- (From left to Right)
  // 4. +, - --- (From left to right)

  console.log(one);

  //Concatintion of Numbers into String :

  let resultLine = "My Score is = " + one;

  console.log(resultLine);
    
    

console.log("Hello World")

//Loose Equality(==) v/s Strict Equality(===)
//Loose Equality(==) :
let age = 22;

console.log(age=="22"); //Focus on value but not type
console.log(age!="22");


//Strict Equality(===) :
let num = 23;

console.log(num==="23"); //Focus on Both valu and its type
console.log(num!=="23");


//Type Conversion :
let stringType = "55";

console.log(stringType, typeof stringType);

//Number Method : 
let name = "Hello"
let numberType = Number(stringType);
let numeNumber = Number(name);

console.log(numeNumber); //print --> NaN
console.log(numberType, typeof numberType)
//Note ---> In Number method passing String Must be of Numeric Values.


//String Method :
let num1 = 99;
let stringType1 = String(num1);

console.log(typeof num1);
console.log(stringType1, typeof stringType1);


//Boolean Method True/False :
let age1 = "55";
let age2 = " ";
let age3 = "";
let booleanValueOfAge1 = Boolean(age1);
let booleanValueOfAge2 = Boolean(age2);
let booleanValueOfAge3 = Boolean(age3);

console.log("Boolean Value of Age1 is",  booleanValueOfAge1);
console.log("Boolean Value of Age1 is", booleanValueOfAge2);
console.log("Boolean Value of Age1 is", booleanValueOfAge3);

//Arrays :
let dishes = ["Biryani", "Chat", "Parathay"];

// Access
console.log(dishes);
console.log(dishes[0]);
console.log(dishes[2]);

//Modify The Array :
dishes[0] = "Karahai";

console.log(dishes);


//Array Methods : 1. Join Method ---

let dishes1 = ["Biryani", "Chat", "Parathay"];

console.log(dishes1.join());
console.log(dishes1.join(""));
console.log(dishes1.join(" "));
console.log(dishes1.join("-"));

//IndexOf :
console.log(dishes1.indexOf("Chat"));
console.log(dishes1.indexOf("chat"));  //Case Sensitive

//Concat Method :
let newDishes = ["Sweet-Dish", "Pani-Puri", "Chole-Kulche"];
let totalDishe = dishes1.concat(newDishes);
let totalDishe1 = newDishes.concat(dishes1);

console.log(totalDishe);
console.log(totalDishe1);

//Length Method :
console.log(dishes1.length);
console.log(newDishes.length);
console.log(totalDishe.length);


//Push Method :

// let pushDishes = totalDishe.push("Bhallay");
console.log(totalDishe.push("Bhallay"));
console.log(totalDishe);


//Method PoP() :
let popDiesh = newDishes.pop();

console.log(popDiesh);
console.log(newDishes);

//Boolean Vaues And Comparison Operators
let booleanType = true;
let strType = "true";

console.log(typeof booleanType, typeof strType);

//Method Return Boolean VAlue 
let email = "wowcoder@example.com";
let booleanValue = email.includes("@");

console.log(booleanValue);


//Coparison Operators Always Return Boolean Values.
// ==, ===, !==, !=
//>, >=
//<, <=

let point = 34;

console.log(point=="34");
console.log(point==="34");
console.log(point!="34");
console.log(point>"10");