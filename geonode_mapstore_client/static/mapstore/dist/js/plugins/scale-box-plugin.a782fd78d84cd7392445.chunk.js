(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[24593],{898939:(e,t,n)=>{"use strict";n.d(t,{d2:()=>r,yX:()=>o,Uo:()=>i,n2:()=>c,SA:()=>u});var r="CHANGE_HELP_STATE",o="CHANGE_HELP_TEXT",i="CHANGE_HELPWIN_VIZ";function c(e){return{type:o,helpText:e}}function u(e){return{type:i,helpwinViz:e}}},801550:(e,t,n)=>{"use strict";n.d(t,{pP:()=>r,TR:()=>o,N7:()=>i,mq:()=>c,uv:()=>u,Qy:()=>a,IL:()=>l,Li:()=>s,OW:()=>p,ZO:()=>f,Um:()=>y,TF:()=>b,Ls:()=>m,Ec:()=>d,Eu:()=>h,JJ:()=>v,nZ:()=>g,YD:()=>O,GI:()=>E,Jb:()=>w,Uh:()=>P,e$:()=>T,eh:()=>_,$j:()=>x,bJ:()=>S,Mk:()=>j,xy:()=>C,o6:()=>N,FP:()=>R,Mo:()=>A,sO:()=>M,Px:()=>I,hd:()=>Z,Ju:()=>L,BV:()=>H,SO:()=>k,H0:()=>V,$X:()=>B,ou:()=>G,NE:()=>U,Lq:()=>z,aN:()=>D});var r="CHANGE_MAP_VIEW",o="CLICK_ON_MAP",i="CHANGE_MOUSE_POINTER",c="CHANGE_ZOOM_LVL",u="PAN_TO",a="ZOOM_TO_EXTENT",l="ZOOM_TO_POINT",s="CHANGE_MAP_CRS",p="CHANGE_MAP_SCALES",f="CHANGE_MAP_STYLE",y="CHANGE_ROTATION",b="CREATION_ERROR_LAYER",m="UPDATE_VERSION",d="INIT_MAP",h="RESIZE_MAP",v="CHANGE_MAP_LIMITS",g="SET_MAP_RESOLUTIONS",O="REGISTER_EVENT_LISTENER",E="UNREGISTER_EVENT_LISTENER",w="MOUSE_MOVE",P="MOUSE_OUT",T="MAP:MAP_PLUGIN_LOAD",_="MAP:ORIENTATION",x="MAP:UPDATE_MAP_VIEW",S="MAP:UPDATE_MAP_OPTIONS";function j(e,t,n,r){return{type:T,mapType:t,loading:e,loaded:n,error:r}}function C(e,t,n){return{type:l,pos:e,zoom:t,crs:n}}function N(e,t,n,o,i,c,u,a){return{type:r,center:e,zoom:t,bbox:n,size:o,mapStateSource:i,projection:c,viewerOptions:u,resolution:a}}function R(e,t){return{type:o,point:e,layer:t}}function A(e){return{type:i,pointer:e}}function M(e,t){return{type:c,zoom:e,mapStateSource:t}}function I(e,t,n,r){return{type:a,extent:e,crs:t,maxZoom:n,options:r}}function Z(e,t){return{type:f,style:e,mapStateSource:t}}function L(){return{type:h}}function H(e){var t=e.restrictedExtent,n=e.crs,r=e.minZoom;return{type:v,restrictedExtent:t,crs:n,minZoom:r}}function k(e){return{type:g,resolutions:e}}var V=function(e,t){return{type:O,eventName:e,toolName:t}},B=function(e,t){return{type:E,eventName:e,toolName:t}},G=function(e){return{type:w,position:e}},U=function(){return{type:P}},z=function(e){return{type:_,orientation:e}},D=function(e){return{type:S,configUpdate:e}}},383606:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(747037),o=n.n(r),i=n(675263),c=n.n(i),u=n(124852),a=n.n(u),l=n(480681),s=n(86638);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=c.call.apply(c,[this].concat(n))),"onMouseOver",(function(){var t=o()(e.props.helpText)?e.props.helpText:(0,s.S$)(e.context.messages,e.props.helpText.props.msgId);e.props.changeHelpText(t),e.props.changeHelpwinVisibility(!0)})),e}return t=u,(n=[{key:"render",value:function(){return a().createElement(l.Badge,{id:this.props.id,onMouseOver:this.onMouseOver,className:(this.props.isVisible?"":"hidden ")+(this.props.className?this.props.className:"")},"?")}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);d(v,"propTypes",{id:c().string,helpText:c().oneOfType([c().string,c().element]),isVisible:c().bool,changeHelpText:c().func,changeHelpwinVisibility:c().func,className:c().string}),d(v,"contextTypes",{messages:c().object}),d(v,"defaultProps",{helpText:"",isVisible:!1});const g=v},875964:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(618446),o=n.n(r),i=n(675263),c=n.n(i),u=n(124852),a=n.n(u),l=n(480681),s=n(552259);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function d(e,t,n){return(t=h(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(i){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,e)});function u(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(b(e=c.call.apply(c,[this].concat(n))),"onComboChange",(function(t){var n=parseInt(t.nativeEvent.target.value,10);e.props.onChange(n,e.props.scales[n])})),d(b(e),"getOptions",(function(){return e.props.scales.map((function(t,n){return a().createElement("option",{value:n,key:n},e.props.template(t,n))})).filter((function(t,n){return n>=e.props.minZoom}))})),e}return t=u,(n=[{key:"shouldComponentUpdate",value:function(e){return!o()(e,this.props)}},{key:"render",value:function(){var e;return e=this.props.readOnly?a().createElement("label",null,this.props.template(this.props.scales[this.props.currentZoomLvl],this.props.currentZoomLvl)):this.props.useRawInput?a().createElement("select",{label:this.props.label,onChange:this.onComboChange,bsSize:"small",value:this.props.currentZoomLvl||""},this.getOptions()):a().createElement(l.Form,{inline:!0},a().createElement(l.FormGroup,{bsSize:"small"},a().createElement(l.ControlLabel,null,this.props.label),a().createElement(l.FormControl,{componentClass:"select",onChange:this.onComboChange,value:this.props.currentZoomLvl||""},this.getOptions()))),a().createElement("div",{id:this.props.id,style:this.props.style},e)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a().Component);d(v,"propTypes",{id:c().string,style:c().object,scales:c().array,currentZoomLvl:c().number,minZoom:c().number,onChange:c().func,readOnly:c().bool,label:c().oneOfType([c().func,c().string,c().object]),template:c().func,useRawInput:c().bool}),d(v,"defaultProps",{id:"mapstore-scalebox",scales:(0,s.getGoogleMercatorScales)(0,28),currentZoomLvl:0,minZoom:0,onChange:function(){},readOnly:!1,template:function(e){return e<1?Math.round(1/e)+" : 1":"1 : "+Math.round(e)},useRawInput:!1});const g=v},423519:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var r=n(124852),o=n.n(r),i=n(322843),c=n(22222),u=n(800827),a=n(801550),l=n(171703),s=n(898939),p=n(675263),f=n.n(p),y=n(383606),b=n(893379),m=n.n(b),d=n(992058);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,E(r.key),r)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function E(e){var t=function(e,t){if("object"!==h(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===h(t)?t:String(t)}m()(d.Z,{insert:"head",singleton:!1}),d.Z.locals;var w,P,T,_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=O(r);if(i){var n=O(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return o().createElement("div",{id:this.props.id},o().createElement(y.Z,{id:"helpbadge-"+(this.props.children.key||this.props.id),isVisible:this.props.helpEnabled,helpText:this.props.helpText,changeHelpText:this.props.changeHelpText,changeHelpwinVisibility:this.props.changeHelpwinVisibility}),this.props.children)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component);w=_,P="propTypes",T={id:f().string,helpText:f().oneOfType([f().string,f().element]),helpEnabled:f().bool,changeHelpText:f().func,changeHelpwinVisibility:f().func},(P=E(P))in w?Object.defineProperty(w,P,{value:T,enumerable:!0,configurable:!0,writable:!0}):w[P]=T;const x=_,S=(0,l.connect)((function(e){return{helpEnabled:e.controls&&e.controls.help&&e.controls.help.enabled}}),{changeHelpText:s.n2,changeHelpwinVisibility:s.SA})(x);var j=n(481756),C=n(875964),N=n(552259),R=n(737295),A=n.n(R),M=n(638068);function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H(r.key),r)}}function H(e){var t=function(e,t){if("object"!==I(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===I(t)?t:String(t)}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function V(e){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},V(e)}m()(M.Z,{insert:"head",singleton:!1}),M.Z.locals;var B=(0,c.P1)([u.Od,u._e],(function(e,t){return{minZoom:t,currentZoomLvl:e&&e.zoom,scales:(0,N.getScales)(e&&e.projection||"EPSG:3857",e&&e.mapOptions&&e.mapOptions.view&&e.mapOptions.view.DPI||null)}})),G=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(u,e);var t,n,r,i,c=(r=u,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=V(r);if(i){var n=V(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){return o().createElement(S,{id:"mapstore-scalebox-container",key:"scalebox-help",helpText:o().createElement(j.Z,{msgId:"helptexts.scaleBox"})},o().createElement(C.Z,Z({key:"scaleBox",label:o().createElement(j.Z,{msgId:"mapScale"})},this.props)))}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(o().Component),U=(0,i.$j)(B,{onChange:a.sO})(G);const z={ScaleBoxPlugin:A()(U,{disablePluginIf:"{state('mapType') === 'cesium'}"},{MapFooter:{name:"scale",position:2,tool:!0,priority:1}}),reducers:{}}},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},992058:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi .mapToolbar .mapstore-tb-helpbadge {\r\n    display: block;\r\n    background-color: #777;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    top : -10px;\r\n    left: -10px;\r\n}\r\n\r\n\r\n.msgapi #helpbadge-zoomToMaxExtent {\r\n    display: inline;\r\n    position: absolute;\r\n    left: 34px;\r\n    top: 72px;\r\n    z-index: 100000\r\n}\r\n\r\n.msgapi #helpbadge-scaleBox {\r\n    display: inline;\r\n    position: absolute;\r\n    left: 116px;\r\n    bottom: 48px;\r\n    z-index: 100000\r\n}\r\n\r\n.msgapi #helpbadge-seachBar {\r\n    display: inline;\r\n    position: absolute;\r\n    left: 46px;\r\n    top: 10px;\r\n    z-index: 100000\r\n}\r\n\r\n\r\n.msgapi .btn .badge {\r\n    position: absolute;\r\n    top: -10px;\r\n    left: -10px;\r\n}\r\n\r\n.msgapi .themed .btn .badge {\r\n    top: -35px;\r\n    left: -50px;\r\n}\r\n\r\n.msgapi .badge {\r\n    cursor: pointer;\r\n}\r\n\r\n.msgapi #helpbadge-scaleBox {\r\n    left: 0 !important;\r\n}\r\n\r\n.msgapi #mapstore-navbar #helpbadge-search-help {\r\n    position: absolute;\r\n    left: -10px;\r\n    bottom: -8px;\r\n    z-index: 1;\r\n}\r\n",""]);const i=o},638068:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mapstore-scalebox {\r\n    /*z-index: 10;\r\n    bottom: 6px;\r\n    left: -2px;\r\n    position: absolute;\r\n    margin: 8px;\r\n    width: 148px;*/\r\n}\r\n\r\n.msgapi #mapstore-scalebox-container {\r\n    /*z-index: 10;\r\n    bottom: -16px;\r\n    right: 55px;\r\n    left: auto;\r\n    position: absolute;\r\n    margin: 8px;\r\n    width: 148px;*/\r\n}\r\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var u=0;u<e.length;u++){var a=[].concat(e[u]);r&&o[a[0]]||(n&&(a[2]?a[2]="".concat(n," and ").concat(a[2]):a[2]=n),t.push(a))}},t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function u(e,t){for(var n={},r=[],o=0;o<e.length;o++){var u=e[o],a=t.base?u[0]+t.base:u[0],l=n[a]||0,s="".concat(a," ").concat(l);n[a]=l+1;var p=c(s),f={css:u[1],media:u[2],sourceMap:u[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:m(f,t),references:1}),r.push(s)}return r}function a(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=o(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var y=null,b=0;function m(e,t){var n,r,o;if(t.singleton){var i=b++;n=y||(y=a(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=a(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=c(n[r]);i[o].references--}for(var a=u(e,t),l=0;l<n.length;l++){var s=c(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=a}}}}}]);