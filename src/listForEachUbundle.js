(() => {
  // node_modules/bs-platform/lib/es6/belt_List.mjs
  function forEachU(_xs, f) {
    while (true) {
      var xs = _xs;
      if (!xs) {
        return;
      }
      f(xs.hd);
      _xs = xs.tl;
      continue;
    }
    ;
  }

  // src/listForEachU.bs.js
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
