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

// Throughout my professional and academic carrier, I worked on developing backend systems,
//     frontend applications, Microservices, wrote test cases to test what I built to catch,
// Designed POC, and built prototypes of applications for demo purposes and while doing all these I
// steadily increased my tech stack, and upgraded my over skill sets and learned a lot of lessons.
//     My skill set and experience will surely help me to excel in the role.