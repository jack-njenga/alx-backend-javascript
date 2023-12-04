export default function updateStudentGradeByCity(arr, city, newGrades) {
  if (arr instanceof Array) {
    const cityArr = arr.filter((arr) => arr.location === city);
    const newGrds = newGrades.map((x) => x.studentId);
    const GradedArr = cityArr.map((x) => {
      const newX = { ...x };
      if (newGrds.includes(x.id)) {
        newX.grade = newGrades.filter((n) => n.studentId === x.id)[0].grade;
        return newX;
      }
      newX.grade = 'N/A';
      return newX;
    });
    return GradedArr;
  }
  return [];
}
