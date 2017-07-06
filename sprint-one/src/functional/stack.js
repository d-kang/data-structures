var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  var mostRecent;
  // Easy mode - Object.keys().push.pop.length
    // { 1: []}

  var storage = {};
  //

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    mostRecent = count;
    count++;


  };

  someInstance.pop = function() {
    var save = storage[mostRecent];
    delete storage[mostRecent];
    // debugger;
    if (count > 0 ) {
      count--;
      mostRecent = count;
    }
    return save;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var stack = Stack();

stack.push('a');
var popped = stack.pop();
console.log(popped);
