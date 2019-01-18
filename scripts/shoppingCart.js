const shoppingCart = []

const isProductInCart = id => shoppingCart.find(p => p.id === id)

/*
    Display all items in the shopping cart array
*/
const displayShoppingCart = () => {
    // Get reference to container HTML element
    const cartEl = document.querySelector("#cartItems")

    // CLear out element
    cartEl.innerHTML = `
    <section class="cartHeaders">
        <div class="cartHeaders__column">Product</div>
        <div class="cartHeaders__column">Quantity</div>
        <div class="cartHeaders__column">Price</div>

        <div class="cart__buttons"> </div>
    </section>
    `

    // Declare variable to store grand total of all prices
    let grandTotal = 0

    // Iterate shopping cart array
    shoppingCart.forEach((product, idx) => {

        // Add HTML representation of product object to DOM
        cartEl.innerHTML +=
        `
        <section class="lineItem">
            <div class="lineItem__column lineItem__name">${product.name}</div>
            <div class="lineItem__column lineItem__quantity">${product.quantity}</div>
            <div class="lineItem__column">
                ${(product.quantity * product.price).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}
            </div>

            <div class="cart__buttons">
                <button id="removeOne--${idx}" class="button--cart lineItem__column">-</button>
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
    const allRemoveButtons = document.querySelectorAll("button[id^='removeAll']")
    const oneRemoveButtons = document.querySelectorAll("button[id^='removeOne']")

    const deleteFromCart = idx => shoppingCart.splice(idx, 1)

    // Add a click event listener to each button
    for (const button of oneRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToRemove = parseInt(event.target.id.split("--")[1])
                const product = shoppingCart[indexToRemove]
                if (product.quantity > 1) {
                    product.quantity--
                } else {
                    deleteFromCart(indexToRemove)
                }
                displayShoppingCart()
            }
        )
    }

    // Add a click event listener to each button
    for (const button of allRemoveButtons) {
        button.addEventListener(
            "click",
            (event) => {
                const indexToRemove = parseInt(event.target.id.split("--")[1])
                deleteFromCart(indexToRemove)
                displayShoppingCart()
            }
        )

    }
}














