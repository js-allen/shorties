const key = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '_'
];

const base = key.length;


module.exports = {

  encode(id) {
    let result = '';
    let quotient = id;
    while (quotient > 0) {
      let remainder = quotient % base;
      result = key[remainder] + result;
      quotient = Math.floor(quotient / base);
    }
    return result;

  },

  decode(hash) {
    let multiplier = 1;
    let values = hash.split('').reverse();

    return values.map((v) => {
      let c = key.indexOf(v);
      if (c == -1) {
        throw new Error('InvalidArgument');
      }
      c *= multiplier;
      multiplier *= base;
      return c;

    }).reduce((a, b) => {
      return a + b;
    }, 0);
  }

};