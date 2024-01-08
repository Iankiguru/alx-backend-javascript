function cleanSet(set, startString) {
  // Filter set values that start with startString
  const filteredValues = Array.from(set).filter(value => value.startsWith(startString));

  // Concatenate filtered values separated by '-'
  const resultString = filteredValues.join('-');

  return resultString;
}
export default cleanSet;
