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
binaryTreeMethods.contains = function (value) {
  var wasFound = false;
  var enumerator = function(value, $node) {
    if (value === $node.value) {
      wasFound = true;
    } else if (value < $node.value) {
      if ($node.left !== null) {
        enumerator(value, $node.left);
      }
    } else {
      if ($node.right !== null) {
        enumerator(value, $node.right);
      }
    }
  };
  enumerator(value, this);
  return wasFound;
};

binaryTreeMethods.depthFirstLog = function(func) {
  var enumerate = function($tree, cb) {
     func($tree.value);
     if ($tree.left !== null) {
       enumerate($tree.left, cb);
     }
     if ($tree.right !== null) {
       enumerate($tree.right, cb);
     }
   };
   enumerate(this, func);
};

var binarySearchTree = BinarySearchTree(5);
console.log (binarySearchTree);
console.log (binarySearchTree.value);
console.log (binarySearchTree.contains(5));

// binarySearchTree.insert(2)
console.log('binarySearchTree.insert(2)', JSON.stringify(binarySearchTree.insert(2), null, 2));
// binarySearchTree.insert(3);
console.log('binarySearchTree.insert(3)', JSON.stringify(binarySearchTree.insert(3), null, 2));

// binarySearchTree.insert(7);
console.log('binarySearchTree.insert(7)', JSON.stringify(binarySearchTree.insert(7), null, 2));
// binarySearchTree.insert(6);
console.log('binarySearchTree.insert(6)', JSON.stringify(binarySearchTree.insert(6), null, 2));
// expect(binarySearchTree.left.right.value).to.equal(3);
// expect(binarySearchTree.right.left.value).to.equal(6);

console.log('binarySearchTree.contains(5)', binarySearchTree.contains(5));
console.log('binarySearchTree.contains(2)', binarySearchTree.contains(2));
console.log('binarySearchTree.contains(2)', binarySearchTree.contains(3));
console.log('binarySearchTree.contains(2)', binarySearchTree.contains(7));
console.log('binarySearchTree.contains(2)', binarySearchTree.contains(6));


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * insert is logarithmic O(log(n))
 * contains is logarithmic O(log(n))
 * depthFirstLog logarithmic O(log(n))
 */
