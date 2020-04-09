# Graphs

## Edge Lists

```javascript
let  graph = [[0, 1], [0, 2], [0, 4], [3, 4]]
```

## Adjacency Lists

Hashtable representation
```javascript
let graph = {
	0: [1, 2, 4],
	1: [0],
	2: [0],
	3: [4],
	4: [0, 3]
}
```
Nested array representation

```javascript
let graph = [[1, 2, 4], [0], [0], [4], [0, 3]]
```

Class representation

```javascript
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
```


## Adjacency Matrices

```javascript
let graph = [[0, 1, 1, 0, 1],
[1, 0, 0, 0, 0],
[1, 0, 0, 0, 0],
[0, 0, 0, 0, 1],
[1, 0, 0, 1, 0]]
```



