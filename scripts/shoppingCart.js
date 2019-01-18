//Item that was just purchased
let itemToAdd = {};

//shopping cart array used to populate the DOM
const shoppingCart = []

//compares item being purchased to see if it's new or a quantity should be updated
const compareQuantity = () => {

        //Looks to see if item being added to cart is already in cart
        const matchFound = shoppingCart.find(item => itemToAdd.id === item.id)
        if (matchFound) {
            
            //increments quantity of item already in cart
            matchFound.quantity++

        //adds item if not already in cart and creates quantity property    
        } else {
            itemToAdd.quantity = 1
            shoppingCart.push(itemToAdd)
        }
    }

//add contents of shopping cart to the DOM
const displayShoppingCart = () => {

    //target container for shopping cart
    const cartEl = document.querySelector("#cartItems")
    cartEl.innerHTML = ""

    let grandTotal = 0

    //loop through shopping cart and list each item with quantities and prices that update as things are added
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

    //add in grand total line at bottom after all items populate
    cartEl.innerHTML += `
      <h3>You owe us: ${grandTotal.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })}</h3>
    `

    // Get a reference to all remove buttons
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














