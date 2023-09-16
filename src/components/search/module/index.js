import {
  SUPPORT_ENCODER,
  SUPPORT_CACHE,
  SUPPORT_ASYNC,
  SUPPORT_SUGGESTION,
  SUPPORT_SERIALIZE,
} from './config.js';
import { IndexInterface } from './type.js';
import { encode as default_encoder } from './lang/latin/default.js';
import {
  create_object,
  create_object_array,
  concat,
  sort_by_length_down,
  is_array,
  is_string,
  is_object,
  parse_option,
} from './common.js';
import { pipeline, init_stemmer_or_matcher, init_filter } from './lang.js';
import { global_lang, global_charset } from './global.js';
import apply_async from './async.js';
import { intersect } from './intersect.js';
import Cache, { searchCache } from './cache.js';
import apply_preset from './preset.js';
import { exportIndex, importIndex } from './serialize.js';
function Index(a, b) {
  if (!(this instanceof Index)) return new Index(a);
  let c, d, e;
  a
    ? (SUPPORT_ENCODER && (a = apply_preset(a)),
      (c = a.charset),
      (d = a.lang),
      is_string(c) &&
        (-1 === c.indexOf(':') && (c += ':default'), (c = global_charset[c])),
      is_string(d) && (d = global_lang[d]))
    : (a = {});
  let f,
    g,
    h = a.context || {};
  (this.encode = a.encode || (c && c.encode) || default_encoder),
    (this.register = b || create_object()),
    (this.resolution = f = a.resolution || 9),
    (this.tokenize = e = (c && c.tokenize) || a.tokenize || 'strict'),
    (this.depth = 'strict' === e && h.depth),
    (this.bidirectional = parse_option(h.bidirectional, !0)),
    (this.optimize = g = parse_option(a.optimize, !0)),
    (this.fastupdate = parse_option(a.fastupdate, !0)),
    (this.minlength = a.minlength || 1),
    (this.boost = a.boost),
    (this.map = g ? create_object_array(f) : create_object()),
    (this.resolution_ctx = f = h.resolution || 1),
    (this.ctx = g ? create_object_array(f) : create_object()),
    (this.rtl = (c && c.rtl) || a.rtl),
    (this.matcher =
      (e = a.matcher || (d && d.matcher)) && init_stemmer_or_matcher(e, !1)),
    (this.stemmer =
      (e = a.stemmer || (d && d.stemmer)) && init_stemmer_or_matcher(e, !0)),
    (this.filter = (e = a.filter || (d && d.filter)) && init_filter(e)),
    SUPPORT_CACHE && (this.cache = (e = a.cache) && new Cache(e));
}
export default Index;
(Index.prototype.append = function (a, b) {
  return this.add(a, b, !0);
}),
  (Index.prototype.add = function (a, b, c, d) {
    if (b && (a || 0 === a)) {
      if (!d && !c && this.register[a]) return this.update(a, b);
      b = this.encode('' + b);
      const e = b.length;
      if (e) {
        const d = create_object(),
          f = create_object(),
          g = this.depth,
          h = this.resolution;
        for (let j = 0; j < e; j++) {
          let i = b[this.rtl ? e - 1 - j : j],
            k = i.length;
          if (i && k >= this.minlength && (g || !f[i])) {
            let l = get_score(h, e, j),
              m = '';
            switch (this.tokenize) {
              case 'full':
                if (2 < k) {
                  for (let b = 0; b < k; b++)
                    for (let d = k; d > b; d--)
                      if (d - b >= this.minlength) {
                        const g = get_score(h, e, j, k, b);
                        (m = i.substring(b, d)), this.push_index(f, m, g, a, c);
                      }
                  break;
                }
              case 'reverse':
                if (1 < k) {
                  for (let b = k - 1; 0 < b; b--)
                    if (((m = i[b] + m), m.length >= this.minlength)) {
                      const d = get_score(h, e, j, k, b);
                      this.push_index(f, m, d, a, c);
                    }
                  m = '';
                }
              case 'forward':
                if (1 < k) {
                  for (let b = 0; b < k; b++)
                    (m += i[b]),
                      m.length >= this.minlength &&
                        this.push_index(f, m, l, a, c);
                  break;
                }
              default:
                if (
                  (this.boost &&
                    (l = Math.min(0 | (l / this.boost(b, i, j)), h - 1)),
                  this.push_index(f, i, l, a, c),
                  g && 1 < e && j < e - 1)
                ) {
                  const f = create_object(),
                    h = this.resolution_ctx,
                    k = i,
                    l = Math.min(g + 1, e - j);
                  f[k] = 1;
                  for (let g = 1; g < l; g++)
                    if (
                      ((i = b[this.rtl ? e - 1 - j - g : j + g]),
                      i && i.length >= this.minlength && !f[i])
                    ) {
                      f[i] = 1;
                      const b = get_score(
                          h + (e / 2 > h ? 0 : 1),
                          e,
                          j,
                          l - 1,
                          g - 1,
                        ),
                        m = this.bidirectional && i > k;
                      this.push_index(d, m ? k : i, b, a, c, m ? i : k);
                    }
                }
            }
          }
        }
        this.fastupdate || (this.register[a] = 1);
      }
    }
    return this;
  });
