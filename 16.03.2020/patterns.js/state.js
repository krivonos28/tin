/**
 * Состояние — это поведенческий паттерн проектирования, который позволяет объектам менять поведение
 *  в зависимости от своего состояния. Извне создаётся впечатление, что изменился класс объекта.
 * 
 * например
 * у нас есть класс документ. У документа есть 3 сотояния, черновик, на согласование, опбулкиован
 * на каждае состояние содается свой класс. У этих классов есть общий интерейс. 
 * В классе документ храниться текущее состоние в зависимости от этого стояния вызывается интефейс определенного класса-состояния
 * документа
 */
class TrafficLight {
  constructor() {
    this.count = 0;
    this.currentState = new Red(this);
  }

  change(state) {
      // limits number of changes
      if (this.count++ >= 10) return;
      this.currentState = state;
      this.currentState.go();
  };

  start() {
      this.currentState.go();
  };
}

class Red{
  constructor(light){
    this.light = light;
  }

  go() {
    console.log("Red --> for 1 minute");
    this.light.change(new Green(this.light));
  }
};
class Yellow{
  constructor(light){
    this.light = light;
  }

  go() {
    console.log("Yellow --> for 1 minute");
    this.light.change(new Red(this.light));
  }
};
class Green{
  constructor(light){
    this.light = light;
  }

  go() {
    console.log("Green --> for 1 minute");
    this.light.change(new Yellow(this.light));
  }
};

function run() {
  const light = new TrafficLight();
  light.start();
}
run();