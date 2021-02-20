//@ts-check
var fs = require("fs");
var cp = require("child_process");
var esbuild = require("esbuild");
const { readdirSync } = fs;

var path = require("path");

var src = path.join(__dirname, "src");

var targets = readdirSync(src)
  .filter((x) => x.endsWith(".mjs"))
  .map((file) => path.join(src, file));

var plugin = {
  name: "react",
  setup(build) {
    build.onResolve({ filter: /^(react|react-dom)$/ }, (args) => {
      return {
        path: args.path,
        namespace: "globalExternal",
      };
    });
    build.onLoad({ filter: /^react/, namespace: "globalExternal" }, (args) => {
      var map = {
        react: `React`,
        "react-dom": `ReactDOM`,
      };

      return {
        contents: `module.exports = globalThis.${map[args.path]}`,
        loader: "js",
      };
    });
  },
};
esbuild.build({
  entryPoints: targets,
  bundle: true,
  minifySyntax: true,
  sourcemap: false,
  define: {
    ["process.env.NODE_ENV"]: "'production'",
  },
  outdir: "src",
  outExtension: {
    ".js": ".bundle.js",
  },
  plugins: [plugin],
});
