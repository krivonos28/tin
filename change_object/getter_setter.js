const obj = {
  name: "Alex",
  surname: "Krivonos",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

console.log(obj.fullName);
obj.fullName = "Tom Braby";
console.log(obj.fullName);
