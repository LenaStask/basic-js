const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  for (let i=0; i<str.length; i++) {
    if (str[i]<str[i+1]) {
      return parseInt(str.replace(str[i],''));
    } else if (str[i]>str[i+1]){
      return parseInt(str.replace(str[i+1],''));
    } else {
        i++;
    }
  }
}

module.exports = {
  deleteDigit
};
