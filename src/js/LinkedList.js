class LinkedList {
  constructor() {
    this.node = {
      before: null,
      item: null,
      next: null
    };
    this.head = null;
  }
  getHead() {
    return this.head;
  }
  getNext(item) {
    return item.next;
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
      next: null
    };
    if (!this.head) {
      return (this.head = node);
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
      next: currHead
    };
    this.head = node;
  }
  printAllItems() {
    console.log('=============')
    let currNode = this.head;
    while (currNode.item) {
      console.log(currNode.item);
      if (!currNode.next) {
        return;
      }
      currNode = currNode.next;
    }
  }
  swapLocations(item, swapDirection) {
    this.printAllItems()
    if (!item[swapDirection]) {
      return;
    }
    let nextNode = item.next;
    let prevNode = item.before;
    if (swapDirection === "next") {
      let nextNext = nextNode.next;
      prevNode.next = nextNode;
      nextNode.before = prevNode;
      nextNode.next = item;
      item.before = nextNode;
      item.next = nextNext;
    } else {
      if (!prevNode.before) {
        // head
        item.before = null;
        item.next = prevNode;
        prevNode.before = item;
        prevNode.next = nextNode;
      } else {
        let beforePrevNode = prevNode.before;
        item.before = beforePrevNode;
        item.next = prevNode;
        beforePrevNode.next = item;
        prevNode.before = item;
        prevNode.next = nextNode;
      }
      console.log({
        item
      });
    }
    this.printAllItems()
    return true;
  }
  parseFirstOf(item) {
    if (typeof item === "string") {
      return item.toLowerCase().charCodeAt(0);
    }
    return item;
  }
  sort() {
    if (!this.head || !this.head.next) {
      return false;
    }
    // sorts list
    let currNode = this.head.next;
    let swapCount = 0;
    // if letter is less than before, swap it with before.
    // if letter is greater than after, swap it with next.
    // run sort again until you reach the end
    // this will only sort it once, we need another way to run sort again until its completely done????
    while (currNode.item) {
      if (!currNode.next) {
        break;
      }
      if (
        currNode.before &&
        this.parseFirstOf(currNode.item) < this.parseFirstOf(currNode.before.item)
      ) {
        this.swapLocations(currNode, "before");
        swapCount++;
      }
      if (
        this.parseFirstOf(currNode.item) > this.parseFirstOf(currNode.next.item)
      ) {
        this.swapLocations(currNode, "next");
        swapCount++;
      }
      if (!currNode.next) {
        break;
      }
      currNode = currNode.next;
    }
    if (swapCount !== 0) {
      return this.sort();
    }
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
// list.push("zero");
// list.push("one");
// console.log(list.getLastNode());
// list.pop();
// console.log(list.getLastNode());
// list.push("one");
// list.push("two");
// list.shift();
// console.log(list.getHead());
// list.unshift("zero");
// console.log(list.getHead());
// console.log(list.includes('zero'));
list.push("d");
list.push("c");
list.push("b");
list.push("a");
// list.printAllItems();

// console.log("================");
list.sort();

// list.printAllItems();
