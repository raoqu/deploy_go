import{d as r}from"./@babel_runtime@7.22.15.d775819b.js";function t(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var n="function"==typeof Symbol&&Symbol.observable||"@@observable",o=function(){return Math.random().toString(36).substring(7).split("").join(".")},e={INIT:"@@redux/INIT"+o(),REPLACE:"@@redux/REPLACE"+o(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+o()}};function i(r,o,f){var u;if("function"==typeof o&&"function"==typeof f||"function"==typeof f&&"function"==typeof arguments[3])throw new Error(t(0));if("function"==typeof o&&void 0===f&&(f=o,o=void 0),void 0!==f){if("function"!=typeof f)throw new Error(t(1));return f(i)(r,o)}if("function"!=typeof r)throw new Error(t(2));var c=r,a=o,p=[],h=p,s=!1;function y(){h===p&&(h=p.slice())}function l(){if(s)throw new Error(t(3));return a}function v(r){if("function"!=typeof r)throw new Error(t(4));if(s)throw new Error(t(5));var n=!0;return y(),h.push(r),function(){if(n){if(s)throw new Error(t(6));n=!1,y();var o=h.indexOf(r);h.splice(o,1),p=null}}}function w(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(r))throw new Error(t(7));if(void 0===r.type)throw new Error(t(8));if(s)throw new Error(t(9));try{s=!0,a=c(a,r)}finally{s=!1}for(var n=p=h,o=0;o<n.length;o++){(0,n[o])()}return r}return w({type:e.INIT}),(u={dispatch:w,subscribe:v,getState:l,replaceReducer:function(r){if("function"!=typeof r)throw new Error(t(10));c=r,w({type:e.REPLACE})}})[n]=function(){var r,o=v;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(t(11));function n(){r.next&&r.next(l())}return n(),{unsubscribe:o(n)}}})[n]=function(){return this},r},u}function f(r){for(var n=Object.keys(r),o={},i=0;i<n.length;i++){var f=n[i];"function"==typeof r[f]&&(o[f]=r[f])}var u,c=Object.keys(o);try{!function(r){Object.keys(r).forEach((function(n){var o=r[n];if(void 0===o(void 0,{type:e.INIT}))throw new Error(t(12));if(void 0===o(void 0,{type:e.PROBE_UNKNOWN_ACTION()}))throw new Error(t(13))}))}(o)}catch(a){u=a}return function(r,n){if(void 0===r&&(r={}),u)throw u;for(var e=!1,i={},f=0;f<c.length;f++){var a=c[f],p=o[a],h=r[a],s=p(h,n);if(void 0===s)throw n&&n.type,new Error(t(14));i[a]=s,e=e||s!==h}return(e=e||c.length!==Object.keys(r).length)?i:r}}function u(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function c(){for(var n=arguments.length,o=new Array(n),e=0;e<n;e++)o[e]=arguments[e];return function(n){return function(){var e=n.apply(void 0,arguments),i=function(){throw new Error(t(15))},f={getState:e.getState,dispatch:function(){return i.apply(void 0,arguments)}},c=o.map((function(r){return r(f)}));return i=u.apply(void 0,c)(e.dispatch),r(r({},e),{},{dispatch:i})}}}export{c as a,i as b,f as c,u as d};