const hasPathBFS = (graph, src, dst) => {

    const queue = [src];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current === dst) {
            return true
        }
        for (let neigbor of graph[current]) {
            queue.push(neigbor)
        }
    }

    return false;
}



const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

console.log(hasPathBFS(graph, 'f', 'k'))