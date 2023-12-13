let existingItemList = storedItems.findIndex(item => item.id === item.id); //compares the selected item to existing items
if (existingItemList !== -1) { // If item already is in the cart, increase quantity by 1
  storedItems[existingItemList].quantity += 1;
} else {storedItems.push(item);}// If no matching item is found, add the item to the cart
};




function calculateSubtotal(cart) {
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    subtotal += cart[i].price * cart[i].quantity;
  }
  return subtotal;
}

// placed on ln 182
let subtotal = 0 
            let tax = 0
            let shipping = 0
            let total = 0
            
      cart.forEach((item) => {
        subtotal += item.itemPrice * item.itemQty;
        //create elements
        let itemQuantity = item.itemQty;
        let itemName = item.itemTitle;
        let itemPrice = item.itemPrice;
        
        
        //set attributes
        cartItemQuantity.textContent = `${itemQuantity}`;
        cartItemName.textContent = `${itemName}`;
        cartItemPrice.textContent = `${itemPrice.toFixed(2)}`;
        cartSubtotal.textContent = `${subtotal.toFixed(2)}`;
        cartTax.textContent = `${tax.toFixed(2)}`;
        cartShipping.textContent = `${shipping.toFixed(2)}`;
        finalTotal.textContent = `${total.toFixed(2)}`;
        buy.textContent = "Purchase for " + total.toFixed(2);
        //console.log(itemQuantity);
        //console.log(itemName);
        //console.log(itemPrice);
        console.log(cart);
        

      })
      tax = subtotal * .0625;
      shipping = subtotal * 0.10;
      total = subtotal + tax + shipping;

      cartSubtotal.textContent = `${subtotal.toFixed(2)}`;
      cartTax.textContent = `${tax.toFixed(2)}`;
      cartShipping.textContent = `${shipping.toFixed(2)}`;
      finalTotal.textContent = `${total.toFixed(2)}`;
      buy.textContent = "Purchase for " + total.toFixed(2);

      //from ln 57 of html
      <!--<div class="card" style="width: 18rem;">
      <img src="" class="card-img-top" alt="item images">
      <div class="card-body">
        <h5 class="card-title">Item Name</h5>
        <p class="card-text">Item Description</p>
        <a href="#" class="btn btn-outline-primary btn-med mt-3">Add to Cart</a>
      </div>-->