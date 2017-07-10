const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;
  list._size = 0;

  list.addToTail = function(value) {
    const newNode = Node(value);
    if ( list.head === null ) {
      list.head = newNode;
      list._size++;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
      list._size++;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {

    const save = this.head.value;
    this.head = this.head.next;
    if (this._size > 0) {
      this._size--;
    }

    return save;
  };

  list.contains = function(target) {
    let doesContain = false;
    const enumerate = function(target, $node) {
      if ($node.value === target) {
        doesContain = true;
      } else if ($node.next === null) {
        return;
      } else {
        enumerate(target, $node.next);
      }
    };
    enumerate(target, this.head);
    return doesContain;
  };

  list.size = function() {
    return this._size;
  }

  return list;
};


const Node = function(value) {
  const node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * .addToTail is constant because we maintain a reference to the tail
 * .removeHead is constant because we maintain a reference to the head
 * .contains is linear because we must travere the list
 * .size is constant
 */
