(() => {
  // node_modules/bs-platform/lib/es6/caml_array.js
  function caml_array_sub(x, offset, len) {
    for (var result = new Array(len), j = 0, i = offset; j < len; )
      result[j] = x[i], j = j + 1 | 0, i = i + 1 | 0;
    return result;
  }

  // node_modules/bs-platform/lib/es6/curry.js
  function app(_f, _args) {
    for (; ; ) {
      var args = _args, f = _f, init_arity = f.length, arity = init_arity === 0 ? 1 : init_arity, len = args.length, d = arity - len | 0;
      if (d === 0)
        return f.apply(null, args);
      if (d >= 0)
        return function(f2, args2) {
          return function(x) {
            return app(f2, args2.concat([x]));
          };
        }(f, args);
      _args = caml_array_sub(args, arity, -d | 0), _f = f.apply(null, caml_array_sub(args, 0, arity));
    }
  }
  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1)
      return o(a0);
    switch (arity) {
      case 1:
        return o(a0);
      case 2:
        return function(param) {
          return o(a0, param);
        };
      case 3:
        return function(param, param$1) {
          return o(a0, param, param$1);
        };
      case 4:
        return function(param, param$1, param$2) {
          return o(a0, param, param$1, param$2);
        };
      case 5:
        return function(param, param$1, param$2, param$3) {
          return o(a0, param, param$1, param$2, param$3);
        };
      case 6:
        return function(param, param$1, param$2, param$3, param$4) {
          return o(a0, param, param$1, param$2, param$3, param$4);
        };
      case 7:
        return function(param, param$1, param$2, param$3, param$4, param$5) {
          return o(a0, param, param$1, param$2, param$3, param$4, param$5);
        };
      default:
        return app(o, [a0]);
    }
  }
  function __1(o) {
    var arity = o.length;
    return arity === 1 ? o : function(a0) {
      return _1(o, a0);
    };
  }

  // node_modules/bs-platform/lib/es6/belt_List.js
  function forEachU(_xs, f) {
    for (; ; ) {
      var xs = _xs;
      if (!xs)
        return;
      f(xs.hd), _xs = xs.tl;
    }
  }
  function forEach(xs, f) {
    return forEachU(xs, __1(f));
  }

  // src/listForEach.mjs
  forEach({
    hd: 1,
    tl: {
      hd: 2,
      tl: {
        hd: 3,
        tl: 0
      }
    }
  }, function(x) {
    console.log(x);
  });
})();
