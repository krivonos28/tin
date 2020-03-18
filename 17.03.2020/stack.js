/* Stacks! */


class Stack {
    count = 0;
    storage = {};
  
    push(value) {
        this.storage[this.count] = value;
        this.count++;
    }
    
    pop() {
        if (this.count === 0) {
            return undefined;
        }

        this.count--;
        const result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    size() {
        return this.count;
    }
    
    peek() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
