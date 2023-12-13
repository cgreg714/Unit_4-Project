//! Global Variables/DOM Elements
const baseURL = "https://fakestoreapi.com/products/";
let cart = []; //empty array for cart

//! DOM Elements
const homeNavLink = document.querySelector("#home");
const electronicsNavLink = document.querySelector("#electronics");
const jewelryNavLink = document.querySelector("#jewelry");
const womenNavLink = document.querySelector("#womensClothing");
const menNavLink = document.querySelector("#mensClothing");
const navLinks = document.querySelectorAll(".nav-link");
const display = document.getElementById("display");
const item = document.querySelector(".item");
const activeCart = document.getElementById("shopping-cart");
const cartItemQuantity = document.querySelector("#itemQuantity");
const cartItemName = document.querySelector("#itemName");
const cartItemPrice = document.querySelector("#itemPrice");
const cartSubtotal = document.querySelector("#subtotal");
const cartTax = document.querySelector("#tax");
const cartShipping = document.querySelector("#shipping");
const finalTotal = document.querySelector("#total");
const clearCart = document.querySelector(".btn-secondary");
const purchase = document.querySelector("#buy");
const subtotal = 0;
const tableBody = document.getElementById("tableBody");
const sCart = document.getElementById("sCart");
//! Cards

function displayCards(items) {
  //array from newRes has been passed to items
  items.forEach((item) => {
    //* Create Elements
    let card = document.createElement("div");
    let img = document.createElement("img");
    let body = document.createElement("div");
    let title = document.createElement("h4");
    let price = document.createElement("h5");
    let desc = document.createElement("p");
    let cartBtn = document.createElement("a");
    let accordion = document.createElement("div");
    let accordionItem = document.createElement("div");
    let accordionHeader = document.createElement("h2");
    let accordionButton = document.createElement("button");
    let accordionBody = document.createElement("div");
    let accordionBodyContent = document.createElement("div");
    let accordion2 = document.createElement("div");
    let accordionItem2 = document.createElement("div");
    let accordionHeader2 = document.createElement("h5");
    let accordionButton2 = document.createElement("button");
    let accordionBody2 = document.createElement("div");
    let accordionBodyContent2 = document.createElement("div");

    //* Set Attributes -- *building the single card div in our JS
    card.className = "card";
    card.style.width = "18rem";
    card.style.boxShadow = "0 0 30px black";
    card.style.margin = "15px";
    card.style.textAlign = "center";
    card.style.justifyContent = "center";
    card.style.alignItems = "center";
    card.style.minHeight = "200px";
    card.style.border = "0";

    img.src = item.image;
    img.className = "card-img-top";
    img.style.height = "10rem";
    img.style.width = "10rem";
    img.alt = item.title;

    body.className = "card-body";

    title.className = "card-title";
    title.textContent = item.title;

    price.className = "price";

    accordion.className = "accordion"; // Creates the collapsible description div

    accordionItem.className = "accordion-item";

    accordionHeader.className = "accordion-header";
    accordionHeader.id = "accordionHeader";

    accordionButton.className = "accordion-button";
    accordionButton.type = "button";
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute(
      "data-bs-target",
      `#collapseDesc${item.price}`
    ); //target id value of item string/array
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute("aria-controls", "collapseDesc");
    accordionButton.textContent = "Price";

    accordionHeader.appendChild(accordionButton);

    accordionBody.id = `collapseDesc${item.price}`;
    accordionBody.className = "accordion-collapse collapse";
    accordionBody.setAttribute("aria-labelledby", "accordionHeader");
    accordionBody.setAttribute("data-bs-parent", ".accordion");

    accordionBodyContent.className = "accordion-body";
    accordionBodyContent.textContent = "$" + item.price.toFixed(2);

    accordionBody.appendChild(accordionBodyContent);

    accordionItem.appendChild(accordionHeader);
    accordionItem.appendChild(accordionBody);

    accordion.appendChild(accordionItem);

    desc.className = "card-text";

    accordion2.className = "accordion2"; // Creates the collapsible description div

    accordionItem2.className = "accordion-item2";

    accordionHeader2.className = "accordion-header2";
    accordionHeader2.id = "accordionHeader2";

    accordionButton2.className = "accordion-button2";
    accordionButton2.type = "button2";
    accordionButton2.setAttribute("data-bs-toggle", "collapse");
    accordionButton2.setAttribute("data-bs-target", `#collapseDesc${item.id}`); //target id value of item string/array
    accordionButton2.setAttribute("aria-expanded", "false");
    accordionButton2.setAttribute("aria-controls", "collapseDesc");
    accordionButton2.textContent = "Description";

    accordionHeader2.appendChild(accordionButton2);

    accordionBody2.id = `collapseDesc${item.id}`;
    accordionBody2.className = "accordion2-collapse collapse";
    accordionBody2.setAttribute("aria-labelledby", "accordionHeader2");
    accordionBody2.setAttribute("data-bs-parent", ".accordion2");

    accordionBodyContent2.className = "accordion-body2";
    accordionBodyContent2.textContent = item.description;

    accordionBody2.appendChild(accordionBodyContent2);

    accordionItem2.appendChild(accordionHeader2);
    accordionItem2.appendChild(accordionBody2);

    accordion2.appendChild(accordionItem2);

    cartBtn.className = "btn btn-primary";
    cartBtn.textContent = "Add to Cart";
    cartBtn.onclick = () => {
      let obj = {
        itemID: item.id,
        itemTitle: item.title,
        itemPrice: item.price,
        itemQty: 1,
      };
      submitToCart(obj);
    };

    //* Attach Elements -- build from inside out

    body.appendChild(title);
    body.appendChild(price);
    body.appendChild(accordion);
    body.appendChild(desc);
    body.appendChild(accordion2);
    body.appendChild(cartBtn);

    card.appendChild(img);
    card.appendChild(body);

    display.appendChild(card);
  });
}

