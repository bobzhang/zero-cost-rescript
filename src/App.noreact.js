(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/bs-platform/lib/es6/caml_array.mjs
  function caml_array_sub(x, offset, len) {
    var result = new Array(len);
    var j = 0;
    var i = offset;
    while (j < len) {
      result[j] = x[i];
      j = j + 1 | 0;
      i = i + 1 | 0;
    }
    ;
    return result;
  }

  // node_modules/bs-platform/lib/es6/curry.mjs
  function app(_f, _args) {
    while (true) {
      var args = _args;
      var f = _f;
      var init_arity = f.length;
      var arity = init_arity === 0 ? 1 : init_arity;
      var len = args.length;
      var d = arity - len | 0;
      if (d === 0) {
        return f.apply(null, args);
      }
      if (d >= 0) {
        return function(f2, args2) {
          return function(x) {
            return app(f2, args2.concat([x]));
          };
        }(f, args);
      }
      _args = caml_array_sub(args, arity, -d | 0);
      _f = f.apply(null, caml_array_sub(args, 0, arity));
      continue;
    }
    ;
  }
  function _1(o, a0) {
    var arity = o.length;
    if (arity === 1) {
      return o(a0);
    } else {
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
  }

  // src/App.mjs
  var React2 = globalThis.React;

  // node_modules/reason-react/src/legacy/ReactDOMRe.bs.js
  var React = globalThis.React;
  var ReactDom = globalThis.ReactDOM;
  function renderToElementWithId(reactElement, id) {
    var element = document.getElementById(id);
    if (element == null) {
      console.error("ReactDOMRe.renderToElementWithId : no element of id " + (id + " found in the HTML."));
    } else {
      ReactDom.render(reactElement, element);
    }
  }

  // src/App.mjs
  function reducer(state, action) {
    if (action) {
      return {
        count: state.count - 1 | 0
      };
    } else {
      return {
        count: state.count + 1 | 0
      };
    }
  }
  function App$App(Props) {
    var match = React2.useReducer(reducer, {
      count: 0
    });
    var dispatch = match[1];
    return React2.createElement("main", void 0, "Simple counter with reducer", React2.createElement("div", void 0, React2.createElement("button", {
      onClick: function(param) {
        return _1(dispatch, 1);
      }
    }, "Decrement"), React2.createElement("span", {
      className: "counter"
    }, String(match[0].count)), React2.createElement("button", {
      onClick: function(param) {
        return _1(dispatch, 0);
      }
    }, "Increment")));
  }
  renderToElementWithId(React2.createElement(App$App, {}), "root");
})();
