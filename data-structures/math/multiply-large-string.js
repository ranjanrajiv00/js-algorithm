function multiply(a, b) {
    var result = 0;
    var bIndex = b.length;
    var baseFactor = 1;
    while (bIndex) {
        var num1 = b[bIndex - 1];
        bIndex--;
        var factor = baseFactor;
        var carry = 0;
        var aIndex = a.length;
        while (aIndex) {
            var num2 = a[aIndex - 1];
            aIndex--;

            var mul = num1 * num2;
            var add = aIndex === 0 ? mul : mul % 10;
            result = result + factor * (add + carry);
            carry = Math.floor(mul / 10);
            factor = factor * 10;
        }
        baseFactor = baseFactor * 10;
    }

    return result;
}

function largeMultiply(a, b) {
    var result = [];
    var bIndex = b.length;
    var n1 = 0, n2 = 0;
    var carry = 0;

    while (bIndex) {
        var num1 = b[bIndex - 1];
        n2 = 0;
        carry = 0;

        var aIndex = a.length;
        while (aIndex) {
            var num2 = a[aIndex - 1];

            var sum = num1 * num2 + (result[n1 + n2] || 0) + carry;
            carry = Math.floor(sum / 10);
            result[n1 + n2] = sum % 10;

            n2++;
            aIndex--;
        }

        if (carry) {
            result[n1 + n2] = carry;
        }
        n1++;
        bIndex--;
    }

    var index = result.length - 1;
    var longResult = '';
    while (index >= 0) {
        longResult += result[index--];
    }
    return longResult;
}

var a1 = "12065654565645466565656565767867676554323454657878989";
var a2 = "317676567767677455657879890898766654545465768789989898";

console.log(multiply(a1, a2));
console.log(largeMultiply(a1, a2));
console.log(a1 * a2)