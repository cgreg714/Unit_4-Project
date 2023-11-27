//! Global Variables/DOM Elements
const baseURL = "https://fakestoreapi.com/products/";
let storedItems = []; //empty array for cart

 //! DOM Elements
 const electronicsNavLink = document.querySelector("#electronics");
 const jewelryNavLink = document.querySelector('#jewelry');
 const womenNavLink = document.querySelector('#womensClothing');
 const menNavLink = document.querySelector('#mensClothing');
 const navLinks = document.querySelectorAll('.nav-link')
 const display = document.getElementById("display");
 const item = document.querySelector(".item");
 const cart = document.getElementById("cart")

//! Cards

function displayItems(items) { //array from newRes has been passed to items
  items.forEach(item => {
   
//* Create Elements
let card = document.createElement("div");
let img = document.createElement("img");
let body = document.createElement("div");
let title = document.createElement("h4");
let price = document.createElement("h5")
let desc = document.createElement("p");
let cartBtn = document.createElement("a");
let accordion = document.createElement('div');
let accordionItem = document.createElement('div');
let accordionHeader = document.createElement('h2');
let accordionButton = document.createElement('button')
let accordionBody = document.createElement('div');
let accordionBodyContent = document.createElement('div');

//* Set Attributes -- *building the single card div in our JS
card.className = "card";
card.style.width = "18rem";

img.src = item.image;
img.className = "card-img-top"
img.alt = item.title;

body.className = "card-body";

title.className = "card-title";
title.textContent = item.title;

price.className = "price";
price.textContent = '$' + item.price.toFixed(2);

desc.className = "card-text";

accordion.className = 'accordion';  // Creates the collapsible description div

accordionItem.className = 'accordion-item';

accordionHeader.className = 'accordion-header';
accordionHeader.id = 'accordionHeader';

accordionButton.className = 'accordion-button';
accordionButton.type = 'button';
accordionButton.setAttribute('data-bs-toggle', 'collapse');
accordionButton.setAttribute('data-bs-target', '#collapseDesc');
accordionButton.setAttribute('aria-expanded', 'false');
accordionButton.setAttribute('aria-controls', 'collapseDesc');
accordionButton.textContent= 'Description';

accordionHeader.appendChild(accordionButton);

accordionBody.id = 'collapseDesc';
accordionBody.className = 'accordion-collapse collapse';
accordionBody.setAttribute('aria-labelledby', 'accordionHeader') ;
accordionBody.setAttribute('data-bs-parent', '.accordion');

accordionBodyContent.className = 'accordion-body';
accordionBodyContent.textContent = item.description

accordionBody.appendChild(accordionBodyContent);

accordionItem.appendChild(accordionHeader);
accordionItem.appendChild(accordionBody);

accordion.appendChild(accordionItem);

cartBtn.className = "btn btn-primary";
cartBtn.textContent = "Add to Cart";
cartBtn.onclick = () => {
  storedItems.push(item);
  shoppingCart();
}
//* Attach Elements -- build from inside out

body.appendChild(title);
body.appendChild(price)
body.appendChild(desc);
body.appendChild(accordion);
body.appendChild(cartBtn);

card.appendChild(img);
card.appendChild(body);

display.appendChild(card);
})}

  //! Cart

  // Function
  const shoppingCart = () => {
    
    console.log('Saved Items Array: ', storedItems )
 
    //removeElements(cart)
    storedItems.map((item) => {
  

  // Create Elements
  let div = document.createElement("div");
  let card = document.createElement("div");
  let img = document.createElement("img");
  let body = document.createElement("div");
  let title = document.createElement("h4");
  let price = document.createElement("h5")
  
  // Set Attributes
  div.className = "col";

  card.className = "card";

  img.src = item.image;
  img.className = "card-img-top"
  img.alt = item.title;

  body.className = "card-body";

  title.className = "card-title";
  title.textContent = item.title;

  price.className = "price";
  price.textContent = '$' + item.price.toFixed(2);

  

  // Attach Elements
  body.appendChild(title);
  body.appendChild(price) 

  card.appendChild(img);
  card.appendChild(body);
  
  cart.appendChild(div);
})
}

    //! Event Listeners
const fakeStore = async (endpoint) => {
let res = await fetch(baseURL + endpoint)
let newRes = await res.json()
displayItems(newRes) //newRes is holding the array from the fetch
}


function removeContent() {
  let display = document.getElementById('display');
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
}

window.addEventListener("load", e => {
  e.preventDefault(displayItems);
});


 electronics.addEventListener("click", e => {
  e.preventDefault();
  fakeStore('category/electronics');
  });

jewelry.addEventListener("click", e => {
  e.preventDefault();
  fakeStore('category/jewelery')
});

womensClothing.addEventListener("click", e => {
  e.preventDefault();
  fakeStore(`category/women's%20clothing?sort=asc`)
});

mensClothing.addEventListener("click", e => {
  e.preventDefault();
  fakeStore(`category/men's%20clothing?sort=asc`)
});


