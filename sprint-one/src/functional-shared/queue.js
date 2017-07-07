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
	//size is distance from oldest to newest (oldest - newest)
  return this._size;
};

queueMethods.enqueue = function(incoming) {
  //if q.length === 0 , oldest=incoming
  //else newest = incoming
  this._size++;

  };

queueMethods.dequeue = function() {
 //call oldest and then set new oldest in here

 //OR
 //object.keys(obj).sort( (a, b) => a-b)[0] if all keys are numerical
 //what about 10 vs 1? 20 vs 2? 200 vs 20?
  if (this._size > 0) {
    this._size--;
  }
  var tempStore = this[this._size];
  delete this[this._size];
  return tempStore;
};
