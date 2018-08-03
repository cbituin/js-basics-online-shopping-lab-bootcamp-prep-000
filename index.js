var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

// Instructions
// We've started you off with a cart variable that points at an empty array. There are five functions that you'll have to code in order to create a working shopping cart:

//TODO: The addToCart() function accepts one argument, the name of an item.
// Use that passed-in string to create a new object representing the item. The object should consist of two key-value pairs : { itemName: name of the item, itemPrice: price of the item, }. As more items are added, the cart should start to look something like this: [ { itemName:"bananas", itemPrice: 17 }, { itemName:"pancake batter",itemPrice: 5 }, { itemName:"eggs", itemPrice: 49 }].
// The price of each item should be a randomly-generated integer between 1 and 100.
// HINT: Look into Math.random() and Math.floor().
// Upon the successful addition of a new item to the cart, the function should return <itemName> has been added to your cart. .

function addToCart(item){
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

function viewCart() {
    // if(cart.length <= 0){
    //     return 'Your shopping cart is empty.'
    // } else {
    //     let cartStart = "In your cart, you have ",
    //         cartArr = [];
    //         cartEnd = " and ${cart[i].sli.itemName}
    //     for(let i = 0; i < cart.length - 1; i++){
    //         cartArr.push('${cart[i].itemName} at ${cart[i].itemPrice}');
    //     }
    //     return cartStart + cartArr + cartEnd;
    // }
}


//TODO: The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.

function total() {
    // write your code here
  }
  

//TODO: The removeFromCart() function accepts one argument, the name of the item that should be removed.
// If the item is present in the cart, the function should remove the object from the cart and then return the updated cart.
// HINT: Check each object's itemName value key to see if it matches the parameter, then remove it if it matches. You might find Array.prototype.splice() to be useful.
// If the cart does not contain a matching item, the function should return That item is not in your cart.

function removeFromCart(item) {
    // write your code here
  }

//TODO: The placeOrder() function accepts one argument, a credit card number.
// If no argument is received, the function should print out Sorry, we don't have a credit card on file for you..
// If a card number is received, the function should
// empty the cart array
// return Your total cost is $71, which will be charged to the card 83296759. (where 71 is the value returned by total() and 83296759 is the credit card number passed to placeOrder())

function placeOrder(cardNumber) {
    // write your code here
  }
  