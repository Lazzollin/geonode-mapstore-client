(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[88488],{427139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>L});var r=n(124852),o=n.n(r),i=n(675263),a=n.n(i),c=n(171703),u=n(737295),l=n.n(u),s=n(480681),p=n(815135),f=n(658252),m=n(481756),d=n(322843),b=n(782904),y=n(607147),h=n(893379),g=n.n(h),v=n(865077);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}g()(v.Z,{insert:"head",singleton:!1}),v.Z.locals;var w=["children"],j=["children"],S=["children"];function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,A(r.key),r)}}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}function N(e,t,n){return(t=A(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=(0,p.Z)(s.DropdownButton),R=function(e){var t=e.children,n=M(e,w);return o().createElement(_,D({noCaret:!0,pullRight:!0,bsStyle:"primary",title:o().createElement(s.Glyphicon,{glyph:"menu-hamburger"}),tooltipId:"options",tooltipPosition:"bottom"},n),t)},B=function(e){var t=e.children,n=M(e,j);return o().createElement("div",n,t)},Z=function(e){var t=e.children,n=e.href,r=e.target,i=e.onClick;return o().createElement("a",{href:n,target:r,onClick:i},t)},U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(c,e);var t,n,r,i,a=(r=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(i){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}(this,e)});function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(I(e=a.call.apply(a,[this].concat(n))),"getPanels",(function(e){return e.filter((function(e){return e.panel})).map((function(e){return l()({},e,{panel:!0===e.panel?e.plugin:e.panel})})).concat(e.filter((function(e){return e.tools})).reduce((function(e,t){return e.concat(t.tools.map((function(e,n){return{name:t.name+n,panel:e,cfg:t.cfg.toolsCfg?t.cfg.toolsCfg[n]:{}}})))}),[]))})),N(I(e),"getTools",(function(){var t,n=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=n.map((function(e){return x(x({},e),t(e.children))})).sort((function(e,t){return e.position-t.position})),o={container:B,containerWrapperStyle:{position:"static"},className:"burger-menu-submenu",toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:s.MenuItem,panelStyle:e.props.panelStyle,panelClassName:e.props.panelClassName};return n.length>0?{containerWrapperStyle:{position:"static"},style:{position:"relative"},childTools:r,childPanels:e.getPanels(n),innerProps:o}:{}};return[{element:o().createElement("span",{key:"burger-menu-title"},e.props.title)}].concat(function(e){if(Array.isArray(e))return P(e)}(t=e.props.items.map((function(e){return x(x({},e),n(e.children))})).sort((function(e,t){return e.position-t.position})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),e}return t=c,(n=[{key:"componentDidMount",value:function(){(0,this.props.onInit)()}},{key:"componentDidUpdate",value:function(e){var t=this.props.onInit;!1===e.isActive&&t()}},{key:"componentWillUnmount",value:function(){(0,this.props.onDetach)()}},{key:"render",value:function(){return o().createElement(f.Z,{id:this.props.id,className:"square-button",container:R,toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:function(e){var t=e.children,n=M(e,S);return o().createElement(s.MenuItem,D({componentClass:Z},n),t)},tools:this.getTools(),panels:this.getPanels(this.props.items),panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(o().Component);N(U,"propTypes",{id:a().string,dispatch:a().func,items:a().array,title:a().node,onItemClick:a().func,onInit:a().func,onDetach:a().func,controls:a().object,panelStyle:a().object,panelClassName:a().string}),N(U,"contextTypes",{messages:a().object,router:a().object}),N(U,"defaultProps",{id:"mapstore-burger-menu",items:[],onItemClick:function(){},title:o().createElement(s.MenuItem,{header:!0},o().createElement(m.Z,{msgId:"options"})),controls:[],panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto"},panelClassName:"toolbar-panel",onInit:function(){},onDetach:function(){}});const L=(0,d.rx)("BurgerMenu",{component:(0,c.connect)((function(e){return{controls:e.controls,active:(0,y.$)(e)}}),{onInit:b.Xg.bind(null,"burgermenu","enabled",!0),onDetach:b.Xg.bind(null,"burgermenu","enabled",!1)})(U),containers:{OmniBar:{name:"burgermenu",position:2,tool:!0,priority:1}}})},481756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(171703),o=n(805346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},865077:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(923645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mapstore-burger-menu {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.msgapi .burger-menu-submenu {\r\n    display: none;\r\n    position: absolute;\r\n    left: -160px;\r\n    top: 0;\r\n    width: 160px;\r\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\r\n}\r\n\r\n.msgapi .burger-menu-submenu li a {\r\n    display: block;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.msgapi .burger-menu-submenu li a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.msgapi #mapstore-burger-menu .dropdown-menu>li>a:hover>span>.burger-menu-submenu,\r\n.msgapi .burger-menu-submenu>li>a:hover>span>.burger-menu-submenu {\r\n    display: block;\r\n}\r\n\r\n.msgapi .burger-menu-submenu span {\r\n    overflow: hidden;\r\n}\r\n\r\n.msgapi #mapstore-navbar #mapstore-burger-menu {\r\n    position: relative;\r\n    float: right;\r\n    left: 0;\r\n}\r\n",""]);const i=o},923645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},893379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],l=n[u]||0,s="".concat(u," ").concat(l);n[u]=l+1;var p=a(s),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:b(f,t),references:1}),r.push(s)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,s=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,d=0;function b(e,t){var n,r,o;if(t.singleton){var i=d++;n=m||(m=u(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=u}}}}}]);