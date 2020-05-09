function merge(first, second) {
    var len1 = first.length;
    var len2 = second.length;

    var result = [];
    var i = 0, j = 0, k = 0;
    while (i < len1 && j < len2) {
        if (first[i] < second[j])
            result[k++] = first[i++];
        else
            result[k++] = second[j++];
    }

    while (i < len1)
        result[k++] = first[i++];

    while (j < len2)
        result[k++] = second[j++];

    return result;
}

var first = [1, 2, 5];
var second = [2, 6, 9];

var result = merge(first, second);
console.log(result);