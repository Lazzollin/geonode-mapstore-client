(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[74738],{666901:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});const n={IMAGE:"IMAGE",TILE:"TILE",VECTOR_TILE:"VECTOR_TILE",VECTOR:"VECTOR"}},85386:(t,e,o)=>{"use strict";function n(t,e){var o=document.createElement("canvas");return t&&(o.width=t),e&&(o.height=e),o.getContext("2d")}function r(t){var e=t.offsetWidth,o=getComputedStyle(t);return e+(parseInt(o.marginLeft,10)+parseInt(o.marginRight,10))}function i(t){var e=t.offsetHeight,o=getComputedStyle(t);return e+(parseInt(o.marginTop,10)+parseInt(o.marginBottom,10))}function s(t,e){var o=e.parentNode;o&&o.replaceChild(t,e)}function u(t){return t&&t.parentNode?t.parentNode.removeChild(t):null}function p(t){for(;t.lastChild;)t.removeChild(t.lastChild)}o.d(e,{E4:()=>n,iO:()=>r,Pb:()=>i,$H:()=>s,ZF:()=>u,ep:()=>p})},910410:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>p});var n=o(949179),r=o(558493),i=o(428192),s=o(921882),u=o(913580);const p=function(t){function e(e){t.call(this);var o=(0,u.f0)({},e);o[i.Z.OPACITY]=void 0!==e.opacity?e.opacity:1,o[i.Z.VISIBLE]=void 0===e.visible||e.visible,o[i.Z.Z_INDEX]=e.zIndex,o[i.Z.MAX_RESOLUTION]=void 0!==e.maxResolution?e.maxResolution:1/0,o[i.Z.MIN_RESOLUTION]=void 0!==e.minResolution?e.minResolution:0,this.setProperties(o),this.state_=null,this.type}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getType=function(){return this.type},e.prototype.getLayerState=function(){var t=this.state_||{layer:this,managed:!0};return t.opacity=(0,s.uZ)(this.getOpacity(),0,1),t.sourceState=this.getSourceState(),t.visible=this.getVisible(),t.extent=this.getExtent(),t.zIndex=this.getZIndex()||0,t.maxResolution=this.getMaxResolution(),t.minResolution=Math.max(this.getMinResolution(),0),this.state_=t,t},e.prototype.getLayersArray=function(t){return(0,n.O3)()},e.prototype.getLayerStatesArray=function(t){return(0,n.O3)()},e.prototype.getExtent=function(){return this.get(i.Z.EXTENT)},e.prototype.getMaxResolution=function(){return this.get(i.Z.MAX_RESOLUTION)},e.prototype.getMinResolution=function(){return this.get(i.Z.MIN_RESOLUTION)},e.prototype.getOpacity=function(){return this.get(i.Z.OPACITY)},e.prototype.getSourceState=function(){return(0,n.O3)()},e.prototype.getVisible=function(){return this.get(i.Z.VISIBLE)},e.prototype.getZIndex=function(){return this.get(i.Z.Z_INDEX)},e.prototype.setExtent=function(t){this.set(i.Z.EXTENT,t)},e.prototype.setMaxResolution=function(t){this.set(i.Z.MAX_RESOLUTION,t)},e.prototype.setMinResolution=function(t){this.set(i.Z.MIN_RESOLUTION,t)},e.prototype.setOpacity=function(t){this.set(i.Z.OPACITY,t)},e.prototype.setVisible=function(t){this.set(i.Z.VISIBLE,t)},e.prototype.setZIndex=function(t){this.set(i.Z.Z_INDEX,t)},e}(r.ZP)},677701:(t,e,o)=>{"use strict";o.d(e,{l:()=>l,Z:()=>_});var n=o(613002),r=o(173381),i=o(949179),s=o(558493),u=o(910410),p=o(428192),a=o(913580),h=o(397208),c=o(582418);function l(t,e){return t.visible&&e>=t.minResolution&&e<t.maxResolution}const _=function(t){function e(e){var o=(0,a.f0)({},e);delete o.source,t.call(this,o),this.mapPrecomposeKey_=null,this.mapRenderKey_=null,this.sourceChangeKey_=null,e.map&&this.setMap(e.map),(0,n.oL)(this,(0,s.v_)(p.Z.SOURCE),this.handleSourcePropertyChange_,this);var r=e.source?e.source:null;this.setSource(r)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getLayersArray=function(t){var e=t||[];return e.push(this),e},e.prototype.getLayerStatesArray=function(t){var e=t||[];return e.push(this.getLayerState()),e},e.prototype.getSource=function(){return this.get(p.Z.SOURCE)||null},e.prototype.getSourceState=function(){var t=this.getSource();return t?t.getState():c.Z.UNDEFINED},e.prototype.handleSourceChange_=function(){this.changed()},e.prototype.handleSourcePropertyChange_=function(){this.sourceChangeKey_&&((0,n.bN)(this.sourceChangeKey_),this.sourceChangeKey_=null);var t=this.getSource();t&&(this.sourceChangeKey_=(0,n.oL)(t,r.Z.CHANGE,this.handleSourceChange_,this)),this.changed()},e.prototype.setMap=function(t){this.mapPrecomposeKey_&&((0,n.bN)(this.mapPrecomposeKey_),this.mapPrecomposeKey_=null),t||this.changed(),this.mapRenderKey_&&((0,n.bN)(this.mapRenderKey_),this.mapRenderKey_=null),t&&(this.mapPrecomposeKey_=(0,n.oL)(t,h.Z.PRECOMPOSE,(function(t){var e=t,o=this.getLayerState();o.managed=!1,void 0===this.getZIndex()&&(o.zIndex=1/0),e.frameState.layerStatesArray.push(o),e.frameState.layerStates[(0,i.sq)(this)]=o}),this),this.mapRenderKey_=(0,n.oL)(this,r.Z.CHANGE,t.render,t),this.changed())},e.prototype.setSource=function(t){this.set(p.Z.SOURCE,t)},e}(u.default)},428192:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});const n={OPACITY:"opacity",VISIBLE:"visible",EXTENT:"extent",Z_INDEX:"zIndex",MAX_RESOLUTION:"maxResolution",MIN_RESOLUTION:"minResolution",SOURCE:"source"}},397208:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});const n={POSTCOMPOSE:"postcompose",PRECOMPOSE:"precompose",RENDER:"render",RENDERCOMPLETE:"rendercomplete"}},771405:(t,e,o)=>{"use strict";o.d(e,{Z:()=>p});var n=o(949179),r=o(558493),i=o(218672),s=o(582418);function u(t){return t?Array.isArray(t)?function(e){return t}:"function"==typeof t?t:function(e){return[t]}:null}const p=function(t){function e(e){t.call(this),this.projection_=(0,i.U2)(e.projection),this.attributions_=u(e.attributions),this.attributionsCollapsible_=void 0===e.attributionsCollapsible||e.attributionsCollapsible,this.loading=!1,this.state_=void 0!==e.state?e.state:s.Z.READY,this.wrapX_=void 0!==e.wrapX&&e.wrapX}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getAttributions=function(){return this.attributions_},e.prototype.getAttributionsCollapsible=function(){return this.attributionsCollapsible_},e.prototype.getProjection=function(){return this.projection_},e.prototype.getResolutions=function(){return(0,n.O3)()},e.prototype.getState=function(){return this.state_},e.prototype.getWrapX=function(){return this.wrapX_},e.prototype.refresh=function(){this.changed()},e.prototype.setAttributions=function(t){this.attributions_=u(t),this.changed()},e.prototype.setState=function(t){this.state_=t,this.changed()},e}(r.ZP)},582418:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});const n={UNDEFINED:"undefined",LOADING:"loading",READY:"ready",ERROR:"error"}},83482:(t,e,o)=>{"use strict";o.d(e,{Z:()=>s});var n=o(438906),r=o(66575),i=o(173381);const s=function(t){function e(e){t.call(this),this.highWaterMark=void 0!==e?e:2048,this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.canExpireCache=function(){return this.getCount()>this.highWaterMark},e.prototype.clear=function(){this.count_=0,this.entries_={},this.oldest_=null,this.newest_=null,this.dispatchEvent(i.Z.CLEAR)},e.prototype.containsKey=function(t){return this.entries_.hasOwnProperty(t)},e.prototype.forEach=function(t,e){for(var o=this.oldest_;o;)t.call(e,o.value_,o.key_,this),o=o.newer},e.prototype.get=function(t){var e=this.entries_[t];return(0,n.h)(void 0!==e,15),e===this.newest_||(e===this.oldest_?(this.oldest_=this.oldest_.newer,this.oldest_.older=null):(e.newer.older=e.older,e.older.newer=e.newer),e.newer=null,e.older=this.newest_,this.newest_.newer=e,this.newest_=e),e.value_},e.prototype.remove=function(t){var e=this.entries_[t];return(0,n.h)(void 0!==e,15),e===this.newest_?(this.newest_=e.older,this.newest_&&(this.newest_.newer=null)):e===this.oldest_?(this.oldest_=e.newer,this.oldest_&&(this.oldest_.older=null)):(e.newer.older=e.older,e.older.newer=e.newer),delete this.entries_[t],--this.count_,e.value_},e.prototype.getCount=function(){return this.count_},e.prototype.getKeys=function(){var t,e=new Array(this.count_),o=0;for(t=this.newest_;t;t=t.older)e[o++]=t.key_;return e},e.prototype.getValues=function(){var t,e=new Array(this.count_),o=0;for(t=this.newest_;t;t=t.older)e[o++]=t.value_;return e},e.prototype.peekLast=function(){return this.oldest_.value_},e.prototype.peekLastKey=function(){return this.oldest_.key_},e.prototype.peekFirstKey=function(){return this.newest_.key_},e.prototype.pop=function(){var t=this.oldest_;return delete this.entries_[t.key_],t.newer&&(t.newer.older=null),this.oldest_=t.newer,this.oldest_||(this.newest_=null),--this.count_,t.value_},e.prototype.replace=function(t,e){this.get(t),this.entries_[t].value_=e},e.prototype.set=function(t,e){(0,n.h)(!(t in this.entries_),16);var o={key_:t,newer:null,older:this.newest_,value_:e};this.newest_?this.newest_.newer=o:this.oldest_=o,this.newest_=o,this.entries_[t]=o,++this.count_},e.prototype.setSize=function(t){this.highWaterMark=t},e.prototype.prune=function(){for(;this.canExpireCache();)this.pop()},e}(r.Z)}}]);