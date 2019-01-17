let itemToAdd = {};
const shoppingCart = []

const compareQuantity = () => {

        const matchFound = shoppingCart.find(item => itemToAdd.id === item.id)
        if (matchFound) {
            matchFound.quantity++
        } else {
            itemToAdd.quantity = 1
            shoppingCart.push(itemToAdd)
        }
    }




//     shoppingCart.forEach(cartItem => {

//         const matchFound = thingsToDisplay.find(function (displayItem) {
//             return cartItem === displayItem;
//         });
//         if (matchFound === true) {
//             displayItem.quantity += 1
//             console.log(matchFound)
//         } else {
//             cartItem.quantity = 1
//             thingsToDisplay.push(cartItem)
//             console.log(matchFound)
//         }
//         shoppingCart.splice(0, 1)
// console.log(matchFound)
//     });

// shoppingCart.forEach(cartItem => {
//     if (thingsToDisplay.length === 0) {
//         cartItem.quantity = 1
//         thingsToDisplay.push(cartItem);
//     } else {
//         thingsToDisplay.forEach(displayItem => {
//             if (cartItem.id === displayItem.id) {
//                 displayItem.quantity += 1
//             } else {
//                 cartItem.quantity = 1
//                 thingsToDisplay.push(cartItem)
//             }
//         });
//     }
// })



// const compareCarts = () => {
//     shoppingCart.forEach(cartItem => {
//         thingsToDisplay.forEach(displayItem => {
//             if (displayItem === null) {
//                 cartItem.quantity = 1
//                 thingsToDisplay.push(cartItem)
//             } else if (cartItem.id === displayItem.id) {
//                 displayItem.quantity += 1
//             } else {
//                 cartItem.quantity = 1
//                 thingsToDisplay.push(cartItem)
//             }
//         });
//     });
// }

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    shoppingCart.forEach((product, idx) => {

        cartEl.innerHTML +=
            `
        <section class="shoppingCart__item">
        <div>${product.name}</div>
        <div> qty. ${product.quantity}</div>
        <div>${(product.price * product.quantity).toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}</div>

        <button id="${idx}" class="cart_removeButton">Remove</button>
        </section>
        `

        grandTotal += (product.price * product.quantity)
    })

    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    // Get a reference to all purchase buttons
    const allRemoveButtons = document.querySelectorAll(".cart_removeButton")

    // Add a click event listener to each button
    for (const button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToRemove = parseInt(event.target.id)
                shoppingCart.splice(indexToRemove, 1)
                displayShoppingCart()
            }
        )

    }
}














