const Stack = function() {
  var extendedInstance = Object.create(stackMethods);
  extendedInstance.storage = {};
  extendedInstance._size = 0;
  return extendedInstance;
};

const stackMethods = {};

stackMethods.push = function(incoming) {
  this.storage[this._size] = incoming;
  this._size++;
};
stackMethods.pop = function() {
  if (this._size > 0) {
    this._size--;
  }
  const tempStore = this.storage[this._size];
  // does decrementing size automatically lose its reference to the last item?
  return tempStore;
};

stackMethods.size = function() {
  return this._size;
};
