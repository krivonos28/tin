// деструктуризация объектов
const people = {
  name: "Alex",
  age: "32",
  height: 184,
  weight: 97
}

let { name, age } = people;

console.log(name, age);
// деструктуризация с дефолтным значением
const pet = {
  nick: 'Oskar',
  type: 'Dog',
}

const { nick, city = 'Minsk' } = pet;
console.log(nick, city);

// деструктуризация с присвоением другого имени
const pc = {
  hdd: 1000,
  cpu: 2400,
  core: 4,
}

const { hdd, cpu: processor, core } = pc;
console.log(hdd, processor, core);

const car = {
  wheel: 4,
  interier: {
    set: 4,
  }
}

const { wheel, interier: { set } } = car;

console.log(set);

// дуструктуризация массива
let red = 254;

const rgb = [255, 200];

const [red, green, blue = 144] = rgb;
console.log(red,green, blue);

// деструктуризация с rest 

const rainbowS