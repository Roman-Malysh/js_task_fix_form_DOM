parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function r(r){return e(r)||c(r)||a(r)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(r){if(Array.isArray(r))return i(r)}function n(r){return l(r)||c(r)||a(r)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(r,t){if(r){if("string"==typeof r)return i(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(r,t):void 0}}function i(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function c(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}function l(r){if(Array.isArray(r))return r}var u=document.querySelectorAll("input"),f=n(u),s=f.slice(0),m=document.querySelectorAll(".field"),y=n(m),d=y.slice(0);function b(r){var t=r;return r!==r.toLowerCase()?t.split(/(?=[A-Z])/).join(" "):r}r(s).map(function(r,t){r.placeholder=b(r.name)}),r(d).map(function(r,t){r.insertAdjacentHTML("afterbegin",'<label for="inputs[index].id" class="field-label">\n    '.concat(b(s[t].name),"\n    </label>"))});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.aee89e47.js.map