(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[94837,98143],{45992:(t,e,r)=>{"use strict";r.d(e,{h:()=>p,Z:()=>f});var n=r(535937),o=r.n(n),i=r(836882),u=r(463202);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var p=function(t,e){var r,n,a,s,p=i.Z;if("custom"===t)r=e;else if(a=(s=t.split("."))[0],n=s[1],!(r=p[a]))throw new Error("No such provider ("+a+")");var f={url:r.url,options:r.options||{}};if(n&&"variants"in r){if(!(n in r.variants))throw new Error("No such variant of "+(a||r.url)+" ("+n+")");var l,v=r.variants[n];l="string"==typeof v?{variant:v}:v.options,f={url:v.url||f.url,options:c(c({},f.options||{}),l)}}else"function"==typeof f.url&&(f.url=f.url(s.splice(1,s.length-1).join(".")));var b="file:"===window.location.protocol||f.options.forceHTTP;0===f.url.indexOf("//")&&b&&(f.url="http:"+f.url),f.options.retina&&(e.detectRetina&&u.ZP.getBrowserProperties().retina?e.detectRetina=!1:f.options.retina=""),f.options.attribution&&(f.options.attribution=function t(e){return-1===e.indexOf("{attribution.")?e:e.replace(/\{attribution.(\w*)\}/,(function(e,r){return t(p[r].options.attribution)}))}(f.options.attribution));var O=c(c({},f.options),o()(e,(function(t){return void 0!==t})));return[f.url,O]};const f={getLayerConfig:p}},798143:function(t,e,r){var n,o;void 0===(o="function"==typeof(n=function(){function t(t,e){return function(r,n,o,i){r[t]?r[t](n,o,i):r[e]&&r[e]("on"+n,o)}}return{add:t("addEventListener","attachEvent"),remove:t("removeEventListener","detachEvent")}})?n.call(e,r,e,t):n)||(t.exports=o)}}]);