const shoppingCart = []

const displayShoppingCart = () => {
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    for (const product of shoppingCart) {
        cartEl.innerHTML +=
        `
        <section class="shoppingCart__item">
          <div>${product.name}</div>
          <div>${product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
          })}</div>
        </section>
        `

        grandTotal += product.price

    }
    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

}









