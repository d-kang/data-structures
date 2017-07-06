var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage._size = 0;
  var extended = _.extend(storage, stackMethods);
  console.log(extended);
  return extended;
};
//use extend and this.

var stackMethods = {};

stackMethods.size = function() {
  return this._size;
};

stackMethods.push = function(incoming) {
  this[this._size] = incoming;
  this._size++;
};

stackMethods.pop = function() {
  if (this._size > 0) {
    this._size--;
  }
  let tempStore = this[this._size];
  delete this[this._size];
  return tempStore;
};
