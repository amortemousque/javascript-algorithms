export default class Graph {
    constructor() {
        this.nodes = []
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.neighbors = [];
    }
}