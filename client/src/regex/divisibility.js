/**
 *
 * @param base base of number to check, also the size of the NFA alphabet
 * @param divisor divider
 */
function divisibilityRegex (base, divisor) {
}

/**
 * Create a divisor by divisor adjacency matrix of null
 *
 * @param divisor
 * @returns {Array}
 */
function createGraph (divisor) {
  let graph = [];
  for (let i = 0; i <= divisor ; i++) {
    ///Single row
    let nodeILinks = [];
    for (let j = 0; j <= divisor; j++) {
      nodeILinks.push(null);
    }
    graph.push(nodeILinks);
  }
  return graph;
}

/**
 * Populate the GNFA (Generalized Non-deterministic Finite Automaton)
 *
 * @param graph
 * @param base
 * @param divisor
 */
function populateGraph (graph, base, divisor) {
  //Input node of a Graph
  for (let i = 0; i < divisor && i < base; i++) {
    graph[0][i + 1] = i % base;
  }
  
  //Populate modulo connections
  for (let modulo = 0; modulo < divisor; modulo++) {
    for (let move = 0; move < base; move++) {
      //Delta function for  divisibility GNFA
      let dest = (modulo * base + move) % divisor;
      let edge = graph[modulo + 1][dest + 1];
      
      if (!edge) {
        edge = move;
      }
      else {
        edge += '|' + move;
      }
      graph[modulo + 1][dest + 1] = edge;
    }
  }
}

function reduceGraph (rip) {
}

/**
 * Remove the dependency of going through node being removed when going from node i to node j
 *
 * @param graph Graph being worked on
 * @param rip the node being removed
 * @param i the origin node of triplet
 * @param j the sink node of triplet
 */
function tripletReduction (graph, rip, i, j) {
  //Get current Regexs
  let R1 = graph[i][rip];
  let R2 = graph[rip][rip];
  let R3 = graph[rip][j];
  let R4 = graph[i][j];
  //TODO figure out edge cases of this
  
  //Compute new Regex
  let cyclic = R2 ? R2 + '*' : R2;
  let around = R1 + cyclic + R3;
  let full = around === "" ? R4 : around + '|' + R4;
  
  let altFull = '((' + R1 + ')(' + R2 + ')*(' + R3 + '))|(' + R4 + ')';
  graph[i][j] = altFull;
}

/**
 * Node whose connections are being removed
 *
 * @param graph {Array<Array>}
 * @param rip {Number}
 */
function clearConnections (graph, rip) {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      graph[i][j] = null;
    }
  }
}

let graph = createGraph(3);
populateGraph(graph, 2, 3);
console.dir(graph);

//export default divisibilityRegex;