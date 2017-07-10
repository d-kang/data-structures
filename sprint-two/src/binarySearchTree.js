var BinarySearchTree = function(value) {
	//find the middle
  var tempStorage = Object.create(binaryTreeMethods);
  tempStorage.value = value;
  tempStorage.right = null;
  tempStorage.left = null;

  return tempStorage;
};
var binaryTreeMethods = {};
binaryTreeMethods.insert = function (value) {
	//if less than insert left
  var newNode = BinarySearchTree(value);
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
binaryTreeMethods.contains = function (value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  } else {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
 };

binaryTreeMethods.depthFirstLog = function(func) {
  func(this.value);
  if (this.left) {
    this.left.depthFirstLog(func);
  }
  if (this.right) {
    this.right.depthFirstLog(func);
  }
};


// traverses in order from left node to root node to right node
// to perform an inOrderTraversal
binaryTreeMethods.inOrderTraversal = function(func) {
  if (this.left) {
    this.left.inOrderTraversal(func);
   }
   func(this.value);
   if (this.right) {
    this.right.inOrderTraversal(func);
   }
}

var binarySearchTree = BinarySearchTree(15);
binarySearchTree.insert(10)
binarySearchTree.insert(18)
binarySearchTree.insert(5)
binarySearchTree.insert(12)
// console.log('binarySearchTree', binarySearchTree);
var array = [];
var cb = function(val) { array.push(val) };
console.log(1, binarySearchTree.inOrderTraversal(cb))
console.log(array)



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * insert is logarithmic O(log(n))
 * contains is logarithmic O(log(n))
 * depthFirstLog logarithmic O(log(n))
 * inOrderTraversal linear O(n) because it enumerates the tree in
 * numerical order
 */
