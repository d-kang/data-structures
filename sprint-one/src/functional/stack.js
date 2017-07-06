var Stack = function() {
  var someInstance = {};
  var count = 0;
  // Use an object with numeric keys to store values
  // Easy mode - Object.keys().push.pop.length
    // { 1: []}

  var storage = {};
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0 ) {
      count--;
    }
    var save = storage[count];
    delete storage[count];

    return save;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
