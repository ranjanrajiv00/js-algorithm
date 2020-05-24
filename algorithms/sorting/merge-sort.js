function merge(arr, low, mid, high) {
    var mergedArray = [];
    for (var i = low, j = low, k = mid + 1; j <= mid && k <= high; i++) {
        if (arr[j] < arr[k]) {
            mergedArray[i] = arr[j];
            j++;
        }
        else {
            mergedArray[i] = arr[k];
            k++;
        }
    }

    if (j > mid) {
        for (var l = k; l <= high; l++) {
            mergedArray[i++] = arr[l];
        }
    }
    else {
        for (var l = j; l <= mid; l++) {
            mergedArray[i++] = arr[l];
        }
    }

    for (var i = low; i <= high; i++) {
        arr[i] = mergedArray[i];
    }
}

function sort(arr, low, high) {
    if (low < high) {
        var mid = Math.floor((low + high) / 2);
        sort(arr, low, mid);
        sort(arr, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

var arr = [9, 10, 1, 3, 2, 4, 6, 5, 8, 7];
sort(arr, 0, arr.length - 1);

console.log(arr);

// O(nlogn)