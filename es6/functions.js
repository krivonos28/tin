//1 нет this
function foo () {
  this.name = 'Alex';
  setTimeout(function() {
    console.log(this.name); // undefined
  }, 0)
}
foo();

function foo1 () {
  this.name = 'Alex';
  setTimeout(() => {
    console.log(this.name); // Alex
  }, 0)
}
foo1();

//2 нет свойства arguments
let arguments = 2;

function buz (name) {
  console.log('arguments --buz', arguments);
}

const buz1 = (name) => {
  console.log('arguments --buz1', arguments);
}

buz('Alex');
buz1('Alex'); 
// 3 стрелочные функции не могут быть использованы как конструкторы..

// 4 в стрелочных функцциях не может быть использовано ключевое слово yield.
/**
 * потому что генераторы создыются через function*()
 */

