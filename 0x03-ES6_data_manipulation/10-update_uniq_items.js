// 10-update_uniq_items.js

function updateUniqueItems(groceryMap) {
  // Check if the argument is a Map
  if (!(groceryMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  // Iterate through entries and update quantity for items with initial quantity 1
  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}

export default updateUniqueItems;

