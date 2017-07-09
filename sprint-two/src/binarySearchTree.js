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


// traverses in order from left node to root node to right node
// to perform an inOrderTraversal
binaryTreeMethods.inOrderTraversal = function(cb) {
  var enumerate = function($node) {
    if ($node.left !== null) {
      cb($node.left.value);
    }
    cb($node.value);
    if ($node.righ !== null) {
      cb($node.right.value);
    }
  }
  enumerate(this)
}

var binarySearchTree = BinarySearchTree(15);
binarySearchTree.insert(10)
binarySearchTree.insert(18)
binarySearchTree.insert(5)
// binarySearchTree.insert(12)
// binarySearchTree.insert(3)
// binarySearchTree.insert(6)
// binarySearchTree.insert(20)


const array = [];
const cb = (node) => array.push(node)
binarySearchTree.inOrderTraversal(cb);

console.log(array)
console.log(_.isEqual(array, [10, 15, 18]))



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * insert is logarithmic O(log(n))
 * contains is logarithmic O(log(n))
 * depthFirstLog logarithmic O(log(n))
 */
