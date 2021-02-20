(() => {
  var __create = Object.create, __defProp = Object.defineProperty, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: !0});
  var __commonJS = (callback, module) => () => (module || (module = {exports: {}}, callback(module.exports, module)), module.exports);
  var __exportStar = (target, module, desc) => {
    if (__markAsModule(target), module && typeof module == "object" || typeof module == "function")
      for (let key of __getOwnPropNames(module))
        !__hasOwnProp.call(target, key) && key !== "default" && __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    return target;
  }, __toModule = (module) => module && module.__esModule ? module : __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: !0}), module);

  // globalExternal:react
  var require_react = __commonJS((exports, module) => {
    module.exports = globalThis.React;
  });

  // globalExternal:react-dom
  var require_react_dom = __commonJS((exports, module) => {
    module.exports = globalThis.ReactDOM;
  });

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

  // src/App.mjs
  var React = __toModule(require_react()), ReactDom = __toModule(require_react_dom());
  function reducer(state, action) {
    return action ? {
      count: state.count - 1 | 0
    } : {
      count: state.count + 1 | 0
    };
  }
  function App$App(Props) {
    var match = React.useReducer(reducer, {
      count: 0
    }), dispatch = match[1];
    return React.createElement("main", void 0, "Simple counter with reducer", React.createElement("div", void 0, React.createElement("button", {
      onClick: function(param) {
        return _1(dispatch, 1);
      }
    }, "Decrement"), React.createElement("span", {
      className: "counter"
    }, String(match[0].count)), React.createElement("button", {
      onClick: function(param) {
        return _1(dispatch, 0);
      }
    }, "Increment")));
  }
  var e = document.querySelector("#root");
  e != null && ReactDom.render(React.createElement(App$App, {}), e);
})();
