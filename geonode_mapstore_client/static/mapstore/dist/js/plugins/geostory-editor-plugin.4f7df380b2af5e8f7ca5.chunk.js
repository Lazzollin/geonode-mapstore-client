(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7094],{76424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(67294),r=n.n(o),i=n(13218),l=n.n(i),c=n(32425),a=["body","caption","infoExtra","className","description","fullText","onClick","onMouseEnter","onMouseLeave","preview","selected","size","style","stylePreview","styleTools","title","loading","dragSymbol","tools"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.body,n=e.caption,o=e.infoExtra,i=e.className,s=void 0===i?"":i,d=e.description,p=e.fullText,f=e.onClick,g=void 0===f?function(){}:f,y=e.onMouseEnter,b=void 0===y?function(){}:y,v=e.onMouseLeave,h=void 0===v?function(){}:v,E=e.preview,S=e.selected,O=e.size,C=e.style,P=void 0===C?{}:C,w=e.stylePreview,I=void 0===w?{}:w,T=e.styleTools,j=void 0===T?{}:T,k=e.title,N=e.loading,Z=e.dragSymbol,x=void 0===Z?"+":Z,U=e.tools,D=m(e,a);return r().createElement("div",{className:"mapstore-side-card".concat(S?" selected":"").concat(O?" ms-"+O:"").concat(s?" ".concat(s):"").concat(p?" full-text":""),onClick:function(e){return g(u({title:k,preview:E,description:d,caption:n,tools:U},D),e)},onMouseEnter:b,onMouseLeave:h,style:P},r().createElement("div",{className:"ms-head"},D.isDraggable&&D.connectDragSource&&D.connectDragSource(r().createElement("div",{className:"mapstore-side-card-tool text-center"},r().createElement("div",{style:{width:10,overflow:"hidden"}},x))),E&&r().createElement("div",{className:"mapstore-side-preview",style:I},E),r().createElement("div",{className:"mapstore-side-card-container"},r().createElement("div",{className:"mapstore-side-card-inner"},r().createElement("div",{className:"mapstore-side-card-left-container"},r().createElement("div",{className:"mapstore-side-card-info"},k&&r().createElement("div",{className:"mapstore-side-card-title"},r().createElement("span",null,k)),d&&r().createElement("div",{className:"mapstore-side-card-desc"},l()(d)?d:r().createElement("span",null,d)),n&&r().createElement("div",{className:"mapstore-side-card-caption"},r().createElement("span",null,n))),o),r().createElement("div",{className:"mapstore-side-card-right-container"},r().createElement("div",{className:"mapstore-side-card-tool text-center",style:j},U),"sm"!==O&&r().createElement("div",{className:"mapstore-side-card-loading"},r().createElement(c.Z,{className:"mapstore-side-card-loader",size:12,hidden:!N})))))),t&&r().createElement("div",{className:"ms-body"},t))}},38064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var o=n(45697),r=n.n(o),i=n(67294),l=n.n(i),c=n(57588),a=n(76424);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},u.apply(this,arguments)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function f(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,o,r,i=(o=s,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(o);if(r){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function s(){return d(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.cardComponent,n=e.items,o=e.colProps,r=e.onItemClick,i=e.size,s=t||a.Z;return l().createElement("div",{className:"msSideGrid"+(this.props.className?" "+this.props.className:"")},l().createElement(c.Row,{className:"items-list"},n.map((function(e,t){return l().createElement(c.Col,u({key:e.id||t},o),l().createElement(s,u({onClick:function(){return r(e)},size:i},e)))}))))}}])&&m(t.prototype,n),s}(l().Component);y(b,"propTypes",{size:r().string,onItemClick:r().func,colProps:r().object,items:r().array,cardComponent:r().oneOfType([r().string,r().func]),className:r().string}),y(b,"defaultProps",{size:"",onItemClick:function(){},colProps:{xs:12},className:"",items:[]});const v=b},75105:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ne});var o=n(67294),r=n.n(o),i=n(33664),l=n(22222),c=n(66113),a=n(66190),s=n(34990),u=n(45697),d=n.n(u),m=n(92579),p=n(5346),f=n(65539),g=n(80717),y=n(90085),b=n(12122),v=n(48403),h=n.n(v),E=n(13311),S=n.n(E),O=n(27361),C=n.n(O),P=n(57588),w=n(2479),I=n(55877),T=n.n(I),j=n(76424),k=n(38064),N=n(25311),Z=n(45567),x=n(42090),U=n.n(x);const D=(0,w.compose)((0,w.withState)("text","setText",(function(e){return e.title})))((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.text,n=e.className,o=void 0===n?"ms-story-title-editable":n,i=e.onUpdate,l=void 0===i?function(){}:i,c=e.setText,a=void 0===c?function(){}:c;return r().createElement(U(),{className:o,html:t,onClick:function(e){e.stopPropagation()},onChange:function(e){a(e.target.value)},onBlur:function(e){l(e.target.innerText)}})}));function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F.apply(this,arguments)}var _=(0,Z.Z)(k.Z),R=(0,N.Z)((function(e){return r().createElement(j.Z,F({},e,{dragSymbol:r().createElement(P.Glyphicon,{glyph:"menu-hamburger"})}))})),z=function(e,t){return function(n){n.stopPropagation(),t(e)}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,n=e.src,o=e.thumbnail,i={text:"sheet",image:"picture",title:"story-title-section",banner:"story-banner-section",paragraph:"story-paragraph-section",immersive:"story-immersive-section",carousel:"story-carousel-section",media:"story-media-section",map:"1-map",columnleft:"align-left",columnright:"align-right",columncenter:"align-center",webPage:"story-webpage-section",video:"play"},l=o||"image"===t&&n;return l?r().createElement("img",{src:l}):r().createElement(P.Glyphicon,{glyph:i[t]||"picture"})},L=(0,w.compose)((0,i.connect)((0,l.P1)(c.jq,(function(e){return{resources:e}}))),(0,w.withProps)((function(e){var t=e.resources,n=e.resourceId;return(S()(t,{id:n})||{}).data})))(B),A={title:function(){return null},paragraph:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onSort,c=e.sectionId,a=e.onUpdate;return r().createElement("div",{style:{position:"relative"}},r().createElement(_,{containerId:t,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var c='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents'),s=e,u=T()();l(c,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n[0].id,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:R,items:n[0].contents.map((function(e){var s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=A[e.type];return{id:e.id,preview:r().createElement(L,{type:s,resourceId:e.resourceId}),tools:r().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:r().createElement(D,{title:e.title||h()(e.type),onUpdate:function(t){return a('sections[{"id": "'.concat(c,'"}].contents[{"id": "').concat(n[0].id,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:t},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:t,onSort:l,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},column:function(e){var t=e.sectionId,n=e.id,o=e.contents,i=e.isCollapsed,l=e.scrollTo,c=e.onSort,a=e.onUpdate,s=e.sectionType;return r().createElement("div",{style:{position:"relative"}},r().createElement(_,{containerId:n,isDraggable:!0,onSort:function(e,o,r,i){if(r.containerId===i.containerId){var l='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(i.id,'"}]'),a='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents'),s=e,u=T()();c(l,a,s,u,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(n,'"}].contents[{"id":"').concat(u,'"}]'))}},cardComponent:R,items:o.map((function(e){var o="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=A[e.type];return{id:e.id,preview:r().createElement(L,{type:o,resourceId:e.resourceId}),tools:r().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",visible:s!==m.ID.CAROUSEL,tooltipId:"geostory.zoomToContent",onClick:z(e.id,l)}]}),title:r().createElement(D,{title:e.title||h()(e.type),onUpdate:function(o){return a('sections[{"id": "'.concat(t,'"}].contents[{"id": "').concat(n,'"}].contents[{"id": "').concat(e.id,'"}]'),{title:o},"merge")}}),description:"type: ".concat(e.type),body:!i&&u&&r().createElement(u,{id:n,onSort:c})}}))}))},immersive:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onUpdate,c=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(_,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),l='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();c(i,l,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:R,items:n.map((function(e){var n="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,s=A[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(B,{type:n}),tools:r().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{glyph:"zoom-to",tooltipId:"geostory.zoomToContent",onClick:z(e.id,i)}]}),title:r().createElement(D,{title:e.title||h()(e.type),onUpdate:function(n){return l('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:s&&r().createElement(s,{id:e.id,sectionId:t,onSort:c,onUpdate:l,scrollTo:i,isCollapsed:o,contents:e.contents})}}))}))},carousel:function(e){var t=e.id,n=e.contents,o=e.isCollapsed,i=e.scrollTo,l=e.onUpdate,c=e.onSort,a=e.currentPage;return r().createElement("div",{style:{position:"relative"}},r().createElement(_,{containerId:t,isDraggable:!0,onSort:function(e,n,o,r){if(o.containerId===r.containerId){var i='sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(r.id,'"}]'),l='sections[{ "id": "'.concat(t,'" }].contents'),a=e,s=T()();c(i,l,a,s,'sections[{ "id": "'.concat(t,'" }].contents[{"id":"').concat(s,'"}]'))}},cardComponent:R,items:n.map((function(e){var n,s="column"===e.type?"".concat(e.type).concat(e.align||"center"):e.type,u=A[e.type];return{className:a&&a.columns&&a.columns[t]&&a.columns[t]===e.id&&a.sectionId===t?"ms-highlight":"",id:e.id,preview:r().createElement(B,{type:s,thumbnail:null==e||null===(n=e.thumbnail)||void 0===n?void 0:n.image}),tools:null,title:r().createElement(D,{key:e.title,title:e.title||h()(e.type),onUpdate:function(n){return l('sections[{"id": "'.concat(t,'"}].contents[{"id":"').concat(e.id,'"}]'),{title:n},"merge")}}),description:"type: ".concat(e.type),body:u&&r().createElement(u,{id:e.id,sectionId:t,onSort:c,onUpdate:l,scrollTo:i,isCollapsed:o,sectionType:m.ID.CAROUSEL,contents:e.contents})}}))}))}},G=function(e){var t=e.scrollTo,n=e.isCollapsed,o=void 0!==n&&n,i=e.currentPage,l=e.onSort,c=e.onSelect,a=e.onUpdate,s=e.selected,u=void 0===s?"title_section_id1":s;return function(e){var n=e.contents,s=e.type,d=e.title,m=e.id,p=A[s];return{id:m,preview:r().createElement(L,{type:s,resourceId:C()(n[0],"background.resourceId")}),className:i&&i.sectionId===m?"ms-highlight":"",onClick:function(){return c(m)},selected:m===u,tools:r().createElement(g.Z,{btnDefaultProps:{className:"square-button-md no-border"},buttons:[{onClick:z(m,t),glyph:"zoom-to",tooltipId:"geostory.zoomToContent"}]}),title:r().createElement(D,{title:d,onUpdate:function(e){return a('sections[{"id": "'.concat(m,'"}]'),{title:e},"merge")}}),description:"type: ".concat(s),body:o?null:p&&r().createElement(p,{id:m,sectionId:m,onSort:l,onUpdate:a,onSelect:c,currentPage:i,selected:u,scrollTo:t,isCollapsed:o,contents:n})}}};const M=function(e){var t=e.sections,n=void 0===t?[]:t,o=e.scrollTo,i=e.onSelect,l=void 0===i?function(){}:i,c=e.isCollapsed,a=e.currentPage,s=e.selected,u=e.onSort,d=e.onUpdate;return r().createElement(_,{isDraggable:!0,onSort:function(e,t,n,o){if("story-sections"===n.containerId&&"story-sections"===o.containerId){var r=T()(),i='sections[{ "id": "'.concat(o.id,'" }]');u(i,"sections",e,r,'sections[{ "id": "'.concat(r,'" }]'))}},containerId:"story-sections",cardComponent:R,size:"sm",items:n.map(G({currentPage:a,onSelect:l,isCollapsed:c,scrollTo:o,selected:s,onUpdate:d,onSort:u}))})};var q=n(45869),K=n(14068),V=n(28388),W=n.n(V),Y=(n(50288),n(93451)),H=n(11766),Q=n(43129);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,r,i=[],l=!0,c=!1;try{for(n=n.call(e);!(l=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);l=!0);}catch(e){c=!0,r=e}finally{try{l||null==n.return||n.return()}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var ne=(0,Y.Z)("placeholder")(P.FormControl),oe=[{value:"14px",label:"14px"},{value:"16px",label:"16px"},{value:"18px",label:"18px"},{value:"24px",label:"24px"},{value:"28px",label:"28px"}];const re=function(e){var t,n,i,l,c,a,s,u,d=e.items,f=void 0===d?[]:d,g=e.settings,y=e.storyFonts,b=e.onToggleSettings,v=void 0===b?function(){}:b,h=e.onUpdateSettings,E=void 0===h?function(){}:h,S=ee((0,o.useState)(g.storyTitle),2),O=S[0],C=S[1],w=ee((0,o.useState)(g.expanded||[]),2),I=w[0],T=w[1],j=y.length>0?y:m.Km;return r().createElement(P.Form,{className:"ms-geostory-settings"},r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyTheme"})),r().createElement("hr",null)),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.theme"}))),r().createElement(H.Z,{themeStyle:null==g||null===(t=g.theme)||void 0===t?void 0:t.general,placement:"right",disableBackgroundAlpha:!0,disableShadow:!0,onChange:function(e){return E("theme",$($({},null==g?void 0:g.theme),{},{general:e}))}})),r().createElement(P.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontFamily"})),r().createElement("div",null,r().createElement(Q.ZP,{value:null==g||null===(n=g.theme)||void 0===n||null===(i=n.general)||void 0===i?void 0:i.fontFamily,onChange:function(e){var t;return E("theme",$($({},null==g?void 0:g.theme),{},{general:$($({},null==g||null===(t=g.theme)||void 0===t?void 0:t.general),{},{fontFamily:e.value})}))},options:(u=j,u.map((function(e){return{label:e,value:e}})))})))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.overlay"}))),r().createElement(H.Z,{themeStyle:null==g||null===(l=g.theme)||void 0===l?void 0:l.overlay,placement:"right",onChange:function(e){return E("theme",$($({},null==g?void 0:g.theme),{},{overlay:e}))}})),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"Links"}))),r().createElement(H.Z,{disableBackgroundPicker:!0,disableShadow:!0,themeStyle:null==g||null===(c=g.theme)||void 0===c?void 0:c.link,placement:"right",onChange:function(e){return E("theme",$($({},null==g?void 0:g.theme),{},{link:e}))}})),r().createElement("div",null,r().createElement("h4",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.storyHeader"})),r().createElement("hr",null)),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.title"})),r().createElement(q.Z,{onChange:function(){return v("isTitleEnabled")},className:"ms-geostory-settings-switch",checked:g.isTitleEnabled})),r().createElement(ne,{disabled:!g.isTitleEnabled,value:O,onChange:function(e){return C(e.target.value)},onBlur:function(e){return E("storyTitle",e.target.value)},placeholder:"geostory.builder.settings.titlePlaceholder",style:{marginTop:"10px"}})),r().createElement(P.FormGroup,null,r().createElement("div",{className:"ms-font-select"},r().createElement("div",null,r().createElement(p.Z,{msgId:"geostory.builder.settings.fontSize"})),r().createElement("div",null,r().createElement(Q.ZP,{disabled:!g.isTitleEnabled,value:g.storyTitleFontSize,onChange:function(e){return E("storyTitleFontSize",e.value)},options:oe,clearable:!1})))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.logo"})),r().createElement(q.Z,{onChange:function(){return v("isLogoEnabled")},className:"ms-geostory-settings-switch",checked:g.isLogoEnabled})),g.isLogoEnabled&&r().createElement(r().Fragment,null,r().createElement(K.Z,{thumbnail:(null==g||null===(a=g.thumbnail)||void 0===a?void 0:a.data)||(null==g||null===(s=g.thumbnail)||void 0===s?void 0:s.url),onUpdate:function(e,t){var n;E("thumbnail",{data:e,url:null==t||null===(n=t[0])||void 0===n?void 0:n.preview}),E("thumbnailErrors",void 0)},onRemove:function(){E("thumbnail",void 0),E("thumbnailErrors",void 0)},onError:function(e){return E("thumbnailErrors",e)},message:r().createElement(p.Z,{msgId:"geostory.builder.settings.logoPlaceholder"}),thumbnailOptions:{width:300,height:150,type:"image/png",contain:!0}}),g.thumbnailErrors&&g.thumbnailErrors.length>0&&r().createElement(P.Alert,{bsStyle:"danger",className:"text-center"},r().createElement("div",null,r().createElement(p.Z,{msgId:"map.error"})),-1!==g.thumbnailErrors.indexOf("FORMAT")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorFormat"})),-1!==g.thumbnailErrors.indexOf("SIZE")&&r().createElement("div",null,r().createElement(p.Z,{msgId:"map.errorSize"}))))),r().createElement(P.FormGroup,null,r().createElement("div",{style:{marginBottom:"10px"}},r().createElement(P.ControlLabel,null,r().createElement(p.Z,{msgId:"geostory.builder.settings.navbar"})),r().createElement(q.Z,{onChange:function(){return v("isNavbarEnabled")},className:"ms-geostory-settings-switch",checked:g.isNavbarEnabled})),g.isNavbarEnabled&&r().createElement(W(),{showNodeIcon:!1,nativeCheckboxes:!0,nodes:f,checked:g.checked||[],expanded:I,onCheck:function(e){return E("checked",e)},onExpand:function(e){return T(e)}})))};function ie(e){return ie="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(e)}function le(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ae(e,t){return ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ae(e,t)}function se(e,t){if(t&&("object"===ie(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function ue(e){return ue=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},ue(e)}function de(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=(0,b.Z)(y.Z),pe=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(c,e);var t,n,o,i,l=(o=c,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=ue(o);if(i){var n=ue(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return se(this,e)});function c(){return le(this,c),l.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.story,n=e.settings,o=e.scrollTo,i=e.setEditing,l=e.mode,c=e.isCollapsed,a=e.isToolbarEnabled,s=e.isSettingsEnabled,u=e.isSettingsChanged,d=e.settingsItems,b=e.onToggleCardPreview,v=e.onToggleSettingsPanel,h=e.onToggleSettings,E=e.onUpdateSettings,S=e.currentPage,O=e.selected,C=e.onRemove,P=e.onSort,w=e.onUpdate,I=e.onSelect,T=e.storyFonts,j=u?me:y.Z;return r().createElement(f.Z,{className:"ms-geostory-builder",header:r().createElement("div",{className:"text-center ms-geostory-builder-header"},r().createElement(g.Z,{btnDefaultProps:{className:"square-button-md",bsStyle:"primary"},transitionProps:!1,buttons:[{visible:!s,Element:function(){return r().createElement(me,{glyph:"trash",bsStyle:"primary",className:"square-button-md no-border",tooltipId:"geostory.builder.delete",confirmTitle:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmTitle"}),disabled:!a||!O,confirmContent:r().createElement(p.Z,{msgId:"geostory.contentToolbar.removeConfirmContent"}),onClick:function(){C(O&&'sections[{ "id": "'.concat(O,'" }]')||"")}})}},{tooltipId:"geostory.builder.preview",glyph:"preview",visible:!s,disabled:!a,onClick:function(){return i(l===m.nl.VIEW)}},{tooltipId:"geostory.builder.settings.tooltip",glyph:"cog",id:"geostory-builder-settings-button",visible:!s,onClick:function(){return v()}},{tooltipId:"geostory.builder.".concat(c?"expandAll":"collapseAll"),glyph:c?"chevron-left":"chevron-down",bsStyle:"primary",disabled:!a,visible:!s,onClick:function(){return b()}},{visible:s,Element:function(){return r().createElement(j,{bsStyle:"primary",glyph:"arrow-left",className:"square-button-md no-border",tooltipId:"geostory.builder.settings.back",confirmTitle:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmTitle"}),confirmContent:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmBody"}),confirmNo:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmNo"}),confirmYes:r().createElement(p.Z,{msgId:"geostory.builder.settings.backConfirmYes"}),onClick:function(){v()}})}},{tooltipId:"geostory.builder.settings.save",glyph:"floppy-disk",visible:s,onClick:function(){return v(!0)}}]}))},s&&r().createElement(re,{items:d,settings:n,onToggleSettings:h,onUpdateSettings:E,storyFonts:T}),a&&!s?r().createElement(M,{currentPage:S,scrollTo:o,onSelect:I,selected:O,onUpdate:w,isCollapsed:c,sections:t&&t.sections,onSort:P}):s?null:r().createElement("div",{className:"ms-story-empty-content-parent"},r().createElement("div",{className:"ms-story-empty-content-child"},r().createElement(p.Z,{msgId:"geostory.builder.noContents"}))))}}])&&ce(t.prototype,n),c}(r().Component);de(pe,"propTypes",{currentPage:d().object,settingsItems:d().array,story:d().object,settings:d().object,mode:d().oneOf(m.lg.Modes),onToggleCardPreview:d().func,onToggleSettingsPanel:d().func,onToggleSettings:d().func,onUpdateSettings:d().func,isCollapsed:d().bool,isToolbarEnabled:d().bool,isSettingsEnabled:d().bool,isSettingsChanged:d().bool,scrollTo:d().func,setEditing:d().func,onSort:d().func,onSelect:d().func,onRemove:d().func,onUpdate:d().func,selected:d().string,storyFonts:d().array}),de(pe,"defaultProps",{mode:m.nl.VIEW,setEditing:function(){},onToggleCardPreview:function(){},onToggleSettingsPanel:function(){},story:{},settings:{},isCollapsed:!0,isToolbarEnabled:!0,isSettingsEnabled:!1,onSort:function(){}});const fe=pe;var ge=n(31398),ye=n(22843),be=n(15135),ve=n(5803),he=n(8575),Ee=n(95659),Se=n.n(Ee),Oe=(n(13880),["hash"]);function Ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function Pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ce(Object(n),!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ie(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Te=n(82467),je=(0,be.Z)(Te.Z),ke=(0,i.connect)((0,l.zB)({isEditAllowed:c.pu}),{setEditingMode:s.D_})((function(e){var t=e.isEditAllowed,n=e.setEditingMode,o=void 0===n?function(){}:n,i=e.location,l=e.history;return t?r().createElement(je,{id:"edit-story",className:"square-button-md no-border",onClick:function(){o(!0);var e=i.pathname;if(e.includes("/geostory/shared")){var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=he.parse(e),n=t.hash,o=void 0===n?"":n,r=Ie(t,Oe),i=he.parse(o&&Se()(o,"#")||""),l=he.format(Pe(Pe({},i),{},{query:null,search:null}));return he.format(Pe(Pe({},r),{},{query:null,search:null,hash:l?"#".concat(l):null}))}(e.replace("/geostory/shared","/geostory"));l.push(t)}},tooltipId:"geostory.navigation.edit",tooltipPosition:"bottom"},r().createElement(P.Glyphicon,{glyph:"pencil"})):null}));const Ne=(0,ye.rx)("GeoStoryEditor",{component:(0,i.connect)((0,l.zB)({isCollapsed:c.eg,mode:c.eK,story:c.Kg,currentPage:c.PR,settingsItems:c.yL,settings:c.TQ,isSettingsChanged:c.KR,isToolbarEnabled:c.Lu,selected:c.sY,isSettingsEnabled:c.W5,isFocused:c.z7,storyFonts:c.mm}),{setEditingMode:s.D_,onUpdateSettings:s.m7,onToggleCardPreview:s.kB,onToggleSettingsPanel:s.G5,onToggleSettings:s.Xn,onRemove:s.Od,onSelect:s._e,onSort:s.pB,onUpdate:s.Vx,onBasicError:ge.d})((function(e){var t=e.currentPage,n=e.isCollapsed,o=e.isSettingsChanged,i=void 0!==o&&o,l=e.isSettingsEnabled,c=e.isToolbarEnabled,a=e.isFocused,s=void 0!==a&&a,u=e.mode,d=void 0===u?m.nl.VIEW:u,p=e.story,f=void 0===p?{}:p,g=e.settings,y=void 0===g?{}:g,b=e.settingsItems,v=e.selected,h=e.storyFonts,E=void 0===h?[]:h,S=e.setEditingMode,O=void 0===S?function(){}:S,C=e.onToggleCardPreview,P=void 0===C?function(){}:C,w=e.onToggleSettingsPanel,I=void 0===w?function(){}:w,T=e.onToggleSettings,j=void 0===T?function(){}:T,k=e.onUpdateSettings,N=void 0===k?function(){}:k,Z=e.onSelect,x=void 0===Z?function(){}:Z,U=e.onRemove,D=void 0===U?function(){}:U,F=e.onUpdate,_=void 0===F?function(){}:F,R=e.onSort,z=void 0===R?function(){}:R;return d!==m.nl.EDIT||s?null:r().createElement("div",{key:"left-column",className:"ms-geostory-editor",style:{order:-1,width:400,position:"relative"}},r().createElement(fe,{currentPage:t,isCollapsed:n,isSettingsChanged:i,isSettingsEnabled:l,isToolbarEnabled:c,mode:d,scrollTo:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{behavior:"smooth"};(0,m.M1)(e,t)},selected:v,settings:y,settingsItems:b,story:f,storyFonts:(0,m._R)(E),setEditing:O,onRemove:D,onSelect:x,onSort:z,onToggleCardPreview:P,onToggleSettings:j,onToggleSettingsPanel:I,onUpdate:_,onUpdateSettings:N}))})),containers:{GeoStoryNavigation:{tool:(0,ve.EN)(ke)}},reducers:{geostory:a.Z}})}}]);