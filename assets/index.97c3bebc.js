var Ye=Object.defineProperty,Ge=Object.defineProperties;var Xe=Object.getOwnPropertyDescriptors;var pe=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var me=(t,e,i)=>e in t?Ye(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ee=(t,e)=>{for(var i in e||(e={}))qe.call(e,i)&&me(t,i,e[i]);if(pe)for(var i of pe(e))Ze.call(e,i)&&me(t,i,e[i]);return t},ve=(t,e)=>Ge(t,Xe(e));import{i as Je,r as m,R as v,m as le,c as L,h as R,k as de,t as Qe,l as et,j as o,d as f,F as tt,n as it,o as Ae,p as nt,q as se,v as rt,x as ge,y as te,b as ot,z as st,A as at,B as ct,E as lt,G as dt,H as ut,s as A,f as ze,I as ft,N as ht,J as pt,T as be}from"./index.e1b189dc.js";var mt=Je(m.exports.useEffect),vt=function(e){m.exports.useEffect(function(){e==null||e()},[])},gt=vt;function bt(t,e,i){return Math.max(e,Math.min(t,i))}const x={toVector(t,e){return t===void 0&&(t=e),Array.isArray(t)?t:[t,t]},add(t,e){return[t[0]+e[0],t[1]+e[1]]},sub(t,e){return[t[0]-e[0],t[1]-e[1]]},addTo(t,e){t[0]+=e[0],t[1]+=e[1]},subTo(t,e){t[0]-=e[0],t[1]-=e[1]}};function we(t,e,i){return e===0||Math.abs(e)===1/0?Math.pow(t,i*5):t*e*i/(e+i*t)}function ye(t,e,i,n=.15){return n===0?bt(t,e,i):t<e?-we(e-t,i-e,n)+e:t>i?+we(t-i,i-e,n)+i:t}function wt(t,[e,i],[n,r]){const[[a,s],[c,d]]=t;return[ye(e,a,s,n),ye(i,c,d,r)]}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function xe(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?xe(Object(i),!0).forEach(function(n){_(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):xe(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}const Oe={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function _e(t){return t?t[0].toUpperCase()+t.slice(1):""}const yt=["enter","leave"];function xt(t=!1,e){return t&&!yt.includes(e)}function _t(t,e="",i=!1){const n=Oe[t],r=n&&n[e]||e;return"on"+_e(t)+_e(r)+(xt(i,r)?"Capture":"")}const kt=["gotpointercapture","lostpointercapture"];function Et(t){let e=t.substring(2).toLowerCase();const i=!!~e.indexOf("passive");i&&(e=e.replace("passive",""));const n=kt.includes(e)?"capturecapture":"capture",r=!!~e.indexOf(n);return r&&(e=e.replace("capture","")),{device:e,capture:r,passive:i}}function Ct(t,e=""){const i=Oe[t],n=i&&i[e]||e;return t+n}function J(t){return"touches"in t}function Le(t){return J(t)?"touch":"pointerType"in t?t.pointerType:"mouse"}function Nt(t){return Array.from(t.touches).filter(e=>{var i,n;return e.target===t.currentTarget||((i=t.currentTarget)===null||i===void 0||(n=i.contains)===null||n===void 0?void 0:n.call(i,e.target))})}function Tt(t){return t.type==="touchend"||t.type==="touchcancel"?t.changedTouches:t.targetTouches}function Re(t){return J(t)?Tt(t)[0]:t}function It(t){return Nt(t).map(e=>e.identifier)}function ie(t){const e=Re(t);return J(t)?e.identifier:e.pointerId}function ke(t){const e=Re(t);return[e.clientX,e.clientY]}function Pt(t){const e={};if("buttons"in t&&(e.buttons=t.buttons),"shiftKey"in t){const{shiftKey:i,altKey:n,metaKey:r,ctrlKey:a}=t;Object.assign(e,{shiftKey:i,altKey:n,metaKey:r,ctrlKey:a})}return e}function Z(t,...e){return typeof t=="function"?t(...e):t}function St(){}function Dt(...t){return t.length===0?St:t.length===1?t[0]:function(){let e;for(const i of t)e=i.apply(this,arguments)||e;return e}}function Ee(t,e){return Object.assign({},e,t||{})}const At=32;class zt{constructor(e,i,n){this.ctrl=e,this.args=i,this.key=n,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(e){this.ctrl.state[this.key]=e}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:e,shared:i,ingKey:n,args:r}=this;i[n]=e._active=e.active=e._blocked=e._force=!1,e._step=[!1,!1],e.intentional=!1,e._movement=[0,0],e._distance=[0,0],e._direction=[0,0],e._delta=[0,0],e._bounds=[[-1/0,1/0],[-1/0,1/0]],e.args=r,e.axis=void 0,e.memo=void 0,e.elapsedTime=0,e.direction=[0,0],e.distance=[0,0],e.overflow=[0,0],e._movementBound=[!1,!1],e.velocity=[0,0],e.movement=[0,0],e.delta=[0,0],e.timeStamp=0}start(e){const i=this.state,n=this.config;i._active||(this.reset(),this.computeInitial(),i._active=!0,i.target=e.target,i.currentTarget=e.currentTarget,i.lastOffset=n.from?Z(n.from,i):i.offset,i.offset=i.lastOffset),i.startTime=i.timeStamp=e.timeStamp}computeValues(e){const i=this.state;i._values=e,i.values=this.config.transform(e)}computeInitial(){const e=this.state;e._initial=e._values,e.initial=e.values}compute(e){const{state:i,config:n,shared:r}=this;i.args=this.args;let a=0;if(e&&(i.event=e,n.preventDefault&&e.cancelable&&i.event.preventDefault(),i.type=e.type,r.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,r.locked=!!document.pointerLockElement,Object.assign(r,Pt(e)),r.down=r.pressed=r.buttons%2===1||r.touches>0,a=e.timeStamp-i.timeStamp,i.timeStamp=e.timeStamp,i.elapsedTime=i.timeStamp-i.startTime),i._active){const I=i._delta.map(Math.abs);x.addTo(i._distance,I)}this.axisIntent&&this.axisIntent(e);const[s,c]=i._movement,[d,h]=n.threshold,{_step:l,values:p}=i;if(n.hasCustomTransform?(l[0]===!1&&(l[0]=Math.abs(s)>=d&&p[0]),l[1]===!1&&(l[1]=Math.abs(c)>=h&&p[1])):(l[0]===!1&&(l[0]=Math.abs(s)>=d&&Math.sign(s)*d),l[1]===!1&&(l[1]=Math.abs(c)>=h&&Math.sign(c)*h)),i.intentional=l[0]!==!1||l[1]!==!1,!i.intentional)return;const b=[0,0];if(n.hasCustomTransform){const[I,H]=p;b[0]=l[0]!==!1?I-l[0]:0,b[1]=l[1]!==!1?H-l[1]:0}else b[0]=l[0]!==!1?s-l[0]:0,b[1]=l[1]!==!1?c-l[1]:0;this.restrictToAxis&&!i._blocked&&this.restrictToAxis(b);const k=i.offset,C=i._active&&!i._blocked||i.active;C&&(i.first=i._active&&!i.active,i.last=!i._active&&i.active,i.active=r[this.ingKey]=i._active,e&&(i.first&&("bounds"in n&&(i._bounds=Z(n.bounds,i)),this.setup&&this.setup()),i.movement=b,this.computeOffset()));const[z,T]=i.offset,[[N,M],[Q,O]]=i._bounds;i.overflow=[z<N?-1:z>M?1:0,T<Q?-1:T>O?1:0],i._movementBound[0]=i.overflow[0]?i._movementBound[0]===!1?i._movement[0]:i._movementBound[0]:!1,i._movementBound[1]=i.overflow[1]?i._movementBound[1]===!1?i._movement[1]:i._movementBound[1]:!1;const W=i._active?n.rubberband||[0,0]:[0,0];if(i.offset=wt(i._bounds,i.offset,W),i.delta=x.sub(i.offset,k),this.computeMovement(),C&&(!i.last||a>At)){i.delta=x.sub(i.offset,k);const I=i.delta.map(Math.abs);x.addTo(i.distance,I),i.direction=i.delta.map(Math.sign),i._direction=i._delta.map(Math.sign),!i.first&&a>0&&(i.velocity=[I[0]/a,I[1]/a])}}emit(){const e=this.state,i=this.shared,n=this.config;if(e._active||this.clean(),(e._blocked||!e.intentional)&&!e._force&&!n.triggerAllEvents)return;const r=this.handler(g(g(g({},i),e),{},{[this.aliasKey]:e.values}));r!==void 0&&(e.memo=r)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Ot([t,e],i){const n=Math.abs(t),r=Math.abs(e);if(n>r&&n>i)return"x";if(r>n&&r>i)return"y"}class Lt extends zt{constructor(...e){super(...e),_(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=x.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=x.sub(this.state.offset,this.state.lastOffset)}axisIntent(e){const i=this.state,n=this.config;if(!i.axis&&e){const r=typeof n.axisThreshold=="object"?n.axisThreshold[Le(e)]:n.axisThreshold;i.axis=Ot(i._movement,r)}i._blocked=(n.lockDirection||!!n.axis)&&!i.axis||!!n.axis&&n.axis!==i.axis}restrictToAxis(e){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":e[1]=0;break;case"y":e[0]=0;break}}}const Rt=t=>t,Ce=.15,$e={enabled(t=!0){return t},eventOptions(t,e,i){return g(g({},i.shared.eventOptions),t)},preventDefault(t=!1){return t},triggerAllEvents(t=!1){return t},rubberband(t=0){switch(t){case!0:return[Ce,Ce];case!1:return[0,0];default:return x.toVector(t)}},from(t){if(typeof t=="function")return t;if(t!=null)return x.toVector(t)},transform(t,e,i){const n=t||i.shared.transform;return this.hasCustomTransform=!!n,n||Rt},threshold(t){return x.toVector(t,0)}},$t=0,V=g(g({},$e),{},{axis(t,e,{axis:i}){if(this.lockDirection=i==="lock",!this.lockDirection)return i},axisThreshold(t=$t){return t},bounds(t={}){if(typeof t=="function")return a=>V.bounds(t(a));if("current"in t)return()=>t.current;if(typeof HTMLElement=="function"&&t instanceof HTMLElement)return t;const{left:e=-1/0,right:i=1/0,top:n=-1/0,bottom:r=1/0}=t;return[[e,i],[n,r]]}}),X=10,Ne={ArrowRight:(t=1)=>[X*t,0],ArrowLeft:(t=1)=>[-X*t,0],ArrowUp:(t=1)=>[0,-X*t],ArrowDown:(t=1)=>[0,X*t]};class Ft extends Lt{constructor(...e){super(...e),_(this,"ingKey","dragging")}reset(){super.reset();const e=this.state;e._pointerId=void 0,e._pointerActive=!1,e._keyboardActive=!1,e._preventScroll=!1,e._delayed=!1,e.swipe=[0,0],e.tap=!1,e.canceled=!1,e.cancel=this.cancel.bind(this)}setup(){const e=this.state;if(e._bounds instanceof HTMLElement){const i=e._bounds.getBoundingClientRect(),n=e.currentTarget.getBoundingClientRect(),r={left:i.left-n.left+e.offset[0],right:i.right-n.right+e.offset[0],top:i.top-n.top+e.offset[1],bottom:i.bottom-n.bottom+e.offset[1]};e._bounds=V.bounds(r)}}cancel(){const e=this.state;e.canceled||(e.canceled=!0,e._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(e){const i=this.config,n=this.state;if(e.buttons!=null&&(Array.isArray(i.pointerButtons)?!i.pointerButtons.includes(e.buttons):i.pointerButtons!==-1&&i.pointerButtons!==e.buttons))return;const r=this.ctrl.setEventIds(e);i.pointerCapture&&e.target.setPointerCapture(e.pointerId),!(r&&r.size>1&&n._pointerActive)&&(this.start(e),this.setupPointer(e),n._pointerId=ie(e),n._pointerActive=!0,this.computeValues(ke(e)),this.computeInitial(),i.preventScrollAxis&&Le(e)!=="mouse"?(n._active=!1,this.setupScrollPrevention(e)):i.delay>0?(this.setupDelayTrigger(e),i.triggerAllEvents&&(this.compute(e),this.emit())):this.startPointerDrag(e))}startPointerDrag(e){const i=this.state;i._active=!0,i._preventScroll=!0,i._delayed=!1,this.compute(e),this.emit()}pointerMove(e){const i=this.state,n=this.config;if(!i._pointerActive||i.type===e.type&&e.timeStamp===i.timeStamp)return;const r=ie(e);if(i._pointerId!==void 0&&r!==i._pointerId)return;const a=ke(e);if(document.pointerLockElement===e.target?i._delta=[e.movementX,e.movementY]:(i._delta=x.sub(a,i._values),this.computeValues(a)),x.addTo(i._movement,i._delta),this.compute(e),i._delayed&&i.intentional){this.timeoutStore.remove("dragDelay"),i.active=!1,this.startPointerDrag(e);return}if(n.preventScrollAxis&&!i._preventScroll)if(i.axis)if(i.axis===n.preventScrollAxis||n.preventScrollAxis==="xy"){i._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(e);return}else return;this.emit()}pointerUp(e){this.ctrl.setEventIds(e);try{this.config.pointerCapture&&e.target.hasPointerCapture(e.pointerId)&&e.target.releasePointerCapture(e.pointerId)}catch{}const i=this.state,n=this.config;if(!i._active||!i._pointerActive)return;const r=ie(e);if(i._pointerId!==void 0&&r!==i._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(e);const[a,s]=i._distance;if(i.tap=a<=n.tapsThreshold&&s<=n.tapsThreshold,i.tap&&n.filterTaps)i._force=!0;else{const[c,d]=i.direction,[h,l]=i.velocity,[p,b]=i.movement,[k,C]=n.swipe.velocity,[z,T]=n.swipe.distance,N=n.swipe.duration;i.elapsedTime<N&&(Math.abs(h)>k&&Math.abs(p)>z&&(i.swipe[0]=c),Math.abs(l)>C&&Math.abs(b)>T&&(i.swipe[1]=d))}this.emit()}pointerClick(e){this.state.tap||(e.preventDefault(),e.stopPropagation())}setupPointer(e){const i=this.config,n=i.device;i.pointerLock&&e.currentTarget.requestPointerLock(),i.pointerCapture||(this.eventStore.add(this.sharedConfig.window,n,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,n,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(e){this.state._preventScroll&&e.cancelable&&e.preventDefault()}setupScrollPrevention(e){this.state._preventScroll=!1,Mt(e);const i=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",i),this.eventStore.add(this.sharedConfig.window,"touch","cancel",i),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,e)}setupDelayTrigger(e){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(e)},this.config.delay)}keyDown(e){const i=Ne[e.key];if(i){const n=this.state,r=e.shiftKey?10:e.altKey?.1:1;this.start(e),n._delta=i(r),n._keyboardActive=!0,x.addTo(n._movement,n._delta),this.compute(e),this.emit()}}keyUp(e){e.key in Ne&&(this.state._keyboardActive=!1,this.setActive(),this.compute(e),this.emit())}bind(e){const i=this.config.device;e(i,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(e(i,"change",this.pointerMove.bind(this)),e(i,"end",this.pointerUp.bind(this)),e(i,"cancel",this.pointerUp.bind(this)),e("lostPointerCapture","",this.pointerUp.bind(this))),e("key","down",this.keyDown.bind(this)),e("key","up",this.keyUp.bind(this)),this.config.filterTaps&&e("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Mt(t){"persist"in t&&typeof t.persist=="function"&&t.persist()}const U=typeof window!="undefined"&&window.document&&window.document.createElement;function Bt(){return U&&"ontouchstart"in window}function Te(){return Bt()||U&&window.navigator.maxTouchPoints>1}function jt(){return U&&"onpointerdown"in window}function Kt(){return U&&"exitPointerLock"in window.document}function Vt(){try{return"constructor"in GestureEvent}catch{return!1}}const E={isBrowser:U,gesture:Vt(),touch:Te(),touchscreen:Te(),pointer:jt(),pointerLock:Kt()},Ut=250,Wt=180,Ht=.5,Yt=50,Gt=250,Ie={mouse:0,touch:0,pen:8},Xt=g(g({},V),{},{device(t,e,{pointer:{touch:i=!1,lock:n=!1,mouse:r=!1}={}}){return this.pointerLock=n&&E.pointerLock,E.touch&&i?"touch":this.pointerLock?"mouse":E.pointer&&!r?"pointer":E.touch?"touch":"mouse"},preventScrollAxis(t,e,{preventScroll:i}){if(this.preventScrollDelay=typeof i=="number"?i:i||i===void 0&&t?Ut:void 0,!(!E.touchscreen||i===!1))return t||(i!==void 0?"y":void 0)},pointerCapture(t,e,{pointer:{capture:i=!0,buttons:n=1}={}}){return this.pointerButtons=n,!this.pointerLock&&this.device==="pointer"&&i},threshold(t,e,{filterTaps:i=!1,tapsThreshold:n=3,axis:r=void 0}){const a=x.toVector(t,i?n:r?1:0);return this.filterTaps=i,this.tapsThreshold=n,a},swipe({velocity:t=Ht,distance:e=Yt,duration:i=Gt}={}){return{velocity:this.transform(x.toVector(t)),distance:this.transform(x.toVector(e)),duration:i}},delay(t=0){switch(t){case!0:return Wt;case!1:return 0;default:return t}},axisThreshold(t){return t?g(g({},Ie),t):Ie}});g(g({},$e),{},{device(t,e,{shared:i,pointer:{touch:n=!1}={}}){if(i.target&&!E.touch&&E.gesture)return"gesture";if(E.touch&&n)return"touch";if(E.touchscreen){if(E.pointer)return"pointer";if(E.touch)return"touch"}},bounds(t,e,{scaleBounds:i={},angleBounds:n={}}){const r=s=>{const c=Ee(Z(i,s),{min:-1/0,max:1/0});return[c.min,c.max]},a=s=>{const c=Ee(Z(n,s),{min:-1/0,max:1/0});return[c.min,c.max]};return typeof i!="function"&&typeof n!="function"?[r(),a()]:s=>[r(s),a(s)]},threshold(t,e,i){return this.lockDirection=i.axis==="lock",x.toVector(t,this.lockDirection?[.1,3]:0)},modifierKey(t){return t===void 0?"ctrlKey":t}});g(g({},V),{},{mouseOnly:(t=!0)=>t});g(g({},V),{},{mouseOnly:(t=!0)=>t});const Fe=new Map,ae=new Map;function qt(t){Fe.set(t.key,t.engine),ae.set(t.key,t.resolver)}const Zt={key:"drag",engine:Ft,resolver:Xt};function Jt(t,e){if(t==null)return{};var i={},n=Object.keys(t),r,a;for(a=0;a<n.length;a++)r=n[a],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function Qt(t,e){if(t==null)return{};var i=Jt(t,e),n,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(i[n]=t[n]))}return i}const ei={target(t){if(t)return()=>"current"in t?t.current:t},enabled(t=!0){return t},window(t=E.isBrowser?window:void 0){return t},eventOptions({passive:t=!0,capture:e=!1}={}){return{passive:t,capture:e}},transform(t){return t}},ti=["target","eventOptions","window","enabled","transform"];function q(t={},e){const i={};for(const[n,r]of Object.entries(e))switch(typeof r){case"function":i[n]=r.call(i,t[n],n,t);break;case"object":i[n]=q(t[n],r);break;case"boolean":r&&(i[n]=t[n]);break}return i}function ii(t,e){const i=t,{target:n,eventOptions:r,window:a,enabled:s,transform:c}=i,d=Qt(i,ti),h={shared:q({target:n,eventOptions:r,window:a,enabled:s,transform:c},ei)};if(e){const l=ae.get(e);h[e]=q(g({shared:h.shared},d),l)}else for(const l in d){const p=ae.get(l);p&&(h[l]=q(g({shared:h.shared},d[l]),p))}return h}class Me{constructor(e,i){_(this,"_listeners",new Set),this._ctrl=e,this._gestureKey=i}add(e,i,n,r,a){const s=this._listeners,c=Ct(i,n),d=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},h=g(g({},d),a);e.addEventListener(c,r,h);const l=()=>{e.removeEventListener(c,r,h),s.delete(l)};return s.add(l),l}clean(){this._listeners.forEach(e=>e()),this._listeners.clear()}}class ni{constructor(){_(this,"_timeouts",new Map)}add(e,i,n=140,...r){this.remove(e),this._timeouts.set(e,window.setTimeout(i,n,...r))}remove(e){const i=this._timeouts.get(e);i&&window.clearTimeout(i)}clean(){this._timeouts.forEach(e=>void window.clearTimeout(e)),this._timeouts.clear()}}class ri{constructor(e){_(this,"gestures",new Set),_(this,"_targetEventStore",new Me(this)),_(this,"gestureEventStores",{}),_(this,"gestureTimeoutStores",{}),_(this,"handlers",{}),_(this,"config",{}),_(this,"pointerIds",new Set),_(this,"touchIds",new Set),_(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),oi(this,e)}setEventIds(e){if(J(e))return this.touchIds=new Set(It(e)),this.touchIds;if("pointerId"in e)return e.type==="pointerup"||e.type==="pointercancel"?this.pointerIds.delete(e.pointerId):e.type==="pointerdown"&&this.pointerIds.add(e.pointerId),this.pointerIds}applyHandlers(e,i){this.handlers=e,this.nativeHandlers=i}applyConfig(e,i){this.config=ii(e,i)}clean(){this._targetEventStore.clean();for(const e of this.gestures)this.gestureEventStores[e].clean(),this.gestureTimeoutStores[e].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...e){const i=this.config.shared,n={};let r;if(!(i.target&&(r=i.target(),!r))){if(i.enabled){for(const s of this.gestures){const c=this.config[s],d=Pe(n,c.eventOptions,!!r);if(c.enabled){const h=Fe.get(s);new h(this,e,s).bind(d)}}const a=Pe(n,i.eventOptions,!!r);for(const s in this.nativeHandlers)a(s,"",c=>this.nativeHandlers[s](g(g({},this.state.shared),{},{event:c,args:e})),void 0,!0)}for(const a in n)n[a]=Dt(...n[a]);if(!r)return n;for(const a in n){const{device:s,capture:c,passive:d}=Et(a);this._targetEventStore.add(r,s,"",n[a],{capture:c,passive:d})}}}}function $(t,e){t.gestures.add(e),t.gestureEventStores[e]=new Me(t,e),t.gestureTimeoutStores[e]=new ni}function oi(t,e){e.drag&&$(t,"drag"),e.wheel&&$(t,"wheel"),e.scroll&&$(t,"scroll"),e.move&&$(t,"move"),e.pinch&&$(t,"pinch"),e.hover&&$(t,"hover")}const Pe=(t,e,i)=>(n,r,a,s={},c=!1)=>{var d,h;const l=(d=s.capture)!==null&&d!==void 0?d:e.capture,p=(h=s.passive)!==null&&h!==void 0?h:e.passive;let b=c?n:_t(n,r,l);i&&p&&(b+="Passive"),t[b]=t[b]||[],t[b].push(a)};function si(t,e={},i,n){const r=v.useMemo(()=>new ri(t),[]);if(r.applyHandlers(t,n),r.applyConfig(e,i),v.useEffect(r.effect.bind(r)),v.useEffect(()=>r.clean.bind(r),[]),e.target===void 0)return r.bind.bind(r)}function ai(t,e){return qt(Zt),si({drag:t},e||{},"drag")}const ci=!1;function Se(t,e){ci&&console.warn(`[antd-mobile: ${t}] ${e}`)}const B="adm-list",li={mode:"default"},di=t=>{const e=le(li,t);return L(e,v.createElement("div",{className:R(B,`${B}-${e.mode}`)},e.header&&v.createElement("div",{className:`${B}-header`},e.header),v.createElement("div",{className:`${B}-body`},v.createElement("div",{className:`${B}-body-inner`},e.children))))};function ui(t){return m.exports.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},t,{style:Object.assign({verticalAlign:"-0.125em"},t.style),className:["antd-mobile-icon",t.className].filter(Boolean).join(" ")}),m.exports.createElement("g",{id:"RightOutline-RightOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},m.exports.createElement("g",{id:"RightOutline-RightOutlined"},m.exports.createElement("rect",{id:"RightOutline-\u77E9\u5F62",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),m.exports.createElement("path",{d:"M17.3947957,5.11219264 L35.5767382,22.6612572 L35.5767382,22.6612572 C36.1304785,23.2125856 36.1630514,24.0863155 35.6744571,24.6755735 L35.5767382,24.7825775 L17.3956061,42.8834676 C17.320643,42.9580998 17.2191697,43 17.1133896,43 L13.9866673,43 C13.7657534,43 13.5866673,42.8209139 13.5866673,42.6 C13.5866673,42.4936115 13.6290496,42.391606 13.7044413,42.316542 L32.3201933,23.7816937 L32.3201933,23.7816937 L13.7237117,5.6866816 C13.5653818,5.53262122 13.5619207,5.27937888 13.7159811,5.121049 C13.7912854,5.04365775 13.8946805,5 14.0026627,5 L17.1170064,5 C17.2206403,5 17.3202292,5.04022164 17.3947957,5.11219264 Z",id:"RightOutline-right",fill:"currentColor",fillRule:"nonzero"}))))}function j(t){return t!=null&&t!==!1}const S="adm-list-item",fi=t=>{var e;const i=(e=t.clickable)!==null&&e!==void 0?e:!!t.onClick,n=t.arrow===void 0?i:t.arrow,r=v.createElement("div",{className:`${S}-content`},j(t.prefix)&&v.createElement("div",{className:`${S}-content-prefix`},t.prefix),v.createElement("div",{className:`${S}-content-main`},j(t.title)&&v.createElement("div",{className:`${S}-title`},t.title),t.children,j(t.description)&&v.createElement("div",{className:`${S}-description`},t.description)),j(t.extra)&&v.createElement("div",{className:`${S}-content-extra`},t.extra),j(n)&&v.createElement("div",{className:`${S}-content-arrow`},n===!0?v.createElement(ui,null):n));return L(t,v.createElement(i?"a":"div",{className:R(`${S}`,i?["adm-plain-anchor"]:[],t.disabled&&`${S}-disabled`),onClick:t.disabled?void 0:t.onClick},r))};var ce=de(di,{Item:fi});const F="adm-collapse",hi=()=>null,pi=t=>{const{visible:e}=t,i=m.exports.useRef(null),n=it(e,t.forceRender,t.destroyOnClose),[{height:r},a]=Ae(()=>({from:{height:0},config:{precision:.01,mass:1,tension:200,friction:25,clamp:!0}}));return gt(()=>{if(!e)return;const s=i.current;!s||a.start({height:s.offsetHeight,immediate:!0})}),nt(()=>{const s=i.current;!s||(e?a.start({height:s.offsetHeight}):(a.start({height:s.offsetHeight,immediate:!0}),a.start({height:0})))},[e]),v.createElement(se.div,{className:`${F}-panel-content`,style:{height:r.to(s=>r.idle&&e?"auto":s)}},o("div",{className:`${F}-panel-content-inner`,ref:i,children:o(ce.Item,{children:n&&t.children})}))},mi=t=>{var e;const i=[];Qe(t.children,s=>{!v.isValidElement(s)||typeof s.key!="string"||i.push(s)});const[n,r]=et(t.accordion?{value:t.activeKey===void 0?void 0:t.activeKey===null?[]:[t.activeKey],defaultValue:t.defaultActiveKey===void 0||t.defaultActiveKey===null?[]:[t.defaultActiveKey],onChange:s=>{var c,d;(c=t.onChange)===null||c===void 0||c.call(t,(d=s[0])!==null&&d!==void 0?d:null)}}:{value:t.activeKey,defaultValue:(e=t.defaultActiveKey)!==null&&e!==void 0?e:[],onChange:t.onChange}),a=n===null?[]:Array.isArray(n)?n:[n];return L(t,o("div",{className:F,children:o(ce,{children:i.map(s=>{const c=s.key,d=a.includes(c);function h(p){var b,k;t.accordion?r(d?[]:[c]):r(d?a.filter(C=>C!==c):[...a,c]),(k=(b=s.props).onClick)===null||k===void 0||k.call(b,p)}const l=()=>{let p=o(rt,{});return t.arrow!==void 0&&(p=t.arrow),s.props.arrow!==void 0&&(p=s.props.arrow),typeof p=="function"?p(d):o("div",{className:R(`${F}-arrow`,{[`${F}-arrow-active`]:d}),children:p})};return f(tt,{children:[L(s.props,o(ce.Item,{className:`${F}-panel-header`,onClick:h,disabled:s.props.disabled,arrow:l(),children:s.props.title})),o(pi,{visible:d,forceRender:!!s.props.forceRender,destroyOnClose:!!s.props.destroyOnClose,children:s.props.children})]})})})}))};var De=de(mi,{Panel:hi}),ue={},vi=ge&&ge.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ue,"__esModule",{value:!0});var Be=ue.staged=void 0;const gi=vi(m.exports);function je(t){return typeof t=="function"?gi.default.createElement(bi,{stage:t}):t}function bi(t){const e=t.stage();return je(e)}function wi(t){return function(i,n){const r=t(i,n);return je(r)}}Be=ue.staged=wi;const K="adm-page-indicator",yi={color:"primary",direction:"horizontal"},xi=m.exports.memo(t=>{const e=le(yi,t),i=[];for(let n=0;n<e.total;n++)i.push(o("div",{className:R(`${K}-dot`,{[`${K}-dot-active`]:e.current===n})},n));return L(e,o("div",{className:R(K,`${K}-${e.direction}`,`${K}-color-${e.color}`),children:i}))});var _i=xi;const Ke=t=>L(t,v.createElement("div",{className:"adm-swiper-item",onClick:t.onClick},t.children));function ki(t){const[e,i]=m.exports.useState(t),n=m.exports.useRef(e);return m.exports.useEffect(()=>{n.current=e},[e]),[e,i,n]}const D="adm-swiper",Ei={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0},Ci=m.exports.forwardRef(Be((t,e)=>{const i=le(Ei,t),n=i.direction==="vertical",r=i.slideSize/100,a=i.trackOffset/100,{validChildren:s,count:c}=m.exports.useMemo(()=>{let d=0;return{validChildren:v.Children.map(i.children,l=>v.isValidElement(l)?l.type!==Ke?(Se("Swiper","The children of `Swiper` must be `Swiper.Item` components."),null):(d++,l):null),count:d}},[i.children]);return c===0||!s?(Se("Swiper","`Swiper` needs at least one child."),null):()=>{let d=i.loop;r*(c-1)<1&&(d=!1);const h=m.exports.useRef(null);function l(){const u=h.current;return u?(n?u.offsetHeight:u.offsetWidth)*i.slideSize/100:0}const[p,b]=m.exports.useState(i.defaultIndex);mt(()=>{var u;(u=i.onIndexChange)===null||u===void 0||u.call(i,p)},[p]);const[k,C,z]=ki(!1);function T(u){let w=0,y=c-1;return i.stuckAtBoundary&&(w+=a/r,y-=(1-r-a)/r),te(u,w,y)}const[{position:N},M]=Ae(()=>({position:T(p)*100,config:{tension:200,friction:30},onRest:()=>{if(z.current||!d)return;const u=N.get(),w=100*c,y=ne(u,w);y!==u&&M.start({position:y,immediate:!0})}}),[c]),Q=ai(u=>{const w=l();if(!w)return;const y=n?1:0,P=u.offset[y],Y=u.direction[y],G=u.velocity[y];if(C(!0),!u.last)M.start({position:P*100/w,immediate:!0});else{const he=Math.floor(P/w),We=he+1,He=Math.round((P+G*2e3*Y)/w);O(te(He,he,We)),window.setTimeout(()=>{C(!1)})}},{transform:([u,w])=>[-u,-w],from:()=>{const u=l();return[N.get()/100*u,N.get()/100*u]},bounds:()=>{if(d)return{};const u=l(),w=T(0)*u,y=T(c-1)*u;return n?{top:w,bottom:y}:{left:w,right:y}},rubberband:i.rubberband,axis:n?"y":"x",preventScroll:!n,pointer:{touch:!0}});function O(u,w=!1){const y=Math.round(u),P=d?ne(y,c):te(y,0,c-1);b(P),M.start({position:(d?y:T(y))*100,immediate:w})}function W(){O(Math.round(N.get()/100)+1)}function I(){O(Math.round(N.get()/100)-1)}m.exports.useImperativeHandle(e,()=>({swipeTo:O,swipeNext:W,swipePrev:I})),ot(()=>{const u=s.length-1;p>u&&O(u,!0)});const{autoplay:H,autoplayInterval:fe}=i;m.exports.useEffect(()=>{if(!H||k)return;const u=window.setInterval(()=>{W()},fe);return()=>{window.clearInterval(u)}},[H,fe,k]);function Ve(){return d?o("div",{className:`${D}-track-inner`,children:v.Children.map(s,(u,w)=>v.createElement(se.div,{className:`${D}-slide`,style:{[n?"y":"x"]:N.to(y=>{let P=-y+w*100;const Y=c*100,G=Y/2;return P=ne(P+G,Y)-G,`${P}%`}),[n?"top":"left"]:`-${w*100}%`}},u))}):v.createElement(se.div,{className:`${D}-track-inner`,style:{[n?"y":"x"]:N.to(u=>`${-u}%`)}},v.Children.map(s,u=>o("div",{className:`${D}-slide`,children:u})))}const Ue={"--slide-size":`${i.slideSize}%`,"--track-offset":`${i.trackOffset}%`};return L(i,f("div",{className:R(D,`${D}-${i.direction}`),style:Ue,children:[o("div",ve(ee({},Object.assign({ref:h,className:R(`${D}-track`,{[`${D}-track-allow-touch-move`]:i.allowTouchMove}),onClickCapture:u=>{z.current&&u.stopPropagation()}},i.allowTouchMove?Q():{})),{children:Ve()})),i.indicator===void 0?o("div",{className:`${D}-indicator`,children:o(_i,ee({},Object.assign({},i.indicatorProps,{total:c,current:p,direction:i.direction})))}):i.indicator(c,p)]}))}}));function ne(t,e){const i=t%e;return i<0?i+e:i}var re=de(Ci,{Item:Ke});const Ni=t=>({type:at,data:t}),Ti=()=>t=>{st().then(e=>{t(Ni(e.data.replies))})},Ii=t=>({type:ct,id:t}),Pi=t=>({type:ut,data:t}),Si=t=>({type:dt,data:t}),Di=()=>t=>{lt().then(e=>{t(Si(e.data.result)),t(Pi(!1))})},Ai=A.div`
    position: fixed;
    top: 11.73333vw;
    width: 100%;
    z-index: 1001;
    img{
        position: relative;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }
`,zi=A.div`
    margin-top: 68vw;
    display: block;
    overflow: hidden;
    width: 100%;
    position: relative;
    .m-video2-awaken-btn {
        height: 9.6vw;
        width: 93.6vw;
        line-height: 9.6vw;
        background: #fb7299;
        border: none;
        border-radius: 4.8vw;
        color: #fff;
        font-size: 3.73333vw;
        text-align: center;
        margin: 2.66667vw auto 0;
        position: relative;
        transform-origin: bottom;
        .icon {
            position: absolute;
            width: 10.66667vw;
            height: 11.73333vw;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            left: 8vw;
            bottom: 0;
            &.popup {
                background-image: url(//s1.hdslb.com/bfs/static/jinkela/mstation-video-h5/assets/wake-app-icon.svg);
                animation: icon-popup .3s;
            }
        }
        .container {
            height: 100%;
            overflow: hidden;
            .btn-text {
                width: 100%;
            }
        }
    }
`;var Oi="/assets/videoStand.f27fe1bc.jpg";const Li=A.div`
.m-video-info-new {
    margin-top: 1.86667vw;
    padding: 0 3.2vw;
    font-size: 0;
    text-decoration: none;
    /* .title { */
    .adm-list {
        --header-font-size: 0;
        --prefix-width: 'auto';
        --prefix-padding-right: 12px;
        --align-items: center;
        --active-background-color: transparent;
        --border-inner: 0;
        --border-top: 0;
        --border-bottom: 0;
        --padding-left: 0.5rem;
        --padding-right: 0.5rem;
        --font-size: 0;
        --extra-max-width: 70%;
        .adm-list-item{
            padding-left: 0;
            .adm-list-item-content-main {
                padding: 0;
            }
            .adm-list-item-content-arrow {
                color: #999;
            }
        }
    }
    .left {
        float: left;
        position: relative;
        .label {
            position: absolute;
            display: inline-block;
            font-size: 0;
            padding: 0 1.6vw;
            height: 5.33333vw;
            line-height: 5.33333vw;
            color: #fb7299;
            background: #f4f4f4;
            border-radius: 3.2vw;
            vertical-align: middle;
            margin-top: 0.53333vw;
            span {
                vertical-align: middle;
                position: relative;
                top: 1px;
                font-size: 3.2vw;
            }
        }
        h1 {
            font-size: 4.26667vw;
            font-weight: 400;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            color: #212121;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 86.66667vw;
            height: 6.4vw;
            line-height: 6.4vw;
            &.has-activity {
                padding-left: 12.26667vw;
            }
        }
    }
    .fold-container{
        .up {
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            margin-top: 2.93333vw;
            .face {
                display: flex;
                .avatar {
                    position: relative;
                    vertical-align: middle;
                    margin-right: 2.66667vw;
                    .face {
                        width: 9.6vw;
                        height: 9.6vw;
                        border-radius: 50%;
                        border: .5px solid #999;
                    }
                }
                .info {
                    position: relative;
                    top: 0.53333vw;
                    .name {
                        font-size: 3.73333vw;
                        color: #212121;
                        display: block;
                        height: 4.53333vw;
                        line-height: 4.53333vw;
                    }
                    .fans {
                        margin-top: 1.33333vw;
                        font-size: 3.2vw;
                        height: 3.2vw;
                        line-height: 3.2vw;
                        color: #999;
                    }
                }
            }
            .follow {
                display: flex;
                align-items: center;
                .launch-app-btn {
                    display: inline-block;
                    position: relative;
                    .follow-btn {
                        font-size: 0;
                        display: inline-block;
                        text-align: center;
                        width: 17.6vw;
                        height: 6.4vw;
                        border: 1px solid #fb7299;
                        color: #fb7299;
                        border-radius: 1.06667vw;
                        line-height: 6.4vw;
                        font-size: 3.46667vw;
                        i {
                            font-size: 3.46667vw;
                        }
                        span {
                            vertical-align: top;
                            margin-right: 0.53333vw;
                        }
                    }
                }
            }
        }
        .data {
            font-size: 3.2vw;
            margin-top: 2.66667vw;
            color: #999;
            span {
                margin-right: 4.8vw;
            }
        }
        .copyright {
            font-size: 3.2vw;
            color: #999;
            line-height: 4.8vw;
            margin-top: 2.13333vw;
            i {
                font-size: 3.73333vw;
                color: #fb7299;
                vertical-align: middle;
                margin-right: 2vw;
            }
            span {
                vertical-align: middle;
            }
        }
        .desc {
            font-size: 3.2vw;
            line-height: 4.8vw;
            color: #999;
            padding-top: 1.33333vw;
            white-space: pre-wrap;
        }
    }
}
.m-video2-toolbar {
    padding: 2.93333vw 3.2vw;
    color: #999;
    font-size: 0;
    white-space: nowrap;
    .left {
        display: inline-block;
        /* display: ${t=>t.display?"inline-block":"none"}; */
        .avatar {
            position: relative;
            vertical-align: middle;
            margin-right: 1.33333vw;
            display: inline-block;
            .face {
                width: 5.33333vw;
                height: 5.33333vw;
                border-radius: 50%;
                border: .5px solid #999;
            }
        }
        .name {
            display: inline-block;
            vertical-align: middle;
            font-size: 3.2vw;
            color: #212121;
            max-width: 26.66667vw;
            overflow: hidden;
            text-overflow: ellipsis;
            text-decoration: none;
        }
        .view-stat {
                line-height: 6.13333vw;
                font-size: 3.2vw;
                color: #999;
                vertical-align: middle;
                margin-left: 4rem;
                margin-right: 1rem;
            }
    }
    .right {
        display: inline-block;
        .launch-app-btn {
                display: inline-block;
                position: relative;
                .toolbar-item {
                    margin-right: 5.33333vw;
                    i {
                        margin-right: 1.33333vw;
                        font-size: 5.33333vw;
                        color: #757575;
                        vertical-align: middle;
                    }
                    span {
                        font-size: 2.66667vw;
                        vertical-align: middle;
                    }
                }
            }
    }
    .clear {
        clear: both;
    }
}
`,Ri=()=>{const[t,e]=m.exports.useState(!0),i=()=>{e(!t)};let n=t?{display:""}:{display:"none"};return f(Li,{children:[o("div",{className:"m-video-info-new",children:o(De,{children:o(De.Panel,{onClick:i,title:f("div",{className:"left",children:[o("span",{className:"label",children:o("span",{children:"\u6D3B\u52A8"})}),o("h1",{className:"has-activity",children:"\u6C83\u739B\u8981\u996D\u5220\u51CF\u7247\u6BB5"})]}),children:f("div",{className:"fold-container",children:[f("div",{className:"up",children:[f("div",{className:"face",children:[o("a",{className:"avatar",href:"/space",children:o("img",{src:"//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@160w_160h_1c.png",className:"bfs-img face","data-v-be935d08":""})}),f("div",{className:"info",children:[o("a",{className:"name",href:"/space",children:"CAVAN\u5494\u53FD"}),o("p",{className:"fans",children:"673\u7C89\u4E1D"})]})]}),o("div",{className:"follow",children:o("div",{className:"launch-app-btn",children:f("span",{className:"follow-btn",children:[o("i",{className:"iconfont ic_add1"}),o("span",{children:" \u5173\u6CE8"})]})})})]}),f("div",{className:"data",children:[o("span",{className:"view",children:"4\u4E07\u89C2\u770B"}),o("span",{className:"danmaku",children:"187\u5F39\u5E55"}),o("span",{className:"time",children:"2020-03-12"}),o("span",{className:"bvid",children:"BV1WE411L7dC"})]}),f("p",{className:"copyright",children:[o("i",{className:"iconfont Blocked"}),o("span",{children:"\u672A\u7ECF\u4F5C\u8005\u6388\u6743\u7981\u6B62\u8F6C\u8F7D"})]}),f("p",{className:"desc",children:["\u6253\u7B97\u505A\u4E2A\u201CUP\u4E3B\u7F16\u5E74\u53F2\u201D\u7CFB\u5217\uFF0C\u4ECEWarma\u4F20\u5F00\u59CB\uFF01 ",o("br",{}),"\u60F3\u770B\u7684\u53EF\u4EE5\u4E09\u8FDE\u5173\u6CE8\u4E00\u4E0B\uFF01\uFF01",o("br",{}),"\u4E5F\u5E0C\u671B\u4E00\u5927\u4F6C\u5408\u4F5C\uFF01\uFF01\uFF01"]})]})},"1")})}),f("div",{className:"m-video2-toolbar",children:[f("div",{className:"left",style:n,children:[o("a",{className:"avatar",href:"/space",children:o("img",{src:"//i1.hdslb.com/bfs/face/c51b9046c461967fbf9cfff36d399996dd6f5df0.jpg@80w_80h_1c.png",className:"bfs-img face","data-v-be935d08":""})}),o("a",{className:"name",href:"/space",children:"CAVAN\u5494\u53FD"}),o("span",{className:"view-stat",children:"4\u4E07\u89C2\u770B"})]}),f("div",{className:"right",children:[o("div",{className:"launch-app-btn",children:f("span",{className:"toolbar-item",children:[o("i",{className:"iconfont dianzan"}),o("span",{children:"3616"})]})}),o("div",{className:"launch-app-btn",children:f("span",{className:"toolbar-item",children:[o("i",{className:"iconfont icon_fav"}),o("span",{children:"541"})]})}),o("div",{className:"launch-app-btn",children:f("span",{className:"toolbar-item",children:[o("i",{className:"iconfont huancun"}),o("span",{children:"\u7F13\u5B58"})]})})]}),o("div",{className:"clear"})]})]})},$i=A.div`
    height: 100%;
    overflow: hidden;
    position: relative;
    color:#505050;
    .adm-tabs{
        --title-font-size:3.73333vw;
        --active-title-color:#fb7299;
        --active-line-color:#fb7299;
        --active-line-height:0.1rem;
        --content-padding:0;
        .adm-tabs-header{
            padding: 0 2rem;
            border-top: solid 1px var(--adm-color-border);
            border-bottom: 0;
        }     
    }
    
`,Fi=A.div`
    position: relative;
    .card-box .card .pic{
        border-radius: 1.6vw;
    }
`,Mi=t=>{const{data:e,enterLoading:i}=t,{getRecommendedDispatch:n}=t;return m.exports.useEffect(()=>{n()},[]),o(Fi,{children:o(ft,{enterLoading:i,videos:e})})},Bi=t=>({data:t.recommend.data,enterLoading:t.recommend.enterLoading}),ji=t=>({getRecommendedDispatch(){t(Di())}});var Ki=ze(Bi,ji)(Mi);const Vi=A.div`
    position: relative;
    .list{

    }
`,Ui=A.li`
    clear: both;
    padding: 3.2vw;
    border-bottom: 1px solid #e7e7e7;
    font-size: 0;
    .comment-item-openapp {
        display: block;
        position: relative;
        .head {
            float: left;
            position: relative;
            margin-top: 0.53333vw;
            .avatar {
                float: left;
                width: 8vw;
                height: 8vw;
                border-radius: 50%;
            }
            .official {
                position: absolute;
                right: -1px;
                bottom: -1px;
                width: 3.2vw;
                height: 3.2vw;
            }
        }
        .detail {
            margin-left: 12vw;
            .name {
                font-size: 3.46667vw;
                color: #757575;
            }
            .like {
                float: right;
                font-size: 2.66667vw;
                color: ${t=>t.action?"#fb7299":"#999"};
                margin-top: 1.86667vw;
                i{
                    vertical-align: middle;
                }
                span {
                    vertical-align: middle;
                }
            }
            .time {
                display: inline-block;
                margin-top: 1.86667vw;
                font-size: 3.2vw;
                height: 3.2vw;
                line-height: 3.2vw;
                color: #999;
            }
            .content {
                margin-top: 2.4vw;
                font-size: 3.46667vw;
                color: #212121;
                white-space: pre-line;
                word-break: break-word;
            }
        }
        .launch-app-btn {
            display: inline-block;
            position: relative;
        }
        .m-subpreview-openapp {
            display: block!important;
        }
        .m-sub-reply-preview {
            margin-left: 12vw;
            margin-top: 2.66667vw;
            background: #f4f4f4;
            padding: 2.66667vw;
            border-radius: 1.06667vw;
            .sub-preview-item {
                color: #212121;
                margin: 1.6vw 0 0;
                font-size: 3.46667vw;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                :first-child {
                    margin-top: 0;
                }
                a {
                    color: #5090cc;
                }
                a,span{
                    vertical-align: middle;
                    text-decoration: none;
                    word-break: break-all;
                }
            }
            .show-more {
                display: block;
                margin-top: 2.13333vw;
                font-size: 3.2vw;
                color: #5090cc;
                i {
                    vertical-align: text-top;
                }
            }
        }
    }
    .bfs-img[data-v-be935d08] {
    background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/loading.png) no-repeat 50%;
    background-size: contain;
    background-color: #e7e7e7;
    -o-object-fit: cover;
    object-fit: cover;
}
`,Wi=({comment:t,ChangeDianzan:e})=>{const{rpid:i,member:{uname:n,avatar:r},like:a,replies:s,reply_control:{sub_reply_entry_text:c},content:{message:d},ctime:h,action:l}=t;return o(Ui,{action:l,"data-rpid":i,className:"comment-item",scrollshow:"true",children:f("div",{className:"launch-app-btn comment-item-openapp",children:[f("div",{className:"head",children:[o("img",{"data-v-be935d08":"",src:r,className:"bfs-img avatar"}),o("img",{src:"//s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/icon_Certification_official.png",className:"official"})]}),f("div",{className:"detail",children:[f("div",{className:"user",children:[o("span",{className:"name",children:n}),f("span",{className:"like",onClick:()=>e(i),children:[o("i",{className:"iconfont like2"}),f("span",{children:[" ",ht(a)]})]})]}),o("p",{className:"time",children:pt(h)}),o("p",{className:"content",children:d})]}),o("div",{className:"launch-app-btn m-subpreview-openapp",children:f("div",{className:"m-sub-reply-preview",children:[s.map(p=>{const{rpid:b,member:{uname:k},content:{message:C}}=p;return f("p",{className:"sub-preview-item",children:[f("a",{className:"name",children:[k,"\uFF1A"]}),o("span",{className:"content",children:C})]},b)}),f("a",{className:"show-more",children:[c,o("i",{className:"iconfont gengduo1"})]})]})})]})})},Hi=t=>{const{commentList:e}=t,{getCommentListDispatch:i,setDianzanDispatch:n}=t,r=a=>{n(a)};return m.exports.useEffect(()=>{i()},[]),o(Vi,{children:o("div",{className:"list",children:o("ul",{children:e.map(a=>o(Wi,{comment:a,ChangeDianzan:r},a.rpid))})})})},Yi=t=>({commentList:t.comments.commentList,idtest:t.comments.idtest}),Gi=t=>({getCommentListDispatch(){t(Ti())},setDianzanDispatch(e){t(Ii(e))}});var Xi=ze(Yi,Gi)(m.exports.memo(Hi));const oe=[{key:"recommendPart",title:"\u76F8\u5173\u63A8\u8350"},{key:"commentsPart",title:"\u8BC4\u8BBA 145"}],qi=()=>{const t=m.exports.useRef(null),[e,i]=m.exports.useState(0);return o($i,{children:f("div",{className:"v-switcher__header",children:[o(be,{activeKey:oe[e].key,onChange:n=>{var a;const r=oe.findIndex(s=>s.key===n);i(r),(a=t.current)==null||a.swipeTo(r)},children:oe.map(n=>o(be.Tab,{title:n.title},n.key))}),f(re,{direction:"horizontal",loop:!0,indicator:()=>null,ref:t,defaultIndex:e,onIndexChange:n=>{i(n)},children:[o(re.Item,{children:o(Ki,{})}),o(re.Item,{children:o(Xi,{})})]})]})})},Zi=A.div`
--s: 3;
--h: 36;
--speed: 5s;
.g-container {
    /* display: flex;
    width: 300px;
    margin: auto;
    height: calc(var(--h) * 1px);
    line-height: calc(var(--h) * 1px);
    font-size: 20px;
    background: #FB7299;
    color: #fff;
    overflow: hidden; */
    ul {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        animation: move calc(var(--speed) * var(--s)) steps(var(--s)) infinite;
        li {
            flex-shrink: 0;
            width: 100%;
            padding-left: .5rem;
            box-sizing: border-box;
            white-space: nowrap;
            cursor: pointer;
            animation: liMove calc(var(--speed)) infinite;
        }
    }
}
@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(0, calc(var(--s) * var(--h) * -0.05rem));
    }
}

@keyframes liMove {
    0% {
        transform: translate(0, 0);
    }

    10%,
    100% {
        transform: translate(0, calc(var(--h) * -0.05rem));
    }
}
`;function Ji(){return o(Zi,{children:o("div",{className:"g-container",children:o("ul",{className:"--s: 4",children:[{content:"\u6253\u5F00APP,  \u6D41\u7545\u53C8\u9AD8\u6E05"},{content:"\u6253\u5F00APP,  \u770B\u66F4\u591A\u7CBE\u5F69\u89C6\u9891"},{content:"\u6253\u5F00APP,  \u4E00\u8D77\u53D1\u5F39\u5E55\u770B\u89C6\u9891"},{content:"\u6253\u5F00APP,  \u6D41\u7545\u53C8\u9AD8\u6E05"}].map((e,i)=>o("li",{children:e.content},i))})})})}const Qi=()=>f("div",{style:{position:"relative",overflow:"hidden"},children:[o(Ai,{children:o("img",{src:Oi,alt:""})}),o(zi,{children:f("div",{className:"m-video2-awaken-btn",children:[o("div",{className:"icon popup"}),o("div",{className:"container",children:o("div",{className:"btn-text",children:o(Ji,{})})})]})}),o(Ri,{}),o(qi,{})]});var nn=m.exports.memo(Qi);export{nn as default};
