var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance._size = 0;
  var extendedInstance = _.extend(someInstance, queueMethods);
  return extendedInstance;
};

var queueMethods = {};

queueMethods.size = function () {
  return this._size;
};

queueMethods.enqueue = function(incoming) {
  this._size++;
  };

queueMethods.dequeue = function() {
  if (this._size > 0) {
    this._size--;
  }
  var tempStore = this[this._size];
  delete this[this._size];
  return tempStore;
};
