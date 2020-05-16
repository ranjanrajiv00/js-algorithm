function traverse(mat, n) {
    var left = 0, right = n - 1, top = 0, bottom = n - 1;
    var dir = 0;

    while (left <= right && top <= bottom) {
        if (dir === 0) {
            for (var i = left; i <= right; i++) {
                console.log(mat[top][i]);
            }
            top++;
        }

        if (dir === 1) {
            for (var i = top; i <= bottom; i++) {
                console.log(mat[i][right]);
            }
            right--;
        }

        if (dir === 2) {
            for (var i = right; i >= left; i--) {
                console.log(mat[bottom][i]);
            }
            bottom--;
        }

        if (dir === 3) {
            for (var i = bottom; i >= top; i--) {
                console.log(mat[i][left]);
            }
            left++;
        }

        dir = (dir + 1) % 4;
    }
}

var mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
var n = mat.length;

traverse(mat, n);