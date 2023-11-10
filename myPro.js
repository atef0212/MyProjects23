import users from "./products.json" assert { type: "json" };
let ProductS = document.querySelector(".ProductS");
let OUTPUT = document.querySelector(".Product");
let totalOutput = document.querySelector("#total");
/* Hier wird für jedes Produkt ein HTML-Element erzeugt und zur Seite hinzugefügt.
Hier werden die Produkte auf der Webseite angezeigt.
 Für jedes Produkt wird ein HTML-Element mit Bild, Name, Marke,
 Preis und einer Schaltfläche zum Hinzufügen zum Warenkorb erstellt.*/
for (let item of users) {
  OUTPUT.innerHTML += `
    <div class="item">
      <img class="imge" src="${item.image}" alt="${item.name}">
      <div class="itemDiv">
        <h2 class="name">${item.name}</h2>
        <h2 class="marke">${item.marke}</h2>
        <div class="price">$${item.price}</div>
        <p>${item.description}</p>
        <button class="add">
          <i class="fa-solid fa-cart-plus fa-bounce fa-sm" style="color: #33d17a;"></i>
        </button>
      </div>
    </div>
  `;
}

// ...

/*Diese Funktion fügt jedem "In den Warenkorb" Button einen Event Listener hinzu.
 Wenn ein Benutzer auf die Schaltfläche klickt, 
wird das entsprechende Produkt zum Warenkorb hinzugefügt.*/

function cartList() {
  const selectPrice = document.getElementById("selectPrice");
  let addBtn = document.querySelectorAll(".add");
  let cartul = document.querySelector("#CartItems");
  let total = 0;

  addBtn.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      let name = document.querySelectorAll(".name")[index].textContent;
      let price = parseFloat(
        document.querySelectorAll(".price")[index].textContent.slice(1)
      );
      let marke = document.querySelectorAll(".marke")[index].textContent;
      let picture = document
        .querySelectorAll(".imge")
        [index].getAttribute("src");

      let cartItem = document.createElement("li");
      cartItem.classList.add("cartItem");

      let imgElement = document.createElement("img");
      imgElement.src = picture;
      imgElement.alt = name;
      imgElement.classList.add("cartItemImage");

      cartItem.appendChild(imgElement);
      cartItem.innerHTML += `<br><span>${marke}</span><br><span>${name}</span><br><span>$${price}</span><br>`;
      cartul.appendChild(cartItem);

      let remove = document.createElement("button");
      remove.classList.add("removeBtn");
      remove.innerHTML = `<i class="fa-solid fa-trash fa-lg" style="color: #e01b24;"></i>`;
      cartul.appendChild(remove);

      remove.addEventListener("click", function () {
        cartul.removeChild(cartItem);
        remove.style.display = "none";
        // Subtract the removed item price from the total
        total -= price;
        totalOutput.textContent = `Total: $${total.toFixed(2)}`;
      });

      //
      //

      // Add the item price to the total
      total += price;
      totalOutput.textContent = `Total: $${total.toFixed(2)}`;
    });
  });
}
/*Diese Funktionen sorgen für die Berechnung und Aktualisierung des Gesamtpreises im Warenkorb.
 calculateTotal wird einmal aufgerufen, wenn die Seite geladen wird, 
um den Anfangswert des Gesamtpreises anzuzeigen.*/
function calculateTotal() {
  let prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach((price) => {
    total += parseFloat(price.textContent);
    total.innerHTML = "";
  });

  totalOutput.textContent = `Total: $${total.toFixed(2)}`;
}

/*Hier wird ein Event Listener hinzugefügt, 
der auf Klicks des Nutzers auf die Schaltfläche zum Ein- und Ausblenden
 der Seitenleiste reagiert.

Ich hoffe, das hilft! Lass mich wissen, wenn du weitere Fragen hast.*/
let sidebar = document.querySelector(".aside");
let btnSideBar = document.querySelector(".btnX");

btnSideBar.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
//sort by price
// ...

// Function to generate the product list HTML
function generateProductList(products) {
  let productList = "";
  for (let item of products) {
    productList += `
      <div class="productItem">
        <img class="productImage" src="${item.image}" alt="${item.name}">
        <div class="productDetails">
          <h2 class="productName">${item.name}</h2>
          <h2 class="productBrand">${item.brand}</h2>
          <div class="productPrice">$${item.price}</div>
          <p>${item.description}</p>
          <button class="addToCart">
            <i class="fa-solid fa-cart-plus fa-bounce fa-sm" style="color: #33d17a;"></i>
          </button>
        </div>
      </div>
    `;
  }
  return productList;
}

// Function to update the product list based on sorting
function updateProductList() {
  const selectPrice = document.getElementById("selectPrice");
  const selectedValue = selectPrice.value;

  let sortedProducts;

  if (selectedValue === "lowest") {
    sortedProducts = users.slice().sort((a, b) => a.price - b.price);
    OUTPUT.style.display = "none";
  } else if (selectedValue === "highest") {
    sortedProducts = users.slice().sort((a, b) => b.price - a.price);
    OUTPUT.style.display = "none";
  } else {
    // Default case or any other sorting logic
    sortedProducts = users.slice();
  }

  ProductS.innerHTML = generateProductList(sortedProducts);
}

// ...

// Add event listener for sorting when the select box changes
selectPrice.addEventListener("change", updateProductList);

// ...

// Call the function to initially load the products
cartList();
calculateTotal();
