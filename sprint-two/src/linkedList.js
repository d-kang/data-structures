var LinkedList = function() {
  var list = {};
  list.head = null;// begin list at start node
  list.tail = null;// end list at end of node

  list.addToTail = function(value) {
  // head{ref to thing
  //     ref to nextThing}
  // tail{ref thing
  //   ref to null
  // }
   //first time is head null? tail null?
    //point to node and define
    var newNode = Node(value);
    if ( list.head === null ) {
      list.head = newNode;
    }
    if (list.tail !== null) {
      list.tail.next = newNode;
    }
    list.tail = newNode;

  //second time
    //tail now points to new node
      //new value is now true

  };

  list.removeHead = function() {
    var tempStore = list.head;
    list.head = list.head.next;
    // return former head
    return tempStore.value;
  };

  list.contains = function(target) {
  //being incr
    var doesContain = false;
    var enumerate = function(target, node) {
      if (node.value === target) {
        doesContain = true;
      } else if (node.next === null) {
        return;
      } else {
        enumerate(target, node.next);
      }
    };
    enumerate(target, list.head);
    return doesContain;
  };
  // debugger;
  //  if ( list.value === target) {
  //
  //   return true;
  //  }else if (list.next === null) {
  //   return false;
  //  } else {
  //   return list.contains(list.next);
  //  }


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
