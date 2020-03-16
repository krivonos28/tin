function* generateSequence() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = generateSequence();
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

// for (let value of gen){
//   console.log(value)
// }
let iter = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let num of iter) {
  console.log(num); 
}