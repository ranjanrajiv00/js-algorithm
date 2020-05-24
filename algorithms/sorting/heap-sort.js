function heapify(arr, n, i) {
    var largest, l, r;
    largest = i;
    l = 2 * i + 1;
    r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;
    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, n, largest);
    }
}

function swap(arr, n1, n2) {
    var temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
}

function sort(arr, n) {
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    for (var i = n - 1; i >= 0; i--) {
        swap(arr, 0, i);
        heapify(arr, i, 0);
    }
}

var arr = [9, 10, 1, 3, 2, 4, 6, 5, 8, 7];
sort(arr, arr.length);

console.log(arr);

// O(nlogn)