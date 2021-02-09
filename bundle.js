//@ts-check
var fs = require("fs");
var cp = require('child_process')
const { readdirSync } = fs;

var path = require("path");

var src = path.join(__dirname, "src");

let files =  readdirSync(src);

for (let file of files){
    if(file.endsWith(`.mjs`)){
        var p = path.join(src,file)
        var o = path.join(src,file.slice(0,file.length - `.mjs`.length) + `.bundle.js`);
        console.log(`${p} => ${o}`)
        var out = cp.spawnSync(`./node_modules/.bin/esbuild ${p} --bundle --define:process.env.NODE_ENV=\"\\"production\\"\" --minify-syntax --outfile=${o}`,{shell:true, encoding: 'utf-8'})
        console.log(out.stderr)
        if(out.status!==0){
            console.log(out.stderr)
        }
    }
    
}

