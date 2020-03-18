class BinaryTreeNode {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  head = null;
  
  add(value){
    if(this.head === null) {
      this.head = new BinaryTreeNode(value)
    } else {
      this.addTo(this.head, value);
    }

    console.log('add', value);
  }
  
  addTo(node, value) {
    console.log(node, value)
    if(this.compareNodeValue(node.data, value) < 1){
      if(node.left === null) {
        node.left = new BinaryTreeNode(value)
      } else {
        this.addTo(node.left, value);
      }
    } else {
      if(node.right === null) {
        node.right = new BinaryTreeNode(value);
      } else {
        this.addTo(node.right, value)
      }
    }
    console.log(this.head.left);
  }

  compareNodeValue(nodeValue, value) {
    if (value < nodeValue){
      return -1;
    } else if (value > nodeValue){
      return 1;
    } else {
      return 0;
    }
  }

  findWithParent(value) {
    const foundNode = {
      currentNode: this.node,
      parent: null,
    };

    while (currentNode !=  null) {
      const result = this.compareNodeValue(currentNode, value)
      if (result > 0) {
        foundNode.parent = foundNode.currentNode;
        currentNode.foundNode = foundNode.currentNode.right;
      } else if (result < 0){
        foundNode.parent = foundNode.currentNode;
        foundNode.currentNode = foundNode.currentNode.left;
      } else {
        break;
      }
    };
    return foundNode;
  }

  remove(value){
    const { currentNode, parent} = this.findWithParent(value);
    if (currentNode === null) return false;

    if(currentNode.right === null) {
      if (parent === null) {
        this.head = current.left;
        console.log('parent === null')
      } else {
        const result = this.compareNodeValue(parent.data, currentNode.data);
        if (result < 0) {
          parent.left = currentNode.left;
        }
        else if(result > 0) {
          parent.left = currentNode.right;
        }
      }
    }
    console.log('remove', value);
    return true
  }

  contain(value){
    console.log('contain', contain);
  }

}

const binaryTree = new BinaryTree;

binaryTree.add(5)
binaryTree.add(3)
binaryTree.add(2)
binaryTree.add(4)
console.log(binaryTree.remove(2))

