function isAnagram(str1, str2) {
    if (str1.length != str2.length)
        return false;

    var countMap = {};

    for (var i = 0; i < str1.length - 1; i++) {
        if (countMap[str1[i]])
            countMap[str1[i]] += 1;
        else
            countMap[str1[i]] = 1;

        if (countMap[str2[i]])
            countMap[str2[i]] -= 1;
        else 
            countMap[str2[i]] = -1;
    }

    for (var key in countMap) {
        if (countMap[key] !== 0)
            return false;
    }

    return true;
}

console.log(isAnagram('race', 'care'));