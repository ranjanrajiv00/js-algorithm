function rotate(matrix) {
    const n = matrix.length;
    const x = Math.floor(n / 2);
    const y = n - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            var k = matrix[i][j];

            // move values from right to top 
            matrix[i][j] = matrix[j][y - i];

            // move values from bottom to right 
            matrix[j][y - i] = matrix[y - i][y - j];

            // move values from left to bottom 
            matrix[y - i][y - j] = matrix[y - j][i];

            // assign temp to left 
            matrix[y - j][i] = k;
        }
    }
}

const A = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
rotate(A);
console.log(A);
