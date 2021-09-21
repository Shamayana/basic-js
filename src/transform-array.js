import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      (arr[i + 1] == '--discard-prev' && arr[i - 1] != '--double-next') ||
      arr[i - 1] == '--discard-next' ||
      arr[i] === '--discard-prev' ||
      arr[i] === '--discard-next' ||
      arr[i] === '--double-prev' ||
      arr[i] === '--double-next'
    )
      continue;

    if (arr[i - 1] == '--double-next' && arr[i + 1] == '--double-prev') {
      res.push(arr[i]);
      res.push(arr[i]);
      res.push(arr[i]);
    } else if (arr[i - 1] == '--double-next' && arr[i + 1] == '--discard-prev') {
      res.push(arr[i]);
    } else if (arr[i - 1] == '--double-next' || arr[i + 1] == '--double-prev') {
      res.push(arr[i]);
      res.push(arr[i]);
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}
