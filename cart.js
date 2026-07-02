```javascript
// Get cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const clearCartBtn = document.getElementById("clear-cart");

// Display Cart
function displayCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <h3>Your cart is empty.</h3>
        `;
        totalPrice.textContent = "0";
        updateCartCount();
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        cartItems.innerHTML += `
            <div class="product-card">

                <img src="${item.image}" alt="${item.name}">

                <div class="product-info">

                    <h3>${item.name}</h3>

                    <p class="price">$${item.price}</p>

                    <button onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>

            </div>
        `;
    });

    totalPrice.textContent = total.toFixed(2);

    updateCartCount();
}

// Remove Item
function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

// Clear Cart
clearCartBtn.addEventListener("click", () => {

    if (confirm("Are you sure you want to clear the cart?")) {

        cart = [];

        localStorage.setItem("cart", JSON.stringify(cart));

        displayCart();
    }

});

// Update Cart Count
function updateCartCount() {

    cartCount.textContent = cart.length;
}

// Load Cart
displayCart();
```

```

