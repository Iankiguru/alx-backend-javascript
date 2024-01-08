// 4-update_grade_by_city.js

function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to select students in the specified city
  const selectedStudents = studentList.filter(student => student.location === city);

  // Use map to update grades based on newGrades array
  const updatedStudents = selectedStudents.map(student => {
    // Find the corresponding grade in newGrades array
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);

    // Set the grade or 'N/A' if not found
    student.grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return student;
  });

  return updatedStudents;
}

export default updateStudentGradeByCity;

