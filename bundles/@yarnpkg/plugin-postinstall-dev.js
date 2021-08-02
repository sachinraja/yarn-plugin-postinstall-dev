/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var i=Object.create,t=Object.defineProperty;var m=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var a=Object.getPrototypeOf,e=Object.prototype.hasOwnProperty;var p=n=>t(n,"__esModule",{value:!0});var d=n=>{if(typeof require!="undefined")return require(n);throw new Error('Dynamic require of "'+n+'" is not supported')};var g=(n,l)=>{for(var r in l)t(n,r,{get:l[r],enumerable:!0})},c=(n,l,r)=>{if(l&&typeof l=="object"||typeof l=="function")for(let o of s(l))!e.call(n,o)&&o!=="default"&&t(n,o,{get:()=>l[o],enumerable:!(r=m(l,o))||r.enumerable});return n},f=n=>c(p(t(n!=null?i(a(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var y={};g(y,{default:()=>C});var u=f(d("@yarnpkg/plugin-essentials/lib/commands/run")),k={hooks:{afterAllInstalled:()=>{new u.default().cli.run(["run","postinstallDev"])}}},C=k;return y;})();
return plugin;
}
};
