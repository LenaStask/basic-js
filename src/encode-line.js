const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let j;
  let count;
  let sub;
  for (let i=0; i<str.length; i++) {
    count = 1;
    sub = str[i];
    for(let j=i+1; j<str.length; j++){
        if(str[i] == str[j]) {
            sub +=str[j];
            count++;
        }
    }
    if(count > 1){
      str = str.replace(sub,count+str[i]); 
    i++;
    } 
  }
  return str;
}

module.exports = {
  encodeLine
};
