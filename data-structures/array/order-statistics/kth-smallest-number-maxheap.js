
// A class for Min Heap 
class MaxHeap {
    constructor(a, size) {
        this.heap = a; // pointer to array of elements in this.heap 
        this.capacity = 0
        this.heap_size = size; // Current number of elements in min this.heap 

        this.buildHeap();
    }

    buildHeap() {
        var i = Math.floor((this.heap_size - 1) / 2);
        while (i >= 0) {
            this.maxHeapify(i);
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

    getMax() {
        return this.heap[0];
    }

    // Method to remove minimum element (or root) from min this.heap 
    extractMax() {
        if (this.heap_size == 0)
            return 0;

        // Store the minimum vakue. 
        var root = this.heap[0];

        // If there are more than 1 items, move the last item to root 
        // and call heapify. 
        if (this.heap_size > 1) {
            this.heap[0] = this.heap[this.heap_size - 1];
            this.maxHeapify(0);
        }
        this.heap_size--;

        return root;
    }

    // A recursive method to heapify a subtree with root at given index 
    // This method assumes that the subtrees are already heapified 
    maxHeapify(i) {
        let l = this.left(i);
        let r = this.right(i);
        let largest = i;
        if (l < this.heap_size && this.heap[l] > this.heap[i])
            largest = l;
        if (r < this.heap_size && this.heap[r] > this.heap[largest])
            largest = r;
        if (largest != i) {
            swap(this.heap, i, largest);

            return this.maxHeapify(largest);
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
    const maxHeap = new MaxHeap(arr, n)

    // Process remaining n-k elements.  If current element is 
    // smaller than root, replace root with current element
    for (let i = k; i < n; i++) {
        maxHeap.extractMax();
    }

    // Return root 
    return maxHeap.getMax();
}

const arr = [12, 3, 5, 7, 19];
const n = 5, k = 2;
console.log("K'th smallest element is ", kthSmallest(arr, n, k));