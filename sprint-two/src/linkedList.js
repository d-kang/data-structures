var LinkedList = function() {
  var list = {};
  list.head = null;// begin list at start node
  list.tail = null;// end list at end of node

  list.addToTail = function(value) {
  //first time is head null? tail null?
    //point to node and define
    var newNode =  Node(value);
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
  };

  list.contains = function(target) {
  };

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
