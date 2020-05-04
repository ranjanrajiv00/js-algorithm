function rotateCyclic(nums, n, d) {
    d = d % n;
    for (var start = 0; start < d; start++) {
        var current = start;
        var prev = nums[start];
        do {
            var next = (current + d) % n;
            var temp = nums[next];
            nums[next] = prev;
            prev = temp;
            current = next;
        } while (start != current);
    }

    for (var j = 0; j < n; j++) {
        console.log(nums[j]);
    }
}

rotateCyclic([2, 4, 5, 3, 1, 9], 6, 4);
// Time O(n)