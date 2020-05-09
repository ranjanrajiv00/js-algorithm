function rearrange(nums, n) {
    nums.sort(function (a, b) {
        return a - b;
    });
    var result = [];
    var index = 0;

    for (var i = 0, j = n - 1; i <= n / 2 || j > n / 2; i++, j--) {
        if (index < n) {
            result[index] = nums[i];
            index++;
        }
        if (index < n) {
            result[index] = nums[j];
            index++;
        }
    }

    return result;
}

var nums = [5, 8, 1, 4, 2, 9, 3, 7, 6, 90];
var result = rearrange(nums, nums.length);

console.log(result);