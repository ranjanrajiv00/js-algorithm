function maxSubArraySum(a, size) {
    var max_so_far = 0, max_ending_here = 0, start = 0, end = 0, s = 0;

    for (var i = 0; i < size; i++) {
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }
        else if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    console.log("Maximum contiguous sum is ", max_so_far);
    console.log("Starting index ", start, "Ending index ", end);
}

var a = [2, -3, 4, -1, -2, 1, 5, -3, 90, -800, 3, 8];
var n = a.length;
var max_sum = maxSubArraySum(a, n); 
