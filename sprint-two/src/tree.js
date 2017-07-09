var Tree = function(value) {
  var newTree = {};
  var extended = _.extend(newTree, treeMethods);
  newTree.value = value;
  newTree.children = [];
  return extended;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
};

treeMethods.contains = function(target) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


 /*
  * .addChild
  *
  * .contains is linear because worst case you must traverse
  * all the nodes
  *
  *
  *
  */
