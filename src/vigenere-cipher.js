import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor (type = true) {
    this.type = type;
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');

    key = key.repeat(Math.ceil(str.length / key.length));
    str = str.toUpperCase();
    key = key.toUpperCase();

    let codeA = 'A'.charCodeAt(0);
    let res = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
        res.push(str[i]);
        str = str.replace(String.fromCharCode(str.charCodeAt(i)), '');
        i--;
      } else {
        let codeLetter = str.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        res.push(String.fromCharCode(codeA + (codeLetter + shift) % 26));
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');

    key = key.repeat(Math.ceil(str.length / key.length));
    str = str.toUpperCase();
    key = key.toUpperCase();

    let codeA = 'A'.charCodeAt(0);
    let res = [];

    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
        res.push(str[i]);
        str = str.replace(String.fromCharCode(str.charCodeAt(i)), '');
        i--;
      } else {
        let codeLetter = str.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(i) - codeA;
        res.push(String.fromCharCode(codeA + (codeLetter - shift + 26) % 26));
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }
}
