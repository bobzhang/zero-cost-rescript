(() => {
  // node_modules/bs-platform/lib/es6/list.mjs
  function length(l) {
    var _len = 0;
    var _param = l;
    while (true) {
      var param = _param;
      var len = _len;
      if (!param) {
        return len;
      }
      _param = param.tl;
      _len = len + 1 | 0;
      continue;
    }
    ;
  }

  // src/listLength.bs.js
  var u = length({
    hd: 1,
    tl: {
      hd: 2,
      tl: {
        hd: 3,
        tl: 0
      }
    }
  });
  console.log(u);
})();
