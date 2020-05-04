function search(nums, l, h, key) {
    if (l > h)
        return -1;

    var mid = Math.floor((l + h) / 2);
    if (nums[mid] === key)
        return mid;

    if (nums[l] <= nums[mid]) {
        if (key >= nums[l] && key <= nums[mid])
            return search(nums, l, mid - 1, key);
        return search(nums, mid + 1, h, key);
    }
    if (key >= nums[mid] && key <= nums[h])
        return search(nums, mid + 1, h, key);
    return search(nums, l, mid - 1, key);
}

var nums = [4, 5, 6, 7, 8, 9, 1, 2, 3];
var n = nums1.length;
var index = search(nums, 0, n - 1, 3);
console.log('Found at ', index);