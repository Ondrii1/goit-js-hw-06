const categoriesList = document.getElementById("categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const firstCategoryElement = category.firstElementChild.querySelector("ul li");
  const lastCategoryElement = category.lastElementChild.querySelector("ul li");
  
  const firstCategoryElementText = firstCategoryElement ? firstCategoryElement.textContent : "No elements";
  const lastCategoryElementText = lastCategoryElement ? lastCategoryElement.textContent : "No elements";
  
  console.log(`Category: ${categoryName}`);
  console.log(`First Element: ${firstCategoryElementText}`);
  console.log(`Last Element: ${lastCategoryElementText}`);
});
