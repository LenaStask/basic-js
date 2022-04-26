function transform(arr) {
    if (!Array.isArray(arr) || arr === undefined){
      throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    if ( !(arr instanceof Array)){
      throw new Error('\'arr\' parameter must be an instance of the Array!');
    }
    if (arr.length == 0) {
      return [];
    }
    let newArr = arr.slice();
    for (let i=0; i<newArr.length; i++) {
      if (newArr[i] === '--double-next') {
          if(i === newArr.length-1) {
             newArr.splice(i,1);   
          } else {
            newArr.splice(i,1,newArr[i+1]);
          }
      }
      if (newArr[i] === '--discard-next') {
          if (newArr[i+2] == '--double-prev' || newArr[i+2] == '--discard-prev' ) {
            newArr.splice(i,3);
          } else {
            newArr.splice(i,2);
          }
      }
      if (newArr[i] === '--double-prev') {
        if(i === 0) {
          newArr.splice(i,1);
        } else {
            newArr.splice(i,1,arr[i-1]);
        }
      }
      if (newArr[i] === '--discard-prev') {
        if(i === 0) {
          newArr.splice(i,1);
        } else {
            newArr.splice(i-1,2);
        }
      }
    } 
    return newArr;
  }


let arr =[1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5];
console.log(transform(arr));
  