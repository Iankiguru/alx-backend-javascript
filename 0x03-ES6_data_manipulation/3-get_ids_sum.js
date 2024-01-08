// 3-get_ids_sum.js

function getStudentIdsSum(studentList) {
  // Use reduce to calculate the sum of student ids
  const sumOfIds = studentList.reduce((sum, student) => sum + student.id, 0);

  return sumOfIds;
}

export default getStudentIdsSum;

