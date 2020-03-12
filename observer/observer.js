/**
 * Как мы можем отследить изменение объекта
 * 1. работа getter\setter
 * 2. Скрытые методы объекта
 * 3. Работа proxy
 * 
 * 
 * 
 */




class Animal {
  constructor (type, age, name) {
    this.type = type;
    this.age = age;
    this.name = name;
  }
  getProperty () {
    console.log(this.age, this.name, this.type);
  }
}

const cat = new Animal('cat', 12, 'Poll');
cat.getProperty();
Object.defineProperty(cat,'sex',{
  value: 'm',
})

console.log(cat.getProperty())
cat.name = 'nick'