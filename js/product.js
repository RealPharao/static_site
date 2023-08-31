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

fetch("https://kea-alt-del.dk/t7/api/products/1525")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  // let idImg = (document.querySelector.textContent = product.id);
  // let urlImg = "https://kea-alt-del.dk/t7/images/webp/640/" + idImg + ".webp";
  // console.log(urlImg);
  // document.querySelector(".brandimage").src = urlImg;

  document.querySelector(
    ".brandimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  document.querySelector(".productdisplayname").textContent =
    product.productdisplayname;

  // document.querySelector(".productInfo .brandname").textContent =
  //   product.brandname;

  document.querySelector(
    ".productInfo .brandname"
  ).textContent = `${product.brandname} | ${product.articletype}`;

  document.querySelector(
    ".productInfo .Price"
  ).textContent = `Price ${product.price}`;

  document.querySelector(".dd1").textContent = `${product.id}`;

  document.querySelector(".dd2").textContent = `${product.gender}`;

  document.querySelector(".dd3").textContent = `${product.category}`;

  document.querySelector(".dd4").textContent = `${product.basecolour}`;

  document.querySelector(".dd5").textContent = `${product.description}`;
}

// {

//   "productdisplayname": "Deck Navy Blue Backpack",  tilføjet
//   "brandname": "Puma",                               tilføjet

//   "id": 1525,
//   "gender": "Unisex",
//   "category": "Accessories",

//   "articletype": "Backpacks",                        tilføjet
//   "basecolour": "Navy Blue",
//   "season": "Fall",

//   "soldout": 0,

//   "price": 1299,
//   "discount": 55,

//   "brandname": "Puma",

//   "brandimage": "http://assets.myntassets.com/assets/images/2015/11/17/11447736932686-113016-3ff8sf.jpg",

//   "description": "<p>asfafaf<br> kasjhdkashd</p>",

// }
