/**
 * после вызова фунции маин
 * сперва все колбэки региструюся с соответсвующих очередях
 * 
 * выполняются микро-таски:console.log('2') выводит сразу сообщение, а второй process.nextTick
 * помещает callback в очередь таймаутов
 * 
 * далее выполняются  setImmediate
 * потом console.log('1')
 * console.log('4')
 * 
 */

function main() {
  // макротоска выплниться в этапе таймаутов
  setTimeout(() => console.log('1'), 50);
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => console.log('2'));
  // - исполныется на этапе проверки
  setImmediate(() => console.log('3'));
  // микро таска добаленная с помощью process.nextTick()
  process.nextTick(() => setTimeout(() => {
    console.log('4');
  }, 1000));
}

main();