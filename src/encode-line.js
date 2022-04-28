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

module.exports = {
  encodeLine
};
