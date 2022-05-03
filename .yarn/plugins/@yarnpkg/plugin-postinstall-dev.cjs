/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var i=Object.create,o=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var u=t=>o(t,"__esModule",{value:!0});var g=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var P=(t,s)=>{for(var r in s)o(t,r,{get:s[r],enumerable:!0})},k=(t,s,r)=>{if(s&&typeof s=="object"||typeof s=="function")for(let e of l(s))!d.call(t,e)&&e!=="default"&&o(t,e,{get:()=>s[e],enumerable:!(r=n(s,e))||r.enumerable});return t},f=t=>k(u(o(t!=null?i(p(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var v={};P(v,{default:()=>m});var c=f(g("@yarnpkg/core")),a="postinstallDev",h={hooks:{async afterAllInstalled(t){let s=t.topLevelWorkspace.anchoredLocator;if(c.scriptUtils.hasPackageScript(s,a,{project:t}))return await c.scriptUtils.executePackageScript(s,a,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr})}}},m=h;return v;})();
return plugin;
}
};
