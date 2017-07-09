var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = null;  // fix me
  //make children an array of chld objects?
  //easier for iteration and that 
  //is how it was on SA

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //push new child object into children array
};

treeMethods.contains = function(target) {
  //filter array for values on each element that
  //match results.
  //if it is longer than 0, return true; 
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
