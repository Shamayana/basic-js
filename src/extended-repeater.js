import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  str = String(str);
  let add = String(options.addition);
  let sep = options.separator || '+';
  let addSep = options.additionSeparator || '|';
  let addTimes = options.additionRepeatTimes || 1;
  let times = options.repeatTimes || 1;

  if(add == 'undefined') add = '';

  let repeatingAdd = (add + addSep).repeat(addTimes - 1) + add;

  return (str + repeatingAdd + sep).repeat(times - 1) + str + repeatingAdd;
}
