export default function getStudentsByLocation(arr, city) {
  if (arr instanceof Array) {
    return arr.filter((x) => x.location === city);
  }
  return [];
}

// export default function getStudentsByLocation(arr, city) {
//     let new_arr = []
//     if (arr instanceof Array) {
//         for (let i=0; arr[i]; i++) {
//             if (arr[i].location === city) {
//                 new_arr.push(arr[i])
//             }
//         }
//     }
//     return new_arr;
// }
