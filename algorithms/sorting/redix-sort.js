// counting sort of numbers[] according to the digit represented by exp.
function sort(numbers, n) {
    var bucket = [], bucket_counter = [];
    var large, reminder;
    large = getMax(numbers, n);

    for (var exponent = 1; Math.floor(large / exponent) > 0; exponent *= 10) {
        // Initializing all elements of count to 0 
        for (var i = 0; i < 10; i++) {
            bucket_counter[i] = 0;
        }

        // Arranging digit into buckets based on position.
        for (var i = 0; i < n; i++) {
            reminder = (Math.floor(numbers[i] / exponent)) % 10;
            if (!bucket[reminder])
                bucket[reminder] = [];
            bucket[reminder][bucket_counter[reminder]] = numbers[i];
            bucket_counter[reminder]++;
        }

        // Concatenate all buckets into original array
        for (var i = 0, j = 0; j < 10; j++) {
            for (var k = 0; k < bucket_counter[j]; k++) {
                numbers[i++] = bucket[j][k];
            }
        }
    }
}

function getMax(numbers, n) {
    var max = numbers[0];
    for (var i = 1; i < n; i++) {
        if (numbers[i] > max)
            max = numbers[i];
    }
    return max;
}

var arr = [9, 2, 1, 3, 10, 40, 6, 5, 8, 7];
sort(arr, arr.length);

console.log(arr);