// find out mising numbers between lower bound & upper bound.
var arr = [3, 1, 2, 5, 9, 1, 4, 9, 6, 3, 7];

function findMissing(arr, lb, ub) {
    var hashMap = {};

    // prepare hash map
    for (var i = 0, j = arr.length - 1; i < j; i++ , j--) {
        hashMap[arr[i]] = arr[i];
        hashMap[arr[j]] = arr[j];
    }

    // lookup hash map
    for (var i = lb, j = ub - 1; i < j; i++ , j--) {
        if (!hashMap[i]) {
            return i;
        }
        if (!hashMap[j]) {
            return j;
        }
    }
}

var missing = findMissing(arr, 1, 9);
console.log('Missing - ', missing);

// total  lb up -> n(n+1)/2
// actual total -> loop
// missing = total - actual