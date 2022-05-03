/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var i=Object.create,r=Object.defineProperty;var n=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,p=Object.prototype.hasOwnProperty;var u=t=>r(t,"__esModule",{value:!0});var f=t=>{if(typeof require!="undefined")return require(t);throw new Error('Dynamic require of "'+t+'" is not supported')};var P=(t,s)=>{for(var e in s)r(t,e,{get:s[e],enumerable:!0})},g=(t,s,e)=>{if(s&&typeof s=="object"||typeof s=="function")for(let o of l(s))!p.call(t,o)&&o!=="default"&&r(t,o,{get:()=>s[o],enumerable:!(e=n(s,o))||e.enumerable});return t},k=t=>g(u(r(t!=null?i(d(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var x={};P(x,{default:()=>w});var c=k(f("@yarnpkg/core")),a="postinstallDev",h={hooks:{async afterAllInstalled(t){let s=t.topLevelWorkspace.anchoredLocator;if(await c.scriptUtils.hasPackageScript(s,a,{project:t})){let e=await c.scriptUtils.executePackageScript(s,a,[],{project:t,stdin:process.stdin,stdout:process.stdout,stderr:process.stderr});if(e!==0){let o=new Error(`Postinstall script failed with exit code ${e}`);throw o.stack=void 0,o}}}}},w=h;return x;})();
return plugin;
}
};
