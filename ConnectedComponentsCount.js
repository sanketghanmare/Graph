const connectedComponentsCount = (graph) => {
    let visited = new Set();
    let count = 0
    for (let n in graph) {
        if (explore(graph, n, visited) === true) {
            count++;
        }
    }
    return count;
};

const explore = (graph, currentNode, visited) => {
    if (visited.has(String(currentNode))) return false
    visited.add(String(currentNode))
    for (let n of graph[currentNode]) {
        explore(graph, n, visited)
    }
    return true;
}

console.log(connectedComponentsCount({
    0:[8,1,5],
    1:[0],
    5:[0,8],
    8:[0,5],
    2:[3,4],
    3:[2,4],
    4:[3,2]
}))