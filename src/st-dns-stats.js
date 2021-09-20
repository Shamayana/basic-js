import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let map = new Map();
  let dom = domains.map((item) => item.split('.').map((i)=> `.${i}`).reverse());

  for(let i = 0; i < dom.length; i++) {

    for(let j = 0; j < dom[i].length; j++) {
      let key = dom[i].slice(0, j + 1).join('');

      if(!map.has(key)){
        map.set(key, 1);
      } else {
        map.set(key, map.get(key) + 1);
      }
    }
  }

  return Object.fromEntries(map);
}
