
# Zero cost adoption of ReScript

This is a repo showing when adopting ReScript in your projects, it adds close to zero cost to your bundler size unlike many other languages compiled to JS platform.

We have serveral modules:  `listLength`, `listForEachU`, `listForEach`, `App`, `AppOptimized`.

For each module, `module.bs.js` is the generated code (separate compilation), 

`module.bundle.js` is the bundled output using a bundler -- it is a self contained script that runs with all dependencies bundled in.


The `listLength`, and `listForEachU` two modules show that the bundled code is tiny.

`listForEach` is slightly larger since it needs curried runtime support, but its output is still tiny.

`App.res` is a full example using Rescript with React. You can see the bundled output `App.bundle.js` by grepping `bs-platform`, only lines from 5536-5594 -- less than 60 lines of code are from the ReScript runtime.

Even for such 60 lines of code, it can be optmized away using uncurried calling convention in `AppOptimized`. In the `AppOptimized.bundle.js`, the ReScript app using React is completely ReScript runtime free.

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

