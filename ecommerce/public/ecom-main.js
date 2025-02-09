import "./ecom-style.css";

// import prodcuts from "./products.json";

// console.log(prodcuts);

fetch('./products.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error loading JSON:', error));


// import { showproductConatiner }from "./homeProductCards.js";
import { showproductConatiner } from "./homeProductCards.js"; // Use this if it's in the same folder


// import { showproductConatiner } from "./homeProductCards"; // Correct way

showproductConatiner(prodcuts);


