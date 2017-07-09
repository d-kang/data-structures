var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  return this._storage.some(function(elem) {
    return elem === item;
  });
};

setPrototype.remove = function(item) {
  this._storage = this._storage.filter(function(elem) {
    return elem !== item;
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * add is constant
 * contains is linear
 * remove is linear
 */
