// // export const homeQuantityToggle = (e,id,stock)=>{
// // const currentcardElement=document.querySelector(`#card${id}`);
// // console.log(currentcardElement)
// // }







// export const homeQuantityToggle = (event, id, stock) => {
//     const currentCardElement = document.querySelector(`#card${id}`);
//     //   console.log(currentCardElement);
  
//     const productQuantity = currentCardElement.querySelector(".productQuantity");
//     //   console.log(productQuantity);
  
//     let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;
  
//     if (event.target.className === "cartIncrement") {
//       if (quantity < stock) {
//         quantity += 1;
//       } else if (quantity === stock) {
//         quantity = stock;
//       }
//     }
  
//     if (event.target.className === "cartDecrement") {
//       if (quantity > 1) {
//         quantity -= 1;
//       }
//     }
  
//     //todo Don't Forget To LIKE SHARE & SUBSCRIBE TO THAPA TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/thapatechnical
  
//     productQuantity.innerText = quantity;
//     console.log(quantity);
//     productQuantity.setAttribute("data-quantity", quantity.toString());
//     return quantity;
//   };
  





export const homeQuantityToggle = (event, id, stock) => {
    // Correct ID based on previous code
    const currentCardElement = document.querySelector(`#cards${id}`);

    // Ensure the right selector for the quantity element
    const productQuantity = currentCardElement.querySelector(".productStock");  // or .productQuantity if you have that

    // Get current quantity or set to 1 if undefined
    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    // Increment logic
    if (event.target.className === "cartIncrement") {
        if (quantity < stock) {
                //  console.log("wlecome");
        
            quantity += 1;
        } else if (quantity == stock) {
            quantity = stock;
        }
    }

    // Decrement logic
    if (event.target.className === "cartDecrement") {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    // Update the display
    currentCardElement.getElementsByClassName("productQuantityElement")[0].getElementsByClassName("stockElement")[0].getElementsByClassName("productQuantity")[0].innerText = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());

    // Log the quantity (you can remove this in production)
    console.log(quantity);

    return quantity;
};
