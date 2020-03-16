function showThisWithoutStrictMode () {
  /**
   * тут this = global так как для обычных функцций имеет знаечение только то, как они вызваны.
   * если это просто функкцция, то this = global
   * если это метод - то this = это объект(то, что перед точкой)
   */
  function sum () {
    console.log('sum --- ', this === global)
  }
  /**
   * для стрелочной функцции this равен конексту, где она определена
   * 
   * в данном случе this = global
   */
  const sumArrow = () => {
    console.log('sumArrow', this === global);
  }
  sum();
  sumArrow();
  const obj = {
    getThis() {
      console.log('obj.getThis.Func', this === obj);
      this.getThisArr()
    },
/**
 * стрелочная функция как метод возварщает global
 */ 
    getThisArr: () => {
      console.log('obj.getThis.Arr', this === global);
    }
  }
  obj.getThis()
  obj.getThisArr()

  class SomeClass {
    constructor(){
      this.name = 'someClass';
    }
    getThis(){
      const arr = () => {
        console.log('someclass this', this);
        return this;
      }
      arr();
    }
  }
  const someClass = new SomeClass();
  console.log('some class', someClass.getThis());
}

function showThisWithStrictMode () {
  'use strict';
  /**
   * при использовании use strict this равен undefinrd и его надо задавать с помощь.
   * bind, apply, call
   */
  console.log('useStrict', this === undefined);

}

showThisWithoutStrictMode();

showThisWithStrictMode();