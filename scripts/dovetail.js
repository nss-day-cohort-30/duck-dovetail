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




for (product of products) {
    const theProductHTML = createProductHTML(product)

    const containerEl = document.querySelector("#productList")

    containerEl.innerHTML += theProductHTML
}


document.querySelectorAll(".product__purchaseButton").addEventListener(
    "click",
    () => {
        window.alert("You added this product to your shopping cart")
    }
)













