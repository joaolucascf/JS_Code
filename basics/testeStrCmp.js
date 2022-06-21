const strcmp = function (a, b){
  if(typeof a == 'string' && typeof b == 'string' && a.length === b.length){
    for(let i=0; i<a.length; i++){
      if(a[i] === b[i]){
        continue;
      }else{
        return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
}

const str = 'Jorge';
const str2 = 'Jorge';

console.log(strcmp(str, str2));