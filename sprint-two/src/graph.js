

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.


Graph.prototype.addNode = function(value) {
  var copy = this.nodes.slice();
  copy.push(value);
  this.nodes = copy;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  return this.nodes.some( $node => $node === value);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  var filteredNodes = this.nodes.filter($node => $node !== value);
  this.nodes = filteredNodes;
  var filteredEdges = this.edges.filter($edge => $edge.indexOf(value) === -1);
  this.edges = filteredEdges;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgeRef = [fromNode, toNode];
  return this.edges.some(function(node) {
    return _.isEqual(node, edgeRef) || _.isEqual(node, edgeRef.reverse());
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edgesCopy = this.edges.slice();
  edgesCopy.push([fromNode, toNode]);
  this.edges = edgesCopy;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // find node
  var edgeRef = [fromNode, toNode];
  var filteredEdges = this.edges.filter(edge => {
    return !_.isEqual(edge, edgeRef) && !_.isEqual(edge, edgeRef.reverse());
  });
  this.edges = filteredEdges;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

Graph.prototype.mapNode = function(cb) {
  var data = [];
  this.forEachNode(function(node) {
    data.push(cb(node));
  });
  return data;
};

var graph = new Graph;
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);

/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
 * addNode is constant (array insertion at end of array)
 * contains linear (array lookup)
 * remove linear (array removal, must shift array)
 * hasEdge linear (array lookup)
 * removeEdge linear (array lookup)
 * forEachNode linear (enumerate array)
 * mapNode linear (enumerate array)
 */
