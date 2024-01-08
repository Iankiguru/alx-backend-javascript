function getStudentsByLocation(studentList, city) {
  // Use filter to select students located in the specified city
  const filteredStudents = studentList.filter(student => student.location === city);

  return filteredStudents;
}
export default getStudentsByLocation;
