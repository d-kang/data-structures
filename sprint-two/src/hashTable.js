

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
//make array
  this.hashTable = [];
//make bucket

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this.hashTable[index] = [];
  this.hashTable[index].push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tupleIndex = _.filter(this.hashTable[index], function(tuple) {
    return tuple[0] === k;
  });
  console.log({tupleIndex});
  console.log({Hashtable: tupleIndex[0][1]})
  return tupleIndex[0][1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this.hashTable[index];
  var savedIndex;
  debugger;
  for( let i =0; i < bucket.length; i++) {
    if ( bucket[i][0] === k ) {
    	console.log('condition in loop met', i);
      savedIndex = i;
    }
  }
  console.log(bucket.splice(savedIndex, 1));

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
