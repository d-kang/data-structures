var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];
  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var $tree = Tree(value);
  var copyTree = this.children.slice();
  copyTree.push($tree);
  this.children = copyTree;
};

treeMethods.contains = function(target) {
  var doesContain = false;
  var hasChildren = this.children.length > 0;
  var enumerate = function(target, $node) {
    if ($node.value === target) {
      doesContain = true;
    }
    if (hasChildren) {
      $node.children.forEach(function(child) {
        enumerate(target, child);
      });

    }
  };
  enumerate(target, this);
  return doesContain;
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
