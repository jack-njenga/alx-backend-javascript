export default function getStudentIdsSum(arr) {
  const initVal = 0;

  if (arr instanceof Array) {
    const idSum = arr.map((arr) => arr.id);
    return idSum.reduce((total, curr) => (total + curr), initVal);
  }
  return initVal;
}

// export default function getStudentIdsSum(arr) {
//     let idSum = 0;
//     if (arr instanceof Array) {
//         for (let i=0; arr[i]; i++) {
//             idSum = idSum + arr[i].id;
//         }
//     }
//     return idSum;
// }
