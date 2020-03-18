// functor

'use strict';

function maybe(x) {
  return function (fn) {
    if (x && fn) {
      return maybe(fn(x));
    } else {
      return maybe(null);
    }
  }
}

// usage

maybe(5)(x => x*2)(console.log);

/**
 * функтор это функция которая принимате аргумент  и возвращает функцию, которая передана как аргумент во вторую функцию и возвращет результат вычислений 
 */

