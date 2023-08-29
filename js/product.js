fetch("https://kea-alt.del.dk/t7/api/products/1525")
  .then((res) => res.json())
  .then((data) => console.log(data));
