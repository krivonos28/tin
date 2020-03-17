function carry (f) {
  return function(a){
    return function(b){
      return function (c){
        return f(a ,b, c)
      }
    };
  }
}
function sum (a, b, c) {
  return a + b + c;
}
const carrySum = carry(sum)
console.log(carrySum(1)(2)(3))