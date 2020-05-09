function rotateReversal(nums, n, d){
    reverse(nums, 0, d-1);
    reverse(nums, d, n-1);
    reverse(nums, 0, n-1);

    for (var j = 0; j < n; j++) {
        console.log(nums[j]);
    }
}

function reverse(nums, start, end){
    var temp = 0;
    while(start < end){
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

rotateReversal([2, 4, 5, 3, 1, 9], 6, 4);
// Time O(n)