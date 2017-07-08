var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size = 0;
};

Stack.prototype.size = function() {
  return this._size;
};
Stack.prototype.push = function(incoming) {
  this.storage[this._size] = incoming;
  this._size++;
};
Stack.prototype.pop = function() {

  if (this._size > 0) {
    this._size--;
  }
  var tempStore = this.storage[this._size];
  delete this.storage[this._size];
  return tempStore;
};

// var stack = new Stack();
