(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[84143],{801550:(t,e,n)=>{"use strict";n.d(e,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>c,uv:()=>a,Qy:()=>s,IL:()=>u,Li:()=>l,OW:()=>p,ZO:()=>f,Um:()=>m,TF:()=>d,Ls:()=>y,Ec:()=>b,Eu:()=>h,JJ:()=>v,nZ:()=>O,YD:()=>E,GI:()=>g,Jb:()=>_,Uh:()=>S,e$:()=>N,eh:()=>T,$j:()=>P,bJ:()=>A,Mk:()=>w,xy:()=>M,o6:()=>C,FP:()=>j,Mo:()=>Z,sO:()=>I,Px:()=>R,hd:()=>x,Ju:()=>L,BV:()=>k,SO:()=>U,H0:()=>G,$X:()=>H,ou:()=>z,NE:()=>V,Lq:()=>B,aN:()=>D});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",a="PAN_TO",s="ZOOM_TO_EXTENT",u="ZOOM_TO_POINT",l="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",m="CHANGE_ROTATION",d="CREATION_ERROR_LAYER",y="UPDATE_VERSION",b="INIT_MAP",h="RESIZE_MAP",v="CHANGE_MAP_LIMITS",O="SET_MAP_RESOLUTIONS",E="REGISTER_EVENT_LISTENER",g="UNREGISTER_EVENT_LISTENER",_="MOUSE_MOVE",S="MOUSE_OUT",N="MAP:MAP_PLUGIN_LOAD",T="MAP:ORIENTATION",P="MAP:UPDATE_MAP_VIEW",A="MAP:UPDATE_MAP_OPTIONS";function w(t,e,n,r){return{type:N,mapType:e,loading:t,loaded:n,error:r}}function M(t,e,n){return{type:u,pos:t,zoom:e,crs:n}}function C(t,e,n,o,i,c,a,s){return{type:r,center:t,zoom:e,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:a,resolution:s}}function j(t,e){return{type:o,point:t,layer:e}}function Z(t){return{type:i,pointer:t}}function I(t,e){return{type:c,zoom:t,mapStateSource:e}}function R(t,e,n,r){return{type:s,extent:t,crs:e,maxZoom:n,options:r}}function x(t,e){return{type:f,style:t,mapStateSource:e}}function L(){return{type:h}}function k(t){var e=t.restrictedExtent,n=t.crs,r=t.minZoom;return{type:v,restrictedExtent:e,crs:n,minZoom:r}}function U(t){return{type:O,resolutions:t}}var G=function(t,e){return{type:E,eventName:t,toolName:e}},H=function(t,e){return{type:g,eventName:t,toolName:e}},z=function(t){return{type:_,position:t}},V=function(){return{type:S}},B=function(t){return{type:T,orientation:t}},D=function(t){return{type:A,configUpdate:t}}},509192:(t,e,n)=>{"use strict";n.d(e,{Z:()=>v});var r=n(675263),o=n.n(r),i=n(124852),c=n.n(i),a=n(38560),s=n(480681),u=n(950966);function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,b(r.key),r)}}function f(t,e){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},f(t,e)}function m(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},d(t)}function y(t,e,n){return(e=b(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&f(t,e)}(b,t);var e,n,r,o,i=(r=b,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=d(r);if(o){var n=d(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===l(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return m(t)}(this,t)});function b(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return y(m(t=i.call.apply(i,[this].concat(n))),"addTooltip",(function(e){if(!t.props.tooltip)return e;var n=c().createElement(s.Tooltip,{id:"locate-tooltip"},t.props.tooltip);return c().createElement(u.Z,{placement:t.props.tooltipPlace,key:"overlay-trigger."+t.props.id,overlay:n},e)})),t}return e=b,(n=[{key:"render",value:function(){var t=this;return this.addTooltip(c().createElement(a.Z,{id:this.props.id,style:this.props.style,onClick:function(){return t.props.onZoom(t.props.currentZoom+t.props.step)},className:this.props.className,disabled:this.props.currentZoom+this.props.step>this.props.maxZoom||this.props.currentZoom+this.props.step<this.props.minZoom,bsStyle:this.props.bsStyle},this.props.glyphicon?c().createElement(s.Glyphicon,{glyph:this.props.glyphicon}):null,this.props.glyphicon&&this.props.text?" ":null,this.props.text,this.props.help))}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),b}(c().Component);y(h,"propTypes",{id:o().string,style:o().object,glyphicon:o().string,text:o().string,btnSize:o().oneOf(["large","small","xsmall"]),className:o().string,help:o().oneOfType([o().string,o().element]),step:o().number,currentZoom:o().number,minZoom:o().number,maxZoom:o().number,onZoom:o().func,tooltip:o().element,tooltipPlace:o().string,bsStyle:o().string}),y(h,"defaultProps",{id:"mapstore-zoom",className:"square-button",glyphicon:"plus",btnSize:"xsmall",tooltipPlace:"left",step:1,currentZoom:3,minZoom:0,maxZoom:28,onZoom:function(){},bsStyle:"default",style:{}});const v=h},38560:(t,e,n)=>{"use strict";n.d(e,{Z:()=>l});var r=n(480681),o=n(124852),i=n.n(o),c=n(294184),a=n.n(c),s=["disabled","className","onClick"];function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}const l=(p=r.Button,i().forwardRef((function(t,e){var n=t.disabled,r=t.className,o=t.onClick,c=void 0===o?function(){}:o,l=function(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}(t,s);return i().createElement(p,u({ref:e,className:n?a()("disabled",r):r,onClick:function(){n||c.apply(void 0,arguments)}},l),l.children)})));var p},370757:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".msgapi #zoomin-btn, .msgapi #zoomout-btn {\r\n    z-index: 1;\r\n    position: relative;\r\n}\r\n",""]);const i=o},923645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<t.length;a++){var s=[].concat(t[a]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},775898:(t,e,n)=>{"use strict";var r=n(893379),o=n.n(r),i=n(370757);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals},893379:(t,e,n)=>{"use strict";var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function c(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],o=0;o<t.length;o++){var a=t[o],s=e.base?a[0]+e.base:a[0],u=n[s]||0,l="".concat(s," ").concat(u);n[s]=u+1;var p=c(l),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:y(f,e),references:1}),r.push(l)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var c=o(t.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function p(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function f(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var m=null,d=0;function y(t,e){var n,r,o;if(e.singleton){var i=d++;n=m||(m=s(e)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=s(e),r=f.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var s=a(t,e),u=0;u<n.length;u++){var l=c(n[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=s}}}}}]);