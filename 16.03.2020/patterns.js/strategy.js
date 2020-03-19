/**
 * Стратегия — это поведенческий паттерн проектирования, который определяет семейство схожих
 * алгоритмов и помещает каждый из них в собственный класс,
 * после чего алгоритмы можно взаимозаменять прямо во время исполнения программы.
 * 
 * например у нас есть навигатор, который может вычислять маршруты для пешеходов, автомобилистов и общественного
 * транспорта
 * мы можем выдаелить алгоритм для вычисления маршрутов для каждого типа в свой собтвенный класс, но все они должны
 * името общий интерфейс.
 */
class Shipping {
  constructor(){
    this.company = "";
  }

  setStrategy(company) {
      this.company = company;
  }

  calculate(package) {
      return this.company.calculate(package);
  }
};

class UPS {
  calculate(package) {
      // calculations...
      return "$45.95";
  }
};

class USPS {
  calculate (package) {
      // calculations...
      return "$39.40";
  }
};

class Fedex {
  calculate(package) {
      // calculations...
      return "$43.20";
  }
};


function run() {
  var package = { from: "76712", to: "10012", weigth: "lkg" };

  // the 3 strategies

  var ups = new UPS();
  var usps = new USPS();
  var fedex = new Fedex();

  var shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log("UPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(usps);
  console.log("USPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategy: " + shipping.calculate(package));
}