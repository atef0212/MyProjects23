const products = [
  {
    id: 1,
    name: "Redmi 12",
    marke: "XIAOMI",
    price: 200,
    image: "img/S21.webp",
    description: "XIAOMI Redmi 12 128GB mit Displayschutzfolie",
  },
  {
    id: 2,
    name: "Blade A53+",
    marke: "ZTE",
    price: 250,
    image: "img/ASSET_MMS_109447874.webp",
    description: "ZTE Blade A53+ 64 GB Space Gray Dual SIM.",
  },
  {
    id: 3,
    name: "iPhone 8",
    marke: "APPLE",
    price: 590,
    image: "img/iphone8.webp",
    description: "APPLE REFURBISHED (*) Apple iPhone 8 Gold 64 GB 64 GB Gold",
  },
  {
    id: 4,
    name: "Galaxy A23",
    marke: "SAMSUNG",
    price: 400,
    image: "img/a23.webp",
    description: "SAMSUNG Galaxy A23 5G 64 GB Black Dual SIM",
  },
  {
    id: 5,
    name: "SC 230 Handy",
    marke: "SWISSTONE",
    price: 300,
    image: "img/233.webp",
    description: "SWISSTONE SC 230 Handy, Rot",
  },
  {
    id: 6,
    name: "REFURBISHED (*) S21 5G",
    marke: "SAMSUNG",
    price: 600,
    image: "img/S21.webp",
    description: "SAMSUNG REFURBISHED (*) S21 5G 128 GB Violett Dual SIM",
  },
  {
    id: 7,
    name: "S22+ 128 GB",
    marke: "SAMSUNG",
    price: 550,
    image: "img/s22.jpeg",
    description: "SAMSUNG REFURBISHED (*) S22+ 128 GB Schwarz Dual SIM",
  },
  {
    id: 8,
    name: "IPHONE 14 PRO",
    marke: "APPLE",
    price: 300,
    image: "img/i14.webp",
    description:
      "APPLE IPHONE 14 PRO 512GB SPACE BLACK 512 GB Space Schwarz Dual SIM.",
  },

  {
    id: 9,
    name: "Blade A3+",
    marke: "ZTE",
    price: 450,
    image: "img/ASSET_MMS_109447874.webp",
    description: "ZTE Blade A3+ 64 GB Space Gray Dual SIM.",
  },
];

const cartItems = [];
let total = 0;

function filterProducts() {
  const priceRange = document.getElementById("priceRange").value;
  const brandFilter = document.getElementById("brandFilter").value;

  const productContainer = document.getElementById("Product");
  productContainer.innerHTML = "";

  const filteredProducts = products.filter((product) => {
    const meetsPriceCriteria =
      priceRange === "all" ||
      (priceRange === "low" && product.price <= 350) ||
      (priceRange === "medium" &&
        product.price > 200 &&
        product.price <= 450) ||
      (priceRange === "high" && product.price > 500);

    const meetsBrandCriteria =
      brandFilter === "all" || product.marke === brandFilter;

    return meetsPriceCriteria && meetsBrandCriteria;
  });

  filteredProducts.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name} - $${product.price}</p>
    `;
    productElement.addEventListener("click", () => addToCart(product));
    productContainer.appendChild(productElement);
  });
}

function addToCart(product) {
  cartItems.push(product);
  updateCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById("cartItems");
  const totalPriceElement = document.getElementById("totalPrice");
  cartItemsList.innerHTML = "";

  total = cartItems.reduce((acc, item) => acc + item.price, 0);

  cartItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.classList.add("cart-item");
    listItem.innerHTML = `
    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
    <span>${item.name} - ${item.marke} - $${item.price}</span>
    <button class="remove-btn" onclick="removeFromCart(${index})"><i class="fa-solid fa-trash fa-lg" style="color: #e70808;"></i></button>
  `;
    cartItemsList.appendChild(listItem);
  });

  totalPriceElement.textContent = total.toFixed(2);
}
let sidebar = document.querySelector("#cart");
let btnSideBar = document.querySelector(".btnX");

btnSideBar.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
// Initial display
filterProducts();

//burger menu
