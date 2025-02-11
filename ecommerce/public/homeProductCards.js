const productcontainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

import { homeQuantityToggle } from './homeQuantityToggle.js';

export const showproductConatiner = (products) => {
    console.log(products);
    if (!products) {
        return false;
    }

    products.forEach((curPro) => {
        const { brand, category, description, id, image, name, price, stock } = curPro;
        console.log(image);
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector("#cardValue").setAttribute("id", `cards${id}`);

        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;  // Corrected this line
        productClone.querySelector(".productStock").textContent = stock;
        productClone.querySelector(".productDescription").textContent = description;
        productClone.querySelector(".productPrice").textContent = `₹${price}`;
        productClone.querySelector(".productActualPrice").textContent = `₹${price * 4}`;

        productClone.querySelector(".stockElement")
            .addEventListener('click', (e) => {
                // Uncomment and use this if you need homeQuantityToggle functionality
                homeQuantityToggle(e, id, stock.split(":")[1]);
            });

            productClone
            .querySelector(".add-to-cart-button")
            .addEventListener("click", (event) => {
              addToCart(event, id, stock);
            });

            

        productcontainer.append(productClone);
    });
};
