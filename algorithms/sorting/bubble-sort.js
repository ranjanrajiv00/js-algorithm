function sort(arr, n) {
    var temp;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

var arr = [9, 10, 1, 3, 2, 4, 6, 5, 8, 7];
sort(arr, arr.length);

console.log(arr);

// O(n*n)