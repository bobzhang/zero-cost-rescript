(() => {
  // node_modules/bs-platform/lib/es6/list.mjs
  function length(l) {
    for (var _len = 0, _param = l; ; ) {
      var param = _param, len = _len;
      if (!param)
        return len;
      _param = param.tl, _len = len + 1 | 0;
    }
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
