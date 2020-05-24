function partition(arr, low, high) {
    var pivot = arr[high];
    var i = low - 1;
    var temp;

    for (var j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }

    temp = arr[high];
    arr[high] = arr[i + 1];
    arr[i + 1] = temp;

    return i + 1;
}

function sort(arr, low, high) {
    if (low < high) {
        var pi = partition(arr, low, high);
        sort(arr, low, pi - 1);
        sort(arr, pi + 1, high);
    }
}

var arr = [9, 10, 1, 3, 2, 4, 6, 5, 8, 7];
sort(arr, 0, arr.length - 1);

console.log(arr);

// O(nlogn)