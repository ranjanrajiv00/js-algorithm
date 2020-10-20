// minimum number of changes required to convert each array element to its nearest prime. var arr=[4,25,6] output:4

function findNearestPrime(num) {
    var left = right = num;
    while (left > 2) {
        if (isPrime(left))
            return left;
        if (isPrime(right))
            return right;
        left--;
        right++;
    }
    return num;
}

function isPrime(num) {
    // 2 to num-1;
    var i = 2;

    // 2 3 5 7
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

// iterate array [4,25,6]
// findNearestPrime(n):
// <-n->
// 23 < -24 < -25 -> 26 -> 27 -> 28
// isPrime

function minChanges(arr) {
    var totalChanges = 0;
    for (var i = 0; i < arr.length; i++) {
        var nearest = findNearestPrime(arr[i]);
        var diff = arr[i] - nearest;
        totalChanges = totalChanges + (diff < 0 ? -diff : diff);
    }

    console.log('totalChanges:', totalChanges);
}

minChanges([4, 25, 6]);
