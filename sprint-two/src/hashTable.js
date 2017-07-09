

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
//make array
  this.hashTable = [];
// for each _limit create a bucket
 for (let i = 0; i < this._limit; i++) {
  this.hashTable.push([]);
 }

};

HashTable.prototype.insert =  function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = -1
  this.hashTable[index].forEach( function(tuple) {
   if (tuple[0] === k) {
    tuple[1] = v;
    holder = 1;
   }
  });
  if (holder === -1) {
    this.hashTable[index].push([k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tupleIndex = _.filter(this.hashTable[index], function(tuple) {
    return tuple[0] === k;
  });
  if (tupleIndex[0]) {
    return tupleIndex[0][1];
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var holder = -1
  this.hashTable[index].forEach( function (tuple, i, array) {
   if (tuple[0] === k) {
    array.splice(i, 1);
   }
});
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


/*
 * insert constant
 * retrieve constant
 * remove constant
 */
