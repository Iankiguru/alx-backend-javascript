function getListStudentIds(studentArray) {
  // Check if the argument is an array
  if (!Array.isArray(studentArray)) {
    return [];
  }

  // Use map to extract ids from each student object
  const ids = studentArray.map(student => student.id);

  return ids;
}
export default getListStudentIds;
