/**
 * super - ключевое слово, еоторое позволяет вызвать 
 */
  class Polygon {
    constructor(height, width) {
      this.name = "Polygon";
      this.height = height;
      this.width = width;
    }

    sayName() {
      console.log(`Hi, I am a ${this.name}`)
    }
  }

  class Square extends Polygon {
    constructor(length) {
      super(length, length);
      this.height; // ReferenceError, super должен быть вызыван первым!
      
      this.name = 'Square';
    }

    hi() {
      super.sayName()
    }
  
    get area() {
      return this.height * this.width;
    }
  
    set area(value) {
      this.area = value;
    } 
  }
  const square = new Square(5);

  square.hi()