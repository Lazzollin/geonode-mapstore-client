(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[38920],{30006:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(173381);const o={SINGLECLICK:"singleclick",CLICK:r.Z.CLICK,DBLCLICK:r.Z.DBLCLICK,POINTERDRAG:"pointerdrag",POINTERMOVE:"pointermove",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",POINTEROVER:"pointerover",POINTEROUT:"pointerout",POINTERENTER:"pointerenter",POINTERLEAVE:"pointerleave",POINTERCANCEL:"pointercancel"}},690728:(t,e,n)=>{"use strict";function r(t,e){return t[0]+=e[0],t[1]+=e[1],t}function o(t,e){var n=e.getRadius(),r=e.getCenter(),o=r[0],i=r[1],a=t[0]-o,u=t[1]-i;0===a&&0===u&&(a=1);var c=Math.sqrt(a*a+u*u);return[o+n*a/c,i+n*u/c]}function i(t,e){var n,r,o=t[0],i=t[1],a=e[0],u=e[1],c=a[0],s=a[1],v=u[0],p=u[1],l=v-c,d=p-s,h=0===l&&0===d?0:(l*(o-c)+d*(i-s))/(l*l+d*d||0);return h<=0?(n=c,r=s):h>=1?(n=v,r=p):(n=c+h*l,r=s+h*d),[n,r]}function a(t,e){for(var n=!0,r=t.length-1;r>=0;--r)if(t[r]!=e[r]){n=!1;break}return n}function u(t,e){var n=Math.cos(e),r=Math.sin(e),o=t[0]*n-t[1]*r,i=t[1]*n+t[0]*r;return t[0]=o,t[1]=i,t}function c(t,e){return t[0]*=e,t[1]*=e,t}function s(t,e){var n=t[0]-e[0],r=t[1]-e[1];return n*n+r*r}function v(t,e){return Math.sqrt(s(t,e))}function p(t,e){return s(t,i(t,e))}n.d(e,{IH:()=>r,Ed:()=>o,oL:()=>i,fS:()=>a,U1:()=>u,bA:()=>c,bI:()=>s,TE:()=>v,Bs:()=>p})},286320:(t,e,n)=>{"use strict";function r(t){return Math.pow(t,3)}function o(t){return 1-r(1-t)}function i(t){return 3*t*t-2*t*t*t}function a(t){return t}n.d(e,{YQ:()=>r,Vv:()=>o,rd:()=>i,GE:()=>a})},436403:(t,e,n)=>{"use strict";n.d(e,{Ko:()=>u,aj:()=>c,T_:()=>s,Bx:()=>v,v8:()=>p,Fi:()=>l,MJ:()=>d,Kf:()=>h,rM:()=>f,QC:()=>E,vY:()=>g,TN:()=>y,QL:()=>P,Xp:()=>C});var r=n(30006),o=n(438906),i=n(864011),a=n(591358),u=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},c=function(t){var e=t.originalEvent;return e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},s=function(t){return t.target.getTargetElement()===document.activeElement},v=i.uX,p=function(t){var e=t.originalEvent;return 0==e.button&&!(a.G$&&a.tK&&e.ctrlKey)},l=i.Dv,d=function(t){return"pointermove"==t.type},h=function(t){return t.type==r.Z.SINGLECLICK},f=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&!e.shiftKey},E=function(t){var e=t.originalEvent;return!e.altKey&&(a.tK?e.metaKey:e.ctrlKey)&&!e.shiftKey},g=function(t){var e=t.originalEvent;return!e.altKey&&!(e.metaKey||e.ctrlKey)&&e.shiftKey},y=function(t){var e=t.originalEvent.target.tagName;return"INPUT"!==e&&"SELECT"!==e&&"TEXTAREA"!==e},P=function(t){var e=t.pointerEvent;return(0,o.h)(void 0!==e,56),"mouse"==e.pointerType},C=function(t){var e=t.pointerEvent;return(0,o.h)(void 0!==e,56),e.isPrimary&&0===e.button}},591358:(t,e,n)=>{"use strict";n.d(e,{V:()=>o,vw:()=>i,G$:()=>a,tK:()=>u,MP:()=>c,XQ:()=>s,De:()=>v,Qm:()=>p,GQ:()=>l,NL:()=>d});var r="undefined"!=typeof navigator?navigator.userAgent.toLowerCase():"",o=-1!==r.indexOf("firefox"),i=-1!==r.indexOf("safari")&&-1==r.indexOf("chrom"),a=-1!==r.indexOf("webkit")&&-1==r.indexOf("edge"),u=-1!==r.indexOf("macintosh"),c=window.devicePixelRatio||1,s=function(){var t=!1;try{t=!!document.createElement("canvas").getContext("2d").setLineDash}catch(t){}return t}(),v="geolocation"in navigator,p="ontouchstart"in window,l="PointerEvent"in window,d=!!navigator.msPointerEnabled},718369:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var r=n(30006),o=n(247588);function i(t){var e=!1;if(t.type==r.Z.DBLCLICK){var n=t.originalEvent,i=t.map,a=t.coordinate,u=n.shiftKey?-this.delta_:this.delta_,c=i.getView();(0,o.FW)(c,u,a,this.duration_),t.preventDefault(),e=!0}return!e}const a=function(t){function e(e){t.call(this,{handleEvent:i});var n=e||{};this.delta_=n.delta?n.delta:1,this.duration_=void 0!==n.duration?n.duration:250}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(o.ZP)},247588:(t,e,n)=>{"use strict";n.d(e,{Cv:()=>u,U1:()=>c,dl:()=>s,sP:()=>v,FW:()=>p,DQ:()=>l,ZP:()=>d});var r=n(558493),o=n(286320),i=n(173604),a=n(921882);function u(t,e,n){var r=t.getCenter();if(r){var i=t.constrainCenter([r[0]+e[0],r[1]+e[1]]);n?t.animate({duration:n,easing:o.GE,center:i}):t.setCenter(i)}}function c(t,e,n,r){e=t.constrainRotation(e,0),s(t,e,n,r)}function s(t,e,n,r){if(void 0!==e){var i=t.getRotation(),a=t.getCenter();void 0!==i&&a&&r>0?t.animate({rotation:e,anchor:n,duration:r,easing:o.Vv}):t.rotate(e,n)}}function v(t,e,n,r,o){e=t.constrainResolution(e,0,o),l(t,e,n,r)}function p(t,e,n,r){var o=t.getResolution(),i=t.constrainResolution(o,e,0);if(void 0!==i){var u=t.getResolutions();i=(0,a.uZ)(i,t.getMinResolution()||u[u.length-1],t.getMaxResolution()||u[0])}if(n&&void 0!==i&&i!==o){var c=t.getCenter(),s=t.calculateCenterZoom(i,n);s=t.constrainCenter(s),n=[(i*c[0]-o*s[0])/(i-o),(i*c[1]-o*s[1])/(i-o)]}l(t,i,n,r)}function l(t,e,n,r){if(e){var i=t.getResolution(),a=t.getCenter();if(void 0!==i&&a&&e!==i&&r)t.animate({resolution:e,anchor:n,duration:r,easing:o.Vv});else{if(n){var u=t.calculateCenterZoom(e,n);t.setCenter(u)}t.setResolution(e)}}}const d=function(t){function e(e){t.call(this),e.handleEvent&&(this.handleEvent=e.handleEvent),this.map_=null,this.setActive(!0)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getActive=function(){return this.get(i.Z.ACTIVE)},e.prototype.getMap=function(){return this.map_},e.prototype.handleEvent=function(t){return!0},e.prototype.setActive=function(t){this.set(i.Z.ACTIVE,t)},e.prototype.setMap=function(t){this.map_=t},e}(r.ZP)},938024:(t,e,n)=>{"use strict";n.d(e,{S:()=>a,Z:()=>u});var r=n(30006),o=n(247588),i=n(913580);function a(t){for(var e=t.length,n=0,r=0,o=0;o<e;o++)n+=t[o].clientX,r+=t[o].clientY;return[n/e,r/e]}const u=function(t){function e(e){var n=e||{};t.call(this,n),n.handleDownEvent&&(this.handleDownEvent=n.handleDownEvent),n.handleDragEvent&&(this.handleDragEvent=n.handleDragEvent),n.handleMoveEvent&&(this.handleMoveEvent=n.handleMoveEvent),n.handleUpEvent&&(this.handleUpEvent=n.handleUpEvent),n.stopDown&&(this.stopDown=n.stopDown),this.handlingDownUpSequence=!1,this.trackedPointers_={},this.targetPointers=[]}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.handleDownEvent=function(t){return!1},e.prototype.handleDragEvent=function(t){},e.prototype.handleEvent=function(t){if(!t.pointerEvent)return!0;var e=!1;if(this.updateTrackedPointers_(t),this.handlingDownUpSequence){if(t.type==r.Z.POINTERDRAG)this.handleDragEvent(t);else if(t.type==r.Z.POINTERUP){var n=this.handleUpEvent(t);this.handlingDownUpSequence=n&&this.targetPointers.length>0}}else if(t.type==r.Z.POINTERDOWN){var o=this.handleDownEvent(t);o&&t.preventDefault(),this.handlingDownUpSequence=o,e=this.stopDown(o)}else t.type==r.Z.POINTERMOVE&&this.handleMoveEvent(t);return!e},e.prototype.handleMoveEvent=function(t){},e.prototype.handleUpEvent=function(t){return!1},e.prototype.stopDown=function(t){return t},e.prototype.updateTrackedPointers_=function(t){if(function(t){var e=t.type;return e===r.Z.POINTERDOWN||e===r.Z.POINTERDRAG||e===r.Z.POINTERUP}(t)){var e=t.pointerEvent,n=e.pointerId.toString();t.type==r.Z.POINTERUP?delete this.trackedPointers_[n]:(t.type==r.Z.POINTERDOWN||n in this.trackedPointers_)&&(this.trackedPointers_[n]=e),this.targetPointers=(0,i.KX)(this.trackedPointers_)}},e}(o.ZP)},173604:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={ACTIVE:"active"}}}]);