const Queue = function() {
  var extended = Object.create(queueMethods);
  extended.storage = [];
  extended._size = 0;
  extended._count = 0;
  return extended;
};

const queueMethods = {};

queueMethods.size = function(){
  return this._size - this._count;
};
queueMethods.enqueue = function(val){
  this.storage[this._size] = val
  this._size++
};
queueMethods.dequeue = function(){
  const tempStore = this.storage[this._count];
  delete this.storage[this._count];
  if (this._count < this._size) {
    this._count++
  }
  return tempStore;
};
