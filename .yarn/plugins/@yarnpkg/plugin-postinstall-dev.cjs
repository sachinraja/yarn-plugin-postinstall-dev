/* eslint-disable */
//prettier-ignore
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin=(()=>{var s=Object.create,l=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var a=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,i=Object.prototype.hasOwnProperty;var m=e=>l(e,"__esModule",{value:!0});var f=e=>{if(typeof require!="undefined")return require(e);throw new Error('Dynamic require of "'+e+'" is not supported')};var g=(e,t)=>{for(var o in t)l(e,o,{get:t[o],enumerable:!0})},u=(e,t,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of a(t))!i.call(e,r)&&r!=="default"&&l(e,r,{get:()=>t[r],enumerable:!(o=c(t,r))||o.enumerable});return e},d=e=>u(m(l(e!=null?s(p(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var P={};g(P,{default:()=>y});var n=d(f("@yarnpkg/shell")),k={hooks:{async afterAllInstalled(e){let t=e.topLevelWorkspace.manifest.scripts.get("postinstallDev");!t||(0,n.execute)(t,[],{cwd:e.cwd})}}},y=k;return P;})();
return plugin;
}
};
