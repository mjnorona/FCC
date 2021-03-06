/*
 * https://cdn.firebase.com/libs/firechat/3.0.1/firechat.min.js
 * v3.0.1
 * modified for FCC
 */
(function() {
    var a = this,
        b = a._,
        c = Array.prototype,
        d = Object.prototype,
        e = Function.prototype,
        f = c.push,
        g = c.slice,
        h = c.concat,
        i = d.toString,
        j = d.hasOwnProperty,
        k = Array.isArray,
        l = Object.keys,
        m = e.bind,
        n = function(a) {
            return a instanceof n ? a : this instanceof n ? void(this._wrapped = a) : new n(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports._ = n) : a._ = n, n.VERSION = "1.7.0";
    var o = function(a, b, c) {
        if (void 0 === b) return a;
        switch (null == c ? 3 : c) {
            case 1:
                return function(c) {
                    return a.call(b, c)
                };
            case 2:
                return function(c, d) {
                    return a.call(b, c, d)
                };
            case 3:
                return function(c, d, e) {
                    return a.call(b, c, d, e)
                };
            case 4:
                return function(c, d, e, f) {
                    return a.call(b, c, d, e, f)
                }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    n.iteratee = function(a, b, c) {
        return null == a ? n.identity : n.isFunction(a) ? o(a, b, c) : n.isObject(a) ? n.matches(a) : n.property(a)
    }, n.each = n.forEach = function(a, b, c) {
        if (null == a) return a;
        b = o(b, c);
        var d, e = a.length;
        if (e === +e)
            for (d = 0; e > d; d++) b(a[d], d, a);
        else {
            var f = n.keys(a);
            for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a)
        }
        return a
    }, n.map = n.collect = function(a, b, c) {
        if (null == a) return [];
        b = n.iteratee(b, c);
        for (var d, e = a.length !== +a.length && n.keys(a), f = (e || a).length, g = Array(f), h = 0; f > h; h++) d = e ? e[h] : h, g[h] = b(a[d], d, a);
        return g
    };
    var p = "Reduce of empty array with no initial value";
    n.reduce = n.foldl = n.inject = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length,
            h = 0;
        if (arguments.length < 3) {
            if (!g) throw new TypeError(p);
            c = a[f ? f[h++] : h++]
        }
        for (; g > h; h++) e = f ? f[h] : h, c = b(c, a[e], e, a);
        return c
    }, n.reduceRight = n.foldr = function(a, b, c, d) {
        null == a && (a = []), b = o(b, d, 4);
        var e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        if (arguments.length < 3) {
            if (!g) throw new TypeError(p);
            c = a[f ? f[--g] : --g]
        }
        for (; g--;) e = f ? f[g] : g, c = b(c, a[e], e, a);
        return c
    }, n.find = n.detect = function(a, b, c) {
        var d;
        return b = n.iteratee(b, c), n.some(a, function(a, c, e) {
            return b(a, c, e) ? (d = a, !0) : void 0
        }), d
    }, n.filter = n.select = function(a, b, c) {
        var d = [];
        return null == a ? d : (b = n.iteratee(b, c), n.each(a, function(a, c, e) {
            b(a, c, e) && d.push(a)
        }), d)
    }, n.reject = function(a, b, c) {
        return n.filter(a, n.negate(n.iteratee(b)), c)
    }, n.every = n.all = function(a, b, c) {
        if (null == a) return !0;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, !b(a[e], e, a)) return !1;
        return !0
    }, n.some = n.any = function(a, b, c) {
        if (null == a) return !1;
        b = n.iteratee(b, c);
        var d, e, f = a.length !== +a.length && n.keys(a),
            g = (f || a).length;
        for (d = 0; g > d; d++)
            if (e = f ? f[d] : d, b(a[e], e, a)) return !0;
        return !1
    }, n.contains = n.include = function(a, b) {
        return null != a && (a.length !== +a.length && (a = n.values(a)), n.indexOf(a, b) >= 0)
    }, n.invoke = function(a, b) {
        var c = g.call(arguments, 2),
            d = n.isFunction(b);
        return n.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c)
        })
    }, n.pluck = function(a, b) {
        return n.map(a, n.property(b))
    }, n.where = function(a, b) {
        return n.filter(a, n.matches(b))
    }, n.findWhere = function(a, b) {
        return n.find(a, n.matches(b))
    }, n.max = function(a, b, c) {
        var d, e, f = -1 / 0,
            g = -1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d)
        } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
            e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e)
        });
        return f
    }, n.min = function(a, b, c) {
        var d, e, f = 1 / 0,
            g = 1 / 0;
        if (null == b && null != a) {
            a = a.length === +a.length ? a : n.values(a);
            for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d)
        } else b = n.iteratee(b, c), n.each(a, function(a, c, d) {
            e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e)
        });
        return f
    }, n.shuffle = function(a) {
        for (var b, c = a && a.length === +a.length ? a : n.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = n.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f];
        return e
    }, n.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = n.values(a)), a[n.random(a.length - 1)]) : n.shuffle(a).slice(0, Math.max(0, b))
    }, n.sortBy = function(a, b, c) {
        return b = n.iteratee(b, c), n.pluck(n.map(a, function(a, c, d) {
            return {
                value: a,
                index: c,
                criteria: b(a, c, d)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index - b.index
        }), "value")
    };
    var q = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = n.iteratee(c, d), n.each(b, function(d, f) {
                var g = c(d, f, b);
                a(e, d, g)
            }), e
        }
    };
    n.groupBy = q(function(a, b, c) {
        n.has(a, c) ? a[c].push(b) : a[c] = [b]
    }), n.indexBy = q(function(a, b, c) {
        a[c] = b
    }), n.countBy = q(function(a, b, c) {
        n.has(a, c) ? a[c]++ : a[c] = 1
    }), n.sortedIndex = function(a, b, c, d) {
        c = n.iteratee(c, d, 1);
        for (var e = c(b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c(a[h]) < e ? f = h + 1 : g = h
        }
        return f
    }, n.toArray = function(a) {
        return a ? n.isArray(a) ? g.call(a) : a.length === +a.length ? n.map(a, n.identity) : n.values(a) : []
    }, n.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : n.keys(a).length
    }, n.partition = function(a, b, c) {
        b = n.iteratee(b, c);
        var d = [],
            e = [];
        return n.each(a, function(a, c, f) {
            (b(a, c, f) ? d : e).push(a)
        }), [d, e]
    }, n.first = n.head = n.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : g.call(a, 0, b)
    }, n.initial = function(a, b, c) {
        return g.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b)))
    }, n.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : g.call(a, Math.max(a.length - b, 0))
    }, n.rest = n.tail = n.drop = function(a, b, c) {
        return g.call(a, null == b || c ? 1 : b)
    }, n.compact = function(a) {
        return n.filter(a, n.identity)
    };
    var r = function(a, b, c, d) {
        if (b && n.every(a, n.isArray)) return h.apply(d, a);
        for (var e = 0, g = a.length; g > e; e++) {
            var i = a[e];
            n.isArray(i) || n.isArguments(i) ? b ? f.apply(d, i) : r(i, b, c, d) : c || d.push(i)
        }
        return d
    };
    n.flatten = function(a, b) {
        return r(a, b, !1, [])
    }, n.without = function(a) {
        return n.difference(a, g.call(arguments, 1))
    }, n.uniq = n.unique = function(a, b, c, d) {
        if (null == a) return [];
        n.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = n.iteratee(c, d));
        for (var e = [], f = [], g = 0, h = a.length; h > g; g++) {
            var i = a[g];
            if (b) g && f === i || e.push(i), f = i;
            else if (c) {
                var j = c(i, g, a);
                n.indexOf(f, j) < 0 && (f.push(j), e.push(i))
            } else n.indexOf(e, i) < 0 && e.push(i)
        }
        return e
    }, n.union = function() {
        return n.uniq(r(arguments, !0, !0, []))
    }, n.intersection = function(a) {
        if (null == a) return [];
        for (var b = [], c = arguments.length, d = 0, e = a.length; e > d; d++) {
            var f = a[d];
            if (!n.contains(b, f)) {
                for (var g = 1; c > g && n.contains(arguments[g], f); g++);
                g === c && b.push(f)
            }
        }
        return b
    }, n.difference = function(a) {
        var b = r(g.call(arguments, 1), !0, !0, []);
        return n.filter(a, function(a) {
            return !n.contains(b, a)
        })
    }, n.zip = function(a) {
        if (null == a) return [];
        for (var b = n.max(arguments, "length").length, c = Array(b), d = 0; b > d; d++) c[d] = n.pluck(arguments, d);
        return c
    }, n.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, n.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c) return d = n.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        for (; e > d; d++)
            if (a[d] === b) return d;
        return -1
    }, n.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = a.length;
        for ("number" == typeof c && (d = 0 > c ? d + c + 1 : Math.min(d, c + 1)); --d >= 0;)
            if (a[d] === b) return d;
        return -1
    }, n.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = c || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a;
        return e
    };
    var s = function() {};
    n.bind = function(a, b) {
        var c, d;
        if (m && a.bind === m) return m.apply(a, g.call(arguments, 1));
        if (!n.isFunction(a)) throw new TypeError("Bind must be called on a function");
        return c = g.call(arguments, 2), d = function() {
            if (!(this instanceof d)) return a.apply(b, c.concat(g.call(arguments)));
            s.prototype = a.prototype;
            var e = new s;
            s.prototype = null;
            var f = a.apply(e, c.concat(g.call(arguments)));
            return n.isObject(f) ? f : e
        }
    }, n.partial = function(a) {
        var b = g.call(arguments, 1);
        return function() {
            for (var c = 0, d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === n && (d[e] = arguments[c++]);
            for (; c < arguments.length;) d.push(arguments[c++]);
            return a.apply(this, d)
        }
    }, n.bindAll = function(a) {
        var b, c, d = arguments.length;
        if (1 >= d) throw new Error("bindAll must be passed function names");
        for (b = 1; d > b; b++) c = arguments[b], a[c] = n.bind(a[c], a);
        return a
    }, n.memoize = function(a, b) {
        var c = function(d) {
            var e = c.cache,
                f = b ? b.apply(this, arguments) : d;
            return n.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
        };
        return c.cache = {}, c
    }, n.delay = function(a, b) {
        var c = g.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        }, b)
    }, n.defer = function(a) {
        return n.delay.apply(n, [a, 1].concat(g.call(arguments, 1)))
    }, n.throttle = function(a, b, c) {
        var d, e, f, g = null,
            h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : n.now(), g = null, f = a.apply(d, e), g || (d = e = null)
        };
        return function() {
            var j = n.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this, e = arguments, 0 >= k || k > b ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
        }
    }, n.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = n.now() - g;
            b > j && j > 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
        };
        return function() {
            f = this, e = arguments, g = n.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }, n.wrap = function(a, b) {
        return n.partial(b, a)
    }, n.negate = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }, n.compose = function() {
        var a = arguments,
            b = a.length - 1;
        return function() {
            for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d);
            return d
        }
    }, n.after = function(a, b) {
        return function() {
            return --a < 1 ? b.apply(this, arguments) : void 0
        }
    }, n.before = function(a, b) {
        var c;
        return function() {
            return --a > 0 ? c = b.apply(this, arguments) : b = null, c
        }
    }, n.once = n.partial(n.before, 2), n.keys = function(a) {
        if (!n.isObject(a)) return [];
        if (l) return l(a);
        var b = [];
        for (var c in a) n.has(a, c) && b.push(c);
        return b
    }, n.values = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    }, n.pairs = function(a) {
        for (var b = n.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    }, n.invert = function(a) {
        for (var b = {}, c = n.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    }, n.functions = n.methods = function(a) {
        var b = [];
        for (var c in a) n.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, n.extend = function(a) {
        if (!n.isObject(a)) return a;
        for (var b, c, d = 1, e = arguments.length; e > d; d++) {
            b = arguments[d];
            for (c in b) j.call(b, c) && (a[c] = b[c])
        }
        return a
    }, n.pick = function(a, b, c) {
        var d, e = {};
        if (null == a) return e;
        if (n.isFunction(b)) {
            b = o(b, c);
            for (d in a) {
                var f = a[d];
                b(f, d, a) && (e[d] = f)
            }
        } else {
            var i = h.apply([], g.call(arguments, 1));
            a = new Object(a);
            for (var j = 0, k = i.length; k > j; j++) d = i[j], d in a && (e[d] = a[d])
        }
        return e
    }, n.omit = function(a, b, c) {
        if (n.isFunction(b)) b = n.negate(b);
        else {
            var d = n.map(h.apply([], g.call(arguments, 1)), String);
            b = function(a, b) {
                return !n.contains(d, b)
            }
        }
        return n.pick(a, b, c)
    }, n.defaults = function(a) {
        if (!n.isObject(a)) return a;
        for (var b = 1, c = arguments.length; c > b; b++) {
            var d = arguments[b];
            for (var e in d) void 0 === a[e] && (a[e] = d[e])
        }
        return a
    }, n.clone = function(a) {
        return n.isObject(a) ? n.isArray(a) ? a.slice() : n.extend({}, a) : a
    }, n.tap = function(a, b) {
        return b(a), a
    };
    var t = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a === 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof n && (a = a._wrapped), b instanceof n && (b = b._wrapped);
        var e = i.call(a);
        if (e !== i.call(b)) return !1;
        switch (e) {
            case "[object RegExp]":
            case "[object String]":
                return "" + a == "" + b;
            case "[object Number]":
                return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a === +b
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--;)
            if (c[f] === a) return d[f] === b;
        var g = a.constructor,
            h = b.constructor;
        if (g !== h && "constructor" in a && "constructor" in b && !(n.isFunction(g) && g instanceof g && n.isFunction(h) && h instanceof h)) return !1;
        c.push(a), d.push(b);
        var j, k;
        if ("[object Array]" === e) {
            if (j = a.length, k = j === b.length)
                for (; j-- && (k = t(a[j], b[j], c, d)););
        } else {
            var l, m = n.keys(a);
            if (j = m.length, k = n.keys(b).length === j)
                for (; j-- && (l = m[j], k = n.has(b, l) && t(a[l], b[l], c, d)););
        }
        return c.pop(), d.pop(), k
    };
    n.isEqual = function(a, b) {
        return t(a, b, [], [])
    }, n.isEmpty = function(a) {
        if (null == a) return !0;
        if (n.isArray(a) || n.isString(a) || n.isArguments(a)) return 0 === a.length;
        for (var b in a)
            if (n.has(a, b)) return !1;
        return !0
    }, n.isElement = function(a) {
        return !(!a || 1 !== a.nodeType)
    }, n.isArray = k || function(a) {
        return "[object Array]" === i.call(a)
    }, n.isObject = function(a) {
        var b = typeof a;
        return "function" === b || "object" === b && !!a
    }, n.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
        n["is" + a] = function(b) {
            return i.call(b) === "[object " + a + "]"
        }
    }), n.isArguments(arguments) || (n.isArguments = function(a) {
        return n.has(a, "callee")
    }), "function" != typeof /./ && (n.isFunction = function(a) {
        return "function" == typeof a || !1
    }), n.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, n.isNaN = function(a) {
        return n.isNumber(a) && a !== +a
    }, n.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" === i.call(a)
    }, n.isNull = function(a) {
        return null === a
    }, n.isUndefined = function(a) {
        return void 0 === a
    }, n.has = function(a, b) {
        return null != a && j.call(a, b)
    }, n.noConflict = function() {
        return a._ = b, this
    }, n.identity = function(a) {
        return a
    }, n.constant = function(a) {
        return function() {
            return a
        }
    }, n.noop = function() {}, n.property = function(a) {
        return function(b) {
            return b[a]
        }
    }, n.matches = function(a) {
        var b = n.pairs(a),
            c = b.length;
        return function(a) {
            if (null == a) return !c;
            a = new Object(a);
            for (var d = 0; c > d; d++) {
                var e = b[d],
                    f = e[0];
                if (e[1] !== a[f] || !(f in a)) return !1
            }
            return !0
        }
    }, n.times = function(a, b, c) {
        var d = Array(Math.max(0, a));
        b = o(b, c, 1);
        for (var e = 0; a > e; e++) d[e] = b(e);
        return d
    }, n.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
    }, n.now = Date.now || function() {
        return (new Date).getTime()
    };
    var u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        v = n.invert(u),
        w = function(a) {
            var b = function(b) {
                    return a[b]
                },
                c = "(?:" + n.keys(a).join("|") + ")",
                d = RegExp(c),
                e = RegExp(c, "g");
            return function(a) {
                return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a
            }
        };
    n.escape = w(u), n.unescape = w(v), n.result = function(a, b) {
        if (null != a) {
            var c = a[b];
            return n.isFunction(c) ? a[b]() : c
        }
    };
    var x = 0;
    n.uniqueId = function(a) {
        var b = ++x + "";
        return a ? a + b : b
    }, n.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var y = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        A = /\\|'|\r|\n|\u2028|\u2029/g,
        B = function(a) {
            return "\\" + z[a]
        };
    n.template = function(a, b, c) {
        !b && c && (b = c), b = n.defaults({}, b, n.templateSettings);
        var d = RegExp([(b.escape || y).source, (b.interpolate || y).source, (b.evaluate || y).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function(b, c, d, g, h) {
            return f += a.slice(e, h).replace(A, B), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b
        }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = new Function(b.variable || "obj", "_", f)
        } catch (a) {
            throw a.source = f, a
        }
        var h = function(a) {
                return g.call(this, a, n)
            },
            i = b.variable || "obj";
        return h.source = "function(" + i + "){\n" + f + "}", h
    }, n.chain = function(a) {
        var b = n(a);
        return b._chain = !0, b
    };
    var C = function(a) {
        return this._chain ? n(a).chain() : a
    };
    n.mixin = function(a) {
        n.each(n.functions(a), function(b) {
            var c = n[b] = a[b];
            n.prototype[b] = function() {
                var a = [this._wrapped];
                return f.apply(a, arguments), C.call(this, c.apply(n, a))
            }
        })
    }, n.mixin(n), n.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], C.call(this, c)
        }
    }), n.each(["concat", "join", "slice"], function(a) {
        var b = c[a];
        n.prototype[a] = function() {
            return C.call(this, b.apply(this._wrapped, arguments))
        }
    }), n.prototype.value = function() {
        return this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return n
    })
}).call(this), this.FirechatDefaultTemplates = this.FirechatDefaultTemplates || {}, this.FirechatDefaultTemplates["templates/layout-full.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div id='firechat' class='full'>\n<div id='firechat-header' class='clearfix'>\n<div class='clearfix'><div class='half firechat-dropdown' style=''>\n<a id='firechat-btn-rooms' class='firechat-dropdown-toggle btn full' data-toggle=\"firechat-dropdown\" href='#'>\n<span class='icon user-chat'></span>\nChat Rooms\n<span class='caret'></span>\n</a>\n<div class='firechat-dropdown-menu full' role='menu'><ul id='firechat-room-list'></ul><div class='firechat-dropdown-footer aligncenter'>\n<button type='button' class='btn twothird center' id='firechat-btn-create-room-prompt'>Create Room</button>\n</div></div></div>\n<div class='half firechat-dropdown' style=''>\n<a data-event='firechat-user-search-btn' class='btn full firechat-dropdown-toggle' data-toggle=\"firechat-dropdown\" href='#'>\n<span class='icon user-group'></span>\nVisitors\n<span class='caret'></span>\n</a>\n<div class='firechat-dropdown-menu' role='menu'>\n<div class='firechat-dropdown-header aligncenter clearfix'>\n<div class='search-wrapper'>\n<span class='icon search'></span>\n<input type='text' data-event='firechat-user-search' data-template='templates/user-search-list-item.html' data-target='firechat-user-search' data-controls='firechat-user-search-controls' class='center fivesixth'>\n</div>\n</div>\n<ul id='firechat-user-search'></ul><div class='firechat-dropdown-footer aligncenter clearfix'>\n<div id='firechat-user-search-controls' class='clearfix'>\n<span class=\"quarter\"></span>\n<button type='button' class='btn half' data-event='firechat-user-search' data-toggle='firechat-pagination-next' data-template='templates/user-search-list-item.html' data-target='firechat-user-search' data-controls='firechat-user-search-controls' disabled=disabled>Next</button>\n</div><label class='center full'>\n<small>Use \"+ Invite\" button within chat rooms for regular invites.</small>\n</label>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id='firechat-tabs' class='clearfix'>\n<ul id='firechat-tab-list' class='nav nav-tabs clearfix'></ul>\n<div id='firechat-tab-content' class='tab-content'></div>\n</div><div id='firechat-footer' class='clearfix'></div>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/layout-popout.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div id='firechat' class='full'>\n<div id='firechat-tabs' class='clearfix'>\n<ul id='firechat-tab-list' class='nav nav-tabs clearfix'></ul>\n<div id='firechat-tab-content' class='tab-content'></div>\n</div>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/message-context-menu.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<div data-toggle='firechat-contextmenu' class='contextmenu' data-message-id='" + __e(id) + "'>\n<ul>\n<li><a href='#!' data-event='firechat-user-warn'>Warn User</a></li>\n", allowKick && (__p += "\n<li><a href='#!' data-event='firechat-user-kick'>Kick User</a></li>\n"), __p += "\n<li><a href='#!' data-event='firechat-user-suspend-hour'>Suspend User (1 Hour)</a></li>\n<li><a href='#!' data-event='firechat-user-suspend-day'>Suspend User (1 Day)</a></li>\n<li><a href='#!' data-event='firechat-message-delete'>Delete Message</a></li>\n</ul>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/message.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<div class='message message-" + __e(type) + " ", isSelfMessage && (__p += " message-self "), __p += "' data-message-id='" + __e(id) + "' data-user-id='" + __e(userId) + "' data-user-name='" + __e(name) + "' data-class=\"firechat-message\">\n<table width=\"100%\"><tr><td width=\"35\" class=\"center\"><a href='/profile/" + profileURL[__e(userId)].link + "' title='" + __e(name) + "'><img width=\"30\" height=\"30\" src='" + profileURL[__e(userId)].photoUrl + "'></a></td><td><div class='clearfix'>\n<label class='fourfifth'>\n<strong class='name' title='" + __e(name) + "'><a href='/profile/" + profileURL[__e(userId)].link + "'>" + __e(name) + "</a></strong>\n<em>(" + __e(localtime) + ")</em>:\n</label>", disableActions || (__p += "\n<label class='fifth alignright'>\n<a href='#!' data-event='firechat-user-chat' class='icon user-chat' title='Invite to Private Chat'>&nbsp;</a>\n<a href='#!' data-event='firechat-user-mute-toggle' class='icon user-mute' title='Mute User'>&nbsp;</a>\n</label>\n"), __p += "</div>\n<div class='clearfix message-content'>\n" + (null == (__t = message) ? "" : __t) + "\n</div></td></tr></table>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-alert.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='aligncenter clearfix'>\n<h6>" + __e(message) + "</h6>\n<p class='clearfix'>\n<button type='button' class='btn quarter right close'>Close</button>\n</p>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-create-room.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='clearfix'>\n<h6>Give your chat room a name:</h6>\n<input data-input='firechat-room-name' type='text' placeholder='Room name...' style='margin-bottom: 5px;' maxlength='" + __e(maxLengthRoomName) + "'>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-invitation.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='aligncenter clearfix'>\n<h5>" + __e(fromUserName) + "</h5>\n<p>invited you to join</p>\n<h5>" + __e(toRoomName) + "</h5>\n<p class='clearfix'>\n<button data-toggle='accept' type='button' class='btn'>Accept</button>\n<button data-toggle='decline' type='button' class='btn'>Decline</button>\n</p>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-invite-private.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='aligncenter clearfix'>\n<h6>Invite <strong>" + __e(userName) + "</strong> to " + __e(roomName) + "?</h6>\n<p class='clearfix'>\n<button data-toggle='accept' type='button' class='btn'>Invite</button>\n<button data-toggle='decline' type='button' class='close btn'>Cancel</button>\n</p>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-invite-reply.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<div class='aligncenter clearfix'>\n<h5>" + __e(toUserName) + "</h5>\n<p>\n", __p += "accepted" === status ? " accepted your invite. " : " declined your invite. ", __p += "\n</p>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt-user-mute.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='aligncenter clearfix'>\n<h5>" + __e(userName) + "</h5>\n<p class='clearfix'>\n<button data-toggle='accept' type='button' class='btn'>Mute</button>\n<button data-toggle='decline' type='button' class='btn'>Cancel</button>\n</p>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/prompt.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div class='prompt hidden'>\n<div class='prompt-header'>\n" + __e(title) + "\n<a href='#!' class='close right'>X</a>\n</div>\n<div class='prompt-body clearfix'>\n" + (null == (__t = content) ? "" : __t) + "\n</div>\n<div class='prompt-footer'></div>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/room-list-item.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<li data-room-type='" + __e(type) + "' data-room-id='" + __e(id) + "' data-room-name='" + __e(name) + "'>\n<a href='#!' class='clearfix ", isRoomOpen && (__p += " highlight "), __p += "'>\n<span class='left' title='" + __e(name) + "'>" + __e(name) + "</span>\n</a>\n</li>";
    return __p
}, this.FirechatDefaultTemplates["templates/room-user-list-item.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<li data-user-id='" + __e(id) + "' data-user-name='" + __e(name) + "'>\n<a href='#!' class='clearfix'>\n<span class='left twothird clipped' title='" + __e(name) + "'>" + __e(name) + "</span>", disableActions || (__p += "\n<span data-event='firechat-user-mute-toggle' class='icon user-mute right ", isMuted && (__p += " red "), __p += "' title='Toggle User Mute'>&nbsp;</span>\n<span data-event='firechat-user-chat' class='icon user-chat right' title='Invite to Private Chat'>&nbsp;</span>\n"), __p += "\n</a>\n</li>";
    return __p
}, this.FirechatDefaultTemplates["templates/room-user-search-list-item.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<li data-user-id='" + __e(id) + "' data-user-name='" + __e(name) + "'>\n<a href='#!' class='clearfix'>\n", __p += disableActions ? "\n<span class='left fourfifth clipped' title='" + __e(name) + "'>" + __e(name) + "</span>\n" : "\n<span data-event='firechat-user-invite' class='left fourfifth clipped' title='" + __e(name) + "'>" + __e(name) + "</span>\n<span data-event='firechat-user-invite' class='icon plus right' title='Invite to Room'>+</span>\n", __p += "\n</a>\n</li>";
    return __p
}, this.FirechatDefaultTemplates["templates/tab-content.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<div id='" + __e(id) + "' data-room-id='" + __e(id) + "' class='tab-pane'>\n<div class='tab-pane-menu clearfix'><div class='firechat-dropdown twofifth'>\n<a data-event='firechat-user-room-list-btn' class='full btn firechat-dropdown-toggle' data-toggle=\"firechat-dropdown\" href='#' data-target='firechat-room-user-list-" + __e(id) + "'>\n<span class='icon user-group'></span>\nIn Room\n<span class='caret'></span>\n</a>\n<div class='firechat-dropdown-menu' role='menu'>\n<ul id='firechat-room-user-list-" + __e(id) + "' class='full'></ul>\n</div>\n</div><div class='firechat-dropdown twofifth'>\n<a data-event='firechat-user-search-btn' class='full btn firechat-dropdown-toggle' data-toggle=\"firechat-dropdown\" href='#'>\n<span class='icon plus'>+</span>\nInvite\n<span class='caret'></span>\n</a><div class='firechat-dropdown-menu' role='menu'>\n<div class='firechat-dropdown-header aligncenter clearfix'>\n<div class='search-wrapper'>\n<span class='icon search'></span>\n<input type='text' data-event='firechat-user-search' data-template='templates/room-user-search-list-item.html' data-target='firechat-room-user-search-" + __e(id) + "' data-controls='firechat-room-user-search-controls-" + __e(id) + "' class='center fivesixth'>\n</div>\n</div>\n<ul id='firechat-room-user-search-" + __e(id) + "'></ul><div class='firechat-dropdown-footer aligncenter clearfix'>\n<div id='firechat-room-user-search-controls-" + __e(id) + "' class='clearfix'><span class=\"quarter\"></span>\n<!--\n<button type='button' class='btn third disabled' data-event='firechat-user-search' data-template='templates/room-user-search-list-item.html' data-target='firechat-room-user-search-" + __e(id) + "' data-controls='firechat-room-user-search-controls-" + __e(id) + "' data-toggle='firechat-pagination-prev' disabled=disabled>Prev</button>\n-->\n<button type='button' class='btn half disabled' data-event='firechat-user-search' data-template='templates/room-user-search-list-item.html' data-target='firechat-room-user-search-" + __e(id) + "' data-controls='firechat-room-user-search-controls-" + __e(id) + "' data-toggle='firechat-pagination-next'  disabled=disabled>Next</button>\n</div>\n</div>\n</div>\n</div><a href='#!' data-event='firechat-close-tab' class='icon close right' style='15px 5px' title='Leave Room'></a></div><div class='clearfix'>\n<div id='firechat-messages" + __e(id) + "' class='chat'></div>\n</div><div class='clearfix'>\n<label>Your message:</label>\n<textarea id='textarea" + __e(id) + "' placeholder='Type your message here...'></textarea>\n</div>\n</div>";
    return __p
}, this.FirechatDefaultTemplates["templates/tab-menu-item.html"] = function(obj) {
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape;
    with(obj) __p += "<li data-room-id='" + __e(id) + "'>\n<a href='#" + __e(id) + "' data-toggle='firechat-tab' title='" + __e(name) + "'>" + __e(name) + "</a>\n</li>";
    return __p
}, this.FirechatDefaultTemplates["templates/user-search-list-item.html"] = function(obj) {
    function print() {
        __p += __j.call(arguments, "")
    }
    obj || (obj = {});
    var __t, __p = "",
        __e = _.escape,
        __j = Array.prototype.join;
    with(obj) __p += "<li data-user-id='" + __e(id) + "' data-user-name='" + __e(name) + "'>\n<a href='#!' class='clearfix'>\n", __p += disableActions ? "\n<span class='left fivesixth clipped' title='" + __e(name) + "'>" + __e(name) + "</span>\n" : "\n<span data-event='firechat-user-chat' class='left fivesixth clipped' title='" + __e(name) + "'>" + __e(name) + "</span>\n<span data-event='firechat-user-chat' class='icon user-chat right' title='Invite to Private Chat'>&nbsp;</span>\n", __p += "\n</a>\n</li>";
    return __p
},
    function(a) {
        Function.prototype.bind || (Function.prototype.bind = function(a) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var b = Array.prototype.slice.call(arguments, 1),
                c = this,
                d = function() {},
                e = function() {
                    return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
                };
            return d.prototype = this.prototype, e.prototype = new d, e
        }), Object.keys = Object.keys || function(a) {
            var b = [];
            for (var c in a) a.hasOwnProperty(c) && b.push(c);
            return b
        }
    }(),
    function() {
        function a(a, b) {
            this._firechatRef = a, this._firebaseApp = a.database.app, this._user = null, this._userId = null, this._userName = null, this._isModerator = !1, this._sessionId = null, this._events = {}, this._rooms = {}, this._presenceBits = {}, this._userRef = null, this._messageRef = this._firechatRef.child("room-messages"), this._roomRef = this._firechatRef.child("room-metadata"), this._privateRoomRef = this._firechatRef.child("room-private-metadata"), this._moderatorsRef = this._firechatRef.child("moderators"), this._suspensionsRef = this._firechatRef.child("suspensions"), this._usersOnlineRef = this._firechatRef.child("user-names-online"), this._options = b || {}, this._options.numMaxMessages = this._options.numMaxMessages || 50
        }
        var b = this,
            c = b.Firechat;
        a.noConflict = function() {
            return b.Firechat = c, a
        }, b.Firechat = a, a.prototype = {
            _loadUserMetadata: function(a) {
                var c = this;
                this._userRef.transaction(function(a) {
                    if (!a || !a.id || !a.name) return {
                        id: c._userId,
                        name: c._userName
                    }
                }, function(d, e, f) {
                    c._user = f.val(), c._moderatorsRef.child(c._userId).once("value", function(d) {
                        c._isModerator = !!d.val(), b.setTimeout(a, 0)
                    })
                })
            },
            _setupDataEvents: function() {
                var a = this._firechatRef.root.child(".info/connected");
                a.on("value", function(a) {
                    if (a.val() === !0)
                        for (var b in this._presenceBits) {
                            var c = this._presenceBits[b],
                                d = c.ref;
                            d.onDisconnect().set(c.offlineValue), d.set(c.onlineValue)
                        }
                }, this), this._queuePresenceOperation(this._sessionRef, !0, null);
                var b = this._usersOnlineRef.child(this._userName.toLowerCase()),
                    c = b.child(this._sessionId);
                this._queuePresenceOperation(c, {
                    id: this._userId,
                    name: this._userName
                }, null), this._userRef.on("value", this._onUpdateUser, this), this._userRef.child("invites").on("child_added", this._onFirechatInvite, this), this._userRef.child("notifications").on("child_added", this._onNotification, this)
            },
            _addEventCallback: function(a, b) {
                this._events[a] = this._events[a] || [], this._events[a].push(b)
            },
            _getEventCallbacks: function(a) {
                return this._events.hasOwnProperty(a) ? this._events[a] : []
            },
            _invokeEventCallbacks: function(a) {
                var b = [],
                    c = this._getEventCallbacks(a);
                Array.prototype.push.apply(b, arguments), b = b.slice(1);
                for (var d = 0; d < c.length; d += 1) c[d].apply(null, b)
            },
            _queuePresenceOperation: function(a, b, c) {
                a.onDisconnect().set(c), a.set(b), this._presenceBits[a.toString()] = {
                    ref: a,
                    onlineValue: b,
                    offlineValue: c
                }
            },
            _removePresenceOperation: function(a, b) {
                var c = a.toString();
                a.onDisconnect().cancel(), a.set(b), delete this._presenceBits[c]
            },
            _onUpdateUser: function(a) {
                this._user = a.val(), this._userName = this._user.name, this._invokeEventCallbacks("user-update", this._user)
            },
            _onAuthRequired: function() {
                this._invokeEventCallbacks("auth-required")
            },
            _onEnterRoom: function(a) {
                this._invokeEventCallbacks("room-enter", a)
            },
            _onNewMessage: function(a, b) {
                var c = b.val();
                c.id = b.key, this._invokeEventCallbacks("message-add", a, c)
            },
            _onRemoveMessage: function(a, b) {
                var c = b.key;
                this._invokeEventCallbacks("message-remove", a, c)
            },
            _onLeaveRoom: function(a) {
                this._invokeEventCallbacks("room-exit", a)
            },
            _onNotification: function(a) {
                var b = a.val();
                b.read || (("suspension" !== b.notificationType || b.data.suspendedUntil < (new Date).getTime()) && a.ref.child("read").set(!0), this._invokeEventCallbacks("notification", b))
            },
            _onFirechatInvite: function(a) {
                var b = this,
                    c = a.val();
                c.status || (c.id = c.id || a.key, b.getRoom(c.roomId, function(a) {
                    c.toRoomName = a.name, b._invokeEventCallbacks("room-invite", c)
                }))
            },
            _onFirechatInviteResponse: function(a) {
                var b = a.val();
                b.id = b.id || a.key, this._invokeEventCallbacks("room-invite-response", b)
            }
        }, a.prototype.setUser = function(a, c, d) {
            var e = this;
            e._firebaseApp.auth().onAuthStateChanged(function(f) {
                f ? (e._userId = a.toString(), e._userName = c.toString(), e._userRef = e._firechatRef.child("users").child(e._userId), e._sessionRef = e._userRef.child("sessions").push(), e._sessionId = e._sessionRef.key, e._loadUserMetadata(function() {
                    b.setTimeout(function() {
                        d(e._user), e._setupDataEvents()
                    }, 0)
                })) : e.warn("Firechat requires an authenticated Firebase reference. Pass an authenticated reference before loading.")
            })
        }, a.prototype.resumeSession = function() {
            this._userRef.child("rooms").once("value", function(a) {
                var b = a.val();
                for (var c in b) this.enterRoom(b[c].id)
            }, function() {}, this)
        }, a.prototype.on = function(a, b) {
            this._addEventCallback(a, b)
        }, a.prototype.createRoom = function(a, b, c) {
            var d = this,
                e = this._roomRef.push(),
                f = {
                    id: e.key,
                    name: a,
                    type: b || "public",
                    createdByUserId: this._userId,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                };
            "private" === b && (f.authorizedUsers = {}, f.authorizedUsers[this._userId] = !0), e.set(f, function(a) {
                a || d.enterRoom(e.key), c && c(e.key)
            })
            return e.key;
        }, a.prototype.enterRoom = function(a) {
            var b = this;
            b.getRoom(a, function(c) {
                var d = c.name;
                if (a && d && !b._rooms[a]) {
                    if (b._rooms[a] = !0, b._user) {
                        b._userRef.child("rooms").child(a).set({
                            id: a,
                            name: d,
                            active: !0
                        });
                        var e = b._firechatRef.child("room-users").child(a).child(b._userId).child(b._sessionId);
                        b._queuePresenceOperation(e, {
                            id: b._userId,
                            name: b._userName
                        }, null)
                    }
                    b._onEnterRoom({
                        id: a,
                        name: d
                    }), b._roomRef.child(a).once("value", function(c) {
                        b._messageRef.child(a).limitToLast(b._options.numMaxMessages).on("child_added", function(c) {
                            b._onNewMessage(a, c)
                        }, function() {
                            b.leaveRoom(a)
                        }, b), b._messageRef.child(a).limitToLast(b._options.numMaxMessages).on("child_removed", function(c) {
                            b._onRemoveMessage(a, c)
                        }, function() {}, b)
                    }, function() {}, b)
                }
            })
        }, a.prototype.leaveRoom = function(a) {
            var b = this,
                c = b._firechatRef.child("room-users").child(a);
            if (b._messageRef.child(a).off(), b._user) {
                var d = c.child(b._userId).child(b._sessionId);
                b._removePresenceOperation(d, null), b._userRef.child("rooms").child(a).remove()
            }
            delete b._rooms[a], b._onLeaveRoom(a)
        }, a.prototype.sendMessage = function(a, b, c, d) {
            var e, f = this,
                g = {
                    userId: f._userId,
                    name: f._userName,
                    timestamp: firebase.database.ServerValue.TIMESTAMP,
                    message: b,
                    type: c || "default"
                };
            return f._user ? (e = f._messageRef.child(a).push(), void e.setWithPriority(g, firebase.database.ServerValue.TIMESTAMP, d)) : (f._onAuthRequired(), void(d && d(new Error("Not authenticated or user not set!"))))
        }, a.prototype.deleteMessage = function(a, b, c) {
            var d = this;
            d._messageRef.child(a).child(b).remove(c)
        }, a.prototype.toggleUserMute = function(a, b) {
            var c = this;
            return c._user ? void c._userRef.child("muted").child(a).transaction(function(a) {
                return !a || null
            }, b) : (c._onAuthRequired(), void(b && b(new Error("Not authenticated or user not set!"))))
        }, a.prototype.sendSuperuserNotification = function(a, b, c, d) {
            var e = this,
                f = e._firechatRef.child("users").child(a).child("notifications");
            f.push({
                fromUserId: e._userId,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                notificationType: b,
                data: c || {}
            }, d)
        }, a.prototype.warnUser = function(a) {
            var b = this;
            b.sendSuperuserNotification(a, "warning")
        }, a.prototype.suspendUser = function(a, b, c) {
            var d = this,
                e = (new Date).getTime() + 1e3 * b;
            d._suspensionsRef.child(a).set(e, function(b) {
                return b && c ? c(b) : (d.sendSuperuserNotification(a, "suspension", {
                    suspendedUntil: e
                }), c(null))
            })
        }, a.prototype.inviteUser = function(a, b) {
            var c = this,
                d = function() {
                    var d = c._firechatRef.child("users").child(a).child("invites").push();
                    d.set({
                        id: d.key,
                        fromUserId: c._userId,
                        fromUserName: c._userName,
                        roomId: b
                    }), d.on("value", c._onFirechatInviteResponse, function() {}, c)
                };
            return c._user ? void c.getRoom(b, function(e) {
                if ("private" === e.type) {
                    var f = c._roomRef.child(b).child("authorizedUsers");
                    f.child(a).set(!0, function(a) {
                        a || d()
                    })
                } else d()
            }) : void c._onAuthRequired()
        }, a.prototype.acceptInvite = function(a, b) {
            var c = this;
            c._userRef.child("invites").child(a).once("value", function(d) {
                var e = d.val();
                return null === e && b ? b(new Error("acceptInvite(" + a + "): invalid invite id")) : (c.enterRoom(e.roomId), void c._userRef.child("invites").child(a).update({
                    status: "accepted",
                    toUserName: c._userName
                }, b))
            }, c)
        }, a.prototype.declineInvite = function(a, b) {
            var c = this,
                d = {
                    status: "declined",
                    toUserName: c._userName
                };
            c._userRef.child("invites").child(a).update(d, b)
        }, a.prototype.getRoomList = function(a) {
            var b = this;
            b._roomRef.once("value", function(b) {
                a(b.val())
            })
        }, a.prototype.getUsersByRoom = function() {
            var a = this,
                c = arguments[0],
                d = a._firechatRef.child("room-users").child(c),
                e = arguments[arguments.length - 1],
                f = null;
            arguments.length > 2 && (f = arguments[1]), d = f ? d.limitToLast(f) : d, d.once("value", function(a) {
                var c = a.val() || {},
                    d = {};
                for (var f in c)
                    for (var g in c[f]) {
                        d[f] = c[f][g];
                        break
                    }
                b.setTimeout(function() {
                    e(d)
                }, 0)
            })
        }, a.prototype.getUsersByPrefix = function(a, c, d, e, f) {
            var g = this._usersOnlineRef,
                h = a.toLowerCase();
            g = c ? g.startAt(null, c) : d ? g.endAt(null, d) : h ? g.startAt(null, h) : g.startAt(), g = e ? g.limitToLast(e) : g, g.once("value", function(c) {
                var d = c.val() || {},
                    e = {};
                for (var g in d) {
                    var i, j, k = d[g];
                    for (var l in k) {
                        i = k[l].name, j = k[l].id;
                        break
                    }
                    a.length > 0 && 0 !== i.toLowerCase().indexOf(h) || (e[i] = {
                        name: i,
                        id: j
                    })
                }
                b.setTimeout(function() {
                    f(e)
                }, 0)
            })
        }, a.prototype.getRoom = function(a, b) {
            this._roomRef.child(a).once("value", function(a) {
                b(a.val())
            })
        }, a.prototype.userIsModerator = function() {
            return this._isModerator
        }, a.prototype.warn = function(a) {
            console && (a = "Firechat Warning: " + a, "function" == typeof console.warn ? console.warn(a) : "function" == typeof console.log && console.log(a))
        }
    }(),
    function(a) {
        function b(b, c, d) {
            if (!b) throw new Error("FirechatUI: Missing required argument `firebaseRef`");
            if (!c) throw new Error("FirechatUI: Missing required argument `el`");
            d = d || {}, this._options = d, this._el = c, this._user = null, this._chat = new Firechat(b, d), this._roomQueue = [], this.maxLengthUsername = 15, this.maxLengthUsernameDisplay = 15, this.maxLengthRoomName = 24, this.maxLengthMessage = 120, this.maxUserSearchResults = 100, this.urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim, this.pseudoUrlPattern = /(^|[^\/])(www\.[\S]+(\b|$))/gim, this._renderLayout(), this.$wrapper = a("#firechat"), this.$roomList = a("#firechat-room-list"), this.$tabList = a("#firechat-tab-list"), this.$tabContent = a("#firechat-tab-content"), this.$messages = {}, this.$rateLimit = {
                limitCount: 10,
                limitInterval: 1e4,
                limitWaitTime: 3e4,
                history: {}
            }, this._bindUIEvents(), this._bindDataEvents()
        }
        if (!a || parseInt(a().jquery.replace(/\./g, ""), 10) < 170) throw new Error("jQuery 1.7 or later required!");
        var c = this,
            d = c.FirechatUI;
        if (c.FirechatUI = b, !self.FirechatDefaultTemplates) throw new Error("Unable to find chat templates!");
        b.noConflict = function() {
            return c.FirechatUI = d, b
        }, b.prototype = {
            _bindUIEvents: function() {
                this._bindForHeightChange(), this._bindForTabControls(), this._bindForRoomList(), this._bindForUserRoomList(), this._bindForUserSearch(), this._bindForUserMuting(), this._bindForChatInvites(), this._bindForRoomListing(), this._setupTabs(), this._setupDropdowns(), this._bindTextInputFieldLimits()
            },
            _bindDataEvents: function() {
                this._chat.on("user-update", this._onUpdateUser.bind(this)), this._chat.on("room-enter", this._onEnterRoom.bind(this)), this._chat.on("room-exit", this._onLeaveRoom.bind(this)), this._chat.on("message-add", this._onNewMessage.bind(this)), this._chat.on("message-remove", this._onRemoveMessage.bind(this)), this._chat.on("room-invite", this._onChatInvite.bind(this)), this._chat.on("room-invite-response", this._onChatInviteResponse.bind(this)), this._chat.on("notification", this._onNotification.bind(this))
            },
            _renderLayout: function() {
                var b = FirechatDefaultTemplates["templates/layout-full.html"];
                a(this._el).html(b({
                    maxLengthUsername: this.maxLengthUsername
                }))
            },
            _onUpdateUser: function(b) {
                this._user = b;
                var c = this._user.muted || {};
                a('[data-event="firechat-user-mute-toggle"]').each(function(b, d) {
                    var e = a(this).closest("[data-user-id]").data("user-id");
                    a(this).toggleClass("red", !!c[e])
                });
                for (var d in c) a('.message[data-user-id="' + d + '"]').fadeOut()
            },
            _onEnterRoom: function(a) {
                this.attachTab(a.id, a.name)
            },
            _onLeaveRoom: function(a) {
                this.removeTab(a), this._roomQueue.length > 0 && this._chat.enterRoom(this._roomQueue.shift(a))
            },
            _onNewMessage: function(a, b) {
                var c = b.userId;
                this._user && this._user.muted && this._user.muted[c] || this.showMessage(a, b)
            },
            _onRemoveMessage: function(a, b) {
                this.removeMessage(a, b)
            },
            _onChatInvite: function(a) {
                var b = this,
                    c = FirechatDefaultTemplates["templates/prompt-invitation.html"],
                    d = this.prompt("Invite", c(a));
                d.find("a.close").click(function() {
                    return d.remove(), b._chat.declineInvite(a.id), !1
                }), d.find("[data-toggle=accept]").click(function() {
                    return d.remove(), b._chat.acceptInvite(a.id), !1
                }), d.find("[data-toggle=decline]").click(function() {
                    return d.remove(), b._chat.declineInvite(a.id), !1
                })
            },
            _onChatInviteResponse: function(a) {
                if (a.status) {
                    var b, c = this,
                        d = FirechatDefaultTemplates["templates/prompt-invite-reply.html"];
                    a.status && "accepted" === a.status ? (b = this.prompt("Accepted", d(a)), this._chat.getRoom(a.roomId, function(b) {
                        c.attachTab(a.roomId, b.name)
                    })) : b = this.prompt("Declined", d(a)), b.find("a.close").click(function() {
                        return b.remove(), !1
                    })
                }
            },
            _onNotification: function(a) {
                if ("warning" === a.notificationType) this.renderAlertPrompt("Warning", "You are being warned for inappropriate messaging. Further violation may result in temporary or permanent ban of service.");
                else if ("suspension" === a.notificationType) {
                    var b = a.data.suspendedUntil,
                        c = Math.round((b - (new Date).getTime()) / 1e3),
                        d = "";
                    if (c > 0) {
                        if (c > 7200) {
                            var e = Math.floor(c / 3600);
                            d = e + " hours, ", c -= 3600 * e
                        }
                        d += Math.floor(c / 60) + " minutes", this.renderAlertPrompt("Suspended", "A moderator has suspended you for violating site rules. You cannot send messages for another " + d + ".")
                    }
                }
            }
        }, b.prototype.setUser = function(a, b) {
            var c = this;
            c._chat.setUser(a, b, function(a) {
                c._user = a, c._chat.userIsModerator() && c._bindSuperuserUIEvents(), c._chat.resumeSession()
            })
        }, b.prototype.on = function(a, b) {
            this._chat.on(a, b)
        }, b.prototype._bindSuperuserUIEvents = function() {
            var b = this,
                c = function(b) {
                    var c = a(this),
                        d = c.closest("[data-message-id]").data("message-id"),
                        e = a('[data-message-id="' + d + '"]').closest("[data-user-id]").data("user-id"),
                        f = a('[data-message-id="' + d + '"]').closest("[data-room-id]").data("room-id");
                    return {
                        messageId: d,
                        userId: e,
                        roomId: f
                    }
                },
                d = function() {
                    a('[data-toggle="firechat-contextmenu"]').each(function() {
                        a(this).remove()
                    }), a("#firechat .message.highlighted").each(function() {
                        a(this).removeClass("highlighted")
                    })
                },
                e = function(e) {
                    var f, g = a(this),
                        h = g.closest("[data-message-id]"),
                        i = FirechatDefaultTemplates["templates/message-context-menu.html"],
                        j = c.call(this, e);
                    e.preventDefault(), d(), g.addClass("highlighted"), b._chat.getRoom(j.roomId, function(c) {
                        f = a(i({
                            id: h.data("message-id")
                        })), f.css({
                            left: e.clientX,
                            top: e.clientY
                        }).appendTo(b.$wrapper)
                    })
                };
            a(document).bind("click", {
                self: this
            }, function(a) {
                a.button && 2 == a.button || d()
            }), a(document).delegate('[data-class="firechat-message"]', "contextmenu", e), a(document).delegate('[data-event="firechat-user-warn"]', "click", function(a) {
                var d = c.call(this, a);
                b._chat.warnUser(d.userId)
            }), a(document).delegate('[data-event="firechat-user-suspend-hour"]', "click", function(a) {
                var d = c.call(this, a);
                b._chat.suspendUser(d.userId, 3600)
            }), a(document).delegate('[data-event="firechat-user-suspend-day"]', "click", function(a) {
                var d = c.call(this, a);
                b._chat.suspendUser(d.userId, 86400)
            }), a(document).delegate('[data-event="firechat-message-delete"]', "click", function(a) {
                var d = c.call(this, a);
                b._chat.deleteMessage(d.roomId, d.messageId)
            })
        }, b.prototype._bindForHeightChange = function() {
            var b = a(this._el),
                c = null;
            setInterval(function() {
                var d = b.height();
                d != c && (c = d, a(".chat").each(function(a, b) {}))
            }, 500)
        }, b.prototype._bindForTabControls = function() {
            var b = this;
            a(document).delegate('[data-event="firechat-close-tab"]', "click", function(c) {
                var d = a(this).closest("[data-room-id]").data("room-id");
                return b._chat.leaveRoom(d), !1
            })
        }, b.prototype._bindForRoomList = function() {
            var b = this;
            a("#firechat-btn-rooms").bind("click", function() {
                if (!a(this).parent().hasClass("open")) {
                    var c = (a(this), FirechatDefaultTemplates["templates/room-list-item.html"]),
                        d = function() {
                            var c = a(this).parent(),
                                d = c.data("room-id"),
                                e = c.data("room-name");
                            return b.$messages[d] ? b.focusTab(d) : b._chat.enterRoom(d, e), !1
                        };
                    b._chat.getRoomList(function(e) {
                        b.$roomList.empty();
                        for (var f in e) {
                            var g = e[f];
                            if ("public" == g.type) {
                                g.isRoomOpen = !!b.$messages[g.id];
                                var h = a(c(g));
                                h.children("a").bind("click", d), b.$roomList.append(h.toggle(!0))
                            }
                        }
                    })
                }
            })
        }, b.prototype._bindForUserRoomList = function() {
            var b = this;
            a(document).delegate('[data-event="firechat-user-room-list-btn"]', "click", function(c) {
                c.stopPropagation();
                var d = a(this),
                    e = d.closest("[data-room-id]").data("room-id"),
                    f = FirechatDefaultTemplates["templates/room-user-list-item.html"],
                    g = d.data("target"),
                    h = a("#" + g);
                h.empty(), b._chat.getUsersByRoom(e, function(c) {
                    for (var d in c) user = c[d], user.disableActions = !b._user || user.id === b._user.id, user.nameTrimmed = b.trimWithEllipsis(user.name, b.maxLengthUsernameDisplay), user.isMuted = b._user && b._user.muted && b._user.muted[user.id], h.append(a(f(user)));
                    b.sortListLexicographically("#" + g)
                })
            })
        }, b.prototype._bindForUserSearch = function() {
            var b = this,
                c = function(b) {
                    var c = a(this),
                        e = c.data("target"),
                        f = c.data("controls"),
                        g = c.data("template"),
                        h = c.val() || c.data("prefix") || "",
                        i = c.data("startAt") || null,
                        j = c.data("endAt") || null;
                    b.preventDefault(), d(e, g, f, h, i, j)
                },
                d = function(c, d, e, f, g, h) {
                    var i = a("#" + c),
                        j = a("#" + e),
                        k = FirechatDefaultTemplates[d];
                    b._chat.getUsersByPrefix(f, g, h, b.maxUserSearchResults, function(a) {
                        var c, d, e, g, h, l = 0;
                        i.empty();
                        for (e in a) {
                            var m = a[e];
                            if (m.disableActions = !b._user || m.id === b._user.id, l += 1, i.append(k(m)), 1 === l) g = m.name.toLowerCase();
                            else if (l >= b.maxUserSearchResults) {
                                h = m.name.toLowerCase();
                                break
                            }
                        }
                        j && (c = j.find('[data-toggle="firechat-pagination-prev"]'), d = j.find('[data-toggle="firechat-pagination-next"]'), h ? d.data("event", "firechat-user-search").data("startAt", h).data("prefix", f).removeClass("disabled").removeAttr("disabled") : d.data("event", null).data("startAt", null).data("prefix", null).addClass("disabled").attr("disabled", "disabled"))
                    })
                };
            a(document).delegate('[data-event="firechat-user-search"]', "keyup", c), a(document).delegate('[data-event="firechat-user-search"]', "click", c), a(document).delegate('[data-event="firechat-user-search-btn"]', "click", function(b) {
                b.stopPropagation();
                var c = a(this).next("div.firechat-dropdown-menu").find("input");
                c.focus(), c.trigger(jQuery.Event("keyup"))
            }), a(document).delegate('[data-event="firechat-user-search"]', "click", function(a) {
                a.stopPropagation()
            })
        }, b.prototype._bindForUserMuting = function() {
            var b = this;
            a(document).delegate('[data-event="firechat-user-mute-toggle"]', "click", function(c) {
                var d = a(this),
                    e = d.closest("[data-user-id]").data("user-id"),
                    f = d.closest("[data-user-name]").data("user-name"),
                    g = d.hasClass("red"),
                    h = FirechatDefaultTemplates["templates/prompt-user-mute.html"];
                if (c.preventDefault(), g) b._chat.toggleUserMute(e);
                else {
                    var i = b.prompt("Mute User?", h({
                        userName: f
                    }));
                    i.find("a.close").first().click(function() {
                        return i.remove(), !1
                    }), i.find("[data-toggle=decline]").first().click(function() {
                        return i.remove(), !1
                    }), i.find("[data-toggle=accept]").first().click(function() {
                        return b._chat.toggleUserMute(e), i.remove(), !1
                    })
                }
            })
        }, b.prototype._bindForChatInvites = function() {
            var b = this,
                c = function(c) {
                    var d, e = a(this),
                        f = e.closest("[data-user-id]").data("user-id"),
                        g = e.closest("[data-room-id]").data("room-id"),
                        h = e.closest("[data-user-name]").data("user-name"),
                        i = FirechatDefaultTemplates["templates/prompt-invite-private.html"];
                    return b._chat.getRoom(g, function(a) {
                        return d = b.prompt("Invite", i({
                            userName: h,
                            roomName: a.name
                        })), d.find("a.close").click(function() {
                            return d.remove(), !1
                        }), d.find("[data-toggle=decline]").click(function() {
                            return d.remove(), !1
                        }), d.find("[data-toggle=accept]").first().click(function() {
                            return d.remove(), b._chat.inviteUser(f, g, a.name), !1
                        }), !1
                    }), !1
                },
                d = function(c) {
                    var d, e = a(this),
                        f = e.closest("[data-user-id]").data("user-id"),
                        g = e.closest("[data-user-name]").data("user-name"),
                        h = FirechatDefaultTemplates["templates/prompt-invite-private.html"];
                    return f && g && (d = b.prompt("Private Invite", h({
                        userName: g,
                        roomName: "Private Chat"
                    })), d.find("a.close").click(function() {
                        return d.remove(), !1
                    }), d.find("[data-toggle=decline]").click(function() {
                        return d.remove(), !1
                    }), d.find("[data-toggle=accept]").first().click(function() {
                        d.remove();
                        var a = "Private Chat";
                        return b._chat.createRoom(a, "private", function(c) {
                            b._chat.inviteUser(f, c, a)
                        }), !1
                    })), !1
                };
            a(document).delegate('[data-event="firechat-user-chat"]', "click", d), a(document).delegate('[data-event="firechat-user-invite"]', "click", c)
        }, b.prototype._bindForRoomListing = function() {
            var b = this,
                c = a("#firechat-btn-create-room-prompt"),
                d = a("#firechat-btn-create-room");
            c.bind("click", function(a) {
                return b.promptCreateRoom(), !1
            }), d.bind("click", function(c) {
                var d = a("#firechat-input-room-name").val();
                return a("#firechat-prompt-create-room").remove(), b._chat.createRoom(d), !1
            })
        }, b.prototype._setupTabs = function() {
            var b = function(b) {
                    var d, e, f = b,
                        g = f.closest("ul:not(.firechat-dropdown-menu)"),
                        h = f.attr("data-target"),
                        i = g.find(".active:last a")[0];
                    h || (h = f.attr("href"), h = h && h.replace(/.*(?=#[^\s]*$)/, "")), f.parent("li").hasClass("active") || (e = a.Event("show", {
                        relatedTarget: i
                    }), f.trigger(e), e.isDefaultPrevented() || (d = a(h), c(f.parent("li"), g), c(d, d.parent(), function() {
                        f.trigger({
                            type: "shown",
                            relatedTarget: i
                        })
                    })))
                },
                c = function(b, c, d) {
                    function e() {
                        f.removeClass("active").find("> .firechat-dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? b.addClass("in") : b.removeClass("fade"), b.parent(".firechat-dropdown-menu") && b.closest("li.firechat-dropdown").addClass("active"), d && d()
                    }
                    var f = c.find("> .active"),
                        g = d && a.support.transition && f.hasClass("fade");
                    g ? f.one(a.support.transition.end, e) : e(), f.removeClass("in")
                };
            a(document).delegate('[data-toggle="firechat-tab"]', "click", function(c) {
                c.preventDefault(), b(a(this))
            })
        }, b.prototype._setupDropdowns = function() {
            var b = function(b) {
                    var e = a(this),
                        f = d(e),
                        g = f.hasClass("open");
                    if (!e.is(".disabled, :disabled")) return c(), g || f.toggleClass("open"), e.focus(), !1
                },
                c = function() {
                    a("[data-toggle=firechat-dropdown]").each(function() {
                        d(a(this)).removeClass("open")
                    })
                },
                d = function(b) {
                    var c, d = b.attr("data-target");
                    return d || (d = b.attr("href"), d = d && /#/.test(d) && d.replace(/.*(?=#[^\s]*$)/, "")), c = d && "#" !== d && a(d), c && c.length || (c = b.parent()), c
                };
            a(document).bind("click", c).delegate(".firechat-dropdown-menu", "click", function(a) {
                a.stopPropagation()
            }).delegate("[data-toggle=firechat-dropdown]", "click", b)
        }, b.prototype._bindTextInputFieldLimits = function() {
            a("body").delegate('input[data-provide="limit"], textarea[data-provide="limit"]', "keyup", function(b) {
                var c = a(this),
                    d = a(c.data("counter")),
                    e = c.attr("maxlength"),
                    f = c.val().length;
                d.html(Math.max(0, e - f))
            })
        }, b.prototype.renderAlertPrompt = function(a, b) {
            var c = FirechatDefaultTemplates["templates/prompt-alert.html"],
                d = this.prompt(a, c({
                    message: b
                }));
            d.find(".close").click(function() {
                return d.remove(), !1
            })
        }, b.prototype.toggleInputs = function(b) {
            a("#firechat-tab-content textarea").each(function() {
                var c = a(this);
                b ? a(this).val("") : a(this).val("You have exceeded the message limit, please wait before sending."), c.prop("disabled", !b)
            }), a("#firechat-input-name").prop("disabled", !b)
        }, b.prototype.attachTab = function(b, c) {
            var d = this;
            if (this.$messages[b]) return void this.focusTab(b);
            var e = {
                    id: b,
                    name: c
                },
                f = FirechatDefaultTemplates["templates/tab-content.html"],
                g = a(f(e));
            this.$tabContent.prepend(g);
            var h = a("#firechat-messages" + b);
            this.$messages[b] = h;
            var i = g.find("textarea").first();
            i.bind("keydown", function(a) {
                var c = d.trimWithEllipsis(i.val(), d.maxLengthMessage);
                if (13 === a.which && "" !== c) return i.val(""), d._chat.sendMessage(b, c), !1
            });
            var j = FirechatDefaultTemplates["templates/tab-menu-item.html"],
                k = a(j(e));
            this.$tabList.prepend(k), k.bind("shown", function(a) {
                h.scrollTop(h[0].scrollHeight)
            });
            var l = this.$tabList.children("li"),
                m = Math.floor(a("#firechat-tab-list").width() / l.length);
            this.$tabList.children("li").css("width", m), this.$roomList.children("[data-room-id=" + b + "]").children("a").addClass("highlight"), a("#firechat-btn-room-user-list-" + b).bind("click", function() {
                return d.sortListLexicographically("#firechat-room-user-list-" + b), !1
            }), this.focusTab(b)
        }, b.prototype.focusTab = function(a) {
            if (this.$messages[a]) {
                var b = this.$tabList.find("[data-room-id=" + a + "]").find("a");
                b.length && b.first().trigger("click")
            }
        }, b.prototype.removeTab = function(b) {
            delete this.$messages[b], this.$tabContent.find("[data-room-id=" + b + "]").remove(), this.$tabList.find("[data-room-id=" + b + "]").remove();
            var c = this.$tabList.children("li"),
                d = Math.floor(a("#firechat-tab-list").width() / c.length);
            this.$tabList.children("li").css("width", d), this.$tabList.find('[data-toggle="firechat-tab"]').first().trigger("click"), this.$roomList.children("[data-room-id=" + b + "]").children("a").removeClass("highlight")
        }, b.prototype.showMessage = function(b, c) {
            var d = this,
                e = {
                    id: c.id,
                    localtime: d.formatTime(c.timestamp),
                    message: c.message || "",
                    userId: c.userId,
                    name: c.name,
                    type: c.type || "default",
                    isSelfMessage: d._user && c.userId == d._user.id,
                    disableActions: !d._user || c.userId == d._user.id
                };
            e.message = _.map(e.message.split(" "), function(a) {
                return d.urlPattern.test(a) || d.pseudoUrlPattern.test(a) ? d.linkify(encodeURI(a)) : _.escape(a)
            }).join(" "), e.message = d.trimWithEllipsis(e.message, d.maxLengthMessage);
            var f = FirechatDefaultTemplates["templates/message.html"],
                g = a(f(e)),
                h = d.$messages[b];
            if (h) {
                var i = !1;
                h.scrollTop() / (h[0].scrollHeight - h[0].offsetHeight) >= .95 ? i = !0 : h[0].scrollHeight <= h.height() && (i = !0), h.append(g), i && h.scrollTop(h[0].scrollHeight)
            }
        }, b.prototype.removeMessage = function(b, c) {
            a('.message[data-message-id="' + c + '"]').remove()
        }, b.prototype.sortListLexicographically = function(b) {
            a(b).children("li").sort(function(b, c) {
                var d = a(b).text().toUpperCase(),
                    e = a(c).text().toUpperCase();
                return d < e ? -1 : d > e ? 1 : 0
            }).appendTo(b)
        }, b.prototype.trimWithEllipsis = function(a, b) {
            return a = a.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), b && a.length <= b ? a : a.substring(0, b) + "..."
        }, b.prototype.formatTime = function(a) {
            var b = a ? new Date(a) : new Date,
                c = b.getHours() || 12,
                d = "" + b.getMinutes(),
                e = b.getHours() >= 12 ? "pm" : "am";
            return c = c > 12 ? c - 12 : c, d = d.length < 2 ? "0" + d : d, "" + c + ":" + d + e
        }, b.prototype.promptCreateRoom = function() {
            var a = this,
                b = FirechatDefaultTemplates["templates/prompt-create-room.html"],
                c = this.prompt("Create Public Room", b({
                    maxLengthRoomName: this.maxLengthRoomName,
                    isModerator: a._chat.userIsModerator()
                }));
            c.find("a.close").first().click(function() {
                return c.remove(), !1
            }), c.find("[data-toggle=submit]").first().click(function() {
                var b = c.find("[data-input=firechat-room-name]").first().val();
                return "" !== b && (a._chat.createRoom(b, "public"), c.remove()), !1
            }), c.find("[data-input=firechat-room-name]").first().focus(), c.find("[data-input=firechat-room-name]").first().bind("keydown", function(b) {
                if (13 === b.which) {
                    var d = c.find("[data-input=firechat-room-name]").first().val();
                    if ("" !== d) return a._chat.createRoom(d, "public"), c.remove(), !1
                }
            })
        }, b.prototype.prompt = function(b, c) {
            var d, e = FirechatDefaultTemplates["templates/prompt.html"];
            return d = a(e({
                title: b,
                content: c
            })).css({
                top: this.$wrapper.position().top + .333 * this.$wrapper.height(),
                left: this.$wrapper.position().left + .125 * this.$wrapper.width(),
                width: .75 * this.$wrapper.width()
            }), this.$wrapper.append(d.removeClass("hidden")), d
        }, b.prototype.linkify = function(a) {
            var b = this;
            return a.replace(b.urlPattern, '<a target="_blank" href="$&">$&</a>').replace(b.pseudoUrlPattern, '$1<a target="_blank" href="http://$2">$2</a>')
        }
    }(jQuery);
