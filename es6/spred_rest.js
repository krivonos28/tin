let arr = [3, 4, 5];

function sum (a, b, c) {
  return a + b + c
}

console.log(sum(...arr))
/**
 * rest оператор может использоватся только один раз и в конце аоргументов
 */
const arrFuctions = (...args) => {
  const argumentsSubstitute = args;
  console.log(argumentsSubstitute)
}
arrFuctions(1,2,4);