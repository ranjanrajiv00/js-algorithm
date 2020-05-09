function rearrange(nums, n) {
    var i = -1;
    for (var j = 0; j < n; j++) {
        if (nums[j] < 0) {
            i++;
            swap(nums, i, j);
        }
    }

    var pos = i + 1;
    var neg = 0;
    while (pos < n && neg < pos && nums[neg] < 0) {
        swap(nums, neg, pos);
        pos++;
        neg += 2;
    }

    return nums;
}

function swap(nums, i, j) {
    var temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}

var nums = [-1, 2, -3, 4, 5, 6, -7, 8, 9];
var result = rearrange(nums, nums.length);

console.log(result);