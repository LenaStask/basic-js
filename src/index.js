function deleteDigit(n) {
    let str = n.toString();
    for (let i=0; i<str.length; i++) {
      if (str[i]<str[i+1]) {
        return str.replace(str[i],'');
      } else if (str[i]>str[i+1]){
        return str.replace(str[i+1],'');
      } else {
          i++;
      }
    }
  }


console.log(deleteDigit(342));
  