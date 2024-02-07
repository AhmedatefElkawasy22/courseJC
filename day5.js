//task1
// function fibonacci_by_arr(line) {
//     let first = 0, second = 1, res;
//     for (let i = 0; i < line; i++) {
//         if (i == 0) { process.stdout.write(first + ' '); }
//         for (let x = 0; x < i; x++) {
//             process.stdout.write(second + ' ');
//             res = first + second;
//             first = second;
//             second = res;
//         }
//         console.log();
//     }
// }
// fibonacci_by_arr(5);
//------------------------------------------------------------------------------
//task2
// let num = 5;
// let res = 0;
// let first = 0, second = 1;
// function feb(indx) {
//   if (indx == num + 1) {
//     return;
//   }
//   res = first + second;
//   first = second;
//   second = res;

//   return feb(indx + 1);
// }

// if (num == 1) {
//   cout << 0;
// } else if (num == 2) {
//   cout << 1;
// } else {
//   feb(3);
//     console.log(res);
// }
//------------------------------------------------------------------------------------------------
//task 3
let arr = [132, 432, 4, 3, 23, 43, 24];
let n = arr.length - 1;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
