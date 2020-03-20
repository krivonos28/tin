/**
 * Компоновщик — это структурный паттерн проектирования, который позволяет сгруппировать множество объектов в древовидную структуру,
 * а затем работать с ней так, как будто это единичный объект.
 * 
 * Запускает команды рекурсивно над всеми над всему элементами дереава
 * 
 * содержит операции добаления, удаления 
 * стандартные операции интерфейса компонентов делегирует дочерним компнентам
 * 
 */

class Node {
  constructor(name) {
    this.children = [];
    this.name = name;
  }
  add(child) {
    this.children.push(child);
  }

  remove(child) {
    var length = this.children.length;
    for (var i = 0; i < length; i++) {
        if (this.children[i] === child) {
            this.children.splice(i, 1);
            return;
        }
    }
  }
  cl(){
    console.log('hey');
  }

  getChild(i) {
    return this.children[i];
  }

  hasChildren() {
    return this.children.length > 0;
  }
}


function traverse(indent, node) {
  node.cl();
  for (let i = 0, len = node.children.length; i < len; i++) {
      traverse(indent, node.getChild(i));
  }
}


function run() {
  const tree = new Node("root");
  const left = new Node("left")
  const right = new Node("right");
  const leftleft = new Node("leftleft");
  const leftright = new Node("leftright");
  const rightleft = new Node("rightleft");
  const rightright = new Node("rightright");
 
  tree.add(left);
  tree.add(right);
  tree.remove(right);
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree);

}
run();