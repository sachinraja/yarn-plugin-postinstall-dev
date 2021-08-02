/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var i=Object.create,t=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var e=Object.getPrototypeOf,m=Object.prototype.hasOwnProperty;var p=n=>t(n,"__esModule",{value:!0});var c=n=>{if(typeof require!="undefined")return require(n);throw new Error('Dynamic require of "'+n+'" is not supported')};var d=(n,l)=>{for(var r in l)t(n,r,{get:l[r],enumerable:!0})},g=(n,l,r)=>{if(l&&typeof l=="object"||typeof l=="function")for(let o of u(l))!m.call(n,o)&&o!=="default"&&t(n,o,{get:()=>l[o],enumerable:!(r=s(l,o))||r.enumerable});return n},f=n=>g(p(t(n!=null?i(e(n)):{},"default",n&&n.__esModule&&"default"in n?{get:()=>n.default,enumerable:!0}:{value:n,enumerable:!0})),n);var C={};d(C,{default:()=>k});var a=f(c("@yarnpkg/plugin-essentials/lib/commands/run")),y={hooks:{afterAllInstalled:async()=>{await new a.default().cli.run(["run","postinstallDev"])}}},k=y;return C;})();
return plugin;
}
};
