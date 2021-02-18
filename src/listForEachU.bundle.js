(() => {
  // node_modules/bs-platform/lib/es6/belt_List.js
  function forEachU(_xs, f) {
    for (; ; ) {
      var xs = _xs;
      if (!xs)
        return;
      f(xs.hd), _xs = xs.tl;
    }
  }

  // src/listForEachU.mjs
  forEachU({
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
