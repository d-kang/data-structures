var Tree = function Node(value) {
  var node = Object.create(nodeMethods);

  node.value = value;
  node.children = [];
  return node;
};

const nodeMethods = {};
nodeMethods.addChild = function(value) {
  var node = Tree(value);
  this.children.push(node);
  // return node;
};

nodeMethods.contains = function(target) {
  if (target === this.value) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

nodeMethods.eachNode = function(cb) {
  cb(this.value)
  for (var i = 0; i < this.children.length; i++) {
    this.children[i].eachNode(cb);
  }
};

nodeMethods.filterNode = function(cb) {
  var data = [];
  this.eachNode(function(value) {
    if (cb(value)) {
      data.push(value)
    }
  })
  return data;
};

nodeMethods.mapNode = function(cb) {
  var data = [];
  this.eachNode(function(node) {
    data.push(cb(node));
  })
  return data;
};

nodeMethods.reduceNode = function(cb, memo) {
  var tally = false;
  this.eachNode(function(val) {
    if (memo === undefined && !tally) {
      memo = val;
      tally = true;
    } else {
      memo = cb(memo, val);
    }
  });
  return memo
};


var tree = Tree(4)
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
// console.log('tree.contains(4)', tree.contains(4));  // true
// console.log('tree.contains(5)', tree.contains(5));  // true
// console.log('tree.contains(6)', tree.contains(6));  // true
// console.log('tree.contains(7)', tree.contains(7));  // true
// console.log('tree.contains(8)', tree.contains(8));  // true
// console.log('tree.contains(9)', tree.contains(9));  // false

// console.log(tree)

/*
 * Complexity: What is the time complexity of the above functions?
 */

 /*
  * .addChild is constant in this case we are just pushing an item
  * onto an array
  *
  * .contains is linear because worst case you must traverse
  * all the nodes
  *
  * .eachNode is linear
  * .filterNode is linear
  * .mapNode is linear
  * .reduceNode is linear
  */
