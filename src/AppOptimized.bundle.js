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

  // src/AppOptimized.mjs
  var React = __toModule(require_react()), ReactDom = __toModule(require_react_dom());
  function reducer(state, action) {
    return action ? {
      count: state.count - 1 | 0
    } : {
      count: state.count + 1 | 0
    };
  }
  function AppOptimized$App(Props) {
    var match = React.useReducer(reducer, {
      count: 0
    }), dispatch = match[1];
    return React.createElement("main", void 0, "Simple counter with reducer", React.createElement("div", void 0, React.createElement("button", {
      onClick: function(param) {
        return dispatch(1);
      }
    }, "Decrement"), React.createElement("span", {
      className: "counter"
    }, String(match[0].count)), React.createElement("button", {
      onClick: function(param) {
        return dispatch(0);
      }
    }, "Increment")));
  }
  var e = document.querySelector("#root");
  e != null && ReactDom.render(React.createElement(AppOptimized$App, {}), e);
})();
