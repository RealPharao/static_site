fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  product.forEach(productItem);
}

function productItem(product) {
  console.log(product);

  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".product").href = `product.html?id=${product.id}`;

  copy.querySelector(
    ".image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector(".productdisplayname").textContent =
    product.productdisplayname;

  if (product.soldout == 0) {
    copy.querySelector("h3").classList.add("soldoutSign");
    copy.querySelector("h3").textContent = "SOLDOUT";
  }

  if (product.discount) {
    copy.querySelector("h4").classList.add("discountSign");
    copy.querySelector("h4").textContent = `${product.discount}%`;
  }

  copy.querySelector(
    ".productInfo .brandname"
  ).textContent = `${product.brandname} | ${product.articletype}`;

  if (product.discount) {
    copy.querySelector(
      ".productInfo .Price"
    ).textContent = `Before $${product.price}`;
    copy.querySelector(".discount").textContent =
      "Now $" +
      Math.round(product.price - (product.price * product.discount) / 100);
  } else {
    copy.querySelector(".discount").classList.add(".discountNone");
    copy.querySelector(
      ".productInfo .Price"
    ).textContent = `$ ${product.price}`;
  }

  const productList = document.querySelector(".overview");
  productList.appendChild(copy);
}
