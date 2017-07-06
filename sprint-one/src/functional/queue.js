var Queue = function() {
  //what we are adding or removing
  var someInstance = {};
  var size = 0;
  var count = 0;
  // Use an object with numeric keys to store values
  //holds the instances
  var storage = {};
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    //console.log({size});
    size++;
    //console.log('enqueue', {storage, size});
  };

  someInstance.dequeue = function() {
    console.log({storage: storage, size});
    // debugger;
    var save = storage[count];
    console.log({save});
    delete storage[count];
    // debugger;
    // if (size > 0) {
    if (count < size) {
      count++;
    }
    // } else {
      // size = 0;
    // }
    // console.log(3, storage[size]);
    return save;
  };
  someInstance.size = function() {
    return size - count;
  };

  return someInstance;
};

// var queue = Queue();
//
// console.log(queue.enqueue('a'))
// console.log(queue.dequeue())
