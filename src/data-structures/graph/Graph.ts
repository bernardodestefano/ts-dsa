export class Vertex<T> {
  data: T;
  adjacent: Vertex<T>[];
  constructor(data: T) {
    this.data = data;
    this.adjacent = [];
  }

  addAdjacent(node: Vertex<T>): void {
    this.adjacent.push(node);
  }
}

export default class Graph<T> {
  vertices: Map<T, Vertex<T>> = new Map();

  addVertex(data: T): Vertex<T> {
    const vertex = this.vertices.get(data);
    if (vertex) return vertex;

    const newVertex = new Vertex(data);
    this.vertices.set(data, newVertex);

    return newVertex;
  }

  addEdge(source: T, destination: T): void {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);
  }
}
