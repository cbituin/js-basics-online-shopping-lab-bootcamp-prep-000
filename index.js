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


//TODO: The viewCart() function does not accept any arguments. It should loop over every item in your cart, returning the contents as one long, coherent statement in this format: In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
// If the cart is empty, the function should instead return Your shopping cart is empty.
// Note: Pay close attention to the syntax above. The returned statement should be a single sentence that begins with In your cart, you have, terminates in a period, and can assume the following shapes according to how many items the cart contains:
// 1 item — In your cart, you have bananas at $17.
// 2 items — In your cart, you have bananas at $17, and pancake batter at $5.
// 3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
function viewCartText(){
    if(cart.length === 1){
        for(let i = 0; i < cart.length; i++){
            return `you have ${cart[i].itemName} at $${cart[i].itemPrice}.`;
        }
    } else if (cart.length === 2){
        for(let i = 0; i < cart.length; i++){
            return `you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
            }
    } else if (cart.length >= 3) {
        for(let i = 0; i < cart.length; i++){
            
        }
    }
  }
  
  function viewCart() {
      if (getCart().length === 0){
          return 'Your shopping cart is empty.';
          }
       else {
          return 'In your cart, ' + viewCartText();
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

function removeFromCart(item) {
    for(let i = 0; i < getCart().length; i++){
        if(item != getCart()[i]){
          return 'That item is not in your cart.';
        } else{
          getCart().splice(i, 1);
          getCart();
        }
    }
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
        let cartTotal = total();
        return 'Your total cost is $' + cartTotal + ', which will be charged to the card ' + cardNumber + '.';
    }
}
