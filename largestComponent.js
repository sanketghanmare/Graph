const largestComponent = (graph) => {
    let largest = 0;
    let visited = new Set();

    for (let node in graph) {
        let size = exploreSize(graph, node, visited);
        if (size > largest) {
            largest = size
        }
    }

    return largest
}

const exploreSize = (graph, currentNode, visited) => {

    if (visited.has(currentNode)) return 0;

    let size = 1;

    visited.add(currentNode);

    for (let neighbor of graph[currentNode]) {
        size += exploreSize(graph, neighbor, visited)
    }

    return size
}

console.log(largestComponent({
    0: ['8', '1', '5'],
    1: ['0'],
    5: ['0', '8'],
    8: ['0', '5'],
    2: ['3', '4'],
    3: ['2', '4'],
    4: ['3', '2']
}))