const shoppingCart = []

const isProductInCart = id => shoppingCart.find(p => p.id === id)

/*
    Display all items in the shopping cart array
*/
const displayShoppingCart = () => {
    // Get reference to container HTML element
    const cartEl = document.querySelector("#cartItems")

    // CLear out element
    cartEl.innerHTML = ""

    // Declare variable to store grand total of all prices
    let grandTotal = 0

    // Iterate shopping cart array
    shoppingCart.forEach((product, idx) => {

        // Add HTML representation of product object to DOM
        cartEl.innerHTML +=
        `
        <section class="lineItem">
            <div class="lineItem__column lineItem__name">${product.name}</div>
            <div class="lineItem__column">
                ${(product.quantity * product.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}
            </div>

            <div class="cart__buttons">
                <button id="removeAll--${idx}" class="button--cart lineItem__column">-</button>
                <button id="removeAll--${idx}" class="button--cart lineItem__column">Remove</button>
            </div>
        </section>
        `

        grandTotal += (product.quantity * product.price)
    })

    // Add h3 element with total price of all products in cart
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














