(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[82021],{217549:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(124852),a=t.n(n),l=t(675263),o=t.n(l),c=["href","readOnly","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function i(e){var r=e.href,t=e.readOnly,n=e.children,l=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,c);return t?n:a().createElement("a",s({href:r},l),n)}i.propTypes={href:o().string,readOnly:o().bool.isRequired,children:o().any},i.defaultProps={href:"",readOnly:!1};const u=i},834065:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(124852),a=t.n(n),l=t(675263),o=t.n(l),c=t(877593),s=t(217549),i=["resource","readOnly","formatHref","pathname"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(this,arguments)}function d(e){var r,t,n,l=e.resource,o=e.readOnly,d=e.formatHref,m=e.pathname,p=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,i);return p.detailsPanel?a().createElement(s.Z,{readOnly:o,href:d({pathname:m,query:{"filter{owner.username.in}":null===(n=l.owner)||void 0===n?void 0:n.username}})},l.owner&&(0,c.vW)(l.owner)):a().createElement("p",u({className:"card-text gn-card-user"},p),(null===(r=l.owner)||void 0===r?void 0:r.avatar)&&a().createElement("img",{src:l.owner.avatar,alt:(0,c.vW)(l.owner),className:"gn-card-author-image"}),a().createElement(s.Z,{readOnly:o,href:d({pathname:m,query:{"filter{owner.username.in}":null===(t=l.owner)||void 0===t?void 0:t.username}})},l.owner&&(0,c.vW)(l.owner)))}d.propTypes={resource:o().object,readOnly:o().bool,formatHref:o().func,props:o().any},d.defaultProps={resource:{},readOnly:!1,formatHref:function(){return"#"}};const m=d},793520:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(124852),a=t.n(n),l=t(480681);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}l.Dropdown.Item=l.MenuItem,l.Dropdown.Divider=function(e){return a().createElement(l.MenuItem,o({},e,{divider:!0}))};const c=l.Dropdown},182021:(e,r,t)=>{"use strict";t.d(r,{Z:()=>E});var n=t(124852),a=t.n(n),l=t(805346),o=t(507412),c=t(303744),s=t(51605),i=t(535721),u=t(71268),d=t(217549),m=t(834065),p=t(675263),f=t.n(p),g=t(793520);function y(e){var r,t,c=e.options,s=e.resource,i=e.buildHrefByTemplate,u=(0,n.useRef)(),d="gn-card-dropdown",m=null==u||null===(r=u.current)||void 0===r?void 0:r.querySelector(".".concat(d)),p=0===((null==m||null===(t=m.children)||void 0===t?void 0:t.length)||0);return a().createElement("div",{ref:u,className:"gn-resource-action-buttons",onClick:function(e){return e.stopPropagation()},style:p?{display:"none"}:{}},a().createElement(g.Z,{className:"gn-card-options",pullRight:!0},a().createElement(g.Z.Toggle,{id:"gn-card-options-".concat(s.pk2||s.pk),variant:"default",size:"sm",noCaret:!0},a().createElement(o.Z,{name:"ellipsis-v"})),a().createElement(g.Z.Menu,{className:d},c.map((function(e){if("plugin"===e.type){var r=e.Component;return a().createElement(r,{key:e.action,resource:s})}return a().createElement(g.Z.Item,{key:e.href,href:i(s,e.href)},a().createElement(o.Z,{name:e.icon})," ",a().createElement(l.Z,{msgId:e.labelId}))})))))}y.propTypes={options:f().array,resource:f().object,buildHrefByTemplate:f().func},y.defaultProps={options:[],resource:{},buildHrefByTemplate:function(){}};const v=y;function b(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var h=(0,n.forwardRef)((function(e,r){var t,p,f=e.data,g=e.active,y=e.options,h=e.formatHref,E=e.getTypesInfo,O=e.layoutCardsStyle,w=e.buildHrefByTemplate,Z=e.readOnly,j=e.className,N=e.loading,P=e.featured,k=e.onClick,I=e.downloading,T=e.getDetailHref,H=void 0===T?function(e){return h({pathname:"/detail/".concat(e.resource_type,"/").concat(e.pk)})}:T,S=f,_=E(),x=(_[S.subtype]||_[S.resource_type]||{}).icon,A=S&&(_[S.subtype]||_[S.resource_type])||{},C=A.formatDetailUrl,D=void 0===C?function(e){return null==e?void 0:e.detail_url}:C,B=A.canPreviewed,q=A.hasPermission,R=(null==S?void 0:S.pk)&&D(S),M=(null==S?void 0:S.pk)&&B&&B(S),W=(null==S?void 0:S.pk)&&q&&q(S),F=(null==S?void 0:S.pk)&&(0,i.J7)(S),U=(t=(0,n.useState)(!1),p=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,l,o,c=[],s=!0,i=!1;try{if(l=(t=t.call(e)).next,0===r){if(Object(t)!==t)return;s=!1}else for(;!(s=(n=l.call(t)).done)&&(c.push(n.value),c.length!==r);s=!0);}catch(e){i=!0,a=e}finally{try{if(!s&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(i)throw a}}return c}}(t,p)||function(e,r){if(e){if("string"==typeof e)return b(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?b(e,r):void 0}}(t,p)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),z=U[0],J=U[1],$="list"===O?"card-img-left":"card-img-top";return a().createElement("div",{ref:r,onClick:function(){k(f)},className:"gn-resource-card".concat(g?" active":"").concat(Z?" read-only":""," gn-card-type-").concat(O," ").concat("list"===O?"rounded-0":"").concat(j?" ".concat(j):"")},!Z&&a().createElement("a",{className:"gn-resource-card-link",href:H(S)}),!Z&&y&&y.length>0&&"grid"===O&&a().createElement(v,{buildHrefByTemplate:w,resource:S,options:y,readOnly:Z}),a().createElement("div",{className:"card-resource-".concat(O)},z||!S.thumbnail_url?a().createElement("div",{className:"".concat($," card-img-placeholder")},a().createElement(o.Z,{name:x})):a().createElement("img",{className:$,src:S.thumbnail_url,onError:function(){return J(!0)}}),a().createElement("div",{className:"gn-resource-card-body-wrapper"},a().createElement("div",{className:"card-body"},a().createElement("div",{className:"card-title"},a().createElement("div",null,x&&!N&&!I&&a().createElement(a().Fragment,null,a().createElement(d.Z,{readOnly:Z,href:h({query:{"filter{resource_type.in}":S.resource_type}})},a().createElement(o.Z,{name:x}))),(N||I)&&a().createElement(s.Z,null),a().createElement(d.Z,{className:P?"gn-featured-card-title":"gn-card-title",readOnly:Z,href:H(S)},S.title)),a().createElement("div",null,a().createElement(u.Z,{resource:S}))),a().createElement("p",{className:"card-text gn-card-description"},S.raw_abstract?S.raw_abstract:"..."),!Z&&y&&y.length>0&&"list"===O&&a().createElement(v,{buildHrefByTemplate:w,resource:S,options:y,readOnly:Z})),a().createElement("div",{className:"gn-footer-wrapper"},a().createElement("div",{className:"gn-card-footer",style:{padding:y&&0===y.length?"0 0.25rem 0 0.5rem":"0 0.5rem"}},"xdxdxd",a().createElement(m.Z,{resource:S,readOnly:Z,formatHref:h}),a().createElement("div",{className:"gn-card-actions"},!Z&&(R||F)&&a().createElement("div",{className:"".concat(y&&0===y.length?"gn-card-view-editor-right":"gn-card-view-editor")},a().createElement(c.Z,{variant:"primary",href:M||W?R:F,rel:"noopener noreferrer"},a().createElement(l.Z,{msgId:"gnhome.view"})))))))))}));h.defaultProps={links:[],theme:"light",getTypesInfo:i.NN,formatHref:function(){return"#"},featured:!1,onClick:function(){}};const E=h},71268:(e,r,t)=>{"use strict";t.d(r,{Z:()=>y});var n=t(124852),a=t.n(n),l=t(805346),o=t(675263),c=t.n(o),s=t(507412),i=t(815135),u=t(441609),d=t.n(u),m=t(535721),p=t(303744),f=(0,i.Z)(p.Z),g=function(e){var r,t,n,o=e.resource,c=void 0===o?{}:o,i=(0,m.fu)(c),u=i.isApproved,p=i.isPublished,g=i.isProcessing,y=i.isCopying,v=i.isDeleting,b=i.isDeleted;return d()(c)?null:a().createElement("p",{className:"gn-resource-status-text"},!g&&(!u||!p)&&a().createElement(f,{variant:"default",className:"gn-resource-status gn-status-button",tooltip:(r={isApproved:u,isPublished:p},t=r.isApproved,n=r.isPublished,!t&&n?a().createElement(l.Z,{msgId:"gnhome.pendingApproval"}):t||n?n||t?"":a().createElement(l.Z,{msgId:"gnhome.unpublished"}):a().createElement(l.Z,{msgId:"gnhome.unApprovedunPublished"})),style:{marginRight:(v||b||y)&&"0.4rem"},tooltipPosition:"top"},a().createElement(s.Z,{name:"info-circle",className:"gn-resource-status-pending"})),v&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleting"})),b&&a().createElement("span",{className:"gn-resource-status gn-resource-status-danger"},a().createElement(l.Z,{msgId:"gnviewer.deleted"})),y&&a().createElement("span",{className:"gn-resource-status gn-resource-status-primary"},a().createElement(l.Z,{msgId:"gnviewer.cloning"})))};g.propTypes={isApproved:c().bool,isPublished:c().bool},g.defaultProps={isApproved:!0,isPublished:!0};const y=g},228261:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});var n=t(124852),a=t.n(n),l=t(675263),o=t.n(l),c=["id","className","style","children"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},s.apply(this,arguments)}function i(e){var r=e.id,t=e.className,n=e.style,l=e.children,o=function(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}(e,c),i=t?" "+t:"";return a().createElement(a().Fragment,null,a().createElement("div",s({},o,{id:r,className:"gn-spinner".concat(i),style:n}),a().createElement("div",null)),l)}i.propTypes={id:o().string,className:o().string,style:o().object},i.defaultProps={};const u=i},51605:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n.Z});var n=t(228261)}}]);