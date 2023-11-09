import users from "./products.json" assert { type: "json" };
let OUTPUT = document.querySelector(".Product");
for (let item of users) {
  OUTPUT.innerHTML += `
  <div class="item">
  <img class="imge" src="${item.image}" alt="${item.name}">
  <h2 class="name">${item.name}</h2>
  <h2 class="marke">>${item.marke}</h2>
  <div class="price">$${item.price}</div>
  <p>${item.description}</p>
  <button class="add">  <i class="fa-solid fa-cart-plus fa-bounce fa-sm" style="color: #33d17a;"></i>
  </button>

  </div>
  `;
}
//<button class="buy">Buy Now</button>
function cartList() {
  // Wählt alle Elemente mit der Klasse "add" aus (die "In den Warenkorb"-Schaltflächen)

  let addBtn = document.querySelectorAll(".add");
  let cartul = document.querySelector("#CartItems");

  // Iteriert durch jede "In den Warenkorb"-Schaltfläche
  addBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      // Get the name, price, and image source of the selected product
      let name = document.querySelectorAll(".name")[index].textContent;
      let price = document.querySelectorAll(".price")[index].textContent;
      let marke = document.querySelectorAll(".marke")[index].textContent;
      let picture = document
        .querySelectorAll(".imge")
        [index].getAttribute("src");
      // Erstellt ein neues Listenelement für das Warenkorb-Element
      // Create a new list item for the shopping cart item
      let cartItem = document.createElement("li");
      cartItem.classList.add("cartItem");

      // Create a new image element for the shopping cart item
      let imgElement = document.createElement("img");
      imgElement.src = picture; // Set the image source
      imgElement.alt = name; // Set the alt attribute
      imgElement.classList.add("cartItemImage");

      // Append the image and other information to the cart item
      cartItem.appendChild(imgElement);
      cartItem.innerHTML += `<br><span>${marke}</span><br><span>${name}</span> <br><span>${price}</span><br>`;
      // Fügt das Warenkorb-Element dem Container für den Warenkorb hinzu
      // Append the cart item to the shopping cart container
      cartul.appendChild(cartItem);

      // Event listener for the remove button
      let remove = document.createElement("button");
      remove.classList.add("removeBtn");
      remove.innerHTML = `<i class="fa-solid fa-trash fa-lg" style="color: #e01b24;"></i>`;
      cartul.appendChild(remove);

      remove.addEventListener("click", function () {
        cartul.removeChild(cartItem);
        // Hide the remove button
        remove.style.display = "none";
      });
    });
  });
}
// Call the cartList function to initialize the shopping cart functionality
cartList();

// Select the sidebar and the button to toggle the sidebar
let sidebar = document.querySelector(".aside");
let btnSideBar = document.querySelector(".btnX");

btnSideBar.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
