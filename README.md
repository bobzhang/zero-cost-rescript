
# Zero bundle cost for [ReScript](https://github.com/rescript-lang/rescript-compiler)

This is a repo showing that when adopting ReScript in your projects, it adds close to zero cost to your bundler size unlike many other languages compiled to JS platform.

We have serveral modules:  `listLength`, `listForEachU`, `listForEach`, `App`, `AppOptimized`.

For each `module`, `module.mjs` is the generated js code using Ecmascript module format, 

`module.bundle.js` is the bundled output using a bundler -- it is a self contained script that runs with all dependencies bundled in.


For [listLength](./src/listLength.bundle.js), and [listForEachU](./src/listForEachU.bundle.js)  the bundled code is tiny (a couple of hundered bytes including comments).

[listForEach](./src/listForEach.bundle.js) is slightly larger since it needs curried runtime support, but its output is still tiny.

[App.res](./src/App.res) is a working example using Rescript with React. You can see the bundled output: [App.bundle.js](./src/App.bundle.js) by grepping `bs-platform`, only lines from 5536-5594 -- less than 60 lines of code -- are needed for ReScript runtime.

Even for such 60 lines of code, it can be optmized away using uncurried calling convention in [AppOptimized.res](./src/AppOptimized.res). In the [AppOptimized.bundle.js](./src/AppOptimized.bundle.js), the ReScript app using React is completely ReScript runtime free.

Note the bundler is configured to not rename variables so that we can have a clear look at the impact of using ReScript.

# Build
```
npm run build
```
# Bundle

The bundle demo uses the open source bundler esbuild
```
node ./bundle.js
```

