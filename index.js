//! Global Variables
const baseURL = "https://fakestoreapi.com/products/";
const eURL = "https://fakestoreapi.com/products/category/electronics";
const jURL ="https://fakestoreapi.com/products/category/jewelery";
const wURL = "https://fakestoreapi.com/products/category/women's%20clothing?sort=asc"; //this is an invalid url
const mURL = "https://fakestoreapi.com/products/category/men's%20clothing?sort=asc";  //so is this, but where are these items held besides the main 
const electronics = document.querySelector('#electronics');
const jewelry = document.querySelector('#jewelry');
const womensClothing = document.querySelector('#womensClothing');
const mensClothing = document.querySelector('#mensClothing');
//empty array for cart

const fakeStore = async (endpoint) => {
/*  fetch(endpoint)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));*/
  let results = await fetch(baseURL + endpoint)
  //console.log(results)
  let capturedResults = await results.json()
  console.log(capturedResults)
}

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



  window.onload = function() {
    fakeStore('');  //add &limit=(# of items) if you need to limit the number loaded.
    };




