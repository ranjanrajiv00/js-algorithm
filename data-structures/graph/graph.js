class Graph {
    constructor() {
        this.graph = {};
    }

    add(vertex, edge, weight) {
        if (this.graph[vertex])
            this.graph[vertex] = { ...this.graph[vertex], [edge]: weight };
        else {
            this.graph[vertex] = {};
            if (edge) {
                this.graph[vertex][edge] = weight;
            }
        }
    }

    bfs(start) {
        let queue = [], visited = {};
        queue[0] = start;
        visited[start] = true;

        let front = 0, rear = 0, capacity = 1;

        while (capacity) {
            var node = queue[front++];
            capacity--;
            console.log(node);

            for (let next in this.graph[node]) {
                if (!visited[next]) {
                    queue[++rear] = next;
                    capacity++;

                    visited[next] = true;
                }
            }
        }
    }

    dfs(vertex, visited) {
        if (!visited)
            visited = {};

        if (!vertex)
            return;

        console.log(vertex);
        visited[vertex] = true;

        for (let next in this.graph[vertex]) {
            if (!visited[next]) {
                this.dfs(next, visited);
            }
        }
    }

    print() {
        console.log(this.graph);
    }

    findMinDistance(distances, visited) {
        let minDistanceNode = null;

        for (let node in distances) {
            if (minDistanceNode === null || (distances[minDistanceNode] > distances[node])) {
                if (!visited[node]) {
                    minDistanceNode = node;
                }
            }
        }

        return minDistanceNode;
    }

    dijkstra(start) {
        let distances = {}, visited = {};

        for (let vertex in this.graph) {
            distances[vertex] = Infinity;
        }
        distances[start] = 0;
        let visitingPath = {};
        let node = this.findMinDistance(distances, visited);

        while (node) {
            let cost = distances[node];
            let children = this.graph[node];

            for (let next in children) {
                let minDisance = cost + children[next];
                if (!distances[next] || minDisance < distances[next]) {
                    distances[next] = minDisance;
                    visitingPath[next] = node;
                }
            }

            visited[node] = true;
            node = this.findMinDistance(distances, visited);
        }

        let parent = visitingPath.Y;
        let shortestPath = ['Y'];
        
        while (parent) {
            shortestPath.push(parent);
            parent = visitingPath[parent];
        }

        shortestPath.reverse();
        console.log(shortestPath, distances);
    }
}

let graph = new Graph();
graph.add('X', 'A', 5);
graph.add('X', 'B', 2);
graph.add('A', 'C', 4);
graph.add('A', 'D', 2);
graph.add('B', 'A', 8);
graph.add('B', 'D', 7);
graph.add('C', 'D', 6);
graph.add('C', 'Y', 3);
graph.add('D', 'Y', 1);
graph.add('Y', '', 0);

console.log('BFS');
graph.bfs('X');

console.log('DFS');
graph.dfs('X');

graph.dijkstra('X');