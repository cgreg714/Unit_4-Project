let existingItemList = storedItems.findIndex(item => item.id === item.id); //compares the selected item to existing items
if (existingItemList !== -1) { // If item already is in the cart, increase quantity by 1
  storedItems[existingItemList].quantity += 1;
} else {storedItems.push(item);}// If no matching item is found, add the item to the cart
};





<button class="btn btn-outline-success" type="submit">Cart</button>
 addToInventory(itemToAdd){ 
      let newItem = (cart.find (obj => obj.itemID === item.itemID)) //compares the new items' UPC to the UPCs of existing items
      
      if (newItem === undefined) cart.push(item) //if the new item does not have the same UPC as existing stock it is added as a new item
      else (newItem.quantity += item.quantity) //if the new item matches a current entry, then update the quantity