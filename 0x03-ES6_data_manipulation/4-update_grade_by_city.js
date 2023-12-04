export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((loc) => loc.location === city).map((studentArray) => {
    const checkGradeId = newGrades.find((grade) => grade.studentId === studentArray.id);
    return {
      ...studentArray,
      grade: checkGradeId ? checkGradeId.grade : 'N/A',
    };
  });
}
