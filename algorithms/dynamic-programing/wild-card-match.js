function wildcards(pattern, sentence) {
    for (var i = 0, j = 0; i < pattern.length; i++) {
        if (pattern[i] === '+')
            j++;
        if (pattern[i] === '$') {
            if (isNaN(sentence[j])) {
                return false;
            }
            j++;
        }
        if (pattern[i] === '*') {
            var matchLength = 3;

            if (pattern[i + 1] === '{') {
                matchLength = +pattern[i + 2];
                i = i + 3;
            }

            var end = j + matchLength - 1;
            while (j < end) {
                if (!(sentence[j] === sentence[j + 1])) {
                    return false;
                }
                j++;
            }
            j++;
        }
    }

    if (j != sentence.length)
        return false;
    return true;
}

console.log(wildcards('+++++*', 'abcdehhhhhh'));
console.log(wildcards('$**+*{2}', '9mmmrrrkbb'));