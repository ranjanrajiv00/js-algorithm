// A class for Min Heap 
class MinHeap {
    constructor(arr, size) {
        this.heap = arr;
        this.capacity = 0
        this.heap_size = size; // Current number of elements in min this.heap 

        this.buildHeap();
    }

    buildHeap() {
        var i = Math.floor((this.heap_size - 1) / 2);
        while (i >= 0) {
            this.minHeapify(i);
            i--;
        }
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    left(i) {
        return (2 * i + 1);
    }

    right(i) {
        return (2 * i + 2);
    }

    getMin() {
        return this.heap[0];
    }

    // Method to remove minimum element (or root) from min this.heap 
    extractMin() {
        if (this.heap_size == 0)
            return 0;

        // Store the minimum vakue. 
        var root = this.heap[0];

        // If there are more than 1 items, move the last item to root 
        // and call heapify. 
        if (this.heap_size > 1) {
            this.heap[0] = this.heap[this.heap_size - 1];
            this.minHeapify(0);
        }
        this.heap_size--;

        return root;
    }

    // A recursive method to heapify a subtree with root at given index 
    // This method assumes that the subtrees are already heapified 
    minHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);
        let smallest = i;
        if (l < this.heap_size && this.heap[l] < this.heap[i])
            smallest = l;
        if (r < this.heap_size && this.heap[r] < this.heap[smallest])
            smallest = r;
        if (smallest != i) {
            swap(this.heap, i, smallest);

            return this.minHeapify(smallest);
        }
    }
};

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

// Function to return k'th smallest element in a given array 
function kthSmallest(arr, n, k) {
    // Build a this.heap of n elements: O(n) time 
    const minHeap = new MinHeap(arr, n)

    // Do extract min (k-1) times 
    for (let i = 0; i < k - 1; i++) {
        minHeap.extractMin();
    }

    // Return root 
    return minHeap.getMin();
}

const arr = [12, 3, 5, 7, 19];
const n = 5, k = 2;
console.log("K'th smallest element is ", kthSmallest(arr, n, k));