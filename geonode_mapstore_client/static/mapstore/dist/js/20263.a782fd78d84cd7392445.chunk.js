(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[20263,76385],{623068:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var o=i(438906),n=i(613002),r=i(173381),s=i(558493);const a=function(t){function e(e){if(t.call(this),this.id_=void 0,this.geometryName_="geometry",this.style_=null,this.styleFunction_=void 0,this.geometryChangeKey_=null,(0,n.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),e)if("function"==typeof e.getSimplifiedGeometry){var i=e;this.setGeometry(i)}else{var o=e;this.setProperties(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){var t=new e(this.getProperties());t.setGeometryName(this.getGeometryName());var i=this.getGeometry();i&&t.setGeometry(i.clone());var o=this.getStyle();return o&&t.setStyle(o),t},e.prototype.getGeometry=function(){return this.get(this.geometryName_)},e.prototype.getId=function(){return this.id_},e.prototype.getGeometryName=function(){return this.geometryName_},e.prototype.getStyle=function(){return this.style_},e.prototype.getStyleFunction=function(){return this.styleFunction_},e.prototype.handleGeometryChange_=function(){this.changed()},e.prototype.handleGeometryChanged_=function(){this.geometryChangeKey_&&((0,n.bN)(this.geometryChangeKey_),this.geometryChangeKey_=null);var t=this.getGeometry();t&&(this.geometryChangeKey_=(0,n.oL)(t,r.Z.CHANGE,this.handleGeometryChange_,this)),this.changed()},e.prototype.setGeometry=function(t){this.set(this.geometryName_,t)},e.prototype.setStyle=function(t){var e,i;this.style_=t,this.styleFunction_=t?"function"==typeof(e=t)?e:(Array.isArray(e)?i=e:((0,o.h)("function"==typeof e.getZIndex,41),i=[e]),function(){return i}):void 0,this.changed()},e.prototype.setId=function(t){this.id_=t,this.changed()},e.prototype.setGeometryName=function(t){(0,n.Ev)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.geometryName_=t,(0,n.oL)(this,(0,s.v_)(this.geometryName_),this.handleGeometryChanged_,this),this.handleGeometryChanged_()},e}(s.ZP)},116892:(t,e,i)=>{"use strict";i.d(e,{Z:()=>T});var o=i(558493),n=i(613002),r=i(9520),s=i(173381),a=i(15265),h=i(591358),p=i(921882),c=i(218672),d="accuracy",u="accuracyGeometry",g="altitude",l="altitudeAccuracy",f="heading",y="position",m="projection",_="speed",v="tracking",C="trackingOptions",E=function(t){function e(e){t.call(this,s.Z.ERROR),this.code=e.code,this.message=e.message}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(r.ZP);const T=function(t){function e(e){t.call(this);var i=e||{};this.position_=null,this.transform_=c.gD,this.watchId_=void 0,(0,n.oL)(this,(0,o.v_)(m),this.handleProjectionChanged_,this),(0,n.oL)(this,(0,o.v_)(v),this.handleTrackingChanged_,this),void 0!==i.projection&&this.setProjection(i.projection),void 0!==i.trackingOptions&&this.setTrackingOptions(i.trackingOptions),this.setTracking(void 0!==i.tracking&&i.tracking)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.disposeInternal=function(){this.setTracking(!1),t.prototype.disposeInternal.call(this)},e.prototype.handleProjectionChanged_=function(){var t=this.getProjection();t&&(this.transform_=(0,c.WO)((0,c.U2)("EPSG:4326"),t),this.position_&&this.set(y,this.transform_(this.position_)))},e.prototype.handleTrackingChanged_=function(){if(h.De){var t=this.getTracking();t&&void 0===this.watchId_?this.watchId_=navigator.geolocation.watchPosition(this.positionChange_.bind(this),this.positionError_.bind(this),this.getTrackingOptions()):t||void 0===this.watchId_||(navigator.geolocation.clearWatch(this.watchId_),this.watchId_=void 0)}},e.prototype.positionChange_=function(t){var e=t.coords;this.set(d,e.accuracy),this.set(g,null===e.altitude?void 0:e.altitude),this.set(l,null===e.altitudeAccuracy?void 0:e.altitudeAccuracy),this.set(f,null===e.heading?void 0:(0,p.Yr)(e.heading)),this.position_?(this.position_[0]=e.longitude,this.position_[1]=e.latitude):this.position_=[e.longitude,e.latitude];var i=this.transform_(this.position_);this.set(y,i),this.set(_,null===e.speed?void 0:e.speed);var o=(0,a.iu)(this.position_,e.accuracy);o.applyTransform(this.transform_),this.set(u,o),this.changed()},e.prototype.positionError_=function(t){this.setTracking(!1),this.dispatchEvent(new E(t))},e.prototype.getAccuracy=function(){return this.get(d)},e.prototype.getAccuracyGeometry=function(){return this.get(u)||null},e.prototype.getAltitude=function(){return this.get(g)},e.prototype.getAltitudeAccuracy=function(){return this.get(l)},e.prototype.getHeading=function(){return this.get(f)},e.prototype.getPosition=function(){return this.get(y)},e.prototype.getProjection=function(){return this.get(m)},e.prototype.getSpeed=function(){return this.get(_)},e.prototype.getTracking=function(){return this.get(v)},e.prototype.getTrackingOptions=function(){return this.get(C)},e.prototype.setProjection=function(t){this.set(m,(0,c.U2)(t))},e.prototype.setTracking=function(t){this.set(v,t)},e.prototype.setTrackingOptions=function(t){this.set(C,t)},e}(o.ZP)},540188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},193409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>f});var o=i(540188),n=i(558493),r=i(12868),s=i(267644),a=i(85386),h=i(613002),p=i(421915),c="element",d="map",u="offset",g="position",l="positioning";const f=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+s.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,h.oL)(this,(0,n.v_)(c),this.handleElementChanged,this),(0,h.oL)(this,(0,n.v_)(d),this.handleMapChanged,this),(0,h.oL)(this,(0,n.v_)(u),this.handleOffsetChanged,this),(0,h.oL)(this,(0,n.v_)(g),this.handlePositionChanged,this),(0,h.oL)(this,(0,n.v_)(l),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:r.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(c)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(d)},e.prototype.getOffset=function(){return this.get(u)},e.prototype.getPosition=function(){return this.get(g)},e.prototype.getPositioning=function(){return this.get(l)},e.prototype.handleElementChanged=function(){(0,a.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,a.ZF)(this.element),(0,h.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,h.oL)(t,o.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(g)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(c,t)},e.prototype.setMap=function(t){this.set(d,t)},e.prototype.setOffset=function(t){this.set(u,t)},e.prototype.setPosition=function(t){this.set(g,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),o=this.getRect(i,[(0,a.iO)(i),(0,a.Pb)(i)]),n=this.autoPanMargin;if(!(0,p.r4)(e,o)){var r=o[0]-e[0],s=e[2]-o[2],h=o[1]-e[1],c=e[3]-o[3],d=[0,0];if(r<0?d[0]=r-n:s<0&&(d[0]=Math.abs(s)+n),h<0?d[1]=h-n:c<0&&(d[1]=Math.abs(c)+n),0!==d[0]||0!==d[1]){var u=t.getView().getCenter(),g=t.getPixelFromCoordinate(u),l=[g[0]+d[0],g[1]+d[1]];t.getView().animate({center:t.getCoordinateFromPixel(l),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),o=i.left+window.pageXOffset,n=i.top+window.pageYOffset;return[o,n,o+e[0],n+e[1]]},e.prototype.setPositioning=function(t){this.set(l,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),o=t.getSize();this.updateRenderedPosition(i,o)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,o=this.getOffset(),n=this.getPositioning();this.setVisible(!0);var s=o[0],a=o[1];if(n==r.Z.BOTTOM_RIGHT||n==r.Z.CENTER_RIGHT||n==r.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var h=Math.round(e[0]-t[0]-s)+"px";this.rendered.right_!=h&&(this.rendered.right_=i.right=h)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),n!=r.Z.BOTTOM_CENTER&&n!=r.Z.CENTER_CENTER&&n!=r.Z.TOP_CENTER||(s-=this.element.offsetWidth/2);var p=Math.round(t[0]+s)+"px";this.rendered.left_!=p&&(this.rendered.left_=i.left=p)}if(n==r.Z.BOTTOM_LEFT||n==r.Z.BOTTOM_CENTER||n==r.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var c=Math.round(e[1]-t[1]-a)+"px";this.rendered.bottom_!=c&&(this.rendered.bottom_=i.bottom=c)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),n!=r.Z.CENTER_LEFT&&n!=r.Z.CENTER_CENTER&&n!=r.Z.CENTER_RIGHT||(a-=this.element.offsetHeight/2);var d=Math.round(t[1]+a)+"px";this.rendered.top_!=d&&(this.rendered.top_=i.top=d)}},e.prototype.getOptions=function(){return this.options},e}(n.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}},934007:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});const o={ARRAY_BUFFER:"arraybuffer",JSON:"json",TEXT:"text",XML:"xml"}},869669:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var o=i(421915),n=i(28795),r=i(432538),s=i(438667),a=function(t){function e(e,i,o){if(t.call(this),void 0!==o&&void 0===i)this.setFlatCoordinates(o,e);else{var n=i||0;this.setCenterAndRadius(e,n,o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.clone=function(){return new e(this.flatCoordinates.slice(),void 0,this.layout)},e.prototype.closestPointXY=function(t,e,i,o){var n=this.flatCoordinates,r=t-n[0],s=e-n[1],a=r*r+s*s;if(a<o){if(0===a)for(var h=0;h<this.stride;++h)i[h]=n[h];else{var p=this.getRadius()/Math.sqrt(a);i[0]=n[0]+p*r,i[1]=n[1]+p*s;for(var c=2;c<this.stride;++c)i[c]=n[c]}return i.length=this.stride,a}return o},e.prototype.containsXY=function(t,e){var i=this.flatCoordinates,o=t-i[0],n=e-i[1];return o*o+n*n<=this.getRadiusSquared_()},e.prototype.getCenter=function(){return this.flatCoordinates.slice(0,this.stride)},e.prototype.computeExtent=function(t){var e=this.flatCoordinates,i=e[this.stride]-e[0];return(0,o.T9)(e[0]-i,e[1]-i,e[0]+i,e[1]+i,t)},e.prototype.getRadius=function(){return Math.sqrt(this.getRadiusSquared_())},e.prototype.getRadiusSquared_=function(){var t=this.flatCoordinates[this.stride]-this.flatCoordinates[0],e=this.flatCoordinates[this.stride+1]-this.flatCoordinates[1];return t*t+e*e},e.prototype.getType=function(){return n.Z.CIRCLE},e.prototype.intersectsExtent=function(t){var e=this.getExtent();if((0,o.kK)(t,e)){var i=this.getCenter();return t[0]<=i[0]&&t[2]>=i[0]||t[1]<=i[1]&&t[3]>=i[1]||(0,o.H6)(t,this.intersectsCoordinate,this)}return!1},e.prototype.setCenter=function(t){var e=this.stride,i=this.flatCoordinates[e]-this.flatCoordinates[0],o=t.slice();o[e]=o[0]+i;for(var n=1;n<e;++n)o[e+n]=t[n];this.setFlatCoordinates(this.layout,o),this.changed()},e.prototype.setCenterAndRadius=function(t,e,i){this.setLayout(i,t,0),this.flatCoordinates||(this.flatCoordinates=[]);var o=this.flatCoordinates,n=(0,s.IG)(o,0,t,this.stride);o[n++]=o[0]+e;for(var r=1,a=this.stride;r<a;++r)o[n++]=o[r];o.length=n,this.changed()},e.prototype.getCoordinates=function(){return null},e.prototype.setCoordinates=function(t,e){},e.prototype.setRadius=function(t){this.flatCoordinates[this.stride]=this.flatCoordinates[0]+t,this.changed()},e}(r.ZP);a.prototype.transform;const h=a},798090:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});var o=i(613002),n=i(173381),r=i(421915),s=i(208204),a=i(28795),h=i(913580);function p(t){for(var e=[],i=0,o=t.length;i<o;++i)e.push(t[i].clone());return e}const c=function(t){function e(e){t.call(this),this.geometries_=e||null,this.listenGeometriesChange_()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.unlistenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)(0,o.Ev)(this.geometries_[t],n.Z.CHANGE,this.changed,this)},e.prototype.listenGeometriesChange_=function(){if(this.geometries_)for(var t=0,e=this.geometries_.length;t<e;++t)(0,o.oL)(this.geometries_[t],n.Z.CHANGE,this.changed,this)},e.prototype.clone=function(){var t=new e(null);return t.setGeometries(this.geometries_),t},e.prototype.closestPointXY=function(t,e,i,o){if(o<(0,r.qf)(this.getExtent(),t,e))return o;for(var n=this.geometries_,s=0,a=n.length;s<a;++s)o=n[s].closestPointXY(t,e,i,o);return o},e.prototype.containsXY=function(t,e){for(var i=this.geometries_,o=0,n=i.length;o<n;++o)if(i[o].containsXY(t,e))return!0;return!1},e.prototype.computeExtent=function(t){(0,r.YN)(t);for(var e=this.geometries_,i=0,o=e.length;i<o;++i)(0,r.l7)(t,e[i].getExtent());return t},e.prototype.getGeometries=function(){return p(this.geometries_)},e.prototype.getGeometriesArray=function(){return this.geometries_},e.prototype.getSimplifiedGeometry=function(t){if(this.simplifiedGeometryRevision!=this.getRevision()&&((0,h.ZH)(this.simplifiedGeometryCache),this.simplifiedGeometryMaxMinSquaredTolerance=0,this.simplifiedGeometryRevision=this.getRevision()),t<0||0!==this.simplifiedGeometryMaxMinSquaredTolerance&&t<this.simplifiedGeometryMaxMinSquaredTolerance)return this;var i=t.toString();if(this.simplifiedGeometryCache.hasOwnProperty(i))return this.simplifiedGeometryCache[i];for(var o=[],n=this.geometries_,r=!1,s=0,a=n.length;s<a;++s){var p=n[s],c=p.getSimplifiedGeometry(t);o.push(c),c!==p&&(r=!0)}if(r){var d=new e(null);return d.setGeometriesArray(o),this.simplifiedGeometryCache[i]=d,d}return this.simplifiedGeometryMaxMinSquaredTolerance=t,this},e.prototype.getType=function(){return a.Z.GEOMETRY_COLLECTION},e.prototype.intersectsExtent=function(t){for(var e=this.geometries_,i=0,o=e.length;i<o;++i)if(e[i].intersectsExtent(t))return!0;return!1},e.prototype.isEmpty=function(){return 0===this.geometries_.length},e.prototype.rotate=function(t,e){for(var i=this.geometries_,o=0,n=i.length;o<n;++o)i[o].rotate(t,e);this.changed()},e.prototype.scale=function(t,e,i){var o=i;o||(o=(0,r.qg)(this.getExtent()));for(var n=this.geometries_,s=0,a=n.length;s<a;++s)n[s].scale(t,e,o);this.changed()},e.prototype.setGeometries=function(t){this.setGeometriesArray(p(t))},e.prototype.setGeometriesArray=function(t){this.unlistenGeometriesChange_(),this.geometries_=t,this.listenGeometriesChange_(),this.changed()},e.prototype.applyTransform=function(t){for(var e=this.geometries_,i=0,o=e.length;i<o;++i)e[i].applyTransform(t);this.changed()},e.prototype.translate=function(t,e){for(var i=this.geometries_,o=0,n=i.length;o<n;++o)i[o].translate(t,e);this.changed()},e.prototype.disposeInternal=function(){this.unlistenGeometriesChange_(),t.prototype.disposeInternal.call(this)},e}(s.Z)},591358:(t,e,i)=>{"use strict";i.d(e,{V:()=>n,vw:()=>r,G$:()=>s,tK:()=>a,MP:()=>h,XQ:()=>p,De:()=>c,Qm:()=>d,GQ:()=>u,NL:()=>g});var o="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",n=-1!==o.indexOf("firefox"),r=-1!==o.indexOf("safari")&&-1==o.indexOf("chrom"),s=-1!==o.indexOf("webkit")&&-1==o.indexOf("edge"),a=-1!==o.indexOf("macintosh"),h=window.devicePixelRatio||1,p=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),c="geolocation"in navigator,d="ontouchstart"in window,u="PointerEvent"in window,g=!!navigator.msPointerEnabled}}]);