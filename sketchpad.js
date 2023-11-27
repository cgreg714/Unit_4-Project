let existingItemList = storedItems.findIndex(item => item.id === item.id); //compares the selected item to existing items
if (existingItemList !== -1) { // If item already is in the cart, increase quantity by 1
  storedItems[existingItemList].quantity += 1;
} else {storedItems.push(item);}// If no matching item is found, add the item to the cart
};

