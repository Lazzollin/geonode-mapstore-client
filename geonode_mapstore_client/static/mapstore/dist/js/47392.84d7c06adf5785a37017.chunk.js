(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[47392],{820640:(e,t,n)=>{"use strict";var r=n(111742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,s,c,l,u=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),s=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=o[t.format]||o.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},23279:(e,t,n)=>{var r=n(513218),o=n(707771),i=n(14841),a=Math.max,s=Math.min;e.exports=function(e,t,n){var c,l,u,p,d,f,h=0,v=!1,y=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=c,r=l;return c=l=void 0,h=t,p=e.apply(r,n)}function m(e){var n=e-f;return void 0===f||n>=t||n<0||y&&e-h>=u}function w(){var e=o();if(m(e))return C(e);d=setTimeout(w,function(e){var n=t-(e-f);return y?s(n,u-(e-h)):n}(e))}function C(e){return d=void 0,g&&c?b(e):(c=l=void 0,p)}function x(){var e=o(),n=m(e);if(c=arguments,l=this,f=e,n){if(void 0===d)return function(e){return h=e,d=setTimeout(w,t),v?b(e):p}(f);if(y)return clearTimeout(d),d=setTimeout(w,t),b(f)}return void 0===d&&(d=setTimeout(w,t)),p}return t=i(t)||0,r(n)&&(v=!!n.leading,u=(y="maxWait"in n)?a(i(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),x.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=f=l=d=void 0},x.flush=function(){return void 0===d?p:C(o())},x}},707771:(e,t,n)=>{var r=n(555639);e.exports=function(){return r.Date.now()}},74300:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=s(n(124852)),a=s(n(820640));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}t.CopyToClipboard=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return n=r=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.onClick=function(e){var t=r.props,n=t.text,o=t.onCopy,s=t.children,c=t.options,l=i.default.Children.only(s),u=(0,a.default)(n,c);o&&o(n,u),l&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e)},c(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["text","onCopy","options","children"]),o=i.default.Children.only(t);return i.default.cloneElement(o,r({},n,{onClick:this.onClick}))}}]),t}(i.default.PureComponent)},774855:(e,t,n)=>{"use strict";var r=n(74300).CopyToClipboard;e.exports=r},697658:(e,t,n)=>{"use strict";n.d(t,{df:()=>b,YD:()=>m});var r=n(722122),o=n(419756),i=n(663349),a=n(841788);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=n(124852),l=n(441143),u=n.n(l),p=new Map,d=new Map,f=new Map,h=0;function v(e,t,n){void 0===n&&(n={}),n.threshold||(n.threshold=0);var r=n,o=r.root,i=r.rootMargin,a=r.threshold;if(u()(!p.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var s=function(e){return e?f.has(e)?f.get(e):(h+=1,f.set(e,h.toString()),f.get(e)+"_"):""}(o)+(i?a.toString()+"_"+i:a.toString()),c=d.get(s);c||(c=new IntersectionObserver(g,n),s&&d.set(s,c));var l={callback:t,element:e,inView:!1,observerId:s,observer:c,thresholds:c.thresholds||(Array.isArray(a)?a:[a])};return p.set(e,l),c.observe(e),l}}function y(e){if(e){var t=p.get(e);if(t){var n=t.observerId,r=t.observer,o=r.root;r.unobserve(e);var i=!1,a=!1;n&&p.forEach((function(t,r){r!==e&&(t.observerId===n&&(i=!0,a=!0),t.observer.root===o&&(a=!0))})),!a&&o&&f.delete(o),r&&!i&&r.disconnect(),p.delete(e)}}}function g(e){e.forEach((function(e){var t=e.isIntersecting,n=e.intersectionRatio,r=e.target,o=p.get(r);if(o&&n>=0){var i=o.thresholds.some((function(e){return o.inView?n>e:n>=e}));void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}}))}var b=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t=e.call.apply(e,[this].concat(r))||this,s((0,i.Z)(t),"state",{inView:!1,entry:void 0}),s((0,i.Z)(t),"node",null),s((0,i.Z)(t),"handleNode",(function(e){t.node&&y(t.node),t.node=e||null,t.observeNode()})),s((0,i.Z)(t),"handleChange",(function(e,n){(e!==t.state.inView||e)&&t.setState({inView:e,entry:n}),t.props.onChange&&t.props.onChange(e,n)})),t}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){},n.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(y(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(y(this.node),this.node=null)},n.componentWillUnmount=function(){this.node&&(y(this.node),this.node=null)},n.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin;v(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r})}},n.render=function(){var e=this.state,t=e.inView,n=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:n,ref:this.handleNode});var i=this.props,a=i.children,s=i.as,l=i.tag,u=(i.triggerOnce,i.threshold,i.root,i.rootMargin,(0,o.Z)(i,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return(0,c.createElement)(s||l||"div",(0,r.Z)({ref:this.handleNode},u),a)},t}(c.Component);function m(e){void 0===e&&(e={});var t=(0,c.useRef)(),n=(0,c.useState)({inView:!1,entry:void 0}),r=n[0],o=n[1],i=(0,c.useCallback)((function(n){t.current&&y(t.current),n&&v(n,(function(t,r){o({inView:t,entry:r}),t&&e.triggerOnce&&y(n)}),e),t.current=n}),[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return(0,c.useDebugValue)(r.inView),[i,r.inView,r.entry]}s(b,"displayName","InView"),s(b,"defaultProps",{threshold:0,triggerOnce:!1})},111742:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);