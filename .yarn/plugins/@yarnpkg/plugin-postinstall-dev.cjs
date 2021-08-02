/* eslint-disable */
module.exports = {
name: "@yarnpkg/plugin-postinstall-dev",
factory: function (require) {
var plugin;(()=>{"use strict";var e={d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},r={};e.r(r),e.d(r,{default:()=>o});const t=require("child_process"),o={hooks:{async afterAllInstalled(){new Promise(e=>{const r=(0,t.spawn)("yarn",["run","postinstallDev"]);r.stdout.pipe(process.stdout),r.stderr.pipe(process.stderr),r.addListener("exit",()=>e())})}}};plugin=r})();
return plugin;
}
};