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
  var oldest = incoming; // change to position of incoming
  this[this._size] = incoming;
  //else newest = incoming
  this._size++;
};

queueMethods.dequeue = function() {
  //call oldest and then set new oldest in here
  //object.keys(obj).sort( (a, b) => a-b)[0] if all keys are numerical
  var storageKeys = Object.keys(this);
  // var sortedKeys = storageKeys.sort( (a, b) => Number(a) - Number(b));
  var filtered = storageKeys.filter(a => typeof a === 'string');

  // console.log('storageKeys', JSON.stringify(storageKeys));
  console.log('filtered', JSON.stringify(filtered));
  console.log('this', JSON.stringify(this));
  var firstKey = filtered[0];
  console.log({firstKey, 'this': this});
  //what about 10 vs 1? 20 vs 2? 200 vs 20?

  if (this._size > 0) {
    this._size--;
  }
  var tempStore = this[firstKey];
  delete this[firstKey];
  return filtered.length - 1;
};
