// function carry (f) {
//   console.log(arguments)
//   return function(a){
//     return function(b){
//       return function (c){
//         return f(a ,b, c)
//       }
//     };
//   }
// }
// function sum (a, b, c) {
//   return a + b + c;
// }
// const carrySum = carry(sum)
// console.log(carrySum(1)(2)(3))

function summator(a){
  let currentSum = a;
  function summ (b) {
    currentSum += b;
    return summ;
  }
  // summ.toString = () => {
  //   return currentSum;
  // }
  console.log(currentSum)
  return summ;
}
console.log(summator(1)(2)(5)(5))