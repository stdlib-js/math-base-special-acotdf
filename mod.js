// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Math.fround?Math.fround:null;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,a="function"==typeof e?e.toStringTag:"";var u=r&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,u,f,l;if(null==t)return n.call(t);e=t[a],l=a,r=null!=(f=t)&&o.call(f,l);try{t[a]=void 0}catch(r){return n.call(t)}return u=n.call(t),r?t[a]=e:delete t[a],u}:function(t){return n.call(t)},f="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,c="function"==typeof Float32Array?Float32Array:null;var i="function"==typeof Float32Array?Float32Array:void 0;var y=new(function(){var t,r,n;if("function"!=typeof c)return!1;try{r=new c([1,3.14,-3.14,5e40]),n=r,t=(f&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===l}catch(r){t=!1}return t}()?i:function(){throw new Error("not implemented")})(1);var p="function"==typeof t?t:function(t){return y[0]=t,y[0]},v=p(57.29577951308232);var b=p(1.5707963267948966),m=p(.7853981633974483);function S(t){var r,n,o;return function(t){return t!=t}(t)||0===t?t:((t=p(t))<0?(r=-1,t=-t):r=1,t>2.414213562373095?(n=b,t=-p(1/t)):t>.414213562373095?(n=m,t=p(p(t-1)/p(t+1))):n=0,o=p(t*t),n=p(n+p(p(function(t){return 0===t?-.3333294987678528:p(-.3333294987678528+p(t*p(.19977711141109467+p(t*p(-.13877685368061066+p(.08053744584321976*t))))))}(o))*p(o*t)+t)),r<0&&(n=-n),n)}function d(t){return function(t){return p(p(t)*v)}(function(t){return S(p(1/p(t)))}(p(t)))}export{d as default};
//# sourceMappingURL=mod.js.map