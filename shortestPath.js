const shortestPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    const visited = new Set([nodeA]);
    const queue = [[nodeA, 0]];
    while (queue.length) {
        const [node, dist] = queue.shift();

        if (node === nodeB) {
            return dist
        }

        for (let n of graph[node]) {
            if(!visited.has(n)) {
                visited.add(n)
                queue.push([n,dist+1])

            }
        }
    }

    return -1

}

const buildGraph = (edges) => {
    const graph = {}

    for (let edge of edges) {
        const [a,b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

const edges = [
    ['w','x'],
    ['x','y'],
    ['z','y'],
    ['z','v'],
    ['w','v']
]

console.log(shortestPath(edges,'w','z'))