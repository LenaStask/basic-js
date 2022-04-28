function encodeLine(str) {
  let arr=[];
  for (let i=0; i<str.length; i++) {
    let count = 1;
    let temp = str[i];
    for (let j=i+1; j<str.length; j++) {
      if (str[i]==str[j]) {
        count++;
        i=j;
      } else {
        i = j-1;
        j = str.length-1;
      }
    }
    if (count>1){
      arr.push(count);
      arr.push(temp);
    } else {
      arr.push(temp);
    } 
  }
  return arr.join('');
}
console.log(encodeLine('aaaatttt'));
  