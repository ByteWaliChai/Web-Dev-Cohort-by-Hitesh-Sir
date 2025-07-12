let myArr = [1, 4, 5, 9, 3, 6];
let anotherArr = [];

function sumFac(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
        // sum += numbers[i]
    }

    // 0
    // sum = 0 + 1 // 1
    // 1 + 4 => 5
    // 5 + 5 => 10
    // 10 + 9 => 19 .... So on => 28

    return sum;
}

let result = sumFac(myArr);
console.log(result);

let anotherResult = sumFac([2, 5, 6, 4, 7, 2])
console.log(`My result is ${anotherResult}`);
