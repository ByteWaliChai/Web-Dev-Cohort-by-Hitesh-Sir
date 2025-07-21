// Available products (catalog)
const products = [
  { id: 1, name: "Book", price: 15 },
  { id: 2, name: "Pen", price: 5 },
  { id: 3, name: "Bag", price: 25 }
];

// User's shopping cart
let cart = [];


function addToCart(productId, quantity=1) {
  // find product in catalog
  let product = products.find(p => p.id === productId);
  if (!product) {
    console.log("Product not found.");
    return;
  }

  // check if already in cart
  let existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product, quantity });
  }
  console.log(`Added ${quantity} x ${product.name} to cart.`);
}



function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  console.log(`Removed product with id ${productId} from cart.`);
}



function listCart() {
  if (cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }

  console.log("Your cart:");
  cart.forEach(item => {
    console.log(`${item.product.name} x${item.quantity} = $${item.product.price * item.quantity}`);
  });
}



function getTotal() {
  let total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  console.log(`Total price: $${total}`);
  return total;
}




addToCart(1, 2); // Add 2 Books
addToCart(2);    // Add 1 Pen
listCart();
/*
Your cart:
Book x2 = $30
Pen x1 = $5
*/

getTotal(); // Total price: $35

removeFromCart(1);
listCart();
/*
Your cart:
Pen x1 = $5
*/

getTotal(); // Total price: $5


function findExpensive(threshold) {
  let expensive = cart.filter(item => item.product.price > threshold);
  console.log("Expensive items in cart:");
  expensive.forEach(item => console.log(item.product.name));
}

findExpensive(10); // Book