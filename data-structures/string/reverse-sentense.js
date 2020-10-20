//what are you doing now
function reverse(str) {
    str += ' ';
    var sen = '', word = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            word = str[i] + word;
        }
        else {
            sen = sen + ' ' + word;
            word = '';
        }
    }

    return sen;
}

console.log(reverse('what are you doing now')); // o(n)