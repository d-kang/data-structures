var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage ={};
  this._size = 0;
  this._count = 0;
};
Queue.prototype.size = function(){
  return this._size - this._count;
}
Queue.prototype.enqueue = function(incoming){
  this.storage[this._size] = incoming;
  this._size++;
}
Queue.prototype.dequeue = function(){
  var storeTemp = this.storage[this._count];
  delete this.storage[this._count]
    if (this._count < this._size) {
  	this._count++;
  }
  return storeTemp;
}
