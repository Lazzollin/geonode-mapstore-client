(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76203],{820640:(e,t,n)=>{"use strict";var r=n(111742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,l,u,c,s=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),l=document.createRange(),u=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),l.selectNodeContents(c),u.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),c&&document.body.removeChild(c),a()}return s}},23279:(e,t,n)=>{var r=n(513218),o=n(707771),i=n(14841),a=Math.max,l=Math.min;e.exports=function(e,t,n){var u,c,s,p,f,d,y=0,h=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=u,r=c;return u=c=void 0,y=t,p=e.apply(r,n)}function b(e){return y=e,f=setTimeout(w,t),h?v(e):p}function C(e){var n=e-d;return void 0===d||n>=t||n<0||m&&e-y>=s}function w(){var e=o();if(C(e))return _(e);f=setTimeout(w,function(e){var n=t-(e-d);return m?l(n,s-(e-y)):n}(e))}function _(e){return f=void 0,g&&u?v(e):(u=c=void 0,p)}function O(){var e=o(),n=C(e);if(u=arguments,c=this,d=e,n){if(void 0===f)return b(d);if(m)return clearTimeout(f),f=setTimeout(w,t),v(d)}return void 0===f&&(f=setTimeout(w,t)),p}return t=i(t)||0,r(n)&&(h=!!n.leading,s=(m="maxWait"in n)?a(i(n.maxWait)||0,t):s,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),y=0,u=d=c=f=void 0},O.flush=function(){return void 0===f?p:_(o())},O}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}},819081:(e,t,n)=>{"use strict";e.exports=n(1174)},561512:function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(667294)),s=u(n(911937)),p=l(n(675263));function f(e){return e&&e.replace(/&nbsp;|\u202F|\u00A0/g," ")}function d(e){if(e.nodeType===Node.TEXT_NODE)return e;for(var t=e.childNodes,n=t.length-1;n>=0;n--){var r=d(t[n]);if(null!==r)return r}return null}function y(e){var t=d(e),n=document.activeElement===e;if(null!==t&&null!==t.nodeValue&&n){var r=window.getSelection();if(null!==r){var o=document.createRange();o.setStart(t,t.nodeValue.length),o.collapse(!0),r.removeAllRanges(),r.addRange(o)}e instanceof HTMLElement&&e.focus()}}var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.lastHtml=t.props.html,t.el="function"==typeof t.props.innerRef?{current:null}:c.createRef(),t.getEl=function(){return(t.props.innerRef&&"function"!=typeof t.props.innerRef?t.props.innerRef:t.el).current},t.emitChange=function(e){var n=t.getEl();if(n){var r=n.innerHTML;if(t.props.onChange&&r!==t.lastHtml){var o=Object.assign({},e,{target:{value:r}});t.props.onChange(o)}t.lastHtml=r}},t}return o(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.tagName,r=t.html,o=t.innerRef,l=a(t,["tagName","html","innerRef"]);return c.createElement(n||"div",i({},l,{ref:"function"==typeof o?function(t){o(t),e.el.current=t}:o||this.el,onInput:this.emitChange,onBlur:this.props.onBlur||this.emitChange,onKeyUp:this.props.onKeyUp||this.emitChange,onKeyDown:this.props.onKeyDown||this.emitChange,contentEditable:!this.props.disabled,dangerouslySetInnerHTML:{__html:r}}),this.props.children)},t.prototype.shouldComponentUpdate=function(e){var t=this.props,n=this.getEl();return!n||f(e.html)!==f(n.innerHTML)||t.disabled!==e.disabled||t.tagName!==e.tagName||t.className!==e.className||t.innerRef!==e.innerRef||!s.default(t.style,e.style)},t.prototype.componentDidUpdate=function(){var e=this.getEl();e&&(this.props.html!==e.innerHTML&&(e.innerHTML=this.lastHtml=this.props.html),y(e))},t.propTypes={html:p.string.isRequired,onChange:p.func,disabled:p.bool,tagName:p.string,className:p.string,style:p.object,innerRef:p.oneOfType([p.object,p.func])},t}(c.Component);t.default=h},911937:e=>{"use strict";var t=Array.isArray,n=Object.keys,r=Object.prototype.hasOwnProperty;e.exports=function e(o,i){if(o===i)return!0;if(o&&i&&"object"==typeof o&&"object"==typeof i){var a,l,u,c=t(o),s=t(i);if(c&&s){if((l=o.length)!=i.length)return!1;for(a=l;0!=a--;)if(!e(o[a],i[a]))return!1;return!0}if(c!=s)return!1;var p=o instanceof Date,f=i instanceof Date;if(p!=f)return!1;if(p&&f)return o.getTime()==i.getTime();var d=o instanceof RegExp,y=i instanceof RegExp;if(d!=y)return!1;if(d&&y)return o.toString()==i.toString();var h=n(o);if((l=h.length)!==n(i).length)return!1;for(a=l;0!=a--;)if(!r.call(i,h[a]))return!1;for(a=l;0!=a--;)if(!e(o[u=h[a]],i[u]))return!1;return!0}return o!=o&&i!=i}},74300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(667294)),a=l(n(820640));function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,n,r;u(this,t);for(var o=arguments.length,l=Array(o),s=0;s<o;s++)l[s]=arguments[s];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onClick=function(e){var t=r.props,n=t.text,o=t.onCopy,l=t.children,u=t.options,c=i.default.Children.only(l),s=(0,a.default)(n,u);o&&o(n,s),c&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e)},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["text","onCopy","options","children"]),o=i.default.Children.only(t);return i.default.cloneElement(o,r({},n,{onClick:this.onClick}))}}]),t}(i.default.PureComponent)},774855:(e,t,n)=>{"use strict";var r=n(74300).CopyToClipboard;e.exports=r},111742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);