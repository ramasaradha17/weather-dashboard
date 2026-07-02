const products = [
{
id:1,
name:"Wireless Headphones",
category:"Electronics",
price:79,
image:"images/headphones.jpg"
},

{
id:2,
name:"Smart Watch",
category:"Electronics",
price:120,
image:"images/smartwatch.jpg"
},

{
id:3,
name:"Bluetooth Speaker",
category:"Electronics",
price:65,
image:"images/speaker.jpg"
},

{
id:4,
name:"Gaming Mouse",
category:"Electronics",
price:35,
image:"images/mouse.jpg"
},

{
id:5,
name:"Men's T-Shirt",
category:"Fashion",
price:20,
image:"images/tshirt.jpg"
},

{
id:6,
name:"Women's Dress",
category:"Fashion",
price:45,
image:"images/dress.jpg"
},

{
id:7,
name:"Denim Jacket",
category:"Fashion",
price:55,
image:"images/jacket.jpg"
},

{
id:8,
name:"Hoodie",
category:"Fashion",
price:40,
image:"images/hoodie.jpg"
},

{
id:9,
name:"Running Shoes",
category:"Shoes",
price:70,
image:"images/shoes.jpg"
},

{
id:10,
name:"Sports Shoes",
category:"Shoes",
price:85,
image:"images/sportshoes.jpg"
},

{
id:11,
name:"Leather Boots",
category:"Shoes",
price:95,
image:"images/boots.jpg"
},

{
id:12,
name:"Casual Sneakers",
category:"Shoes",
price:75,
image:"images/sneakers.jpg"
},

{
id:13,
name:"Backpack",
category:"Accessories",
price:40,
image:"images/backpack.jpg"
},

{
id:14,
name:"Laptop Bag",
category:"Accessories",
price:50,
image:"images/laptopbag.jpg"
},

{
id:15,
name:"Sunglasses",
category:"Accessories",
price:30,
image:"images/sunglasses.jpg"
},

{
id:16,
name:"Wallet",
category:"Accessories",
price:25,
image:"images/wallet.jpg"
}
];

const productList=document.getElementById("product-list");
const search=document.getElementById("search");
const category=document.getElementById("category");

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function displayProducts(items){

productList.innerHTML="";

items.forEach(product=>{

productList.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3>${product.name}</h3>

<p>${product.category}</p>

<p class="price">$${product.price}</p>

<button onclick="addToCart(${product.id})">

Add to Cart

</button>

</div>

</div>

`;

});

}

function addToCart(id){

const product=products.find(item=>item.id===id);

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();

alert(product.name+" added to cart!");

}

function updateCartCount(){

document.getElementById("cart-count").textContent=cart.length;

}

search.addEventListener("keyup",filterProducts);

category.addEventListener("change",filterProducts);

function filterProducts(){

const keyword=search.value.toLowerCase();

const selectedCategory=category.value;

const filtered=products.filter(product=>{

const matchesName=product.name.toLowerCase().includes(keyword);

const matchesCategory=

selectedCategory==="all" ||

product.category===selectedCategory;

return matchesName && matchesCategory;

});

displayProducts(filtered);

}

displayProducts(products);

updateCartCount();