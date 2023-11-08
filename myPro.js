/*let http = new XMLHttpRequest();
http.open("get", "products.json", true);
http.send();

http.onload = function () {if(this.readyState==4&&this.status==200){
  let products = JSON.parse(this.responseText);
  let OUTPUT = "";
  for(let item of products){
      OUTPUT += `
      <div class="item">
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <div class="price">$${item.price}</div>
      </div>
      `;
  }document.querySelector(".Product").innerHTML = OUTPUT;
};
*/
import users from "./products.json" assert { type: "json" };
let OUTPUT = document.querySelector(".Product");
for (let item of users) {
  OUTPUT.innerHTML += `
  <div class="item">
  <img src="${item.image}" alt="${item.name}">
  <h2 class="name">${item.name}</h2>
  <h2 class="marke">>${item.marke}</h2>
  <div class="price">$${item.price}</div>
  <p>${item.description}</p>
  </div>
  `;
}
/*  // Remove default data from HTML
  let listProductHTML = document.querySelector(".listProduct");

  // Add new data
  if (products != null) {
    products.forEach((product) => {
      let newProduct = document.createElement("a");
      newProduct.href = "/detail.html?id=" + product.id;
      newProduct.classList.add("item");
      newProduct.innerHTML = `<img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <div class="price">$${product.price}</div>`;
      listProductHTML.appendChild(newProduct);
    });
  }*/
