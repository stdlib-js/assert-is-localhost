"use strict";var o=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw (t=0, e)}};};var s=o(function(f,i){
var n=require('@stdlib/assert-is-string/dist').isPrimitive,c=/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;function L(r){return n(r)?r==="localhost"||r==="LOCALHOST"||r==="[::1]"||c.test(r):!1}i.exports=L
});var O=s();module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
