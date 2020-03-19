/**
 * Абстрактная фабрика — это порождающий паттерн проектирования, который позволяет создавать
 * семейства связанных объектов, не привязываясь к конкретным классам создаваемых объектов.
 */

class DogFactory {
  create(type) {
    let dog;
    if (type === 'small'){
      dog = new SmallDog('Bob', 11)
    } else if (type === 'big') {
      dog = new BigDog('Bob', 11)
    }
  }
}
class SmallDog{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}
class BigDog{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

class Cat {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}


class AFactory {

}
 