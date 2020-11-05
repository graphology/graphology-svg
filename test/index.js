/**
 * Graphology SVG Unit Tests
 * =========================
 */
var assert = require('chai').assert,
    renderSVG = require('../renderer'),
    DEFAULTS = require('../defaults').DEFAULTS,
    Graph = require('graphology');

function getBasicGraph() {
  var graph = new Graph();
  graph.addNode('John', {x: 1, y: 1, size: 1, color: 'red'});
  graph.addNode('Martha', {x: 2, y: 2, size: 1, color: 'blue'});
  graph.addEdge('John', 'Martha');

  return graph;
}

describe('renderer.js', function () {
  it('should generate a SVG string', function () {
    var graph = getBasicGraph();
    var svg = renderSVG(graph, DEFAULTS);

    assert.ok(svg);
  });
});
