function getCommonCharacterCount(s1, s2) {
    let count=0;
    for(let i=0; i <s1.length; i++) {
      for(let j=0; j<s2.length; j++) {
        if(s1[i] === s2[j]){
          count++;
          s1=s1.replace(s1[i],'');
          s2=s2.replace(s2[j],'');
          i--;
        }
      }
    }
    return count;
  }


console.log(getCommonCharacterCount('abca', 'xyzbac'));
  