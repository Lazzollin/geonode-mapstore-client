(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76722],{82110:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(124852),o=n.n(r),i=n(496259),a=n(532425);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===c(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const f=function(e){var t=e.width,n=e.height,r=e.className,c=void 0===r?"loader-container":r,l=e.contentStyle,s=void 0===l?{}:l;return o().createElement("div",{className:c},o().createElement(i.Z,null,(function(e){var r=e.width,i=void 0===r?200:r,c=e.height,l=void 0===c?200:c,f=t||(l>0?Math.min(i,l):i),p=n||(l>0?Math.min(i,l):i),m=Math.min(f,p);return o().createElement(a.Z,{size:m,style:u({padding:m/10,margin:"auto",display:"flex"},s)})})))}},202576:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(124852),o=n.n(r),i=n(180307),a=n.n(i),c=n(675263),l=n.n(c),u=n(480681),s=n(352595),f=n(950966);function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function d(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,n,r,i,c=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(i){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"renderPopover",value:function(){return o().createElement(u.Popover,{id:this.props.id,placement:this.props.placement,positionLeft:this.props.left,positionTop:this.props.top,title:this.props.title},this.props.text)}},{key:"renderContent",value:function(){var e=this;return o().createElement(u.Glyphicon,{ref:function(t){e.target=t},className:"text-".concat(this.props.bsStyle),glyph:this.props.glyph})}},{key:"render",value:function(){var e=this,t=!0===this.props.trigger?["hover","focus"]:this.props.trigger;return o().createElement("span",{className:"mapstore-info-popover"},this.props.trigger?o().createElement(f.Z,{trigger:t,placement:this.props.placement,overlay:this.renderPopover()},this.renderContent()):[this.renderContent(),o().createElement(s.Z,{placement:this.props.placement,show:!0,target:function(){return a().findDOMNode(e.target)}},this.renderPopover())])}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);d(g,"propTypes",{id:l().string,title:l().string,text:l().string,glyph:l().string,bsStyle:l().string,placement:l().string,left:l().number,top:l().number,trigger:l().oneOfType([l().array,l().bool])}),d(g,"defaultProps",{id:"",title:"",text:"",placement:"right",left:200,top:50,glyph:"question-sign",bsStyle:"info",trigger:["hover","focus"]});const h=g},377605:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Te});var r=n(737295),o=n.n(r),i=n(124852),a=n.n(i),c=n(171703),l=n(867076),u=n(22222),s=n(162187),f=n(730381),p=n.n(f),m=n(227361),y=n.n(m),b=n(57604),d=n(757676),v=n(580416),g=n(197395),h=n(285148),P=n(275982),S=n(176843),O=n(997291),w=n(55237);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=n(589919),j=n(50886),A=n(496361),C=n(49977),I=n.n(C);function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function Z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(e){u=!0,o=e}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(e,t)||D(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function N(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==L(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===L(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=(0,O.Li)(e()),i=(0,O.uy)(e()),a=(0,O.Ry)(e()),c=(0,S.KC)(e())||{},l=c.startPlaybackTime,u=c.endPlaybackTime,f=(0,S.dS)(e())===s.Q_.PLAY||(0,S.dS)(e())===s.Q_.PAUSE,p="end"===(0,O.pW)(e());return[a,i,"time",_({limit:20,time:l&&u&&f?(t=l,n=u,"".concat(t,"/").concat(n)):void 0,fromEnd:p},r),(0,O.F3)(o)(e())]},M=function(e,t){if((0,O.uy)(e())){var n=(0,h.aK)((0,O.fP)(e()))(e()),r=(0,O.gB)(e());return"multidim-extension"!==y()(r,"source.type")&&n&&n.length>0?function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.fromValue,o=n.limit,i=void 0===o?20:o,a=(0,S.KC)(t())||{},c=a.startPlaybackTime,l=a.endPlaybackTime;return I().Observable.of(e.filter((function(e){return!c||!l||p()(e).isSameOrAfter(c)&&p()(e).isSameOrBefore(l)})).filter((function(e){return!r||p()(e).isAfter(r)})).slice(0,i))}(n,e,t):A.Ci.apply(void 0,(o=F(e,t),function(e){if(Array.isArray(e))return R(e)}(o)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(o)||D(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())).map((function(t){var n=t.DomainValues.Domain.split(","),r=(0,O.Li)(e())?function(e,t){var n,r=(0,S.KC)(e())||{},o=(0,O.pW)(e()),i=null==r?void 0:r.endPlaybackTime,a=null==r?void 0:r.startPlaybackTime;return n=o&&"end"===o?t.map((function(e){return e.split("/")[1]})):t.map((function(e){return e.split("/")[0]})),a&&i?(0,w.pC)(n,a,i):n}(e,n):n;return r}))}var o;return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.fromValue,r=t.limit,o=void 0===r?20:r,i=t.sort,a=void 0===i?"asc":i,c=(0,S.z2)(e()),l=c.timeStep,u=c.stepUnit,s=p().duration(l,u),f=(0,S.KC)(e())||{},m=f.startPlaybackTime,y=f.endPlaybackTime,b=void 0!==n?n:m||(0,h.WT)(e())||(new Date).toString(),d=[];b!==n&&d.push(p()(b).toISOString());for(var v=0;v<o&&(b=p()(b).add("asc"===a?s:-1*s),!y||b.isBefore(y));v++)d.push(b.toISOString());return I().Observable.of(d)}(e,t)};const U={retrieveFramesForPlayback:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.NH).exhaustMap((function(){return M(n,_({fromValue:(0,S.KC)(n())&&(0,S.KC)(n()).startPlaybackTime&&(0,S.KC)(n()).endPlaybackTime?void 0:(0,h.WT)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map((function(e){return(0,s.wR)(e)})).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)),(function(){return I().Observable.of((0,g.vU)({title:"There was an error retrieving animation",message:"Please contact the administrator"}),(0,s.sT)())})).let((0,T.hP)((0,d.aA)(!1,!0),(0,d.aA)(!1,!1))).concat(e.ofType(s.c9).filter((function(e){return e.frame%20==10})).switchMap((function(){return M(n,_({fromValue:(0,S.yt)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map(s.hS).let((0,T.hP)((0,s.zK)(!0),(0,s.zK)(!1)))}))).takeUntil(e.ofType(s.N7,P.nk)).concat(I().Observable.of((0,d.aA)(!1,!1))).let(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return{}};return function(t){var n=(0,h.AF)(e());return I().Observable.from(n.map((function(e){return(0,v.He)(e.id,{singleTile:!0})}))).concat(t).concat(I().Observable.from(n.map((function(e){return(0,v.He)(e.id,{singleTile:e.singleTile})}))))}}(n))}))},updateCurrentTimeFromAnimation:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.c9).map((function(){return(0,S.Wq)(n())})).map((function(e){return e?(0,b.PZ)(e):(0,s.sT)()}))},timeDimensionPlayback:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.L9).exhaustMap((function(){return I().Observable.interval(1e3*(0,S.V3)(n())).startWith(0).let(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return e};return function(r){return r.withLatestFrom(e.startWith(t)).filter((function(e){var t=E(e,2)[1];return n(t)})).map((function(e){return E(e,1)[0]}))}}(e.ofType(s.NH,s.E7).map((function(e){return e.type===s.NH})))).map((function(){return(0,s.h1)((0,S.Np)(n())+1)})).merge(e.ofType(s.KB).map((function(e){var t=e.direction;return(0,s.h1)(Math.max(0,(0,S.Np)(n())+t))}))).concat(I().Observable.of((0,s.sT)())).takeUntil(e.ofType(s.N7,P.nk))}))},playbackToggleGuideLayerToFixedStep:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.Fi).exhaustMap((function(){return(0,O.uy)(n())?I().Observable.of((0,d.kq)(void 0)):I().Observable.of((0,d.kq)(y()((0,h.LS)(n()),"[0].id")))}))},playbackMoveStep:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(s.KB).filter((function(){return(0,S.dS)(n())!==s.Q_.PLAY})).switchMap((function(e){var t=e.direction,r=void 0===t?1:t,o=(0,S.rp)(n())||{},i=(0,h.WT)(n());return i&&o.forTime===i?I().Observable.of(r>0?o.next:o.previous):M(n,_({limit:1,sort:r>0?"asc":"desc",fromValue:(0,h.WT)(n())},"end"===(0,O.pW)(n())?{fromEnd:!0}:{})).map((function(){return Z(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],1)[0]}))})).filter((function(e){return!!e})).map((function(e){var t,r=null!==(t="end"===(0,O.pW)(n())?e.split("/")[1]:e.split("/")[0])&&void 0!==t?t:e;return(0,b.PZ)(r)}))},playbackCacheNextPreviousTimes:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(b.mE,b.mD,d._V,s.N7,d.w,d.lz,d.Xe).filter((function(){return(0,S.dS)(n())!==s.Q_.PLAY&&(0,S.dS)(n())!==s.Q_.PAUSE})).filter((function(){return(0,O.Li)(n())})).filter((function(e){return!!e})).switchMap((function(e){var t=e.time||(0,h.WT)(n()),r=(0,O.pW)(n());return(0,j.w)(F,!1,n,r,t).map((function(e){var n=Z(e,2),r=n[0],o=n[1];return(0,s.Ym)({forTime:t,next:r,previous:o})}))}))},playbackFollowCursor:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(b.mD).filter((function(e){return(e.type===b.mD||(0,S.dS)(n())===s.Q_.PLAY)&&function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.start,r=t.end;return n&&r&&(p()(e).isBefore(n)||p()(e).isAfter(r))}((0,h.WT)(n()),(0,O.YK)(n()))})).filter((function(){return y()((0,S.z2)(n()),"following")})).switchMap((function(){return I().Observable.of((0,d.y3)((e=(0,h.WT)(n()),r=(t=(0,O.YK)(n())).start,o=t.end,i=p()(o).diff(p()(r)),{start:e,end:p()(e).add(i).toISOString()})));var e,t,r,o,i}))},playbackStopWhenDeleteLayer:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(v.sb).filter((function(){return!(0,O.Li)(n())&&"PLAY"===(0,S.dS)(n())})).switchMap((function(){return I().Observable.of((0,s.sT)())}))},setIsIntervalData:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(d._V,b.mE).filter((function(e){return e.layerId||(0,O.Li)(n())})).switchMap((function(e){var t=e.time||(0,h.WT)(n()),r=(0,O.pW)(n());return(0,j.w)(F,!0,n,r,t).map((function(e){var t=Z(e,2),n=t[0],r=t[1],o=-1!==n.indexOf("/")||-1!==r.indexOf("/");return(0,s.RQ)(o)}))}))},switchOffSnapToLayer:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).getState,n=void 0===t?function(){}:t;return e.ofType(v.yS).filter((function(e){var t=e.newProperties,r=e.layer,o=(0,O.Li)(n());return void 0!==(null==t?void 0:t.visibility)&&o===r&&(0,O.pn)(n())})).switchMap((function(){return I().Observable.of((0,s.FH)())}))}};var Y=n(937307),W=n(732215),K=n(805346),B=n(80717),Q=n(675263),V=n.n(Q),z=n(807654),G=n.n(z),H=n(480681),q=n(294184),$=n.n(q),X=n(202576),J=n(365295),ee=n(145869),te=n(112346),ne=n(794192),re=n(86638);function oe(e){return oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},oe(e)}function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){ce(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ce(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==oe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==oe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===oe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var le=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){};try{if(!G()(parseInt(e,10))){var r=parseInt(e,10);return t(r<1?1:r)}return n()}catch(e){return n(e)}},ue=function(e){var t=e.startPlaybackTime,n=e.endPlaybackTime,r=p()(t).diff(n);return{startPlaybackTime:r>=0?n:t,endPlaybackTime:r>=0?t:n}},se=function(e,t){var n=e.following,r=e.frameDuration,o=e.timeStep,i=e.stepUnit,c=e.onSettingChange,l=void 0===c?function(){}:c,u=e.toggleAnimationMode,s=void 0===u?function(){}:u,f=e.toggleAnimationRange,p=void 0===f?function(){}:f,m=e.fixedStep,y=void 0!==m&&m,b=e.playbackRange,d=void 0===b?{}:b,v=e.snapTypes,g=void 0===v?[]:v,h=e.currentSnapType,P=void 0===h?"start":h,S=e.snapRadioButtonEnabled,O=void 0!==S&&S,w=e.endValuesSupport,E=e.onChangeSnapType,k=void 0===E?function(){}:E,T=e.setPlaybackRange,j=void 0===T?function(){}:T,A=e.playbackButtons,C=e.dateSelectorStyle,I=void 0===C?{padding:0,margin:0,border:"none"}:C,L=e.style,Z=void 0===L?{}:L,D=e.layers,R=void 0===D?[]:D,x=e.changeLayerSetting,_=void 0===x?function(){}:x,N=e.selectedLayer;return a().createElement("div",{className:"ms-playback-settings",style:Z},a().createElement("h4",null,a().createElement(K.Z,{msgId:"timeline.settings.title"})),a().createElement(H.FormGroup,{controlId:"timelineSettings"},a().createElement(H.Form,{componentClass:"fieldset",inline:!0,className:"snap-guide-form"},a().createElement(H.ControlLabel,null,a().createElement(K.Z,{msgId:"timeline.settings.snapToGuideLayer"})," ",a().createElement(X.Z,{text:a().createElement(K.Z,{msgId:"timeline.settings.snapToGuideLayerTooltip"})})),a().createElement("span",null,a().createElement(ee.Z,{checked:!y,onChange:function(){return s()}}))),!y&&w&&a().createElement(H.Form,{componentClass:"fieldset",inline:!0,className:"snap-type-form",disabled:!O},a().createElement("div",{className:"snap-type-form-title"},a().createElement(H.ControlLabel,null,a().createElement(K.Z,{msgId:"timeline.settings.snapType"})," ",a().createElement(X.Z,{text:a().createElement(K.Z,{msgId:"timeline.settings.snapTypeTooltip"})}))),a().createElement("div",{className:"snap-type-container"},g.map((function(e){return a().createElement("div",{className:"snap-type-item"},a().createElement("input",{type:"radio",className:$()("snap-type-radio-btn",{disabled:!O}),value:e.value,name:"snapType",checked:P===e.value,onChange:function(e){var t=e.target.value;k(t)}}),a().createElement("div",{className:"snap-type-radio-btn-label"},a().createElement(K.Z,{msgId:e.label})))}))))),a().createElement(H.Tabs,{defaultActiveKey:1,id:"playback-settings-tabs"},a().createElement(H.Tab,{eventKey:1,title:a().createElement(K.Z,{msgId:"playback.settings.tab.playback"}),style:{paddingTop:8}},a().createElement(a().Fragment,null,a().createElement(H.FormGroup,{controlId:"frameDuration"},a().createElement(H.ControlLabel,null,a().createElement(K.Z,{msgId:"playback.settings.frameDuration"})),a().createElement(H.InputGroup,null,a().createElement(ne.Z,{componentClass:"input",type:"number",value:r,onChange:function(){return le(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",(function(e){l("frameDuration",e)}))}}),a().createElement(H.InputGroup.Addon,null,"s"))),a().createElement(H.ControlLabel,null,a().createElement(K.Z,{msgId:"playback.settings.step.label"})," ",a().createElement(X.Z,{text:a().createElement(K.Z,{msgId:"playback.settings.step.tooltip"})})),a().createElement(H.FormGroup,{controlId:"formPlaybackStep"},a().createElement(H.Form,{componentClass:"fieldset",inline:!0},a().createElement(ne.Z,{disabled:!y,componentClass:"input",type:"number",style:{input:{maxWidth:120}},value:o,onChange:function(){return le(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",(function(e){l("timeStep",e)}))}}),a().createElement(H.FormControl,{disabled:!y,componentClass:"select",value:i,onChange:function(e){var t=e.target;return l("stepUnit",(void 0===t?{}:t).value)}},a().createElement(K.Z,{msgId:"playback.settings.step.year",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"years"},e)})),a().createElement(K.Z,{msgId:"playback.settings.step.week",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"weeks"},e)})),a().createElement(K.Z,{msgId:"playback.settings.step.day",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"days"},e)})),a().createElement(K.Z,{msgId:"playback.settings.step.hour",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"hour"},e)})),a().createElement(K.Z,{msgId:"playback.settings.step.minute",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"minutes"},e)})),a().createElement(K.Z,{msgId:"playback.settings.step.second",msgParams:{number:o||1}},(function(e){return a().createElement("option",{value:"seconds"},e)}))))),a().createElement(te.Z,{onSwitch:function(e){return p(e)},expanded:d.startPlaybackTime&&d.endPlaybackTime,title:a().createElement(K.Z,{msgId:"playback.settings.range.title"}),buttons:A},a().createElement(H.FormGroup,{controlId:"formPlaybackMode",style:{margin:10}},a().createElement(J.Z,{tooltipId:"playback.settings.range.animationStart",glyph:"play",date:d.startPlaybackTime,onUpdate:function(e){return j(ue(ae(ae({},d),{},{startPlaybackTime:e})))},style:I,showButtons:!0}),a().createElement(J.Z,{glyph:"stop",tooltipId:"playback.settings.range.animationEnd",date:d.endPlaybackTime,onUpdate:function(e){return j(ue(ae(ae({},d),{},{endPlaybackTime:e})))},style:I,showButtons:!0}))),a().createElement(H.FormGroup,{controlId:"formPlaybackFollowingMode"},a().createElement(H.Form,{componentClass:"fieldset",inline:!0},a().createElement(H.ControlLabel,null,a().createElement(K.Z,{msgId:"playback.settings.mode.following"})," ",a().createElement(X.Z,{text:a().createElement(K.Z,{msgId:"playback.settings.mode.followingDescription"})})),a().createElement("span",null,a().createElement(ee.Z,{checked:n,onChange:function(e){return l("following",e)}})))))),a().createElement(H.Tab,{eventKey:2,title:a().createElement(K.Z,{msgId:"playback.settings.tab.layers"}),style:{height:250,width:280,overflowY:"auto",paddingTop:8}},R.map((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n.title,o=n.id,i=n.hideInTimeline,c=null==R?void 0:R.filter((function(e){return!e.hideInTimeline})),l=1===c.length&&(null==c||null===(e=c[0])||void 0===e?void 0:e.id)===o||N===o&&!i;return a().createElement("div",{className:"layer-setting"},a().createElement("label",{key:o},r),a().createElement("input",{title:(0,re.S$)(t.messages,"playback.settings.layer.".concat(l?"disabled":"enabled")),disabled:l,type:"checkbox",onChange:function(e){return _(o,e.target.checked)},checked:!i}))})))))};se.contextTypes={messages:V().object};const fe=se;function pe(e){return pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(e)}function me(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==pe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==pe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===pe(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const be=(0,l.compose)((0,c.connect)((0,u.P1)(S.z2,O.Li,S.KC,O.pW,O.ei,O.Hc,O.A7,(function(e,t,n,r,o,i,a){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?me(Object(n),!0).forEach((function(t){ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({fixedStep:!t,playbackRange:n,currentSnapType:r,snapRadioButtonEnabled:o,endValuesSupport:i,selectedLayer:t,layers:a},e)})),{setPlaybackRange:s.VS,onSettingChange:s.oz,onChangeSnapType:d.m7,toggleAnimationMode:s.FH,changeLayerSetting:d.mF}),(0,l.withProps)((function(){return{snapTypes:[{id:"start",value:"start",label:"timeline.settings.snapToStart"},{id:"end",value:"end",label:"timeline.settings.snapToEnd"}]}})),(0,l.compose)((0,c.connect)((0,u.P1)(O.YK,O.dJ,(function(e,t){return{layerRange:t,viewRange:e}})),{moveTo:d.y3}),(0,l.withHandlers)({toggleAnimationRange:function(e){var t=e.fixedStep,n=e.layerRange,r=e.viewRange,o=void 0===r?{}:r,i=e.setPlaybackRange,a=void 0===i?function(){}:i;return function(e){var r=t?o:n;r={startPlaybackTime:p()(r&&r.start||new Date).subtract(1,"days").toISOString(),endPlaybackTime:p()(r&&r.end||new Date).add(1,"days").toISOString()},a(e?r:void 0)}},setPlaybackToCurrentViewRange:function(e){var t=e.viewRange,n=void 0===t?{}:t,r=e.setPlaybackRange,o=void 0===r?function(){}:r;return function(){n.start&&n.end&&o({startPlaybackTime:p()(n.start).toISOString(),endPlaybackTime:p()(n.end).toISOString()})}},setPlaybackToCurrentLayerDataRange:function(e){var t=e.setPlaybackRange,n=void 0===t?function(){}:t,r=e.layerRange;return function(){return r&&n({startPlaybackTime:r.start,endPlaybackTime:r.end})}}}),(0,l.withProps)((function(e){var t=e.playbackRange,n=e.fixedStep,r=e.moveTo,o=void 0===r?function(){}:r,i=e.setPlaybackToCurrentViewRange,a=void 0===i?function(){}:i,c=e.setPlaybackToCurrentLayerDataRange,l=void 0===c?function(){}:c;return{playbackButtons:[{glyph:"search",tooltipId:"playback.settings.range.zoomToCurrentPlayackRange",onClick:function(){return o({start:t.startPlaybackTime,end:t.endPlaybackTime})}},{glyph:"resize-horizontal",tooltipId:"playback.settings.range.setToCurrentViewRange",onClick:function(){return a()}},{glyph:"1-layer",visible:!n,tooltipId:"playback.settings.range.fitToSelectedLayerRange",onClick:function(){return l()}}]}}))))(fe);var de=(0,l.compose)((0,l.withState)("showSettings","onShowSettings",!1),(0,l.withState)("collapsed","setCollapsed",!0),(0,l.withProps)((function(e){var t=e.setCollapsed;return{buttons:[{glyph:"minus",onClick:function(){return t(!0)}}]}}))),ve=(0,u.P1)(S.dS,O.Li,S.rp,S.PF,(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;return t?e===s.Q_.PLAY||e===s.Q_.PAUSE?r:{hasNext:!!n.next,hasPrevious:!!n.previous}:{hasNext:!0,hasPrevious:!0}})),ge=(0,l.compose)((0,c.connect)(ve,{stepMove:s.XN}),(0,l.withHandlers)({forward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(1)}},backward:function(e){var t=e.stepMove,n=void 0===t?function(){}:t;return function(){return n(-1)}}}));const he=(0,l.compose)(de,ge)((function(e){var t=e.status,n=e.statusMap,r=e.play,o=void 0===r?function(){}:r,i=e.forward,c=void 0===i?function(){}:i,l=e.backward,u=void 0===l?function(){}:l,s=e.pause,f=void 0===s?function(){}:s,p=e.stop,m=void 0===p?function(){}:p,y=e.hasPrevious,b=e.hasNext,d=e.showSettings,v=e.onShowSettings,g=void 0===v?function(){}:v,h=e.settingsStyle,P=void 0===h?{}:h;return a().createElement("div",{style:{display:"flex"}},t!==n.PLAY&&t!==n.PAUSE&&d&&a().createElement(be,{style:P}),a().createElement(B.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},buttons:[{glyph:"step-backward",key:"back",onClick:u,disabled:!y,tooltip:a().createElement(K.Z,{msgId:"playback.backwardStep"})},{glyph:t===n.PLAY?"pause":"play",key:"play",active:t===n.PLAY||t===n.PAUSE,disabled:!b,bsStyle:t===n.PLAY||t===n.PAUSE?"success":"primary",onClick:function(){return t===n.PLAY?f():o()},tooltipId:b&&(t===n.PLAY?"playback.pause":t===n.PAUSE?"playback.paused":"playback.play")},{glyph:"stop",key:"stop",disabled:t!==n.PLAY&&t!==n.PAUSE,onClick:m,tooltip:!(t!==n.PLAY&&t!==n.PAUSE)&&a().createElement(K.Z,{msgId:"playback.stop"})},{glyph:"step-forward",key:"forward",onClick:c,disabled:!b,tooltip:b&&a().createElement(K.Z,{msgId:"playback.forwardStep"})},{glyph:"cog",key:"settings",bsStyle:t!==n.PLAY&&t!==n.PAUSE&&d?"success":"primary",active:(t!==n.PLAY||t!==n.PAUSE)&&!!d,disabled:t===n.PLAY||t===n.PAUSE,onClick:function(){return t!==n.PLAY&&g(!d)},tooltip:!(t===n.PLAY||t===n.PAUSE)&&a().createElement(K.Z,{msgId:"playback.settings.tooltip"})}]}))}));function Pe(e){return Pe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pe(e)}function Se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==Pe(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==Pe(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===Pe(o)?o:String(o)),r)}var o}function Oe(e,t){return Oe=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Oe(e,t)}function we(e){return we=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},we(e)}var Ee=(0,l.compose)((0,l.defaultProps)({statusMap:s.Q_}),(0,c.connect)((0,u.P1)(S.dS,h.WT,S.E2,(function(e,t,n){return{loading:n,currentTime:t,status:e}})),{play:s.hY,pause:s.wO,stop:s.sT}))(he),ke=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Oe(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=we(r);if(o){var n=we(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===Pe(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return a().createElement("div",{className:"playback-plugin"},a().createElement(Ee,this.props))}}])&&Se(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a().Component);const Te={PlaybackPlugin:o()(ke,{noRoot:!0,disablePluginIf:"{state('featuregridmode') === 'EDIT'}",Timeline:{name:"playback",position:1,priority:1}}),epics:U,reducers:{playback:W.Z,dimension:Y.Z}}},732215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(162187),o=n(782904),i=n(761868);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p={timeStep:1,stepUnit:"days",frameDuration:2,following:!0};const m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{status:r.Q_.STOP,currentFrame:-1,settings:p},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.NH:return(0,i.t8)("status",r.Q_.PLAY,e);case r.E7:return(0,i.t8)("status",r.Q_.PAUSE,e);case r.N7:return(0,i.t8)("status",r.Q_.STOP,(0,i.t8)("currentFrame",-1,e));case r.L9:return(0,i.t8)("frames",t.frames,(0,i.t8)("currentFrame",-1,e));case r.NC:return(0,i.t8)("framesLoading",t.loading,e);case r.hQ:return(0,i.t8)("frames",[].concat(s(e.frames||[]),s(t.frames)),e);case r.c9:return(0,i.t8)("currentFrame",t.frame,e);case r.up:return(0,i.t8)("playbackRange",t.range,e);case r.FZ:return(0,i.t8)("settings[".concat(t.name,"]"),t.value,e);case r.E0:return(0,i.t8)("metadata",{next:t.next,previous:t.previous,forTime:t.forTime},e);case r.AN:return(0,i.t8)("metadata",l(l({},e.metadata),{},{timeIntervalData:t.timeIntervalData}),e);case o.l:return(0,i.t8)("metadata",void 0,(0,i.t8)("framesLoading",void 0,(0,i.t8)("playbackRange",void 0,(0,i.t8)("frames",void 0,(0,i.t8)("currentFrame",-1,(0,i.t8)("status","STOP",(0,i.t8)("settings",p,e)))))));default:return e}}}}]);