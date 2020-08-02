// Given an array of distinct elements. The task is to find triplets in the array whose sum is zero.
// Examples :
// Input : arr = [0, -1, 2, -3, 1]
// Output : [[0,-1,1],[2,-3,1]]
// O(n2)

var list = [0, -1, 2, -3, 1];

function triplets() {
    var result = [];

    for (var i = 0; i < list.length; i++) {
        var map = {};
        for (var j = i + 1; j < list.length; j++) {
            if (map[-list[j]]) {
                result.push([...map[-list[j]], list[j]]);
            }
            map[list[i] + list[j]] = [list[i], list[j]];
        }
    }

    return result;
}

console.log(triplets());