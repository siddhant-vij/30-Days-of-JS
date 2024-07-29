class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addNode(node) {
    if (!this.adjacencyList[node]) {
      this.adjacencyList[node] = [];
    }
  }

  addEdge(fromNode, toNode) {
    this.adjacencyList[fromNode].push(toNode);
    this.adjacencyList[toNode].push(fromNode);
  }

  removeEdge(fromNode, toNode) {
    this.adjacencyList[fromNode] = this.adjacencyList[fromNode].filter(
      (n) => n !== toNode
    );
    this.adjacencyList[toNode] = this.adjacencyList[toNode].filter(
      (n) => n !== fromNode
    );
  }

  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

  dfsIter(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  dfsRecursive(start, visited = {}, result = []) {
    result.push(start);
    visited[start] = true;
    this.adjacencyList[start].forEach((neighbor) => {
      if (!visited[neighbor]) {
        this.dfsRecursive(neighbor, visited, result);
      }
    });
    return result;
  }
}

const g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addEdge("A", "B");
g.addEdge("A", "C");
console.log(g.bfs("A")); // [ 'A', 'B', 'C' ]
console.log(g.dfsIter("A")); // [ 'A', 'C', 'B' ]
console.log(g.dfsRecursive("A")); // [ 'A', 'B', 'C' ]
