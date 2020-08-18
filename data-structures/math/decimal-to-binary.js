function decimalToBinary(num, binary) {
    if (num == 0 || num == 1) {
        return '' + num + binary;
    }

    var reminder = num % 2;
    num = Math.floor(num / 2);
    binary = '' + reminder + (binary || '');
    return decimalToBinary(num, binary);
}

console.log(decimalToBinary(15));