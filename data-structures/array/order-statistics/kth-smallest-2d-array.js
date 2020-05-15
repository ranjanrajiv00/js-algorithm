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
            this.minHeapify(this.heap, i);
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

    // A recursive method to heapify a subtree with root at given index 
    // This method assumes that the subtrees are already heapified 
    minHeapify(harr, i) {
        let l = this.left(i);
        let r = this.right(i);
        let smallest = i;
        if (l < this.heap_size && harr[l].val < harr[i].val)
            smallest = l;
        if (r < this.heap_size && harr[r].val < harr[smallest].val)
            smallest = r;
        if (smallest != i) {
            swap(harr, i, smallest);

            return this.minHeapify(harr, smallest);
        }
    }
};

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function kthSmallest(mat, n, k) {
    // k must be greater than 0 and smaller than n*n 
    if (k <= 0 || k > n * n)
        return Infinity;

    // Create a min heap of elements from first row of 2D array 
    var harr = [];
    for (var i = 0; i < n; i++)
        harr[i] = { val: mat[0][i], row: 0, col: i };

    const minHeap = new MinHeap(harr, n);

    var hr;
    for (var i = 0; i < k; i++) {
        // Get current heap root 
        hr = harr[0];
        // Get next value from column of root's value. If the 
        // value stored at root was last value in its column, 
        // then assign INFINITE as next value 
        var nextval = (hr.row < (n - 1)) ? mat[hr.row + 1][hr.col] : Infinity;

        // Update heap root with next value 
        harr[0] = { val: nextval, row: (hr.row) + 1, col: hr.col };

        // Heapify root 
        minHeap.minHeapify(harr, 0);
    }

    // Return the value at last extracted root 
    return hr.val;
}

const arr = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [25, 29, 37, 48],
    [32, 33, 39, 50]
];

const n = 4, k = 3;
console.log("K'th smallest element is ", kthSmallest(arr, n, k));