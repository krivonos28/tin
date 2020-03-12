/**
 * тут мы с помощью Promise заблокировали исполенниен макротасок. Так же можно использовать 
 *  process.nextTick
 * Object.observe
 * mutation observe
 */

function main() {
  // макротоска выплниться в этапе таймаутов
  setTimeout(() => console.log('1'), 50);
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => console.log('2'));
  // - исполныется на этапе проверки
  Promise.resolve().then(
    () => console.log(5)
  ).then(
    () => console.log(5)
  ).then(
    () => console.log(5)
  ).then
  setImmediate(() => console.log('3'));
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => setTimeout(() => {
    console.log('4');
  }, 1000));
}

main();