const dfsPrint = (graph, source) => {

    const stack = [source];

    while (stack.length) {

        const current = stack.pop();
        console.log(current);

        for (let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }

}

const dfsPrintRecursion = (graph, source) => {
    console.log(source)
    for (let neighbor of graph[source]){
        dfsPrintRecursion(graph, neighbor)
    }

}

const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
};

// dfsPrint(graph, 'a')
dfsPrintRecursion(graph, 'a')