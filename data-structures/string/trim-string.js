function trimAll(str){
    var result = '';
    var i=0, j=str.length -1, trimmed = false;
  
    while(i <= j) {
      if(trimmed){
        result += str[i];
        i++;
      }
      else {
        if(str[i] !== ' ' && str[j] !== ' '){
          trimmed = true;
        }
  
        if(str[i] === ' ')
          i++;
        if(str[j] === ' ')
          j--;
      }
    }
  
    return result;
  }
  
  console.log(trimAll('  i love my india         '));