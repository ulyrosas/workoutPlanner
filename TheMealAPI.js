export async function fetchMeals(dietaryOption) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?${dietaryOption}`,
  );
  const data = await response.json();
  return data.meals;
}

export function getDietaryQuery(dietaryOption) {
  switch (dietaryOption) {
    case 'Vegan':
      return 'c=Vegan';
    case 'Vegetarian':
      return 'c=Vegetarian';
    // Add more dietary options with their respective API queries here
    default:
      return 'c=All';
  }
}
