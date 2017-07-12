var Set = function() {
  var set = Object.create(setPrototype);
  set.data = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {

  this.data.push(item);
};

setPrototype.contains = function(item) {
  return this.data.some(function(elem) {
    return elem === item;
  });
};

setPrototype.remove = function(item) {
  this.data = this.data.filter(function(elem) {
    return elem !== item;
  });
};

// var anagram = [];
// setPrototype.anagram = function(array) {
//   var array = this.data;
//   var copy = this.data.slice();
//   if (copy === 0) {
//     return [];
//   }
//   return this.anagram().slice(0, 1).concat([this.data[0]])
// }

  // var i = 0
  // while(i < this.data.length) {
  //   anagram.push(this.data[i])
  //   i++
  // }

var set = Set();

set.add('a')
set.add('b')
set.add('c')
set.add('d')

// console.log({set});
// console.log('anagram', set.anagram());


/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * add is constant
 * contains is linear
 * remove is linear
 */
