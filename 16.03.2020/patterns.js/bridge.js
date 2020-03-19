/**
 * Мост — это структурный паттерн проектирования, который разделяет один или несколько классов
 * на две отдельные иерархии — абстракцию и реализацию, позволяя изменять их независимо друг от друга.
 * 
 * Есть сайт с разными страницами, и пользователь должен иметь возможность изменять тему. Что делать?
 * Можно создать копии страниц для каждой из тем или же просто загрузить темы отдельно. это позовлят
 */
class Circle {
  
  constructor(color){
    this.color = color;
  }

  toString() {
      return `${this.color.getColorName()} Circle`;
  };
}

class Rectangle {
  
  constructor(color){
    this.color = color;
  }

  toString() {
      return `${this.color.getColorName()} Rectangle`;
  };
}

class Triangle {
  
  constructor(color){
    this.color = color;
  }
  
  toString() {
      return `${this.color.getColorName()} Triangle`;
  };
}

class Red {
  getColorName = function () {
      return 'Red';
  }
}

class Blue {
  getColorName = function () {
      return 'Blue';
  }
}

class Green {
  getColorName = function () {
      return 'Green';
  }
}

const redColor = new Red();
const blueColor = new Blue();
const greenColor = new Green();

const redCircle = new Circle(redColor);
const blueCircle = new Circle(blueColor);
const greenRectangle = new Rectangle(greenColor);

console.log(redCircle.toString());
console.log(blueCircle.toString());
console.log(greenRectangle.toString());