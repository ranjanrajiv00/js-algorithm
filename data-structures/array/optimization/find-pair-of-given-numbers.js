// sum is 6 in array [2,1,3,5,4] pair is [[2,4],[1,5]]
function findPair(array, value){
    var map = {};
    var result = [];
    for(var i=0; i < array.length; i++){
      var current = array[i];
      if(map[value - current]){
        result.push([current, map[value - current]])
      }
      map[current] = current;
    }
    return result;
  }
  
  console.log(findPair([2,1,3,5,4], 6));