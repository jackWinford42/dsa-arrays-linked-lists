/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    // creates a new node
    let node = new Node(val);
  
    // if list is Empty add the
    // element and make it head
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    // creates a new node
    let node = new Node(val);
  
    // if list is Empty add the
    // element and make it head
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) {
      return console.log("linked-list is empty")
    } else {
      let returnNode;
      if (this.length === 1) {
        returnNode = this.tail
      } else {
        let curr, prev;
        curr = this.head;
  
        while (curr.next !== null) {
          prev = curr
          curr = curr.next;
        }

        prev.next = null;
        this.tail = prev;
        returnNode = curr;
      }

      this.length--;

      //reset linked-list if it is now empty
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return returnNode.val;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) {
      return console.log("linked-list is empty")
    } else {
      let returnNode;

      returnNode = this.head;
      this.head = this.head.next;
      this.length--;

      //reset linked-list if it is now empty
      if (!this.length) {
        this.head = null;
        this.tail = null;
      }
      return returnNode.val;
    }

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx > this.length)
        return console.log("Please enter a valid idx.");
    else {
      let returnNode;

      if (idx === 0) {
        returnNode = this.head;
      } else {
        let curr
  
        curr = this.head;
        let i = 0;
        // iterate over the list to the
        // position to return an element
        while (i < idx) {
          i++;
          curr = curr.next;
        }

        // return the element
        returnNode = curr;
      }
      return returnNode.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx > this.length)
      return console.log("Please enter a valid idx.");
    else {
      let curr

      curr = this.head;

      // add the element to the
      // first index
      if (idx === 0) {
        this.head.val = val;
      } else {
        curr = this.head;
        let i = 0;

        // iterate over the list to find
        // the position to insert
        while (i < idx) {
          curr = curr.next;
          i++;
        }

        // adding an element
        curr.val = val;
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length)
      return console.log("Please enter a valid idx.");
    else {
      // creates a new node
      let node = new Node(val);
      let curr, prev;

      curr = this.head;
      // add the element to the
      // first idx
      if (idx === 0) {
        this.head = node;
        this.tail = node;
      } else if (idx === this.length) {
        const endNode = this.tail;
        endNode.next = node
        this.tail = node;
      } else {
        curr = this.head;
        let it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < idx) {
          it++;
          prev = curr;
          curr = curr.next;
        }
        node.next = curr;
        prev.next = node;
      }
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length)
      return console.log("Please Enter a valid idx");
    else {
      let curr, prev, i = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (idx === 0 && this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (idx === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to remove an element
        while (i < idx) {
          i++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        if (idx === this.length) {
          this.tail = prev;

        } else {
          prev.next = curr.next;
        }
      }
      this.length--;

      // return the remove element
      return curr.element;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    } else {
      let curr = this.head;
      let totalVals = 0;
      while (curr !== null) {
        totalVals = totalVals + curr.val;
        curr = curr.next;
      }
      return totalVals/this.length;
    }
  }
}

module.exports = LinkedList;
