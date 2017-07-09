var BinarySearchTree = function(value) {
	//find the middle
  var tempStorage = Object.create(treeMethods);
  tempStorage.value = value;
  tempStorage.right = null;
  tempStorage.left = null;

  return tempStorage;
};
var treeMethods = {};
treeMethods.insert = function (value) {
	//if less than insert left
  var newNode = {
    value,
    left: null,
    right: null
  };
  var enumerator = function ( value, $node) {
    if ( value < $node.value ) {
      if ( $node.left === null ) {
        $node.left = newNode;
      } else {
        enumerator(value, $node.left);
      }
    } else {
      if ( $node.right === null ) {
        $node.right = newNode;
      } else {
        enumerator(value, $node.right);
      }
    }
  };
  enumerator(value, this);

};
treeMethods.contains = function (value) {
//search the tree for value
    // > go right, < go left
    // stop when you hit the null .next
    //return a true / false if value is present
  var found = false;
  var enumerator = function(value, $node) {
    console.log({$node});
    if (value === $node.value) {
      found = true;
    } else if (value < $node.value) {
      enumerator(value, $node.left);

    } else if (value > $node.value) {
      enumerator(value, $node.right);
    }
  };
  enumerator(value, this);
  return found;
};

treeMethods.depthFirstLog = function(func) {
  //'should execute a callback on every value
  //in a tree using "depthFirstLog"'

  //build the array to return

  //iterate through the ENTIRE tree
  //(not reallly binary search then? but does show depth)
  //pass each value to the function
  //recurse if .next
  //stop when next is null

  //return the values [5, 2, 3] for first test
  //values, not the array.

};

var binarySearchTree = BinarySearchTree(5);
/*
 * Complexity: What is the time complexity of the above functions?
 */
var array = [];
var func = function(value) { array.push(value); };
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.depthFirstLog(func);
console.log({arrayIs: array, shouldBe: [5, 2, 3] });
