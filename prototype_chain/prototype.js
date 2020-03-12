/**
 * prototype chain
* 1. Показать что такое prototype
* 2. Все варианты создания объекта и демонстрация разницы в прототипе
* 3. Когда prototype становится null
 * 
 * prototype - используется только при вызове оператора new и указывает __proto__ для новых объектов
 * 
 * 
 * 
 * 
 */
 // Литерал объекта
const animal = {
  name: 'Nick',
}
console.log('animal.__proto__', animal.__proto__ ) // пустой объект

const mouse = Object.create(null);
mouse.name = 'lak'
console.log('mouse.__proto__', mouse) // [Object: null prototype] 
console.log('mouse.__proto__', mouse.__proto__) // пустой объект

function Dog (age = 5){
  this.age = age;
}

// Dog.prototype = animal;
const dog = new Dog();
console.log('dog.__proto__', dog.__proto__)

class Cat{
  constructor(){
    this.age = 6

  }
  say() {
    console.log('miy');
  }
}

const cat = new Cat();
console.log('cat.__proto__', cat.__proto__)
console.log()