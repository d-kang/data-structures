const Queue = function() {
  const someInstance = {};
  someInstance._size = 0;
  someInstance._count = 0;
  var extendedInstance = _.extend(someInstance, queueMethods);
  return extendedInstance;
};

const queueMethods = {};

queueMethods.size = function () {
  return this._size - this._count;
};

queueMethods.enqueue = function(val) {
  this[this._size] = val;
  this._size++;
};

queueMethods.dequeue = function() {
  const frontKey = this._count
  const tempStore = this[frontKey];
  delete this[frontKey];
  if (this._count < this._size) {
    this._count++;
  }
  return tempStore;
};
