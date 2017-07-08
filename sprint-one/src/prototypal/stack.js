var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var extendedInstance = Object.create(stackMethods);
  extendedInstance.storage = {};
  extendedInstance._size = 0;
  return extendedInstance;
};

var stackMethods = {};

stackMethods.push = function(incoming) {
  this.storage[this._size] = incoming;
  this._size++;
};
stackMethods.pop = function() {
  if (this._size > 0) {
    this._size--;
  }
  var tempStore = this.storage[this._size];
  // does decrementing size automatically lose its reference to the last item?
  return tempStore;
};

stackMethods.size = function() {
  return this._size;
};
