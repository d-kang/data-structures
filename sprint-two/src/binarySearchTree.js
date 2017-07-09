var BinarySearchTree = function(value) {
	//find the middle
  var tempStorage = Object.create(treeMethods)
  tempStorage.value = value;
  tempStorage.right = null;
  tempStorage.left = null;

return tempStorage;
};
var treeMethods = {};
treeMethods.insert = function (value) {
	//if less than insert left
console.log({this: this});
	var newNode = {
		value,
		left: null,
        right: null
	 }
  var enumerator = function ( value, $node) {
  	console.log({value: value}, 'IAM RUNNING');
    if( value < $node.value ) {
      if ( $node.left === null ) {
      	$node.left = newNode;
      } else {
      	enumerator(value, $node.left);
      }
    } else {
      if ( $node.right === null ) {
      	$node.right = newNode;
      } else {
      	console.log('it ran');
      	enumerator(value, $node.right);
      }
    }
  }
  enumerator(value, this)

	// if ( value < this.value ){
 //      this.left = newNode;
	// } else if ( value > this.value ){
	// //if more than instert right
 //      this.right = newNode;
 //    }

};
treeMethods.contains = function (){};
treeMethods.depthFirstLog = function(){};
var binarySearchTree = BinarySearchTree(5);
/*
 * Complexity: What is the time complexity of the above functions?
 */
 binarySearchTree.insert(2);
 console.log({binarySearchTree});