function get_score(a, b, c, d, e) {
  return c && 1 < a
    ? b + (d || 0) <= a
      ? c + (e || 0)
      : 0 | (((a - 1) / (b + (d || 0))) * (c + (e || 0)) + 1)
    : 0;
}
(Index.prototype.push_index = function (a, b, c, d, e, f) {
  let g = f ? this.ctx : this.map;
  if (
    (!a[b] || (f && !a[b][f])) &&
    (this.optimize && (g = g[c]),
    f
      ? ((a = a[b] || (a[b] = create_object())),
        (a[f] = 1),
        (g = g[f] || (g[f] = create_object())))
      : (a[b] = 1),
    (g = g[b] || (g[b] = [])),
    this.optimize || (g = g[c] || (g[c] = [])),
    (!e || !g.includes(d)) && ((g[g.length] = d), this.fastupdate))
  ) {
    const a = this.register[d] || (this.register[d] = []);
    a[a.length] = g;
  }
}),
  (Index.prototype.search = function (a, b, c) {
    c ||
      (!b && is_object(a) ? ((c = a), (a = c.query)) : is_object(b) && (c = b));
    let d,
      e,
      f,
      g = [],
      h = 0;
    if (
      (c &&
        ((a = c.query || a),
        (b = c.limit),
        (h = c.offset || 0),
        (e = c.context),
        (f = SUPPORT_SUGGESTION && c.suggest)),
      a && ((a = this.encode('' + a)), (d = a.length), 1 < d))
    ) {
      const b = create_object(),
        c = [];
      for (let e, h = 0, i = 0; h < d; h++)
        if (((e = a[h]), e && e.length >= this.minlength && !b[e])) {
          if (!this.optimize && !f && !this.map[e]) return g;
          (c[i++] = e), (b[e] = 1);
        }
      (a = c), (d = a.length);
    }
    if (!d) return g;
    b || (b = 100);
    let i,
      j = this.depth && 1 < d && !1 !== e,
      k = 0;
    j ? ((i = a[0]), (k = 1)) : 1 < d && a.sort(sort_by_length_down);
    for (let e, l; k < d; k++) {
      if (
        ((l = a[k]),
        j
          ? ((e = this.add_result(g, f, b, h, 2 === d, l, i)),
            (!f || !1 !== e || !g.length) && (i = l))
          : (e = this.add_result(g, f, b, h, 1 === d, l)),
        e)
      )
        return e;
      if (f && k == d - 1) {
        let a = g.length;
        if (!a) {
          if (j) {
            (j = 0), (k = -1);
            continue;
          }
          return g;
        }
        if (1 === a) return single_result(g[0], b, h);
      }
    }
    return intersect(g, b, h, f);
  }),
  (Index.prototype.add_result = function (a, b, c, d, e, f, g) {
    let h = [],
      i = g ? this.ctx : this.map;
    if ((this.optimize || (i = get_array(i, f, g, this.bidirectional)), i)) {
      let b = 0;
      const j = Math.min(i.length, g ? this.resolution_ctx : this.resolution);
      for (
        let a, k, l = 0, m = 0;
        l < j &&
        ((a = i[l]),
        !(
          a &&
          (this.optimize && (a = get_array(a, f, g, this.bidirectional)),
          d &&
            a &&
            e &&
            ((k = a.length),
            k <= d ? ((d -= k), (a = null)) : ((a = a.slice(d)), (d = 0))),
          a && ((h[b++] = a), e && ((m += a.length), m >= c)))
        ));
        l++
      );
      if (b) return e ? single_result(h, c, 0) : void (a[a.length] = h);
    }
    return !b && h;
  });
function single_result(a, b, c) {
  return (
    (a = 1 === a.length ? a[0] : concat(a)),
    c || a.length > b ? a.slice(c, c + b) : a
  );
}
function get_array(a, b, c, d) {
  if (c) {
    const e = d && b > c;
    (a = a[e ? b : c]), (a = a && a[e ? c : b]);
  } else a = a[b];
  return a;
}
(Index.prototype.contain = function (a) {
  return !!this.register[a];
}),
  (Index.prototype.update = function (a, b) {
    return this.remove(a).add(a, b);
  }),
  (Index.prototype.remove = function (a, b) {
    const c = this.register[a];
    if (c) {
      if (this.fastupdate)
        for (let b, d = 0; d < c.length; d++)
          (b = c[d]), b.splice(b.indexOf(a), 1);
      else
        remove_index(this.map, a, this.resolution, this.optimize),
          this.depth &&
            remove_index(this.ctx, a, this.resolution_ctx, this.optimize);
      b || delete this.register[a],
        SUPPORT_CACHE && this.cache && this.cache.del(a);
    }
    return this;
  });
function remove_index(a, b, c, d, e) {
  let f = 0;
  if (!is_array(a))
    for (let g in a) (f = remove_index(a[g], b, c, d, e)), f || delete a[g];
  else if (!e) {
    e = Math.min(a.length, c);
    for (let g, h = 0; h < e; h++)
      (g = a[h]),
        g && ((f = remove_index(g, b, c, d, e)), !d && !f && delete a[h]);
  } else {
    const c = a.indexOf(b);
    -1 === c ? f++ : 1 < a.length && (a.splice(c, 1), f++);
  }
  return f;
}
SUPPORT_CACHE && (Index.prototype.searchCache = searchCache),
  SUPPORT_SERIALIZE &&
    ((Index.prototype.export = exportIndex),
    (Index.prototype.import = importIndex)),
  SUPPORT_ASYNC && apply_async(Index.prototype);
