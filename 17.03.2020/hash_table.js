/* Hash Table */



class HashTable {

  storage = [];
  storageLimit = 14;
  
  print() {
    console.log(this.storage)
  }
  
  hash (string, max) {
    var hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };

  add(key, value) {
    var index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      this.storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  };

  remove(key) {
    var index = this.hash(key, this.storageLimit);
    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
      delete this.storage[index];
    } else {
      for (var i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          delete this.storage[index][i];
        }
      }
    }
  };

  lookup(key) {
    var index = this.hash(key, this.storageLimit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  };

};



let ht = new HashTable();
ht.add('beau', 'person');
ht.add('fido', 'dog');
ht.add('fid', 'cat');
ht.add('rex', 'dinosour');
ht.add('tux', 'penguin')
console.log(ht.lookup('tux'))
ht.print();