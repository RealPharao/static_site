// her skal der tilføjes det ord fra categorie siden til fetch linket, som stemmer overens med

// fetch("https://kea-alt-del.dk/t7/api/products?category" + "category")
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

// page2.html?category=
// Accessories
// Apparel
// Footwear
// Sporting%Goods

// fetch("https://kea-alt-del.dk/t7/api/products/1525")
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// function showProduct(product) {
//   console.log(product);

//   let producktInfo = document.querySelector;

//   let idImg = (producktInfo.textContent = product.id);
//   let urlImg = "https://kea-alt-del.dk/t7/images/webp/640/" + idImg + ".webp";
//   console.log(urlImg);

//   producktInfo("#productdisplayname").textContent = product.productdisplayname;

//   // producktInfo(".brandimage").src = urlImg;
// }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  // let idImg = (document.querySelector.textContent = product.id);
  // let urlImg = "https://kea-alt-del.dk/t7/images/webp/640/" + idImg + ".webp";
  // console.log(urlImg);
  // document.querySelector(".brandimage").src = urlImg;

  document.querySelector(
    ".image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".productdisplayname").textContent =
    product.productdisplayname;

  if (product.soldout == 0) {
    document.querySelector("h3").classList.add("soldoutSign");
    document.querySelector("h3").textContent = "SOLDOUT";
  }

  if (product.discount) {
    document.querySelector("h4").classList.add("discountSign");
    document.querySelector("h4").textContent = `${product.discount}%`;
  }

  // document.querySelector(".productInfo .brandname").textContent =
  //   product.brandname;

  document.querySelector(
    ".productInfo .brandname"
  ).textContent = `${product.brandname} | ${product.articletype}`;

  // document.querySelector(
  //   ".productInfo .Price"
  // ).textContent = `Price ${product.price}`;

  if (product.discount) {
    document.querySelector(
      ".productInfo .Price"
    ).textContent = `Before $${product.price}`;
    document.querySelector(".discount").textContent =
      "Now $" +
      Math.round(product.price - (product.price * product.discount) / 100);
  } else {
    document.querySelector(".discount").classList.add(".discountNone");
    document.querySelector(
      ".productInfo .Price"
    ).textContent = ` ${product.price}`;
  }

  document.querySelector("dl dd:nth-child(2)").textContent = `${product.id}`;

  document.querySelector(".dd2").textContent = `${product.gender}`;

  document.querySelector(
    "dl dd:nth-child(6)"
  ).textContent = `${product.category}`;

  document.querySelector(".dd4").textContent = product.basecolour;

  document.querySelector(".dd5").textContent = product.description;
}

// {

//   "productdisplayname": "Deck Navy Blue Backpack",   tilføjet
//   "brandname": "Puma",                               tilføjet

//   "id": 1525,
//   "gender": "Unisex",                                tilføjet
//   "category": "Accessories",                         tilføjet

//   "articletype": "Backpacks",                        tilføjet
//   "basecolour": "Navy Blue",                         tilføjet
//   "season": "Fall",

//   "soldout": 0,

//   "price": 1299,                                     tilføjet
//   "discount": 55,                                    tilføjet

//   "brandname": "Puma",                               tilføjet

//   "description": "<p>asfafaf<br> kasjhdkashd</p>",

// }
