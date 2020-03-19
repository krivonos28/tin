/**
 * Строитель — это порождающий паттерн проектирования, который позволяет создавать сложные объекты пошагово.
 * Строитель даёт возможность использовать один и тот же код строительства для получения разных представлений объектов.
 * 
 * например у нас на сайте реализован функционал кастомизацции отображаемой страницы. Кастомизированную страницу можно
 * делать с помощь паттерна строитель.
 * м ыбудем определять какой хедер, какой футер, цвет меню и т.д.
 */

class ConcreteBuilder1 {

  constructor() {
      this.reset();
  }

  reset() {
      this.product = new Product1();
  }

  producePartA() {
      this.product.parts.push('PartA1');
  }

  producePartB() {
      this.product.parts.push('PartB1');
  }

  producePartC() {
      this.product.parts.push('PartC1');
  }

  getProduct() {
      const result = this.product;
      this.reset();
      return result;
  }
}

class Product1 {
  parts = [];

  listParts() {
      console.log(`Product parts: ${this.parts.join(', ')}\n`);
  }
}

class Director {

  setBuilder(builder) {
      this.builder = builder;
  }

  buildMinimalViableProduct() {
      this.builder.producePartA();
  }

  buildFullFeaturedProduct() {
      this.builder.producePartA();
      this.builder.producePartB();
      this.builder.producePartC();
  }
}


function clientCode(director) {
  const builder = new ConcreteBuilder1();
  director.setBuilder(builder);

  console.log('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  console.log('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  console.log('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);