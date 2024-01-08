// 7-has_array_values.js

function hasValuesFromArray(set, arr) {
  // Check if all elements in the array exist within the set
  const allValuesExist = arr.every(value => set.has(value));

  return allValuesExist;
}

export default hasValuesFromArray;

