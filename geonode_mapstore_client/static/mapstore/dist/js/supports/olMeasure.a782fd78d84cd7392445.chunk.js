(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[76385],{540188:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={POSTRENDER:"postrender",MOVESTART:"movestart",MOVEEND:"moveend"}},193409:(t,e,i)=>{"use strict";i.d(e,{Z:()=>E});var n=i(540188),o=i(558493),s=i(12868),r=i(267644),h=i(85386),a=i(613002),d=i(421915),p="element",l="map",g="offset",u="position",f="positioning";const E=function(t){function e(e){t.call(this),this.options=e,this.id=e.id,this.insertFirst=void 0===e.insertFirst||e.insertFirst,this.stopEvent=void 0===e.stopEvent||e.stopEvent,this.element=document.createElement("div"),this.element.className=void 0!==e.className?e.className:"ol-overlay-container "+r.$A,this.element.style.position="absolute",this.autoPan=void 0!==e.autoPan&&e.autoPan,this.autoPanAnimation=e.autoPanAnimation||{},this.autoPanMargin=void 0!==e.autoPanMargin?e.autoPanMargin:20,this.rendered={bottom_:"",left_:"",right_:"",top_:"",visible:!0},this.mapPostrenderListenerKey=null,(0,a.oL)(this,(0,o.v_)(p),this.handleElementChanged,this),(0,a.oL)(this,(0,o.v_)(l),this.handleMapChanged,this),(0,a.oL)(this,(0,o.v_)(g),this.handleOffsetChanged,this),(0,a.oL)(this,(0,o.v_)(u),this.handlePositionChanged,this),(0,a.oL)(this,(0,o.v_)(f),this.handlePositioningChanged,this),void 0!==e.element&&this.setElement(e.element),this.setOffset(void 0!==e.offset?e.offset:[0,0]),this.setPositioning(void 0!==e.positioning?e.positioning:s.Z.TOP_LEFT),void 0!==e.position&&this.setPosition(e.position)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getElement=function(){return this.get(p)},e.prototype.getId=function(){return this.id},e.prototype.getMap=function(){return this.get(l)},e.prototype.getOffset=function(){return this.get(g)},e.prototype.getPosition=function(){return this.get(u)},e.prototype.getPositioning=function(){return this.get(f)},e.prototype.handleElementChanged=function(){(0,h.ep)(this.element);var t=this.getElement();t&&this.element.appendChild(t)},e.prototype.handleMapChanged=function(){this.mapPostrenderListenerKey&&((0,h.ZF)(this.element),(0,a.bN)(this.mapPostrenderListenerKey),this.mapPostrenderListenerKey=null);var t=this.getMap();if(t){this.mapPostrenderListenerKey=(0,a.oL)(t,n.Z.POSTRENDER,this.render,this),this.updatePixelPosition();var e=this.stopEvent?t.getOverlayContainerStopEvent():t.getOverlayContainer();this.insertFirst?e.insertBefore(this.element,e.childNodes[0]||null):e.appendChild(this.element)}},e.prototype.render=function(){this.updatePixelPosition()},e.prototype.handleOffsetChanged=function(){this.updatePixelPosition()},e.prototype.handlePositionChanged=function(){this.updatePixelPosition(),this.get(u)&&this.autoPan&&this.panIntoView()},e.prototype.handlePositioningChanged=function(){this.updatePixelPosition()},e.prototype.setElement=function(t){this.set(p,t)},e.prototype.setMap=function(t){this.set(l,t)},e.prototype.setOffset=function(t){this.set(g,t)},e.prototype.setPosition=function(t){this.set(u,t)},e.prototype.panIntoView=function(){var t=this.getMap();if(t&&t.getTargetElement()){var e=this.getRect(t.getTargetElement(),t.getSize()),i=this.getElement(),n=this.getRect(i,[(0,h.iO)(i),(0,h.Pb)(i)]),o=this.autoPanMargin;if(!(0,d.r4)(e,n)){var s=n[0]-e[0],r=e[2]-n[2],a=n[1]-e[1],p=e[3]-n[3],l=[0,0];if(s<0?l[0]=s-o:r<0&&(l[0]=Math.abs(r)+o),a<0?l[1]=a-o:p<0&&(l[1]=Math.abs(p)+o),0!==l[0]||0!==l[1]){var g=t.getView().getCenter(),u=t.getPixelFromCoordinate(g),f=[u[0]+l[0],u[1]+l[1]];t.getView().animate({center:t.getCoordinateFromPixel(f),duration:this.autoPanAnimation.duration,easing:this.autoPanAnimation.easing})}}}},e.prototype.getRect=function(t,e){var i=t.getBoundingClientRect(),n=i.left+window.pageXOffset,o=i.top+window.pageYOffset;return[n,o,n+e[0],o+e[1]]},e.prototype.setPositioning=function(t){this.set(f,t)},e.prototype.setVisible=function(t){this.rendered.visible!==t&&(this.element.style.display=t?"":"none",this.rendered.visible=t)},e.prototype.updatePixelPosition=function(){var t=this.getMap(),e=this.getPosition();if(t&&t.isRendered()&&e){var i=t.getPixelFromCoordinate(e),n=t.getSize();this.updateRenderedPosition(i,n)}else this.setVisible(!1)},e.prototype.updateRenderedPosition=function(t,e){var i=this.element.style,n=this.getOffset(),o=this.getPositioning();this.setVisible(!0);var r=n[0],h=n[1];if(o==s.Z.BOTTOM_RIGHT||o==s.Z.CENTER_RIGHT||o==s.Z.TOP_RIGHT){""!==this.rendered.left_&&(this.rendered.left_=i.left="");var a=Math.round(e[0]-t[0]-r)+"px";this.rendered.right_!=a&&(this.rendered.right_=i.right=a)}else{""!==this.rendered.right_&&(this.rendered.right_=i.right=""),o!=s.Z.BOTTOM_CENTER&&o!=s.Z.CENTER_CENTER&&o!=s.Z.TOP_CENTER||(r-=this.element.offsetWidth/2);var d=Math.round(t[0]+r)+"px";this.rendered.left_!=d&&(this.rendered.left_=i.left=d)}if(o==s.Z.BOTTOM_LEFT||o==s.Z.BOTTOM_CENTER||o==s.Z.BOTTOM_RIGHT){""!==this.rendered.top_&&(this.rendered.top_=i.top="");var p=Math.round(e[1]-t[1]-h)+"px";this.rendered.bottom_!=p&&(this.rendered.bottom_=i.bottom=p)}else{""!==this.rendered.bottom_&&(this.rendered.bottom_=i.bottom=""),o!=s.Z.CENTER_LEFT&&o!=s.Z.CENTER_CENTER&&o!=s.Z.CENTER_RIGHT||(h-=this.element.offsetHeight/2);var l=Math.round(t[1]+h)+"px";this.rendered.top_!=l&&(this.rendered.top_=i.top=l)}},e.prototype.getOptions=function(){return this.options},e}(o.ZP)},12868:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});const n={BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right",CENTER_LEFT:"center-left",CENTER_CENTER:"center-center",CENTER_RIGHT:"center-right",TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right"}}}]);