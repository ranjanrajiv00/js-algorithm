function findNextGreater(students) {
    var map = {};

    for (var i = 0; i < students.length; i++) {
        for (var j = i; j < students.length; j++) {
            if (students[j] > students[i]) {
                map[students[i]] = students[j];
                break;
            }
        }
    }

    return map;
}

console.log(findNextGreater([12, 15, 17, 3, 5]));