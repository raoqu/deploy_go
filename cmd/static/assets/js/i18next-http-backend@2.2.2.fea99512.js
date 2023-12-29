import{n as t,l as e}from"./@babel_runtime@7.22.15.d775819b.js";import{c as n}from"./crypto-js@4.1.1.9d3f7c7e.js";import{r as o}from"./cross-fetch@3.1.6.cbd01204.js";function i(t,e){for(var n=0;n<e.length;n++){const o=e[n];if("string"!=typeof o&&!Array.isArray(o))for(const e in o)if("default"!==e&&!(e in t)){const n=Object.getOwnPropertyDescriptor(o,e);n&&Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:()=>o[e]})}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var a=[],s=a.forEach,f=a.slice;function u(t){return s.call(f.call(arguments,1),(function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])})),t}function c(){return"function"==typeof XMLHttpRequest||"object"===("undefined"==typeof XMLHttpRequest?"undefined":r(XMLHttpRequest))}var l={exports:{}};!function(e,i){var r;if("function"==typeof fetch&&(r=void 0!==t&&t.fetch?t.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),void 0!==n&&("undefined"==typeof window||void 0===window.document)){var a=r||o();a.default&&(a=a.default),i.default=a,e.exports=i.default}}(l,l.exports);var d=l.exports;const p=e(d),y=i({__proto__:null,default:p},[d]);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var v,m,b;"function"==typeof fetch&&(v="undefined"!=typeof global&&global.fetch?global.fetch:"undefined"!=typeof window&&window.fetch?window.fetch:fetch),c()&&("undefined"!=typeof global&&global.XMLHttpRequest?m=global.XMLHttpRequest:"undefined"!=typeof window&&window.XMLHttpRequest&&(m=window.XMLHttpRequest)),"function"==typeof ActiveXObject&&("undefined"!=typeof global&&global.ActiveXObject?b=global.ActiveXObject:"undefined"!=typeof window&&window.ActiveXObject&&(b=window.ActiveXObject)),v||!y||m||b||(v=p||y),"function"!=typeof v&&(v=void 0);var g=function(t,e){if(e&&"object"===h(e)){var n="";for(var o in e)n+="&"+encodeURIComponent(o)+"="+encodeURIComponent(e[o]);if(!n)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+n.slice(1)}return t},w=function(t,e,n){var o=function(t){if(!t.ok)return n(t.statusText||"Error",{status:t.status});t.text().then((function(e){n(null,{status:t.status,data:e})})).catch(n)};"function"==typeof fetch?fetch(t,e).then(o).catch(n):v(t,e).then(o).catch(n)},O=!1,S=function(t,e,n,o){return"function"==typeof n&&(o=n,n=void 0),o=o||function(){},v&&0!==e.indexOf("file:")?function(t,e,n,o){t.queryStringParams&&(e=g(e,t.queryStringParams));var i=u({},"function"==typeof t.customHeaders?t.customHeaders():t.customHeaders);n&&(i["Content-Type"]="application/json");var r="function"==typeof t.requestOptions?t.requestOptions(n):t.requestOptions,a=u({method:n?"POST":"GET",body:n?t.stringify(n):void 0,headers:i},O?{}:r);try{w(e,a,o)}catch(s){if(!r||0===Object.keys(r).length||!s.message||s.message.indexOf("not implemented")<0)return o(s);try{Object.keys(r).forEach((function(t){delete a[t]})),w(e,a,o),O=!0}catch(f){o(f)}}}(t,e,n,o):c()||"function"==typeof ActiveXObject?function(t,e,n,o){n&&"object"===h(n)&&(n=g("",n).slice(1)),t.queryStringParams&&(e=g(e,t.queryStringParams));try{var i;(i=m?new m:new b("MSXML2.XMLHTTP.3.0")).open(n?"POST":"GET",e,1),t.crossDomain||i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.withCredentials=!!t.withCredentials,n&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.overrideMimeType&&i.overrideMimeType("application/json");var r=t.customHeaders;if(r="function"==typeof r?r():r)for(var a in r)i.setRequestHeader(a,r[a]);i.onreadystatechange=function(){i.readyState>3&&o(i.status>=400?i.statusText:null,{status:i.status,data:i.responseText})},i.send(n)}catch(s){console}}(t,e,n,o):void o(new Error("No fetch and no xhr implementation found!"))};function j(t){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,q(o.key),o)}}function q(t){var e=function(t,e){if("object"!==j(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===j(e)?e:String(e)}var H=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,e,n){return function(t,e,n){return(e=q(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e,n||"")},parseLoadPayload:function(t,e){},request:S,reloadInterval:"undefined"==typeof window&&36e5,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},T=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.services=e,this.options=n,this.allOptions=o,this.type="backend",this.init(e,n,o)}var e,n,o;return e=t,n=[{key:"init",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=t,this.options=u(n,this.options||{},H()),this.allOptions=o,this.services&&this.options.reloadInterval&&setInterval((function(){return e.reload()}),this.options.reloadInterval)}},{key:"readMulti",value:function(t,e,n){this._readAny(t,t,e,e,n)}},{key:"read",value:function(t,e,n){this._readAny([t],t,[e],e,n)}},{key:"_readAny",value:function(t,e,n,o,i){var r,a=this,s=this.options.loadPath;"function"==typeof this.options.loadPath&&(s=this.options.loadPath(t,n)),(s=function(t){return!!t&&"function"==typeof t.then}(r=s)?r:Promise.resolve(r)).then((function(r){if(!r)return i(null,{});var s=a.services.interpolator.interpolate(r,{lng:t.join("+"),ns:n.join("+")});a.loadUrl(s,i,e,o)}))}},{key:"loadUrl",value:function(t,e,n,o){var i=this,r="string"==typeof n?[n]:n,a="string"==typeof o?[o]:o,s=this.options.parseLoadPayload(r,a);this.options.request(this.options,t,s,(function(r,a){if(a&&(a.status>=500&&a.status<600||!a.status))return e("failed loading "+t+"; status code: "+a.status,!0);if(a&&a.status>=400&&a.status<500)return e("failed loading "+t+"; status code: "+a.status,!1);if(!a&&r&&r.message&&r.message.indexOf("Failed to fetch")>-1)return e("failed loading "+t+": "+r.message,!0);if(r)return e(r,!1);var s,f;try{s="string"==typeof a.data?i.options.parse(a.data,n,o):a.data}catch(u){f="failed parsing "+t+" to json"}if(f)return e(f,!1);e(null,s)}))}},{key:"create",value:function(t,e,n,o,i){var r=this;if(this.options.addPath){"string"==typeof t&&(t=[t]);var a=this.options.parsePayload(e,n,o),s=0,f=[],u=[];t.forEach((function(n){var o=r.options.addPath;"function"==typeof r.options.addPath&&(o=r.options.addPath(n,e));var c=r.services.interpolator.interpolate(o,{lng:n,ns:e});r.options.request(r.options,c,a,(function(e,n){s+=1,f.push(e),u.push(n),s===t.length&&"function"==typeof i&&i(f,u)}))}))}}},{key:"reload",value:function(){var t=this,e=this.services,n=e.backendConnector,o=e.languageUtils,i=e.logger,r=n.language;if(!r||"cimode"!==r.toLowerCase()){var a=[],s=function(t){o.toResolveHierarchy(t).forEach((function(t){a.indexOf(t)<0&&a.push(t)}))};s(r),this.allOptions.preload&&this.allOptions.preload.forEach((function(t){return s(t)})),a.forEach((function(e){t.allOptions.ns.forEach((function(t){n.read(e,t,"read",null,null,(function(o,r){o&&i.warn("loading namespace ".concat(t," for language ").concat(e," failed"),o),!o&&r&&i.log("loaded namespace ".concat(t," for language ").concat(e),r),n.loaded("".concat(e,"|").concat(t),o,r)}))}))}))}}}],n&&P(e.prototype,n),o&&P(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();T.type="backend";export{T as B};
