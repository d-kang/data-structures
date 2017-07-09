const Queue = function() {
  const someInstance = {};
  let size = 0;
  let count = 0;
  const storage = {};
  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };
  someInstance.dequeue = function() {
    const save = storage[count];
    delete storage[count];
    if (count < size) {
      count++;
    }
    return save;
  };
  someInstance.size = function() {
    return size - count;
  };
  return someInstance;
};
