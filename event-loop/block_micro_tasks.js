/**
 * 
 */
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

function main() {
  // макротоска выплниться в этапе таймаутов
  setTimeout(() => console.log('1'), 50);
  setTimeout(() => console.log('0'), 0);
  setTimeout(() => console.log('0'), 0);
  setTimeout(() => console.log('0'), 0);
  setTimeout(() => console.log(fib(40)), 0);
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => console.log('2'));
  
  // - исполныется на этапе проверки
  setImmediate(() => console.log('3'));
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => setTimeout(() => {
    console.log('4');
  }, 0));
}

main();