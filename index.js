var cart = [];

function getCart() {
    return cart;
}

function setCart(c) {
    cart = c;
    return cart;
}

function addToCart(item) {
    item = {
        itemName: item,
        itemPrice: Math.floor((Math.random() * 10) + 1)
    };
    cart.push(item);
    return item.itemName + ' has been added to your cart.';
}

function viewCartText(){
    if(cart.length === 1){
        for(let i = 0; i < cart.length; i++){
            return ` ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
    } else if (cart.length === 2){
        for(let i = 0; i < cart.length; i++){
            return ` ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
            }
    } else if (cart.length >= 3) {
        let newArr = [];
            for(let i = 0; i < cart.length - 1; i++){
            newArr.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`);
        }
        newArr.push(` and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`);
        return newArr;
    }
  }
  
  function viewCart() {
      if (getCart().length === 0){
          return 'Your shopping cart is empty.';
          }
       else {
          return 'In your cart, you have' + viewCartText();
      }
  }

function total() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += parseInt(cart[i].itemPrice);
    }
    return totalPrice;
}

//TODO: The removeFromCart() function accepts one argument, the name of the item that should be removed.
// If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
// HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.
// If the cart does not contain a matching item, the function should return That item is not in your cart.

function removeFromCart(item){
  let newArr = Object.values(cart);
  for(let i = 0; i < newArr.length; i++){
    if(item === newArr[i]){
      delete getCart()[i];
      return getCart();
    }
  }
  return 'That item is not in your cart.'; 
  
}



//TODO: The placeOrder() function accepts one argument, a credit card number.
// If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
// If a card number is received, the function should
// empty the cart array
// return Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder())

function placeOrder(cardNumber) {
    if(cardNumber === undefined){
        return "Sorry, we don't have a credit card on file for you.";
    } else {
        cart = [];
        return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    }
}
