/**
 *
 * @param base base of number to check, also the size of the NFA alphabet
 * @param divisor divider
 */
function divisibilityRegex (base, divisor) {
  let graph = createGraph(divisor);
  populateGraph(graph, base, divisor);
  console.log('start');
  console.dir(graph);
  for (let i = divisor; i >= 2; i--) {
    reduceOutNode(graph, i);
    console.log(i);
    console.dir(graph);
  }
  // console.log('final');
  // console.dir(graph);
  let regexStr = '^(' + graph[0][1] + ')*$';
  console.log(regexStr);
  return new RegExp(regexStr);
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
        edge = '(' + edge + '|' + move + ')';
      }
      graph[modulo + 1][dest + 1] = edge;
    }
  }
}

function reduceOutNode (graph, rip) {
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      if (rip !== i && rip !== j) {
        // console.log(rip, i, j);
        tripletReduction(graph, rip, i, j);
        // console.dir(graph);
      }
    }
  }
  clearConnections(graph, rip);
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
  
  // console.log(R1, R2, R3, R4);
  
  //Only continue if path exists from i -> rip and rip -> j
  if (R1 !== null && R3 !== null) {
    //Compute new Regex
    let cyclic = addStarProtector(R2);
    let around = R1 + cyclic + R3;
    
    let orig = (R4 === null ? '' : '|' + R4);
    if (i === j) {
      orig = addStarProtector(orig);
    }
  
    let altFull = '(' +around + ')' + orig;
    // console.log(altFull);
    graph[i][j] = altFull;
  }
}

function addStarProtector (str) {
  if (!str) {
    return "";
  }
  let ret = str + '';
  if (ret.charAt(ret.length - 1) === "*") {
    ret = '(' + ret + ')';
  }
  ret += '*';
  return ret;
}

/**
 * Node whose connections are being removed
 *
 * @param graph {Array<Array>}
 * @param rip {Number}
 */
function clearConnections (graph, rip) {
  for (let i = 0; i < graph.length; i++) {
    graph[i][rip] = null;
    graph[rip][i] = null;
  }
}

let reg = divisibilityRegex(2, 4);

let test1 = "101"; //5 from base 2
let test2 = "110"; //6
let test3 = "111"; //7
let test4 = "1001"; //9
let test5 = "10101110"; //174
let test6 = "10101111"; //175
let test7 = "111001"; //56

console.log(!!test1.match(reg));
console.log(!!test2.match(reg));
console.log(!!test3.match(reg));
console.log(!!test4.match(reg));
console.log(!!test5.match(reg));
console.log(!!test6.match(reg));
console.log(!!test7.match(reg));

//export default divisibilityRegex;