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
desc.textContent = item.description;

btn.className = "btn btn-primary";
btn.textContent = "Add to Cart";
btn.onclick = () => {
  cart.push(item);
  shoppingCart();
  }
//anonymous function that generates new object holding keys of: id, title, cost, quantity
//each key is assigned the value of the current item, with quantity set to '1'
//invokes submitToCart function
 
//* Attach Elements -- build from inside out

body.appendChild(title);
body.appendChild(desc);
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

window.addEventListener("load", (event) => {
  event.preventDefault(displayItems);
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



/*
let card = document.createElement("div");
card.classList.add('card');

let body = document.createElement("div");
body.classList.add('card-body');

let img = document.createElement("img");
img.classList.add('card-img-top');
img.setAttribute('src', item.image);
img.setAttribute('alt', item.title);

let title = document.createElement("h5");
title.classList.add('card-title');
title.textContent = item.title;

let desc = document.createElement("p");
desc.classList.add('desc');
desc.textContent = item.description;

let button = document.createElement("a");
button.classList.add('btn btn-primary'); 
button.textContent = 'Add to Cart'
button.onclick = () => {
  cart.push(item);
  shoppingCart();
  }


body.appendChild(title);
body.appendChild(desc);
body.appendChild(button);

card.appendChild(img);
card.appendChild(body);

item.appendChild(card);

console.log(item)
})};*/