//! Global Variables/DOM Elements
const baseURL = "https://fakestoreapi.com/products/";
const cart = []; //empty array for cart




 //! DOM Elements
 const electronicsNavLink = document.querySelector("#electronics");
 const jewelryNavLink = document.querySelector('#jewelry');
 const womenNavLink = document.querySelector('#womensClothing');
 const menNavLink = document.querySelector('#mensClothing');
 const display = document.getElementById("display");
 const item = document.querySelector(".item");

//! Cards

function displayItems(items) { //array from newRes has been passed to items
  items.forEach(item => {
   
//* Create Elements
let card = document.createElement("div");
let img = document.createElement("img");
let body = document.createElement("div");
let title = document.createElement("h5");
let desc = document.createElement("p");
let btn = document.createElement("a");
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

desc.className = "card-text";


btn.className = "btn btn-primary";
btn.textContent = "Add to Cart";
btn.onclick = () => {
  cart.push(item);
  shoppingCart();
  }

accordion.className = 'accordion';

accordionItem.className = 'accordion-item';

accordionHeader.className = 'accordion-header';
accordionHeader.id = 'accordionHeader';


accordionButton.className = 'accordion-button';
accordionButton.type = 'button';
accordionButton.setAttribute('data-bs-toggle', 'collapse');
accordionButton.setAttribute('data-bs-target', '#collapseDesc');
accordionButton.setAttribute('aria-expanded', 'true');
accordionButton.setAttribute('aria-controls', 'collapseDesc');
accordionButton.textContent= 'Description';

accordionHeader.appendChild(accordionButton);

accordionBody.id = 'collapseDesc';
accordionBody.className = 'accordion-collapse collapse';
accordionBody.setAttribute('aria-labelledby', 'accordionHeader');
accordionBody.setAttribute('data-bs-parent', '.accordion');

accordionBodyContent.className = 'accordion-body';
accordionBodyContent.textContent = item.description

accordionBody.appendChild(accordionBodyContent);

accordionItem.appendChild(accordionHeader);
accordionItem.appendChild(accordionBody);

accordion.appendChild(accordionItem);

//anonymous function that generates new object holding keys of: id, title, cost, quantity
//each key is assigned the value of the current item, with quantity set to '1'
//invokes submitToCart function

//* Attach Elements -- build from inside out

body.appendChild(title);
body.appendChild(desc);
body.appendChild(accordion);
body.appendChild(btn);


card.appendChild(img);
card.appendChild(body);

display.appendChild(card);

})}


//function submitToCart(item){
//declarative function add 'item' to 'cart' array
;

  
   

    //! Event Listeners
const fakeStore = async (endpoint) => {
let res = await fetch(baseURL + endpoint)
let newRes = await res.json()
displayItems(newRes) //newRes is holding the array from the fetch
}

window.addEventListener("load", e => {
  e.preventDefault(displayItems);
});

 electronics.addEventListener("click", e => {
  e.preventDefault();
    fakeStore('category/electronics')
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


