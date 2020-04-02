export default class Graph {
    constructor() {
        nodes = []
    }

    addHead(node) {
        this.nodes.push(node)
    }
    
}

class Node {
    constructor(value) {
        value = value;
        neighbors = [];  
    }
}