//! Cart
const submitToCart = (item) => {
  let newItem = cart.find((obj) => obj.itemID === item.itemID); //compares the new items' UPC to the UPCs of existing items
  if (newItem === undefined) {
    cart.push(item);
  } //if the new item does not have the same UPC as existing stock it is added as a new item
  else {
    newItem.itemQty += item.itemQty;
    //newItem.itemPrice += item.itemPrice //if the newItem already exists, increase the quantity by 1
  }
};

//! Event Listeners
const fakeStore = async (endpoint) => {
  let res = await fetch(baseURL + endpoint); //allows you to add an endpoint ie. category/electronics
  let newRes = await res.json();
  displayCards(newRes); //newRes is holding the array from the fetch
  //console.log(newRes);
};

function removeContent() {
  let display = document.getElementById("display");
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

function displayCart() {
  let subtotal = 0;
  let tax = 0;
  let shipping = 0;
  let total = 0;

  //console.log(cart)
  cart.forEach((item) => {
    console.log("item;", item);
    subtotal += item.itemPrice * item.itemQty;
  });

  //create elements

  let body = document.createElement("tbody");
  let row = document.createElement("tr");
  let itemQuantity = document.createElement("td1");
  let itemName = document.createElement("td2");
  let itemPrice = document.createElement("td3");

  //set attributes
  body.className = "tbody";

  row.className = "row";

  itemQuantity.className = "td1";
  itemQuantity.textContent = item.itemQty;

  itemName.className = "td2";
  cartItemName.textContent = item.itemTitle;

  itemPrice.className = "td3";
  itemPrice.textContent = item.itemPrice;

  cartSubtotal.textContent = `${subtotal.toFixed(2)}`;

  cartTax.textContent = `${tax.toFixed(2)}`;

  cartShipping.textContent = `${shipping.toFixed(2)}`;

  finalTotal.textContent = `${total.toFixed(2)}`;

  buy.textContent = "Purchase for " + total.toFixed(2);

  //Append items
  row.appendChild(itemQuantity);
  row.appendChild(itemName);
  row.appendChild(itemPrice);

  body.appendChild(row);

  tax = subtotal * 0.0625;
  shipping = subtotal * 0.1;
  total = subtotal + tax + shipping;

  cartSubtotal.textContent = `${subtotal.toFixed(2)}`;
  cartTax.textContent = `${tax.toFixed(2)}`;
  cartShipping.textContent = `${shipping.toFixed(2)}`;
  finalTotal.textContent = `${total.toFixed(2)}`;
  buy.textContent = "Purchase for " + total.toFixed(2);
}

window.addEventListener("load", (e) => {
  e.preventDefault(displayCards);
  fakeStore("");
});

home.addEventListener("click", (e) => {
  fakeStore("");
  removeContent();
});

electronics.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore("category/electronics");
  removeContent();
});

jewelry.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore("category/jewelery");
  removeContent();
});

womensClothing.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`category/women's%20clothing?sort=asc`);
  removeContent();
});

mensClothing.addEventListener("click", (e) => {
  e.preventDefault();
  fakeStore(`category/men's%20clothing?sort=asc`);
  removeContent();
});

clearCart.addEventListener("click", (e) => {
  cart.length = 0;
  itemQuantity.innerHTML = "";
  itemName.innerHTML = "";
  itemPrice.innerHTML = "";
  cartSubtotal.innerHTML = "0.00";
  cartTax.innerHTML = "0.00";
  cartShipping.innerHTML = "0.00";
  finalTotal.innerHTML = "0.00";
  buy.innerHTML = " Purchase for ";
  console.log("Cart cleared!");
  console.log(cart);
});

purchase.addEventListener("click", (e) => {
  {
    alert("Thank you for your purchase!");
    cart.length = 0;
    itemQuantity.innerHTML = "";
    itemName.innerHTML = "";
    itemPrice.innerHTML = "";
    cartSubtotal.innerHTML = "0.00";
    cartTax.innerHTML = "0.00";
    cartShipping.innerHTML = "0.00";
    finalTotal.innerHTML = "0.00";
    buy.innerHTML = " Purchase for ";
  }
});

sCart.addEventListener("click", (e) => {
  displayCart();
});
