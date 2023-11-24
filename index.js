//! Global Variables/DOM Elements
const baseURL = "https://fakestoreapi.com/products/";
const electronics = document.querySelector('#electronics');
const jewelry = document.querySelector('#jewelry');
const womensClothing = document.querySelector('#womensClothing');
const mensClothing = document.querySelector('#mensClothing');
const display = document.getElementById("display")
const cart = [] //empty array for cart


const fakeStore = async (endpoint) => {
  let results = await fetch(baseURL + endpoint)
  let capturedResults = await results.json()
  displayCards(capturedResults)
}
console.log(fakeStore);
//! Event Listeners
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

//! Cards Time

function displayCards(items) { //invoke function after the fetch results in the fakeStore
  items.forEach(item => {
  
    let card = document.createElement("div");
    card.classList.add('card');

    let body = document.createElement("div");
    body.classList.add('card-body');

    let img = document.createElement("img");
    img.classList.add('card-img-top');
    img.setAttribute('src', item.img);
    img.setAttribute('alt', item.title);

    let title = document.createElement("h5");
    title.classList.add('card-title');
    title.textContent = item.title;

    let desc = document.createElement("p");
    desc.classList.add('desc');
    desc.textContent = item.description;

    /*let button = document.createElement("a");
    button.classList.add('btn btn-primary'); 
    button.textContent = 'Add to Cart'
    button.onclick = () => {
      cart.push(item);
      shoppingCart();
      }*/
    
    body.appendChild(img);
    body.appendChild(title);
    body.appendChild(desc);
    //body.appendChild(button);

    card.appendChild(body);

    console.log(items)
})};

/*
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

img.src = item.img;
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

  //anonymous function that generates new object holding keys of: id, title, cost, quantity
  //each key is assigned the value of the current item, with quantity set to '1'
  //invokes submitToCart function
}
 
// ????


//* Attach Elements -- build from inside out

body.appendChild(title);
body.appendChild(btn);
body.appendChild(desc);

card.appendChild(img);
card.appendChild(body);

div.appendChild(card);
// ????
*/
function submitToCart(item){
//declarative function add 'item' to 'cart' array
};

  window.onload = function() {
    fakeStore('');  //add &limit=(# of items) if you need to limit the number loaded.
    };
  
