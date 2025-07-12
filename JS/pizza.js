let numberOfGuest = 3;

let pizzaSize;

//small <= 2
//medium <= 4
//large

if (numberOfGuest <= 2) {
    pizzaSize = "small";
} else if (numberOfGuest <= 4) {
    pizzaSize = "medium";
} else {
    pizzaSize = "large";
}

console.log(pizzaSize);
