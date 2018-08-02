var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  

cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var itemAdd = { itemName: item , itemPrice: Math.floor(Math.random() * 100) + 1 }
 cart.push(itemAdd)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if ( cart.length === 0 ) {
     return "Your shopping cart is empty."
   } else {
      const theCart = []
      for (let i = 0; i < cart.length; i++) {
       theCart.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
     }
  if (cart.length === 1) {
    return "In your cart, you have" + theCart + "."
  } else {
    const lastItem = theCart.pop()
    return "In your cart, you have" + theCart + ", and" + lastItem + "."
  }
 }
}

function total() {
  // write your code here
const thePrice =[]
for (let i = 0; i < cart.length; i++) {
       thePrice.push(cart[i].itemPrice)
      }
  return thePrice.reduce(function(a,b){
    return a + b}, 0)
}

function removeFromCart(item) {
  // write your code here 
  if (item === cart.itemName) {

    cart.splice(indexof(cart.itemName), 1)
  } else { return "That item is not in your cart." }
}

function placeOrder(cardNumber) {
  // write your code here
}

