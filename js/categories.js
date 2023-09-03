fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then(showCat);

function showCat(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  console.log(cat);

  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  clone.querySelector(
    ".catLink"
  ).href = `productList.html?category=${cat.category}`;

  clone.querySelector(".catDiv").textContent = cat.category;

  document.querySelector("main").append(clone);
}
