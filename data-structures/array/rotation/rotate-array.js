function rotateLeft(nums, n, d) {
    for (var i = 0; i < d; i++) {
        var first = nums[0];
        for (var j = 0; j < n - 1; j++) {
            nums[j] = nums[j + 1];
        }
        nums[j] = first;
    }

    for (var j = 0; j < n; j++) {
        console.log(nums[j]);
    }
}

rotateLeft([2, 4, 5, 3, 1, 9], 6, 4);
// Time O(n*d)