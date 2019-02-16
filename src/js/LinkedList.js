class LinkedList {
  constructor() {
    this.node = {
      before: null,
      item: null,
      next: null,
    };
    this.head = null;
  }
  getHead(item) {
    return this.head;
  }
  getNext(item) {
    return node.next;
  }
  getLastNode() {
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    if (!currNode.next) {
      return currNode;
    }
  }
  pop() {
    // removes last element from list
    let lastNode = this.getLastNode();
    let beforeNode = lastNode.before;
    beforeNode.next = null;
  }
  push(item) {
    // adds element to end of list
    let node = {
      before: null,
      item: item,
      next: null,
    }
    if (!this.head) {
      return this.head = node;
    } 
    // transverse from head through list until you reach a null next
    let lastNode = this.getLastNode();
    lastNode.next = node;
    node.before = lastNode;
  }
  shift() {
    // removes first item in list
    let nextNode = this.head.next;
    nextNode.before = null;
    this.head = nextNode;
  }
  unshift(item) {
    // adds item to beginning of list 
    let currHead = this.head;
    let node = {
      before: null,
      item: item,
      next: currHead,
    }
    this.head = node;
  }
  sort(orderBy) {
    // sorts list
  }
  includes(item) {
    // checks to see if an item is included in the list
    let currNode = this.head;
    while (currNode.item) {
      if (currNode.item === item) {
        return true;
      }
      if (!currNode.next) {
        return false;
      }
      currNode = currNode.next;
    }
  }
}

const list = new LinkedList();
list.push('zero');
list.push('one');
// console.log(list.getLastNode());
list.pop();
// console.log(list.getLastNode());
list.push('one');
list.push('two');
list.shift();
console.log(list.getHead());
list.unshift('zero');
console.log(list.getHead());
console.log(list.includes('zero'));