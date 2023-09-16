import { IndexInterface } from '../../type.js';
import { pipeline, normalize, regex_whitespace, regex } from '../../lang.js';
export const rtl = !1;
export const tokenize = '';
export default { encode: encode, rtl: !1, tokenize: '' };
const regex_a = regex('[\xE0\xE1\xE2\xE3\xE4\xE5]'),
  regex_e = regex('[\xE8\xE9\xEA\xEB]'),
  regex_i = regex('[\xEC\xED\xEE\xEF]'),
  regex_o = regex('[\xF2\xF3\xF4\xF5\xF6\u0151]'),
  regex_u = regex('[\xF9\xFA\xFB\xFC\u0171]'),
  regex_y = regex('[\xFD\u0177\xFF]'),
  regex_n = regex('\xF1'),
  regex_c = regex('[\xE7c]'),
  regex_s = regex('\xDF'),
  regex_and = regex(' & '),
  pairs = [
    regex_a,
    'a',
    regex_e,
    'e',
    regex_i,
    'i',
    regex_o,
    'o',
    regex_u,
    'u',
    regex_y,
    'y',
    regex_n,
    'n',
    regex_c,
    'k',
    regex_s,
    's',
    regex_and,
    ' and ',
  ];
export function encode(a) {
  return (
    (a = '' + a),
    pipeline.call(
      this,
      normalize(a).toLowerCase(),
      !a.normalize && pairs,
      regex_whitespace,
      !1,
    )
  );
}
