// Featured Products

const products = [
{
    id:1,
    name:"Wireless Headphones",
    price:79,
    image:"images/headphones.jpg"
},

{
    id:2,
    name:"Smart Watch",
    price:120,
    image:"images/smartwatch.jpg"
},

{
    id:3,
    name:"Running Shoes",
    price:65,
    image:"images/shoes.jpg"
},

{
    id:4,
    name:"Laptop Backpack",
    price:45,
    image:"images/backpack.jpg"
}
];

const featuredProducts = document.getElementById("featured-products");

// Display Products
function displayProducts(){

    if(!featuredProducts) return;

    featuredProducts.innerHTML="";

    products.forEach(product=>{

        featuredProducts.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3>${product.name}</h3>

                <p class="price">$${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>

        </div>

        `;

    });

}

// Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add Product
function addToCart(id){

    const product = products.find(item => item.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " added to cart!");

}

// Update Cart Count
function updateCartCount(){

    const cartCount = document.getElementById("cart-count");

    if(cartCount){
        cartCount.textContent = cart.length;
    }

}

displayProducts();
updateCartCount();