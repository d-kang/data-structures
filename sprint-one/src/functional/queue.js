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

   size++;

  };

  someInstance.dequeue = function() {


    if (size > 0){
      size--;
    } else {
      size = 0;
    }
 return save;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
