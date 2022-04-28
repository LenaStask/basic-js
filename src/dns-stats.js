const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = new Object();
  let arr = [];
  for (let i=0; i<domains.length; i++) {
    arr = domains[i].split('.').reverse();
    if(obj['.'+arr[0]]) {
      obj['.'+arr[0]]  += 1;
    } else{
      obj['.'+arr[0]]  = 1;
    }
    if(obj['.'+arr[0]+'.'+arr[1]]){
      obj['.'+arr[0]+'.'+arr[1]] +=1;
    } else{
      obj['.'+arr[0]+'.'+arr[1]] =1;
    } if(arr.length === 3){
      if(obj['.'+arr[0]+'.'+arr[1]+'.'+arr[2]]){
      
        obj['.'+arr[0]+'.'+arr[1]+'.'+arr[2]] +=1;
      } else {
        obj['.'+arr[0]+'.'+arr[1]+'.'+arr[2]] =1;
      }
    }
    
  }
  
  return obj;
}

module.exports = {
  getDNSStats
};
