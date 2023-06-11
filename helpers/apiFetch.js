export async function getApiConnect() {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/complexSearch?apiKey=483d3b3409774066a1d6fa9df6eeb3ae"
  );
  const data = await response.json();
  // console.log(data, "fetch");
  return data;
}

export async function getIngredients(id) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=483d3b3409774066a1d6fa9df6eeb3ae&includeNutrition=false`
  );
  const data = await response.json();
  console.log(data, "fetch getIngredients");
  return data;
}

export async function getNutritionFacts(id) {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=483d3b3409774066a1d6fa9df6eeb3ae`
  );
  const data = await response.json();
  // console.log(data, " hi fetch getNutritionFacts");
  return data;
}