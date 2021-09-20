import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(num) {
  let arr = num.toString().split('')

  for (let i =0; i < arr.length; i++) {
    if(arr[i] < arr[i+1]) {
      arr.splice(i, 1);
      return +arr.join('');
    }
  }

  return +arr.slice(0, -1).join('');
}
