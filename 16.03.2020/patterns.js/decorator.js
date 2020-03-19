/**
 * Декоратор — это структурный паттерн проектирования, который позволяет динамически добавлять
 * объектам новую функциональность, оборачивая их в полезные «обёртки».
 * 
 * в отличие от адаптера, он не меняет интерфейс, а расширяет функциональность.
 * 
 * Например у нас есть класс, который описывает соедниенение с БД. И нам понадобилось дбавить логирование.
 * Тут нам на помощь приходит декоратор.
 */


class MacBook {
  cost () {
    return 997;
  };
  screenSize() {
    return 13.3;
  };
}

function Memory(macbook) {
  var v = macbook.cost();
  macbook.cost = function() {
      return v + 75;
  }
}
function Engraving( macbook ){
 var v = macbook.cost();
 macbook.cost = function(){
   return  v + 200;
};
}

function Insurance( macbook ){
 var v = macbook.cost();
 macbook.cost = function(){
   return  v + 250;
};
}
var mb = new MacBook();
Memory(mb);
Engraving(mb);
Insurance(mb);
console.log(mb.cost()); //1522
console.log(mb.screenSize()); //13.3