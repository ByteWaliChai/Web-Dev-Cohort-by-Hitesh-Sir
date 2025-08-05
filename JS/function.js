function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("B");
  console.log("H");
  console.log("A");
  console.log("T");
}

// sayMyName()

// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumber(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(10, 20);
// console.log("Result: ", result);
// addTwoNumber(10, "20")
// addTwoNumber(10, "a")
// addTwoNumber(10, null)

function loginUserMsg(userName = "Rahul") {
    if (!userName) {   // userName == undefined
        console.log("Please enter your userName");
        return
    }
    return `${userName} Just loggedIn`
}

// console.log(loginUserMsg("Prabhat"))
// console.log(loginUserMsg(""))
// console.log(loginUserMsg())


function calculateCartPrice(val1, val2, val3, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 500, 1000, 2000, 2500, 1500));

const user = {
    userName: "Prabaht",
    prices: 299
}

function handleObj(anyObject) {
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObj(user) 
handleObj({
    userName: "sam",
    price: 399
})

const myNewArray = [399, 499, 999, 199]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([199, 399, 899, 599]));



// var c = 100;
let a = 200;

if (true) {
    let a = 20;
    const b = 30; 
    // var c = 10;
    // console.log(`INNER: `, a);
    function addnum(){

    }
}




// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Prabhat"

    function two() {
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);

    two()
}

// one()


if (true) {
    const username = 'Prabaht'
    if (username === 'Prabaht') {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


//+++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++


console.log((addone(8)));
function addone(num){
    return num + 1
}

addtwo(8)
const addtwo = function(num){
    return num + 2
}





const user0 = {
    username: "Prabaht",
    price: 999,

    welcomeMessg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user0.welcomeMessg()
// user0.username = "Sam"
// user0.welcomeMessg()

// console.log(this);



// function chai(){
//     let username = 'Prabhat'
//     console.log(this.username);
// }
// chai()




// const chai = function(){
//     let username = 'Prabhat'
//     console.log(this.username);
// }


const chai = () => {
    let username = 'Prabhat'
    console.log(this);
}

// chai()


// const addTwoNum = (num1, num2) => {
//     return num1 + num2
// }

// const addTwoNum = (num1, num2) =>  num1 + num2
// const addTwoNum = (num1, num2) =>  ( num1 + num2 )
const addTwoNum = (num1, num2) =>  ( { username: "Prabaht" } )

console.log(addTwoNum(13, 25))