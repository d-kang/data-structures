var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = null; // fix me
  //should be an object
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // storage at key item is 1
  // if there is one, increment value
};

setPrototype.contains = function(item) {
  //A simple boolean
  //Object.values(SetInstance._storage).includes(item);
};

setPrototype.remove = function(item) {
  //Obj.keys().filter(item).indexOf
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
