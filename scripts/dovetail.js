/*
    Function to convert a JavaScript object representation
    of a product to an HTML representation
*/
const createProductHTML = product => `
    <section class="product">
        <header class="product__header">
            <h2>${product.name}</h2>
        </header>

        <p class="product__description">
        ${product.description}
        </p>

        <footer class="product__footer">
            <div class="product__price">
                Price: ${product.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD"
                })}
            </div>

            <button id="${product.id}" class="button button--purchase">Purchase</button>
        </footer>
    </section>
`



// Iterate all products
for (product of products) {
    // Create HTML representation
    const theProductHTML = createProductHTML(product)

    // Reference to container
    const containerEl = document.querySelector("#productList")

    // Update HTML of container
    containerEl.innerHTML += theProductHTML
}

// Get a reference to all purchase buttons
const allButtons = document.querySelectorAll(".button--purchase")

// Add a click event listener to each button
for (button of allButtons) {
    button.addEventListener(
        "click",
        (event) => {
            // Find the product whose `id` property is equal to
            // the "id" attribute of the button that was clicked on
            const product = products.find(p => parseInt(event.target.id) === p.id)

            // Only if something was found, add the object to the
            // shopping cart array
            const itemInCart = isProductInCart(product.id)
            if (!itemInCart) {
                shoppingCart.push(Object.assign({quantity: 1}, product))
            } else {
                itemInCart.quantity++
            }
            displayShoppingCart()
        }
    )
}















