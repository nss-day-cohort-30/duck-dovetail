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
        Price: ${product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })}

        <button class="product__purchaseButton">Purchase</button>
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
const allButtons = document.querySelectorAll(".product__purchaseButton")

// Add a click event listener to each button
for (button of allButtons) {
    button.addEventListener(
        "click",
        () => {
            window.alert("You added this product to your shopping cart")
        }
    )

}















