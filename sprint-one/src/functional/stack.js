const Stack = function() {
  const someInstance = {};
  let count = 0;
  const storage = {};
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count > 0 ) {
      count--;
    }
    const save = storage[count];
    delete storage[count];
    return save;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
