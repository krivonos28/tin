let obj = {
  name: "Alex",
  surname: "Krivonos",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

obj = new Proxy(obj, {
  get(target, prop) {
    console.log(target, prop);
    if (prop === 'name') {
      console.log('This is name');
    };
    return target[prop];
  },
  set(target, prop, value){
    console.log('---- set \n', target, prop, value);
    if (prop === 'name') {
      console.log('this is name')
      return false
    } else {
      true
    }
  }
})

obj.name = "Tom";
console.log('-------', obj.name)
