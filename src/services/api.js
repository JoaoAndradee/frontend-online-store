export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endpoint);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  // console.log(data);
  return data;
}

export async function getProductById(productId) {
  const endpoint = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  // console.log(data);
  return data;
}
