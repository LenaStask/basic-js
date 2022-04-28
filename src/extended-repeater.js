const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  let addStr = '';
  let newStr = '';
  if (options.addition !== undefined) {
    if (options.additionRepeatTimes === undefined) {
      addStr = options.addition;
    } else {
        for (let j=0; j<options.additionRepeatTimes; j++) {
            addStr += options.addition;
            if (j != options.additionRepeatTimes - 1) {
              addStr += additionSeparator;
            }
        }
    }
  }
  let repeatTimes = options.repeatTimes || 1;
  newStr = (str + addStr + separator).repeat(repeatTimes);
  return newStr.substring(0, newStr.length - separator.length);
}
module.exports = {
  repeater
};
