function findPivot(nums, l, h) {
    if (l > h)
        return -1;

    var mid = Math.floor((l + h) / 2);
    if (nums[mid] >= nums[mid - 1] && nums[mid] >= nums[mid + 1])
        return mid;
    else if (nums[l] <= nums[mid])
        return findPivot(nums, mid + 1, h);
    else
        return findPivot(nums, l, mid - 1);
}

function pairInSortedRotated(nums, n, key) {
    var i = findPivot(nums, 0, nums.length - 1);
    var l = (i + 1) % n;
    var r = i;

    while (l != r) {
        if (nums[l] + nums[r] === key)
            return [l, r];
        if (nums[l] + nums[r] < key)
            l = (l + 1) % n;
        else
            r = (n + r - 1) % n;
    }

    return [];
}

var nums = [11, 15, 6, 8, 9, 10];
var key = 16;

var isFound = pairInSortedRotated(nums, nums.length, key);
console.log(isFound);