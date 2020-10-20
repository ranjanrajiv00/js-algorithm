//var arr1=[2,4,6,4,5]; var arr2=[5,4,5,3,8]; find intersection of 2 arrays. expected output [4,5]

function intersection(arr1, arr2) {
    var map = {};
    var ins = [];
    for (var i = 0; i < arr1.length; i++) {
        map[arr1[i]] = true;
    }

    for (var i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            ins.push(arr2[i]);
        }
    }

    return ins;
}

intersection([2,4,6,4,5], [5,4,5,3,8]);