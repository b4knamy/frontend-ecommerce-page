var Pv=Object.defineProperty;var $v=(e,t,n)=>t in e?Pv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Da=(e,t,n)=>$v(e,typeof t!="symbol"?t+"":t,n);function Ev(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Tv(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Zf={exports:{}},Js={},Jf={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Lv=Symbol.for("react.portal"),Rv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),zv=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Nv=Symbol.for("react.context"),Mv=Symbol.for("react.forward_ref"),Iv=Symbol.for("react.suspense"),Ov=Symbol.for("react.memo"),bv=Symbol.for("react.lazy"),Kd=Symbol.iterator;function Vv(e){return e===null||typeof e!="object"?null:(e=Kd&&e[Kd]||e["@@iterator"],typeof e=="function"?e:null)}var em={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tm=Object.assign,nm={};function Yr(e,t,n){this.props=e,this.context=t,this.refs=nm,this.updater=n||em}Yr.prototype.isReactComponent={};Yr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rm(){}rm.prototype=Yr.prototype;function ec(e,t,n){this.props=e,this.context=t,this.refs=nm,this.updater=n||em}var tc=ec.prototype=new rm;tc.constructor=ec;tm(tc,Yr.prototype);tc.isPureReactComponent=!0;var Qd=Array.isArray,im=Object.prototype.hasOwnProperty,nc={current:null},om={key:!0,ref:!0,__self:!0,__source:!0};function sm(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)im.call(t,r)&&!om.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uo,type:e,key:o,ref:s,props:i,_owner:nc.current}}function Fv(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rc(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function Bv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xd=/\/+/g;function Na(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Bv(""+e.key):t.toString(36)}function Ho(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case uo:case Lv:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Na(s,0):r,Qd(i)?(n="",e!=null&&(n=e.replace(Xd,"$&/")+"/"),Ho(i,t,n,"",function(c){return c})):i!=null&&(rc(i)&&(i=Fv(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Xd,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Qd(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Na(o,a);s+=Ho(o,t,n,l,i)}else if(l=Vv(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Na(o,a++),s+=Ho(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function So(e,t,n){if(e==null)return e;var r=[],i=0;return Ho(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Uv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Go={transition:null},Wv={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Go,ReactCurrentOwner:nc};function am(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:So,forEach:function(e,t,n){So(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return So(e,function(){t++}),t},toArray:function(e){return So(e,function(t){return t})||[]},only:function(e){if(!rc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Yr;V.Fragment=Rv;V.Profiler=zv;V.PureComponent=ec;V.StrictMode=_v;V.Suspense=Iv;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Wv;V.act=am;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tm({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=nc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)im.call(t,l)&&!om.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uo,type:e.type,key:i,ref:o,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:Nv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Dv,_context:e},e.Consumer=e};V.createElement=sm;V.createFactory=function(e){var t=sm.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Mv,render:e}};V.isValidElement=rc;V.lazy=function(e){return{$$typeof:bv,_payload:{_status:-1,_result:e},_init:Uv}};V.memo=function(e,t){return{$$typeof:Ov,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};V.unstable_act=am;V.useCallback=function(e,t){return Me.current.useCallback(e,t)};V.useContext=function(e){return Me.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};V.useEffect=function(e,t){return Me.current.useEffect(e,t)};V.useId=function(){return Me.current.useId()};V.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return Me.current.useMemo(e,t)};V.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};V.useRef=function(e){return Me.current.useRef(e)};V.useState=function(e){return Me.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return Me.current.useTransition()};V.version="18.3.1";Jf.exports=V;var g=Jf.exports;const me=Tv(g),Hv=Ev({__proto__:null,default:me},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=g,Kv=Symbol.for("react.element"),Qv=Symbol.for("react.fragment"),Xv=Object.prototype.hasOwnProperty,Yv=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function lm(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Xv.call(t,r)&&!qv.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Kv,type:e,key:o,ref:s,props:i,_owner:Yv.current}}Js.Fragment=Qv;Js.jsx=lm;Js.jsxs=lm;Zf.exports=Js;var u=Zf.exports,um={exports:{}},Ze={},cm={exports:{}},dm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,_){var N=L.length;L.push(_);e:for(;0<N;){var K=N-1>>>1,Q=L[K];if(0<i(Q,_))L[K]=_,L[N]=Q,N=K;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var _=L[0],N=L.pop();if(N!==_){L[0]=N;e:for(var K=0,Q=L.length,Rn=Q>>>1;K<Rn;){var dt=2*(K+1)-1,Yt=L[dt],He=dt+1,Lt=L[He];if(0>i(Yt,N))He<Q&&0>i(Lt,Yt)?(L[K]=Lt,L[He]=N,K=He):(L[K]=Yt,L[dt]=N,K=dt);else if(He<Q&&0>i(Lt,N))L[K]=Lt,L[He]=N,K=He;else break e}}return _}function i(L,_){var N=L.sortIndex-_.sortIndex;return N!==0?N:L.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],d=1,p=null,h=3,v=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var _=n(c);_!==null;){if(_.callback===null)r(c);else if(_.startTime<=L)r(c),_.sortIndex=_.expirationTime,t(l,_);else break;_=n(c)}}function C(L){if(w=!1,x(L),!y)if(n(l)!==null)y=!0,Oe(A);else{var _=n(c);_!==null&&q(C,_.startTime-L)}}function A(L,_){y=!1,w&&(w=!1,m($),$=-1),v=!0;var N=h;try{for(x(_),p=n(l);p!==null&&(!(p.expirationTime>_)||L&&!Y());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var Q=K(p.expirationTime<=_);_=e.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(l)&&r(l),x(_)}else r(l);p=n(l)}if(p!==null)var Rn=!0;else{var dt=n(c);dt!==null&&q(C,dt.startTime-_),Rn=!1}return Rn}finally{p=null,h=N,v=!1}}var k=!1,P=null,$=-1,M=5,z=-1;function Y(){return!(e.unstable_now()-z<M)}function ke(){if(P!==null){var L=e.unstable_now();z=L;var _=!0;try{_=P(!0,L)}finally{_?tt():(k=!1,P=null)}}else k=!1}var tt;if(typeof f=="function")tt=function(){f(ke)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Tt=We.port2;We.port1.onmessage=ke,tt=function(){Tt.postMessage(null)}}else tt=function(){S(ke,0)};function Oe(L){P=L,k||(k=!0,tt())}function q(L,_){$=S(function(){L(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){y||v||(y=!0,Oe(A))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(L){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var N=h;h=_;try{return L()}finally{h=N}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,_){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var N=h;h=L;try{return _()}finally{h=N}},e.unstable_scheduleCallback=function(L,_,N){var K=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?K+N:K):N=K,L){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=N+Q,L={id:d++,callback:_,priorityLevel:L,startTime:N,expirationTime:Q,sortIndex:-1},N>K?(L.sortIndex=N,t(c,L),n(l)===null&&L===n(c)&&(w?(m($),$=-1):w=!0,q(C,N-K))):(L.sortIndex=Q,t(l,L),y||v||(y=!0,Oe(A))),L},e.unstable_shouldYield=Y,e.unstable_wrapCallback=function(L){var _=h;return function(){var N=h;h=_;try{return L.apply(this,arguments)}finally{h=N}}}})(dm);cm.exports=dm;var Zv=cm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jv=g,Ye=Zv;function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pm=new Set,Oi={};function tr(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(Oi[e]=t,e=0;e<t.length;e++)pm.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rl=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Yd={},qd={};function ty(e){return Rl.call(qd,e)?!0:Rl.call(Yd,e)?!1:ey.test(e)?qd[e]=!0:(Yd[e]=!0,!1)}function ny(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ry(e,t,n,r){if(t===null||typeof t>"u"||ny(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var ic=/[\-:]([a-z])/g;function oc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ic,oc);Ae[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ic,oc);Ae[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ic,oc);Ae[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function sc(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ry(t,n,i,r)&&(n=null),r||i===null?ty(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=Jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),ac=Symbol.for("react.strict_mode"),_l=Symbol.for("react.profiler"),hm=Symbol.for("react.provider"),fm=Symbol.for("react.context"),lc=Symbol.for("react.forward_ref"),zl=Symbol.for("react.suspense"),Dl=Symbol.for("react.suspense_list"),uc=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),mm=Symbol.for("react.offscreen"),Zd=Symbol.iterator;function oi(e){return e===null||typeof e!="object"?null:(e=Zd&&e[Zd]||e["@@iterator"],typeof e=="function"?e:null)}var se=Object.assign,Ma;function xi(e){if(Ma===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ma=t&&t[1]||""}return`
`+Ma+e}var Ia=!1;function Oa(e,t){if(!e||Ia)return"";Ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xi(e):""}function iy(e){switch(e.tag){case 5:return xi(e.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return e=Oa(e.type,!1),e;case 11:return e=Oa(e.type.render,!1),e;case 1:return e=Oa(e.type,!0),e;default:return""}}function Nl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case cr:return"Portal";case _l:return"Profiler";case ac:return"StrictMode";case zl:return"Suspense";case Dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fm:return(e.displayName||"Context")+".Consumer";case hm:return(e._context.displayName||"Context")+".Provider";case lc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uc:return t=e.displayName||null,t!==null?t:Nl(e.type)||"Memo";case tn:t=e._payload,e=e._init;try{return Nl(e(t))}catch{}}return null}function oy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nl(t);case 8:return t===ac?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function yn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sy(e){var t=gm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function jo(e){e._valueTracker||(e._valueTracker=sy(e))}function xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=gm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ml(e,t){var n=t.checked;return se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=yn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vm(e,t){t=t.checked,t!=null&&sc(e,"checked",t,!1)}function Il(e,t){vm(e,t);var n=yn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,yn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ep(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||ds(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vi=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+yn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function bl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(vi(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:yn(n)}}function ym(e,t){var n=yn(t.value),r=yn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function np(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ao,Sm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ao=Ao||document.createElement("div"),Ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function bi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(e){ay.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ai[t]=Ai[e]})});function Cm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ai.hasOwnProperty(e)&&Ai[e]?(""+t).trim():t+"px"}function jm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var ly=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(ly[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ul=null;function cc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wl=null,Tr=null,Lr=null;function rp(e){if(e=ho(e)){if(typeof Wl!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ia(t),Wl(e.stateNode,e.type,t))}}function Am(e){Tr?Lr?Lr.push(e):Lr=[e]:Tr=e}function km(){if(Tr){var e=Tr,t=Lr;if(Lr=Tr=null,rp(e),t)for(e=0;e<t.length;e++)rp(t[e])}}function Pm(e,t){return e(t)}function $m(){}var ba=!1;function Em(e,t,n){if(ba)return e(t,n);ba=!0;try{return Pm(e,t,n)}finally{ba=!1,(Tr!==null||Lr!==null)&&($m(),km())}}function Vi(e,t){var n=e.stateNode;if(n===null)return null;var r=ia(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Hl=!1;if(Ut)try{var si={};Object.defineProperty(si,"passive",{get:function(){Hl=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Hl=!1}function uy(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var ki=!1,ps=null,hs=!1,Gl=null,cy={onError:function(e){ki=!0,ps=e}};function dy(e,t,n,r,i,o,s,a,l){ki=!1,ps=null,uy.apply(cy,arguments)}function py(e,t,n,r,i,o,s,a,l){if(dy.apply(this,arguments),ki){if(ki){var c=ps;ki=!1,ps=null}else throw Error(E(198));hs||(hs=!0,Gl=c)}}function nr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Tm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ip(e){if(nr(e)!==e)throw Error(E(188))}function hy(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ip(i),e;if(o===r)return ip(i),t;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function Lm(e){return e=hy(e),e!==null?Rm(e):null}function Rm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rm(e);if(t!==null)return t;e=e.sibling}return null}var _m=Ye.unstable_scheduleCallback,op=Ye.unstable_cancelCallback,fy=Ye.unstable_shouldYield,my=Ye.unstable_requestPaint,ue=Ye.unstable_now,gy=Ye.unstable_getCurrentPriorityLevel,dc=Ye.unstable_ImmediatePriority,zm=Ye.unstable_UserBlockingPriority,fs=Ye.unstable_NormalPriority,xy=Ye.unstable_LowPriority,Dm=Ye.unstable_IdlePriority,ea=null,kt=null;function vy(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(ea,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:Sy,yy=Math.log,wy=Math.LN2;function Sy(e){return e>>>=0,e===0?32:31-(yy(e)/wy|0)|0}var ko=64,Po=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ms(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=yi(a):(o&=s,o!==0&&(r=yi(o)))}else s=n&~i,s!==0?r=yi(s):o!==0&&(r=yi(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function Cy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-gt(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Cy(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Kl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nm(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function Va(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function Ay(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function pc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var W=0;function Mm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Im,hc,Om,bm,Vm,Ql=!1,$o=[],un=null,cn=null,dn=null,Fi=new Map,Bi=new Map,rn=[],ky="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sp(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":cn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bi.delete(t.pointerId)}}function ai(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=ho(t),t!==null&&hc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Py(e,t,n,r,i){switch(t){case"focusin":return un=ai(un,e,t,n,r,i),!0;case"dragenter":return cn=ai(cn,e,t,n,r,i),!0;case"mouseover":return dn=ai(dn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Fi.set(o,ai(Fi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Bi.set(o,ai(Bi.get(o)||null,e,t,n,r,i)),!0}return!1}function Fm(e){var t=bn(e.target);if(t!==null){var n=nr(t);if(n!==null){if(t=n.tag,t===13){if(t=Tm(n),t!==null){e.blockedOn=t,Vm(e.priority,function(){Om(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ko(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Xl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ul=r,n.target.dispatchEvent(r),Ul=null}else return t=ho(n),t!==null&&hc(t),e.blockedOn=n,!1;t.shift()}return!0}function ap(e,t,n){Ko(e)&&n.delete(t)}function $y(){Ql=!1,un!==null&&Ko(un)&&(un=null),cn!==null&&Ko(cn)&&(cn=null),dn!==null&&Ko(dn)&&(dn=null),Fi.forEach(ap),Bi.forEach(ap)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,Ql||(Ql=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,$y)))}function Ui(e){function t(i){return li(i,e)}if(0<$o.length){li($o[0],e);for(var n=1;n<$o.length;n++){var r=$o[n];r.blockedOn===e&&(r.blockedOn=null)}}for(un!==null&&li(un,e),cn!==null&&li(cn,e),dn!==null&&li(dn,e),Fi.forEach(t),Bi.forEach(t),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Fm(n),n.blockedOn===null&&rn.shift()}var Rr=Kt.ReactCurrentBatchConfig,gs=!0;function Ey(e,t,n,r){var i=W,o=Rr.transition;Rr.transition=null;try{W=1,fc(e,t,n,r)}finally{W=i,Rr.transition=o}}function Ty(e,t,n,r){var i=W,o=Rr.transition;Rr.transition=null;try{W=4,fc(e,t,n,r)}finally{W=i,Rr.transition=o}}function fc(e,t,n,r){if(gs){var i=Xl(e,t,n,r);if(i===null)Ya(e,t,r,xs,n),sp(e,r);else if(Py(i,e,t,n,r))r.stopPropagation();else if(sp(e,r),t&4&&-1<ky.indexOf(e)){for(;i!==null;){var o=ho(i);if(o!==null&&Im(o),o=Xl(e,t,n,r),o===null&&Ya(e,t,r,xs,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ya(e,t,r,null,n)}}var xs=null;function Xl(e,t,n,r){if(xs=null,e=cc(r),e=bn(e),e!==null)if(t=nr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Tm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xs=e,null}function Bm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case dc:return 1;case zm:return 4;case fs:case xy:return 16;case Dm:return 536870912;default:return 16}default:return 16}}var sn=null,mc=null,Qo=null;function Um(){if(Qo)return Qo;var e,t=mc,n=t.length,r,i="value"in sn?sn.value:sn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Qo=i.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function lp(){return!1}function Je(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Eo:lp,this.isPropagationStopped=lp,this}return se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Je(qr),po=se({},qr,{view:0,detail:0}),Ly=Je(po),Fa,Ba,ui,ta=se({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Fa=e.screenX-ui.screenX,Ba=e.screenY-ui.screenY):Ba=Fa=0,ui=e),Fa)},movementY:function(e){return"movementY"in e?e.movementY:Ba}}),up=Je(ta),Ry=se({},ta,{dataTransfer:0}),_y=Je(Ry),zy=se({},po,{relatedTarget:0}),Ua=Je(zy),Dy=se({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ny=Je(Dy),My=se({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iy=Je(My),Oy=se({},qr,{data:0}),cp=Je(Oy),by={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function By(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Fy[e])?!!t[e]:!1}function xc(){return By}var Uy=se({},po,{key:function(e){if(e.key){var t=by[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wy=Je(Uy),Hy=se({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Je(Hy),Gy=se({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Ky=Je(Gy),Qy=se({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xy=Je(Qy),Yy=se({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),qy=Je(Yy),Zy=[9,13,27,32],vc=Ut&&"CompositionEvent"in window,Pi=null;Ut&&"documentMode"in document&&(Pi=document.documentMode);var Jy=Ut&&"TextEvent"in window&&!Pi,Wm=Ut&&(!vc||Pi&&8<Pi&&11>=Pi),pp=" ",hp=!1;function Hm(e,t){switch(e){case"keyup":return Zy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function ew(e,t){switch(e){case"compositionend":return Gm(t);case"keypress":return t.which!==32?null:(hp=!0,pp);case"textInput":return e=t.data,e===pp&&hp?null:e;default:return null}}function tw(e,t){if(pr)return e==="compositionend"||!vc&&Hm(e,t)?(e=Um(),Qo=mc=sn=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wm&&t.locale!=="ko"?null:t.data;default:return null}}var nw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nw[e.type]:t==="textarea"}function Km(e,t,n,r){Am(r),t=vs(t,"onChange"),0<t.length&&(n=new gc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var $i=null,Wi=null;function rw(e){i0(e,0)}function na(e){var t=mr(e);if(xm(t))return e}function iw(e,t){if(e==="change")return t}var Qm=!1;if(Ut){var Wa;if(Ut){var Ha="oninput"in document;if(!Ha){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Ha=typeof mp.oninput=="function"}Wa=Ha}else Wa=!1;Qm=Wa&&(!document.documentMode||9<document.documentMode)}function gp(){$i&&($i.detachEvent("onpropertychange",Xm),Wi=$i=null)}function Xm(e){if(e.propertyName==="value"&&na(Wi)){var t=[];Km(t,Wi,e,cc(e)),Em(rw,t)}}function ow(e,t,n){e==="focusin"?(gp(),$i=t,Wi=n,$i.attachEvent("onpropertychange",Xm)):e==="focusout"&&gp()}function sw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(Wi)}function aw(e,t){if(e==="click")return na(t)}function lw(e,t){if(e==="input"||e==="change")return na(t)}function uw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:uw;function Hi(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rl.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function xp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vp(e,t){var n=xp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function Ym(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ym(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function qm(){for(var e=window,t=ds();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ds(e.document)}return t}function yc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cw(e){var t=qm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ym(n.ownerDocument.documentElement,n)){if(r!==null&&yc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=vp(n,o);var s=vp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dw=Ut&&"documentMode"in document&&11>=document.documentMode,hr=null,Yl=null,Ei=null,ql=!1;function yp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ql||hr==null||hr!==ds(r)||(r=hr,"selectionStart"in r&&yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ei&&Hi(Ei,r)||(Ei=r,r=vs(Yl,"onSelect"),0<r.length&&(t=new gc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function To(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},Ga={},Zm={};Ut&&(Zm=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function ra(e){if(Ga[e])return Ga[e];if(!fr[e])return e;var t=fr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Zm)return Ga[e]=t[n];return e}var Jm=ra("animationend"),e0=ra("animationiteration"),t0=ra("animationstart"),n0=ra("transitionend"),r0=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(e,t){r0.set(e,t),tr(t,[e])}for(var Ka=0;Ka<wp.length;Ka++){var Qa=wp[Ka],pw=Qa.toLowerCase(),hw=Qa[0].toUpperCase()+Qa.slice(1);kn(pw,"on"+hw)}kn(Jm,"onAnimationEnd");kn(e0,"onAnimationIteration");kn(t0,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(n0,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fw=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Sp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,py(r,t,void 0,e),e.currentTarget=null}function i0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Sp(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Sp(i,a,c),o=l}}}if(hs)throw e=Gl,hs=!1,Gl=null,e}function Z(e,t){var n=t[nu];n===void 0&&(n=t[nu]=new Set);var r=e+"__bubble";n.has(r)||(o0(t,e,2,!1),n.add(r))}function Xa(e,t,n){var r=0;t&&(r|=4),o0(n,e,r,t)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Gi(e){if(!e[Lo]){e[Lo]=!0,pm.forEach(function(n){n!=="selectionchange"&&(fw.has(n)||Xa(n,!1,e),Xa(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lo]||(t[Lo]=!0,Xa("selectionchange",!1,t))}}function o0(e,t,n,r){switch(Bm(t)){case 1:var i=Ey;break;case 4:i=Ty;break;default:i=fc}n=i.bind(null,t,n,e),i=void 0,!Hl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ya(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=bn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Em(function(){var c=o,d=cc(n),p=[];e:{var h=r0.get(e);if(h!==void 0){var v=gc,y=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":v=Wy;break;case"focusin":y="focus",v=Ua;break;case"focusout":y="blur",v=Ua;break;case"beforeblur":case"afterblur":v=Ua;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=_y;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Ky;break;case Jm:case e0:case t0:v=Ny;break;case n0:v=Xy;break;case"scroll":v=Ly;break;case"wheel":v=qy;break;case"copy":case"cut":case"paste":v=Iy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dp}var w=(t&4)!==0,S=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var f=c,x;f!==null;){x=f;var C=x.stateNode;if(x.tag===5&&C!==null&&(x=C,m!==null&&(C=Vi(f,m),C!=null&&w.push(Ki(f,C,x)))),S)break;f=f.return}0<w.length&&(h=new v(h,y,null,n,d),p.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ul&&(y=n.relatedTarget||n.fromElement)&&(bn(y)||y[Wt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?bn(y):null,y!==null&&(S=nr(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(w=up,C="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(w=dp,C="onPointerLeave",m="onPointerEnter",f="pointer"),S=v==null?h:mr(v),x=y==null?h:mr(y),h=new w(C,f+"leave",v,n,d),h.target=S,h.relatedTarget=x,C=null,bn(d)===c&&(w=new w(m,f+"enter",y,n,d),w.target=x,w.relatedTarget=S,C=w),S=C,v&&y)t:{for(w=v,m=y,f=0,x=w;x;x=ar(x))f++;for(x=0,C=m;C;C=ar(C))x++;for(;0<f-x;)w=ar(w),f--;for(;0<x-f;)m=ar(m),x--;for(;f--;){if(w===m||m!==null&&w===m.alternate)break t;w=ar(w),m=ar(m)}w=null}else w=null;v!==null&&Cp(p,h,v,w,!1),y!==null&&S!==null&&Cp(p,S,y,w,!0)}}e:{if(h=c?mr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var A=iw;else if(fp(h))if(Qm)A=lw;else{A=sw;var k=ow}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=aw);if(A&&(A=A(e,c))){Km(p,A,n,d);break e}k&&k(e,h,c),e==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&Ol(h,"number",h.value)}switch(k=c?mr(c):window,e){case"focusin":(fp(k)||k.contentEditable==="true")&&(hr=k,Yl=c,Ei=null);break;case"focusout":Ei=Yl=hr=null;break;case"mousedown":ql=!0;break;case"contextmenu":case"mouseup":case"dragend":ql=!1,yp(p,n,d);break;case"selectionchange":if(dw)break;case"keydown":case"keyup":yp(p,n,d)}var P;if(vc)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else pr?Hm(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(Wm&&n.locale!=="ko"&&(pr||$!=="onCompositionStart"?$==="onCompositionEnd"&&pr&&(P=Um()):(sn=d,mc="value"in sn?sn.value:sn.textContent,pr=!0)),k=vs(c,$),0<k.length&&($=new cp($,e,null,n,d),p.push({event:$,listeners:k}),P?$.data=P:(P=Gm(n),P!==null&&($.data=P)))),(P=Jy?ew(e,n):tw(e,n))&&(c=vs(c,"onBeforeInput"),0<c.length&&(d=new cp("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=P))}i0(p,t)})}function Ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function vs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Vi(e,n),o!=null&&r.unshift(Ki(e,o,i)),o=Vi(e,t),o!=null&&r.push(Ki(e,o,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Vi(n,o),l!=null&&s.unshift(Ki(n,l,a))):i||(l=Vi(n,o),l!=null&&s.push(Ki(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var mw=/\r\n?/g,gw=/\u0000|\uFFFD/g;function jp(e){return(typeof e=="string"?e:""+e).replace(mw,`
`).replace(gw,"")}function Ro(e,t,n){if(t=jp(t),jp(e)!==t&&n)throw Error(E(425))}function ys(){}var Zl=null,Jl=null;function eu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,xw=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(e){return Ap.resolve(null).then(e).catch(yw)}:tu;function yw(e){setTimeout(function(){throw e})}function qa(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ui(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ui(t)}function pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),At="__reactFiber$"+Zr,Qi="__reactProps$"+Zr,Wt="__reactContainer$"+Zr,nu="__reactEvents$"+Zr,ww="__reactListeners$"+Zr,Sw="__reactHandles$"+Zr;function bn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kp(e);e!==null;){if(n=e[At])return n;e=kp(e)}return t}e=n,n=e.parentNode}return null}function ho(e){return e=e[At]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ia(e){return e[Qi]||null}var ru=[],gr=-1;function Pn(e){return{current:e}}function ee(e){0>gr||(e.current=ru[gr],ru[gr]=null,gr--)}function X(e,t){gr++,ru[gr]=e.current,e.current=t}var wn={},_e=Pn(wn),Fe=Pn(!1),Qn=wn;function Nr(e,t){var n=e.type.contextTypes;if(!n)return wn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function ws(){ee(Fe),ee(_e)}function Pp(e,t,n){if(_e.current!==wn)throw Error(E(168));X(_e,t),X(Fe,n)}function s0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(E(108,oy(e)||"Unknown",i));return se({},n,r)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||wn,Qn=_e.current,X(_e,e),X(Fe,Fe.current),!0}function $p(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=s0(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,ee(Fe),ee(_e),X(_e,e)):ee(Fe),X(Fe,n)}var Dt=null,oa=!1,Za=!1;function a0(e){Dt===null?Dt=[e]:Dt.push(e)}function Cw(e){oa=!0,a0(e)}function $n(){if(!Za&&Dt!==null){Za=!0;var e=0,t=W;try{var n=Dt;for(W=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Dt=null,oa=!1}catch(i){throw Dt!==null&&(Dt=Dt.slice(e+1)),_m(dc,$n),i}finally{W=t,Za=!1}}return null}var xr=[],vr=0,Cs=null,js=0,it=[],ot=0,Xn=null,Nt=1,Mt="";function Dn(e,t){xr[vr++]=js,xr[vr++]=Cs,Cs=e,js=t}function l0(e,t,n){it[ot++]=Nt,it[ot++]=Mt,it[ot++]=Xn,Xn=e;var r=Nt;e=Mt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Nt=1<<32-gt(t)+i|n<<i|r,Mt=o+e}else Nt=1<<o|n<<i|r,Mt=e}function wc(e){e.return!==null&&(Dn(e,1),l0(e,1,0))}function Sc(e){for(;e===Cs;)Cs=xr[--vr],xr[vr]=null,js=xr[--vr],xr[vr]=null;for(;e===Xn;)Xn=it[--ot],it[ot]=null,Mt=it[--ot],it[ot]=null,Nt=it[--ot],it[ot]=null}var Xe=null,Qe=null,ne=!1,mt=null;function u0(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ep(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Xn!==null?{id:Nt,overflow:Mt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Qe=null,!0):!1;default:return!1}}function iu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ou(e){if(ne){var t=Qe;if(t){var n=t;if(!Ep(e,t)){if(iu(e))throw Error(E(418));t=pn(n.nextSibling);var r=Xe;t&&Ep(e,t)?u0(r,n):(e.flags=e.flags&-4097|2,ne=!1,Xe=e)}}else{if(iu(e))throw Error(E(418));e.flags=e.flags&-4097|2,ne=!1,Xe=e}}}function Tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function _o(e){if(e!==Xe)return!1;if(!ne)return Tp(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!eu(e.type,e.memoizedProps)),t&&(t=Qe)){if(iu(e))throw c0(),Error(E(418));for(;t;)u0(e,t),t=pn(t.nextSibling)}if(Tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Xe?pn(e.stateNode.nextSibling):null;return!0}function c0(){for(var e=Qe;e;)e=pn(e.nextSibling)}function Mr(){Qe=Xe=null,ne=!1}function Cc(e){mt===null?mt=[e]:mt.push(e)}var jw=Kt.ReactCurrentBatchConfig;function ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lp(e){var t=e._init;return t(e._payload)}function d0(e){function t(m,f){if(e){var x=m.deletions;x===null?(m.deletions=[f],m.flags|=16):x.push(f)}}function n(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=gn(m,f),m.index=0,m.sibling=null,m}function o(m,f,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<f?(m.flags|=2,f):x):(m.flags|=2,f)):(m.flags|=1048576,f)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,f,x,C){return f===null||f.tag!==6?(f=ol(x,m.mode,C),f.return=m,f):(f=i(f,x),f.return=m,f)}function l(m,f,x,C){var A=x.type;return A===dr?d(m,f,x.props.children,C,x.key):f!==null&&(f.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tn&&Lp(A)===f.type)?(C=i(f,x.props),C.ref=ci(m,f,x),C.return=m,C):(C=ns(x.type,x.key,x.props,null,m.mode,C),C.ref=ci(m,f,x),C.return=m,C)}function c(m,f,x,C){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=sl(x,m.mode,C),f.return=m,f):(f=i(f,x.children||[]),f.return=m,f)}function d(m,f,x,C,A){return f===null||f.tag!==7?(f=Hn(x,m.mode,C,A),f.return=m,f):(f=i(f,x),f.return=m,f)}function p(m,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ol(""+f,m.mode,x),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Co:return x=ns(f.type,f.key,f.props,null,m.mode,x),x.ref=ci(m,null,f),x.return=m,x;case cr:return f=sl(f,m.mode,x),f.return=m,f;case tn:var C=f._init;return p(m,C(f._payload),x)}if(vi(f)||oi(f))return f=Hn(f,m.mode,x,null),f.return=m,f;zo(m,f)}return null}function h(m,f,x,C){var A=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:a(m,f,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:return x.key===A?l(m,f,x,C):null;case cr:return x.key===A?c(m,f,x,C):null;case tn:return A=x._init,h(m,f,A(x._payload),C)}if(vi(x)||oi(x))return A!==null?null:d(m,f,x,C,null);zo(m,x)}return null}function v(m,f,x,C,A){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(x)||null,a(f,m,""+C,A);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Co:return m=m.get(C.key===null?x:C.key)||null,l(f,m,C,A);case cr:return m=m.get(C.key===null?x:C.key)||null,c(f,m,C,A);case tn:var k=C._init;return v(m,f,x,k(C._payload),A)}if(vi(C)||oi(C))return m=m.get(x)||null,d(f,m,C,A,null);zo(f,C)}return null}function y(m,f,x,C){for(var A=null,k=null,P=f,$=f=0,M=null;P!==null&&$<x.length;$++){P.index>$?(M=P,P=null):M=P.sibling;var z=h(m,P,x[$],C);if(z===null){P===null&&(P=M);break}e&&P&&z.alternate===null&&t(m,P),f=o(z,f,$),k===null?A=z:k.sibling=z,k=z,P=M}if($===x.length)return n(m,P),ne&&Dn(m,$),A;if(P===null){for(;$<x.length;$++)P=p(m,x[$],C),P!==null&&(f=o(P,f,$),k===null?A=P:k.sibling=P,k=P);return ne&&Dn(m,$),A}for(P=r(m,P);$<x.length;$++)M=v(P,m,$,x[$],C),M!==null&&(e&&M.alternate!==null&&P.delete(M.key===null?$:M.key),f=o(M,f,$),k===null?A=M:k.sibling=M,k=M);return e&&P.forEach(function(Y){return t(m,Y)}),ne&&Dn(m,$),A}function w(m,f,x,C){var A=oi(x);if(typeof A!="function")throw Error(E(150));if(x=A.call(x),x==null)throw Error(E(151));for(var k=A=null,P=f,$=f=0,M=null,z=x.next();P!==null&&!z.done;$++,z=x.next()){P.index>$?(M=P,P=null):M=P.sibling;var Y=h(m,P,z.value,C);if(Y===null){P===null&&(P=M);break}e&&P&&Y.alternate===null&&t(m,P),f=o(Y,f,$),k===null?A=Y:k.sibling=Y,k=Y,P=M}if(z.done)return n(m,P),ne&&Dn(m,$),A;if(P===null){for(;!z.done;$++,z=x.next())z=p(m,z.value,C),z!==null&&(f=o(z,f,$),k===null?A=z:k.sibling=z,k=z);return ne&&Dn(m,$),A}for(P=r(m,P);!z.done;$++,z=x.next())z=v(P,m,$,z.value,C),z!==null&&(e&&z.alternate!==null&&P.delete(z.key===null?$:z.key),f=o(z,f,$),k===null?A=z:k.sibling=z,k=z);return e&&P.forEach(function(ke){return t(m,ke)}),ne&&Dn(m,$),A}function S(m,f,x,C){if(typeof x=="object"&&x!==null&&x.type===dr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:e:{for(var A=x.key,k=f;k!==null;){if(k.key===A){if(A=x.type,A===dr){if(k.tag===7){n(m,k.sibling),f=i(k,x.props.children),f.return=m,m=f;break e}}else if(k.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tn&&Lp(A)===k.type){n(m,k.sibling),f=i(k,x.props),f.ref=ci(m,k,x),f.return=m,m=f;break e}n(m,k);break}else t(m,k);k=k.sibling}x.type===dr?(f=Hn(x.props.children,m.mode,C,x.key),f.return=m,m=f):(C=ns(x.type,x.key,x.props,null,m.mode,C),C.ref=ci(m,f,x),C.return=m,m=C)}return s(m);case cr:e:{for(k=x.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(m,f.sibling),f=i(f,x.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else t(m,f);f=f.sibling}f=sl(x,m.mode,C),f.return=m,m=f}return s(m);case tn:return k=x._init,S(m,f,k(x._payload),C)}if(vi(x))return y(m,f,x,C);if(oi(x))return w(m,f,x,C);zo(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,x),f.return=m,m=f):(n(m,f),f=ol(x,m.mode,C),f.return=m,m=f),s(m)):n(m,f)}return S}var Ir=d0(!0),p0=d0(!1),As=Pn(null),ks=null,yr=null,jc=null;function Ac(){jc=yr=ks=null}function kc(e){var t=As.current;ee(As),e._currentValue=t}function su(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _r(e,t){ks=e,jc=yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(jc!==e)if(e={context:e,memoizedValue:t,next:null},yr===null){if(ks===null)throw Error(E(308));yr=e,ks.dependencies={lanes:0,firstContext:e}}else yr=yr.next=e;return t}var Vn=null;function Pc(e){Vn===null?Vn=[e]:Vn.push(e)}function h0(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Pc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ht(e,r)}function Ht(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nn=!1;function $c(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ot(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,F&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ht(e,n)}return i=r.interleaved,i===null?(t.next=t,Pc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ht(e,n)}function Yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}function Rp(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ps(e,t,n,r){var i=e.updateQueue;nn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(o!==null){var p=i.baseState;s=0,d=c=l=null,a=o;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(h=t,v=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(v,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(v,p,h):y,h==null)break e;p=se({},p,h);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=p):d=d.next=v,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=p),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);qn|=s,e.lanes=s,e.memoizedState=p}}function _p(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var fo={},Pt=Pn(fo),Xi=Pn(fo),Yi=Pn(fo);function Fn(e){if(e===fo)throw Error(E(174));return e}function Ec(e,t){switch(X(Yi,t),X(Xi,e),X(Pt,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Vl(t,e)}ee(Pt),X(Pt,t)}function Or(){ee(Pt),ee(Xi),ee(Yi)}function m0(e){Fn(Yi.current);var t=Fn(Pt.current),n=Vl(t,e.type);t!==n&&(X(Xi,e),X(Pt,n))}function Tc(e){Xi.current===e&&(ee(Pt),ee(Xi))}var re=Pn(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ja=[];function Lc(){for(var e=0;e<Ja.length;e++)Ja[e]._workInProgressVersionPrimary=null;Ja.length=0}var qo=Kt.ReactCurrentDispatcher,el=Kt.ReactCurrentBatchConfig,Yn=0,oe=null,fe=null,xe=null,Es=!1,Ti=!1,qi=0,Aw=0;function Pe(){throw Error(E(321))}function Rc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,o){if(Yn=o,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qo.current=e===null||e.memoizedState===null?Ew:Tw,e=n(r,i),Ti){o=0;do{if(Ti=!1,qi=0,25<=o)throw Error(E(301));o+=1,xe=fe=null,t.updateQueue=null,qo.current=Lw,e=n(r,i)}while(Ti)}if(qo.current=Ts,t=fe!==null&&fe.next!==null,Yn=0,xe=fe=oe=null,Es=!1,t)throw Error(E(300));return e}function zc(){var e=qi!==0;return qi=0,e}function Ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?oe.memoizedState=xe=e:xe=xe.next=e,xe}function ut(){if(fe===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=xe===null?oe.memoizedState:xe.next;if(t!==null)xe=t,fe=e;else{if(e===null)throw Error(E(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},xe===null?oe.memoizedState=xe=e:xe=xe.next=e}return xe}function Zi(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=ut(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var d=c.lane;if((Yn&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,s=r):l=l.next=p,oe.lanes|=d,qn|=d}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,yt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,oe.lanes|=o,qn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function nl(e){var t=ut(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);yt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function g0(){}function x0(e,t){var n=oe,r=ut(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,Dc(w0.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Ji(9,y0.bind(null,n,r,i,t),void 0,null),we===null)throw Error(E(349));Yn&30||v0(n,t,i)}return i}function v0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function y0(e,t,n,r){t.value=n,t.getSnapshot=r,S0(t)&&C0(e)}function w0(e,t,n){return n(function(){S0(t)&&C0(e)})}function S0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function C0(e){var t=Ht(e,1);t!==null&&xt(t,e,1,-1)}function zp(e){var t=Ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=$w.bind(null,oe,e),[t.memoizedState,e]}function Ji(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=oe.updateQueue,t===null?(t={lastEffect:null,stores:null},oe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function j0(){return ut().memoizedState}function Zo(e,t,n,r){var i=Ct();oe.flags|=e,i.memoizedState=Ji(1|t,n,void 0,r===void 0?null:r)}function sa(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(fe!==null){var s=fe.memoizedState;if(o=s.destroy,r!==null&&Rc(r,s.deps)){i.memoizedState=Ji(t,n,o,r);return}}oe.flags|=e,i.memoizedState=Ji(1|t,n,o,r)}function Dp(e,t){return Zo(8390656,8,e,t)}function Dc(e,t){return sa(2048,8,e,t)}function A0(e,t){return sa(4,2,e,t)}function k0(e,t){return sa(4,4,e,t)}function P0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $0(e,t,n){return n=n!=null?n.concat([e]):null,sa(4,4,P0.bind(null,t,e),n)}function Nc(){}function E0(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function T0(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function L0(e,t,n){return Yn&21?(yt(n,t)||(n=Nm(),oe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function kw(e,t){var n=W;W=n!==0&&4>n?n:4,e(!0);var r=el.transition;el.transition={};try{e(!1),t()}finally{W=n,el.transition=r}}function R0(){return ut().memoizedState}function Pw(e,t,n){var r=mn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(e))z0(t,n);else if(n=h0(e,t,n,r),n!==null){var i=Ne();xt(n,e,r,i),D0(n,t,r)}}function $w(e,t,n){var r=mn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(e))z0(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,s)){var l=t.interleaved;l===null?(i.next=i,Pc(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=h0(e,t,i,r),n!==null&&(i=Ne(),xt(n,e,r,i),D0(n,t,r))}}function _0(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function z0(e,t){Ti=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function D0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pc(e,n)}}var Ts={readContext:lt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Ew={readContext:lt,useCallback:function(e,t){return Ct().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Dp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zo(4194308,4,P0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var n=Ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Pw.bind(null,oe,e),[r.memoizedState,e]},useRef:function(e){var t=Ct();return e={current:e},t.memoizedState=e},useState:zp,useDebugValue:Nc,useDeferredValue:function(e){return Ct().memoizedState=e},useTransition:function(){var e=zp(!1),t=e[0];return e=kw.bind(null,e[1]),Ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oe,i=Ct();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),we===null)throw Error(E(349));Yn&30||v0(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Dp(w0.bind(null,r,o,e),[e]),r.flags|=2048,Ji(9,y0.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Ct(),t=we.identifierPrefix;if(ne){var n=Mt,r=Nt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Aw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tw={readContext:lt,useCallback:E0,useContext:lt,useEffect:Dc,useImperativeHandle:$0,useInsertionEffect:A0,useLayoutEffect:k0,useMemo:T0,useReducer:tl,useRef:j0,useState:function(){return tl(Zi)},useDebugValue:Nc,useDeferredValue:function(e){var t=ut();return L0(t,fe.memoizedState,e)},useTransition:function(){var e=tl(Zi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:g0,useSyncExternalStore:x0,useId:R0,unstable_isNewReconciler:!1},Lw={readContext:lt,useCallback:E0,useContext:lt,useEffect:Dc,useImperativeHandle:$0,useInsertionEffect:A0,useLayoutEffect:k0,useMemo:T0,useReducer:nl,useRef:j0,useState:function(){return nl(Zi)},useDebugValue:Nc,useDeferredValue:function(e){var t=ut();return fe===null?t.memoizedState=e:L0(t,fe.memoizedState,e)},useTransition:function(){var e=nl(Zi)[0],t=ut().memoizedState;return[e,t]},useMutableSource:g0,useSyncExternalStore:x0,useId:R0,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=se({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function au(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:se({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var aa={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=mn(e),o=Ot(r,i);o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(xt(t,e,i,r),Yo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ne(),i=mn(e),o=Ot(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=hn(e,o,i),t!==null&&(xt(t,e,i,r),Yo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ne(),r=mn(e),i=Ot(n,r);i.tag=2,t!=null&&(i.callback=t),t=hn(e,i,r),t!==null&&(xt(t,e,r,n),Yo(t,e,r))}};function Np(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Hi(n,r)||!Hi(i,o):!0}function N0(e,t,n){var r=!1,i=wn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Be(t)?Qn:_e.current,r=t.contextTypes,o=(r=r!=null)?Nr(e,i):wn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=aa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Mp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&aa.enqueueReplaceState(t,t.state,null)}function lu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},$c(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Be(t)?Qn:_e.current,i.context=Nr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(au(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&aa.enqueueReplaceState(i,i.state,null),Ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function br(e,t){try{var n="",r=t;do n+=iy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function rl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Rw=typeof WeakMap=="function"?WeakMap:Map;function M0(e,t,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rs||(Rs=!0,yu=r),uu(e,t)},n}function I0(e,t,n){n=Ot(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){uu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){uu(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Ip(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Hw.bind(null,e,t,n),t.then(e,e))}function Op(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bp(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ot(-1,1),t.tag=2,hn(n,t,1))),n.lanes|=1),e)}var _w=Kt.ReactCurrentOwner,Ve=!1;function ze(e,t,n,r){t.child=e===null?p0(t,null,n,r):Ir(t,e.child,n,r)}function Vp(e,t,n,r,i){n=n.render;var o=t.ref;return _r(t,i),r=_c(e,t,n,r,o,i),n=zc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ne&&n&&wc(t),t.flags|=1,ze(e,t,r,i),t.child)}function Fp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Uc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,O0(e,t,o,r,i)):(e=ns(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Hi,n(s,r)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=gn(o,r),e.ref=t.ref,e.return=t,t.child=e}function O0(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Hi(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return cu(e,t,n,r,i)}function b0(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Sr,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Sr,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,X(Sr,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,X(Sr,Ke),Ke|=r;return ze(e,t,i,n),t.child}function V0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cu(e,t,n,r,i){var o=Be(n)?Qn:_e.current;return o=Nr(t,o),_r(t,i),n=_c(e,t,n,r,o,i),r=zc(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gt(e,t,i)):(ne&&r&&wc(t),t.flags|=1,ze(e,t,n,i),t.child)}function Bp(e,t,n,r,i){if(Be(n)){var o=!0;Ss(t)}else o=!1;if(_r(t,i),t.stateNode===null)Jo(e,t),N0(t,n,r),lu(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=lt(c):(c=Be(n)?Qn:_e.current,c=Nr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Mp(t,s,r,c),nn=!1;var h=t.memoizedState;s.state=h,Ps(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Fe.current||nn?(typeof d=="function"&&(au(t,n,d,r),l=t.memoizedState),(a=nn||Np(t,n,a,r,h,l,c))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,f0(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ht(t.type,a),s.props=c,p=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Be(n)?Qn:_e.current,l=Nr(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Mp(t,s,r,l),nn=!1,h=t.memoizedState,s.state=h,Ps(t,r,s,i);var y=t.memoizedState;a!==p||h!==y||Fe.current||nn?(typeof v=="function"&&(au(t,n,v,r),y=t.memoizedState),(c=nn||Np(t,n,c,r,h,y,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return du(e,t,n,r,o,i)}function du(e,t,n,r,i,o){V0(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$p(t,n,!1),Gt(e,t,o);r=t.stateNode,_w.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,a,o)):ze(e,t,a,o),t.memoizedState=r.state,i&&$p(t,n,!0),t.child}function F0(e){var t=e.stateNode;t.pendingContext?Pp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Pp(e,t.context,!1),Ec(e,t.containerInfo)}function Up(e,t,n,r,i){return Mr(),Cc(i),t.flags|=256,ze(e,t,n,r),t.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function B0(e,t,n){var r=t.pendingProps,i=re.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(re,i&1),e===null)return ou(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ca(s,r,0,null),e=Hn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=hu(n),t.memoizedState=pu,e):Mc(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zw(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=gn(a,o):(o=Hn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?hu(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pu,r}return o=e.child,e=o.sibling,r=gn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Mc(e,t){return t=ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,n,r){return r!==null&&Cc(r),Ir(t,e.child,null,n),e=Mc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=rl(Error(E(422))),Do(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ca({mode:"visible",children:r.children},i,0,null),o=Hn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Ir(t,e.child,null,s),t.child.memoizedState=hu(s),t.memoizedState=pu,o);if(!(t.mode&1))return Do(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=rl(o,r,void 0),Do(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ve||a){if(r=we,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Ht(e,i),xt(r,e,i,-1))}return Bc(),r=rl(Error(E(421))),Do(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Gw.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=pn(i.nextSibling),Xe=t,ne=!0,mt=null,e!==null&&(it[ot++]=Nt,it[ot++]=Mt,it[ot++]=Xn,Nt=e.id,Mt=e.overflow,Xn=t),t=Mc(t,r.children),t.flags|=4096,t)}function Wp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),su(e.return,t,n)}function il(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function U0(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ze(e,t,r.children,n),r=re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wp(e,n,t);else if(e.tag===19)Wp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&$s(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),il(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&$s(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}il(t,!0,n,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=gn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=gn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dw(e,t,n){switch(t.tag){case 3:F0(t),Mr();break;case 5:m0(t);break;case 1:Be(t.type)&&Ss(t);break;case 4:Ec(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(As,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),t.flags|=128,null):n&t.child.childLanes?B0(e,t,n):(X(re,re.current&1),e=Gt(e,t,n),e!==null?e.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return U0(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,b0(e,t,n)}return Gt(e,t,n)}var W0,fu,H0,G0;W0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fu=function(){};H0=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Fn(Pt.current);var o=null;switch(n){case"input":i=Ml(e,i),r=Ml(e,r),o=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),o=[];break;case"textarea":i=bl(e,i),r=bl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ys)}Fl(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Oi.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Oi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Z("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};G0=function(e,t,n,r){n!==r&&(t.flags|=4)};function di(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function $e(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Nw(e,t,n){var r=t.pendingProps;switch(Sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(t),null;case 1:return Be(t.type)&&ws(),$e(t),null;case 3:return r=t.stateNode,Or(),ee(Fe),ee(_e),Lc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(Cu(mt),mt=null))),fu(e,t),$e(t),null;case 5:Tc(t);var i=Fn(Yi.current);if(n=t.type,e!==null&&t.stateNode!=null)H0(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return $e(t),null}if(e=Fn(Pt.current),_o(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Qi]=o,e=(t.mode&1)!==0,n){case"dialog":Z("cancel",r),Z("close",r);break;case"iframe":case"object":case"embed":Z("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)Z(wi[i],r);break;case"source":Z("error",r);break;case"img":case"image":case"link":Z("error",r),Z("load",r);break;case"details":Z("toggle",r);break;case"input":Jd(r,o),Z("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Z("invalid",r);break;case"textarea":tp(r,o),Z("invalid",r)}Fl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ro(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ro(r.textContent,a,e),i=["children",""+a]):Oi.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&Z("scroll",r)}switch(n){case"input":jo(r),ep(r,o,!0);break;case"textarea":jo(r),np(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ys)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[At]=t,e[Qi]=r,W0(e,t,!1,!1),t.stateNode=e;e:{switch(s=Bl(n,r),n){case"dialog":Z("cancel",e),Z("close",e),i=r;break;case"iframe":case"object":case"embed":Z("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)Z(wi[i],e);i=r;break;case"source":Z("error",e),i=r;break;case"img":case"image":case"link":Z("error",e),Z("load",e),i=r;break;case"details":Z("toggle",e),i=r;break;case"input":Jd(e,r),i=Ml(e,r),Z("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),Z("invalid",e);break;case"textarea":tp(e,r),i=bl(e,r),Z("invalid",e);break;default:i=r}Fl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?jm(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sm(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bi(e,l):typeof l=="number"&&bi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Oi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&Z("scroll",e):l!=null&&sc(e,o,l,s))}switch(n){case"input":jo(e),ep(e,r,!1);break;case"textarea":jo(e),np(e);break;case"option":r.value!=null&&e.setAttribute("value",""+yn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Er(e,!!r.multiple,o,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ys)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return $e(t),null;case 6:if(e&&t.stateNode!=null)G0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=Fn(Yi.current),Fn(Pt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Ro(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ro(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return $e(t),null;case 13:if(ee(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Qe!==null&&t.mode&1&&!(t.flags&128))c0(),Mr(),t.flags|=98560,o=!1;else if(o=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(E(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[At]=t}else Mr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;$e(t),o=!1}else mt!==null&&(Cu(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||re.current&1?ge===0&&(ge=3):Bc())),t.updateQueue!==null&&(t.flags|=4),$e(t),null);case 4:return Or(),fu(e,t),e===null&&Gi(t.stateNode.containerInfo),$e(t),null;case 10:return kc(t.type._context),$e(t),null;case 17:return Be(t.type)&&ws(),$e(t),null;case 19:if(ee(re),o=t.memoizedState,o===null)return $e(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)di(o,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$s(e),s!==null){for(t.flags|=128,di(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&ue()>Vr&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304)}else{if(!r)if(e=$s(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),di(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ne)return $e(t),null}else 2*ue()-o.renderingStartTime>Vr&&n!==1073741824&&(t.flags|=128,r=!0,di(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ue(),t.sibling=null,n=re.current,X(re,r?n&1|2:n&1),t):($e(t),null);case 22:case 23:return Fc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&($e(t),t.subtreeFlags&6&&(t.flags|=8192)):$e(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Mw(e,t){switch(Sc(t),t.tag){case 1:return Be(t.type)&&ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Or(),ee(Fe),ee(_e),Lc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tc(t),null;case 13:if(ee(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Mr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(re),null;case 4:return Or(),null;case 10:return kc(t.type._context),null;case 22:case 23:return Fc(),null;case 24:return null;default:return null}}var No=!1,Te=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,R=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function mu(e,t,n){try{n()}catch(r){ae(e,t,r)}}var Hp=!1;function Ow(e,t){if(Zl=gs,e=qm(),yc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var v;p!==n||i!==0&&p.nodeType!==3||(a=s+i),p!==o||r!==0&&p.nodeType!==3||(l=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++d===r&&(l=s),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jl={focusedElem:e,selectionRange:n},gs=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,m=t.stateNode,f=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:ht(t.type,w),S);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(C){ae(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Hp,Hp=!1,y}function Li(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&mu(t,n,o)}i=i.next}while(i!==r)}}function la(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function K0(e){var t=e.alternate;t!==null&&(e.alternate=null,K0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Qi],delete t[nu],delete t[ww],delete t[Sw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Q0(e){return e.tag===5||e.tag===3||e.tag===4}function Gp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Q0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ys));else if(r!==4&&(e=e.child,e!==null))for(xu(e,t,n),e=e.sibling;e!==null;)xu(e,t,n),e=e.sibling}function vu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(vu(e,t,n),e=e.sibling;e!==null;)vu(e,t,n),e=e.sibling}var Se=null,ft=!1;function Zt(e,t,n){for(n=n.child;n!==null;)X0(e,t,n),n=n.sibling}function X0(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(ea,n)}catch{}switch(n.tag){case 5:Te||wr(n,t);case 6:var r=Se,i=ft;Se=null,Zt(e,t,n),Se=r,ft=i,Se!==null&&(ft?(e=Se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ft?(e=Se,n=n.stateNode,e.nodeType===8?qa(e.parentNode,n):e.nodeType===1&&qa(e,n),Ui(e)):qa(Se,n.stateNode));break;case 4:r=Se,i=ft,Se=n.stateNode.containerInfo,ft=!0,Zt(e,t,n),Se=r,ft=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&mu(n,t,s),i=i.next}while(i!==r)}Zt(e,t,n);break;case 1:if(!Te&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Zt(e,t,n);break;case 21:Zt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Zt(e,t,n),Te=r):Zt(e,t,n);break;default:Zt(e,t,n)}}function Kp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Iw),t.forEach(function(r){var i=Kw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,ft=!1;break e;case 3:Se=a.stateNode.containerInfo,ft=!0;break e;case 4:Se=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(Se===null)throw Error(E(160));X0(o,s,i),Se=null,ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ae(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Y0(t,e),t=t.sibling}function Y0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),St(e),r&4){try{Li(3,e,e.return),la(3,e)}catch(w){ae(e,e.return,w)}try{Li(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:pt(t,e),St(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(pt(t,e),St(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{bi(i,"")}catch(w){ae(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&vm(i,o),Bl(a,s);var c=Bl(a,o);for(s=0;s<l.length;s+=2){var d=l[s],p=l[s+1];d==="style"?jm(i,p):d==="dangerouslySetInnerHTML"?Sm(i,p):d==="children"?bi(i,p):sc(i,d,p,c)}switch(a){case"input":Il(i,o);break;case"textarea":ym(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Er(i,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?Er(i,!!o.multiple,o.defaultValue,!0):Er(i,!!o.multiple,o.multiple?[]:"",!1))}i[Qi]=o}catch(w){ae(e,e.return,w)}}break;case 6:if(pt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(E(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ae(e,e.return,w)}}break;case 3:if(pt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:pt(t,e),St(e);break;case 13:pt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(bc=ue())),r&4&&Kp(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||d,pt(t,e),Te=c):pt(t,e),St(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(p=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:Li(4,h,h.return);break;case 1:wr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ae(r,n,w)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){Xp(p);continue}}v!==null?(v.return=h,R=v):Xp(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=p.stateNode,l=p.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cm("display",s))}catch(w){ae(e,e.return,w)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){ae(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),St(e),r&4&&Kp(e);break;case 21:break;default:pt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Q0(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bi(i,""),r.flags&=-33);var o=Gp(e);vu(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Gp(e);xu(e,a,s);break;default:throw Error(E(161))}}catch(l){ae(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bw(e,t,n){R=e,q0(e)}function q0(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||No;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=No;var c=Te;if(No=s,(Te=l)&&!c)for(R=i;R!==null;)s=R,l=s.child,s.tag===22&&s.memoizedState!==null?Yp(i):l!==null?(l.return=s,R=l):Yp(i);for(;o!==null;)R=o,q0(o),o=o.sibling;R=i,No=a,Te=c}Qp(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,R=o):Qp(e)}}function Qp(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Te||la(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&_p(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}_p(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ui(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Te||t.flags&512&&gu(t)}catch(h){ae(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Xp(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Yp(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{la(4,t)}catch(l){ae(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){ae(t,i,l)}}var o=t.return;try{gu(t)}catch(l){ae(t,o,l)}break;case 5:var s=t.return;try{gu(t)}catch(l){ae(t,s,l)}}}catch(l){ae(t,t.return,l)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var Vw=Math.ceil,Ls=Kt.ReactCurrentDispatcher,Ic=Kt.ReactCurrentOwner,at=Kt.ReactCurrentBatchConfig,F=0,we=null,de=null,je=0,Ke=0,Sr=Pn(0),ge=0,eo=null,qn=0,ua=0,Oc=0,Ri=null,be=null,bc=0,Vr=1/0,_t=null,Rs=!1,yu=null,fn=null,Mo=!1,an=null,_s=0,_i=0,wu=null,es=-1,ts=0;function Ne(){return F&6?ue():es!==-1?es:es=ue()}function mn(e){return e.mode&1?F&2&&je!==0?je&-je:jw.transition!==null?(ts===0&&(ts=Nm()),ts):(e=W,e!==0||(e=window.event,e=e===void 0?16:Bm(e.type)),e):1}function xt(e,t,n,r){if(50<_i)throw _i=0,wu=null,Error(E(185));co(e,n,r),(!(F&2)||e!==we)&&(e===we&&(!(F&2)&&(ua|=n),ge===4&&on(e,je)),Ue(e,r),n===1&&F===0&&!(t.mode&1)&&(Vr=ue()+500,oa&&$n()))}function Ue(e,t){var n=e.callbackNode;jy(e,t);var r=ms(e,e===we?je:0);if(r===0)n!==null&&op(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&op(n),t===1)e.tag===0?Cw(qp.bind(null,e)):a0(qp.bind(null,e)),vw(function(){!(F&6)&&$n()}),n=null;else{switch(Mm(r)){case 1:n=dc;break;case 4:n=zm;break;case 16:n=fs;break;case 536870912:n=Dm;break;default:n=fs}n=og(n,Z0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Z0(e,t){if(es=-1,ts=0,F&6)throw Error(E(327));var n=e.callbackNode;if(zr()&&e.callbackNode!==n)return null;var r=ms(e,e===we?je:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zs(e,r);else{t=r;var i=F;F|=2;var o=eg();(we!==e||je!==t)&&(_t=null,Vr=ue()+500,Wn(e,t));do try{Uw();break}catch(a){J0(e,a)}while(!0);Ac(),Ls.current=o,F=i,de!==null?t=0:(we=null,je=0,t=ge)}if(t!==0){if(t===2&&(i=Kl(e),i!==0&&(r=i,t=Su(e,i))),t===1)throw n=eo,Wn(e,0),on(e,r),Ue(e,ue()),n;if(t===6)on(e,r);else{if(i=e.current.alternate,!(r&30)&&!Fw(i)&&(t=zs(e,r),t===2&&(o=Kl(e),o!==0&&(r=o,t=Su(e,o))),t===1))throw n=eo,Wn(e,0),on(e,r),Ue(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:Nn(e,be,_t);break;case 3:if(on(e,r),(r&130023424)===r&&(t=bc+500-ue(),10<t)){if(ms(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ne(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=tu(Nn.bind(null,e,be,_t),t);break}Nn(e,be,_t);break;case 4:if(on(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-gt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vw(r/1960))-r,10<r){e.timeoutHandle=tu(Nn.bind(null,e,be,_t),r);break}Nn(e,be,_t);break;case 5:Nn(e,be,_t);break;default:throw Error(E(329))}}}return Ue(e,ue()),e.callbackNode===n?Z0.bind(null,e):null}function Su(e,t){var n=Ri;return e.current.memoizedState.isDehydrated&&(Wn(e,t).flags|=256),e=zs(e,t),e!==2&&(t=be,be=n,t!==null&&Cu(t)),e}function Cu(e){be===null?be=e:be.push.apply(be,e)}function Fw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function on(e,t){for(t&=~Oc,t&=~ua,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function qp(e){if(F&6)throw Error(E(327));zr();var t=ms(e,0);if(!(t&1))return Ue(e,ue()),null;var n=zs(e,t);if(e.tag!==0&&n===2){var r=Kl(e);r!==0&&(t=r,n=Su(e,r))}if(n===1)throw n=eo,Wn(e,0),on(e,t),Ue(e,ue()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Nn(e,be,_t),Ue(e,ue()),null}function Vc(e,t){var n=F;F|=1;try{return e(t)}finally{F=n,F===0&&(Vr=ue()+500,oa&&$n())}}function Zn(e){an!==null&&an.tag===0&&!(F&6)&&zr();var t=F;F|=1;var n=at.transition,r=W;try{if(at.transition=null,W=1,e)return e()}finally{W=r,at.transition=n,F=t,!(F&6)&&$n()}}function Fc(){Ke=Sr.current,ee(Sr)}function Wn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,xw(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ws();break;case 3:Or(),ee(Fe),ee(_e),Lc();break;case 5:Tc(r);break;case 4:Or();break;case 13:ee(re);break;case 19:ee(re);break;case 10:kc(r.type._context);break;case 22:case 23:Fc()}n=n.return}if(we=e,de=e=gn(e.current,null),je=Ke=t,ge=0,eo=null,Oc=ua=qn=0,be=Ri=null,Vn!==null){for(t=0;t<Vn.length;t++)if(n=Vn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Vn=null}return e}function J0(e,t){do{var n=de;try{if(Ac(),qo.current=Ts,Es){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Es=!1}if(Yn=0,xe=fe=oe=null,Ti=!1,qi=0,Ic.current=null,n===null||n.return===null){ge=1,eo=t,de=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=je,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Op(s);if(v!==null){v.flags&=-257,bp(v,s,a,o,t),v.mode&1&&Ip(o,c,t),t=v,l=c;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if(!(t&1)){Ip(o,c,t),Bc();break e}l=Error(E(426))}}else if(ne&&a.mode&1){var S=Op(s);if(S!==null){!(S.flags&65536)&&(S.flags|=256),bp(S,s,a,o,t),Cc(br(l,a));break e}}o=l=br(l,a),ge!==4&&(ge=2),Ri===null?Ri=[o]:Ri.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=M0(o,l,t);Rp(o,m);break e;case 1:a=l;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(fn===null||!fn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=I0(o,a,t);Rp(o,C);break e}}o=o.return}while(o!==null)}ng(n)}catch(A){t=A,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function eg(){var e=Ls.current;return Ls.current=Ts,e===null?Ts:e}function Bc(){(ge===0||ge===3||ge===2)&&(ge=4),we===null||!(qn&268435455)&&!(ua&268435455)||on(we,je)}function zs(e,t){var n=F;F|=2;var r=eg();(we!==e||je!==t)&&(_t=null,Wn(e,t));do try{Bw();break}catch(i){J0(e,i)}while(!0);if(Ac(),F=n,Ls.current=r,de!==null)throw Error(E(261));return we=null,je=0,ge}function Bw(){for(;de!==null;)tg(de)}function Uw(){for(;de!==null&&!fy();)tg(de)}function tg(e){var t=ig(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?ng(e):de=t,Ic.current=null}function ng(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Mw(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,de=null;return}}else if(n=Nw(n,t,Ke),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ge===0&&(ge=5)}function Nn(e,t,n){var r=W,i=at.transition;try{at.transition=null,W=1,Ww(e,t,n,r)}finally{at.transition=i,W=r}return null}function Ww(e,t,n,r){do zr();while(an!==null);if(F&6)throw Error(E(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ay(e,o),e===we&&(de=we=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Mo||(Mo=!0,og(fs,function(){return zr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var s=W;W=1;var a=F;F|=4,Ic.current=null,Ow(e,n),Y0(n,e),cw(Jl),gs=!!Zl,Jl=Zl=null,e.current=n,bw(n),my(),F=a,W=s,at.transition=o}else e.current=n;if(Mo&&(Mo=!1,an=e,_s=i),o=e.pendingLanes,o===0&&(fn=null),vy(n.stateNode),Ue(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Rs)throw Rs=!1,e=yu,yu=null,e;return _s&1&&e.tag!==0&&zr(),o=e.pendingLanes,o&1?e===wu?_i++:(_i=0,wu=e):_i=0,$n(),null}function zr(){if(an!==null){var e=Mm(_s),t=at.transition,n=W;try{if(at.transition=null,W=16>e?16:e,an===null)var r=!1;else{if(e=an,an=null,_s=0,F&6)throw Error(E(331));var i=F;for(F|=4,R=e.current;R!==null;){var o=R,s=o.child;if(R.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Li(8,d,o)}var p=d.child;if(p!==null)p.return=d,R=p;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if(K0(d),d===c){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}R=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,R=s;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Li(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,R=m;break e}R=o.return}}var f=e.current;for(R=f;R!==null;){s=R;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,R=x;else e:for(s=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:la(9,a)}}catch(A){ae(a,a.return,A)}if(a===s){R=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,R=C;break e}R=a.return}}if(F=i,$n(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(ea,e)}catch{}r=!0}return r}finally{W=n,at.transition=t}}return!1}function Zp(e,t,n){t=br(n,t),t=M0(e,t,1),e=hn(e,t,1),t=Ne(),e!==null&&(co(e,1,t),Ue(e,t))}function ae(e,t,n){if(e.tag===3)Zp(e,e,n);else for(;t!==null;){if(t.tag===3){Zp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=br(n,e),e=I0(t,e,1),t=hn(t,e,1),e=Ne(),t!==null&&(co(t,1,e),Ue(t,e));break}}t=t.return}}function Hw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ne(),e.pingedLanes|=e.suspendedLanes&n,we===e&&(je&n)===n&&(ge===4||ge===3&&(je&130023424)===je&&500>ue()-bc?Wn(e,0):Oc|=n),Ue(e,t)}function rg(e,t){t===0&&(e.mode&1?(t=Po,Po<<=1,!(Po&130023424)&&(Po=4194304)):t=1);var n=Ne();e=Ht(e,t),e!==null&&(co(e,t,n),Ue(e,n))}function Gw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),rg(e,n)}function Kw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),rg(e,n)}var ig;ig=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Dw(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ne&&t.flags&1048576&&l0(t,js,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Jo(e,t),e=t.pendingProps;var i=Nr(t,_e.current);_r(t,n),i=_c(null,t,r,e,i,n);var o=zc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(o=!0,Ss(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$c(t),i.updater=aa,t.stateNode=i,i._reactInternals=t,lu(t,r,e,n),t=du(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&wc(t),ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xw(r),e=ht(r,e),i){case 0:t=cu(null,t,r,e,n);break e;case 1:t=Bp(null,t,r,e,n);break e;case 11:t=Vp(null,t,r,e,n);break e;case 14:t=Fp(null,t,r,ht(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),cu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Bp(e,t,r,i,n);case 3:e:{if(F0(t),e===null)throw Error(E(387));r=t.pendingProps,o=t.memoizedState,i=o.element,f0(e,t),Ps(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=br(Error(E(423)),t),t=Up(e,t,r,n,i);break e}else if(r!==i){i=br(Error(E(424)),t),t=Up(e,t,r,n,i);break e}else for(Qe=pn(t.stateNode.containerInfo.firstChild),Xe=t,ne=!0,mt=null,n=p0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mr(),r===i){t=Gt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return m0(t),e===null&&ou(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,eu(r,i)?s=null:o!==null&&eu(r,o)&&(t.flags|=32),V0(e,t),ze(e,t,s,n),t.child;case 6:return e===null&&ou(t),null;case 13:return B0(e,t,n);case 4:return Ec(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ir(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Vp(e,t,r,i,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,X(As,r._currentValue),r._currentValue=s,o!==null)if(yt(o.value,s)){if(o.children===i.children&&!Fe.current){t=Gt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Ot(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),su(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),su(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,_r(t,n),i=lt(i),r=r(i),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,i=ht(r,t.pendingProps),i=ht(r.type,i),Fp(e,t,r,i,n);case 15:return O0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ht(r,i),Jo(e,t),t.tag=1,Be(r)?(e=!0,Ss(t)):e=!1,_r(t,n),N0(t,r,i),lu(t,r,i,n),du(null,t,r,!0,e,n);case 19:return U0(e,t,n);case 22:return b0(e,t,n)}throw Error(E(156,t.tag))};function og(e,t){return _m(e,t)}function Qw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new Qw(e,t,n,r)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xw(e){if(typeof e=="function")return Uc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===lc)return 11;if(e===uc)return 14}return 2}function gn(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ns(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Uc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case dr:return Hn(n.children,i,o,t);case ac:s=8,i|=8;break;case _l:return e=st(12,n,t,i|2),e.elementType=_l,e.lanes=o,e;case zl:return e=st(13,n,t,i),e.elementType=zl,e.lanes=o,e;case Dl:return e=st(19,n,t,i),e.elementType=Dl,e.lanes=o,e;case mm:return ca(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case hm:s=10;break e;case fm:s=9;break e;case lc:s=11;break e;case uc:s=14;break e;case tn:s=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=st(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Hn(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function ca(e,t,n,r){return e=st(22,e,r,t),e.elementType=mm,e.lanes=n,e.stateNode={isHidden:!1},e}function ol(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Yw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Va(0),this.expirationTimes=Va(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Va(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wc(e,t,n,r,i,o,s,a,l){return e=new Yw(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(o),e}function qw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function sg(e){if(!e)return wn;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Be(n))return s0(e,n,t)}return t}function ag(e,t,n,r,i,o,s,a,l){return e=Wc(n,r,!0,e,i,o,s,a,l),e.context=sg(null),n=e.current,r=Ne(),i=mn(n),o=Ot(r,i),o.callback=t??null,hn(n,o,i),e.current.lanes=i,co(e,i,r),Ue(e,r),e}function da(e,t,n,r){var i=t.current,o=Ne(),s=mn(i);return n=sg(n),t.context===null?t.context=n:t.pendingContext=n,t=Ot(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=hn(i,t,s),e!==null&&(xt(e,i,s,o),Yo(e,i,s)),s}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Jp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Hc(e,t){Jp(e,t),(e=e.alternate)&&Jp(e,t)}function Zw(){return null}var lg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gc(e){this._internalRoot=e}pa.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));da(e,t,null,null)};pa.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zn(function(){da(null,e,null,null)}),t[Wt]=null}};function pa(e){this._internalRoot=e}pa.prototype.unstable_scheduleHydration=function(e){if(e){var t=bm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rn.length&&t!==0&&t<rn[n].priority;n++);rn.splice(n,0,e),n===0&&Fm(e)}};function Kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ha(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function eh(){}function Jw(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ds(s);o.call(c)}}var s=ag(t,r,e,0,null,!1,!1,"",eh);return e._reactRootContainer=s,e[Wt]=s.current,Gi(e.nodeType===8?e.parentNode:e),Zn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ds(l);a.call(c)}}var l=Wc(e,0,!1,null,null,!1,!1,"",eh);return e._reactRootContainer=l,e[Wt]=l.current,Gi(e.nodeType===8?e.parentNode:e),Zn(function(){da(t,l,n,r)}),l}function fa(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Ds(s);a.call(l)}}da(t,s,e,i)}else s=Jw(n,t,e,i,r);return Ds(s)}Im=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yi(t.pendingLanes);n!==0&&(pc(t,n|1),Ue(t,ue()),!(F&6)&&(Vr=ue()+500,$n()))}break;case 13:Zn(function(){var r=Ht(e,1);if(r!==null){var i=Ne();xt(r,e,1,i)}}),Hc(e,1)}};hc=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var n=Ne();xt(t,e,134217728,n)}Hc(e,134217728)}};Om=function(e){if(e.tag===13){var t=mn(e),n=Ht(e,t);if(n!==null){var r=Ne();xt(n,e,t,r)}Hc(e,t)}};bm=function(){return W};Vm=function(e,t){var n=W;try{return W=e,t()}finally{W=n}};Wl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ia(r);if(!i)throw Error(E(90));xm(r),Il(r,i)}}}break;case"textarea":ym(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};Pm=Vc;$m=Zn;var e2={usingClientEntryPoint:!1,Events:[ho,mr,ia,Am,km,Vc]},pi={findFiberByHostInstance:bn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},t2={bundleType:pi.bundleType,version:pi.version,rendererPackageName:pi.rendererPackageName,rendererConfig:pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lm(e),e===null?null:e.stateNode},findFiberByHostInstance:pi.findFiberByHostInstance||Zw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{ea=Io.inject(t2),kt=Io}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=e2;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kc(t))throw Error(E(200));return qw(e,t,null,n)};Ze.createRoot=function(e,t){if(!Kc(e))throw Error(E(299));var n=!1,r="",i=lg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wc(e,1,!1,null,null,n,!1,r,i),e[Wt]=t.current,Gi(e.nodeType===8?e.parentNode:e),new Gc(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=Lm(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return Zn(e)};Ze.hydrate=function(e,t,n){if(!ha(t))throw Error(E(200));return fa(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!Kc(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=lg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ag(t,null,e,1,n??null,i,!1,o,s),e[Wt]=t.current,Gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pa(t)};Ze.render=function(e,t,n){if(!ha(t))throw Error(E(200));return fa(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!ha(e))throw Error(E(40));return e._reactRootContainer?(Zn(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Vc;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ha(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return fa(e,t,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function ug(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ug)}catch(e){console.error(e)}}ug(),um.exports=Ze;var n2=um.exports,cg,th=n2;cg=th.createRoot,th.hydrateRoot;var ye=function(){return ye=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ye.apply(this,arguments)};function Fr(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var J="-ms-",zi="-moz-",B="-webkit-",dg="comm",ma="rule",Qc="decl",r2="@import",pg="@keyframes",i2="@layer",hg=Math.abs,Xc=String.fromCharCode,ju=Object.assign;function o2(e,t){return ve(e,0)^45?(((t<<2^ve(e,0))<<2^ve(e,1))<<2^ve(e,2))<<2^ve(e,3):0}function fg(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function O(e,t,n){return e.replace(t,n)}function rs(e,t,n){return e.indexOf(t,n)}function ve(e,t){return e.charCodeAt(t)|0}function Br(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function mg(e){return e.length}function Si(e,t){return t.push(e),e}function s2(e,t){return e.map(t).join("")}function nh(e,t){return e.filter(function(n){return!zt(n,t)})}var ga=1,Ur=1,gg=0,ct=0,ce=0,Jr="";function xa(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:ga,column:Ur,length:s,return:"",siblings:a}}function Jt(e,t){return ju(xa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lr(e){for(;e.root;)e=Jt(e.root,{children:[e]});Si(e,e.siblings)}function a2(){return ce}function l2(){return ce=ct>0?ve(Jr,--ct):0,Ur--,ce===10&&(Ur=1,ga--),ce}function vt(){return ce=ct<gg?ve(Jr,ct++):0,Ur++,ce===10&&(Ur=1,ga++),ce}function Gn(){return ve(Jr,ct)}function is(){return ct}function va(e,t){return Br(Jr,e,t)}function Au(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function u2(e){return ga=Ur=1,gg=jt(Jr=e),ct=0,[]}function c2(e){return Jr="",e}function al(e){return fg(va(ct-1,ku(e===91?e+2:e===40?e+1:e)))}function d2(e){for(;(ce=Gn())&&ce<33;)vt();return Au(e)>2||Au(ce)>3?"":" "}function p2(e,t){for(;--t&&vt()&&!(ce<48||ce>102||ce>57&&ce<65||ce>70&&ce<97););return va(e,is()+(t<6&&Gn()==32&&vt()==32))}function ku(e){for(;vt();)switch(ce){case e:return ct;case 34:case 39:e!==34&&e!==39&&ku(ce);break;case 40:e===41&&ku(e);break;case 92:vt();break}return ct}function h2(e,t){for(;vt()&&e+ce!==57;)if(e+ce===84&&Gn()===47)break;return"/*"+va(t,ct-1)+"*"+Xc(e===47?e:vt())}function f2(e){for(;!Au(Gn());)vt();return va(e,ct)}function m2(e){return c2(os("",null,null,null,[""],e=u2(e),0,[0],e))}function os(e,t,n,r,i,o,s,a,l){for(var c=0,d=0,p=s,h=0,v=0,y=0,w=1,S=1,m=1,f=0,x="",C=i,A=o,k=r,P=x;S;)switch(y=f,f=vt()){case 40:if(y!=108&&ve(P,p-1)==58){rs(P+=O(al(f),"&","&\f"),"&\f",hg(c?a[c-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:P+=al(f);break;case 9:case 10:case 13:case 32:P+=d2(y);break;case 92:P+=p2(is()-1,7);continue;case 47:switch(Gn()){case 42:case 47:Si(g2(h2(vt(),is()),t,n,l),l);break;default:P+="/"}break;case 123*w:a[c++]=jt(P)*m;case 125*w:case 59:case 0:switch(f){case 0:case 125:S=0;case 59+d:m==-1&&(P=O(P,/\f/g,"")),v>0&&jt(P)-p&&Si(v>32?ih(P+";",r,n,p-1,l):ih(O(P," ","")+";",r,n,p-2,l),l);break;case 59:P+=";";default:if(Si(k=rh(P,t,n,c,d,i,a,x,C=[],A=[],p,o),o),f===123)if(d===0)os(P,t,k,k,C,o,p,a,A);else switch(h===99&&ve(P,3)===110?100:h){case 100:case 108:case 109:case 115:os(e,k,k,r&&Si(rh(e,k,k,0,0,i,a,x,i,C=[],p,A),A),i,A,p,a,r?C:A);break;default:os(P,k,k,k,[""],A,0,a,A)}}c=d=v=0,w=m=1,x=P="",p=s;break;case 58:p=1+jt(P),v=y;default:if(w<1){if(f==123)--w;else if(f==125&&w++==0&&l2()==125)continue}switch(P+=Xc(f),f*w){case 38:m=d>0?1:(P+="\f",-1);break;case 44:a[c++]=(jt(P)-1)*m,m=1;break;case 64:Gn()===45&&(P+=al(vt())),h=Gn(),d=p=jt(x=P+=f2(is())),f++;break;case 45:y===45&&jt(P)==2&&(w=0)}}return o}function rh(e,t,n,r,i,o,s,a,l,c,d,p){for(var h=i-1,v=i===0?o:[""],y=mg(v),w=0,S=0,m=0;w<r;++w)for(var f=0,x=Br(e,h+1,h=hg(S=s[w])),C=e;f<y;++f)(C=fg(S>0?v[f]+" "+x:O(x,/&\f/g,v[f])))&&(l[m++]=C);return xa(e,t,n,i===0?ma:a,l,c,d,p)}function g2(e,t,n,r){return xa(e,t,n,dg,Xc(a2()),Br(e,2,-2),0,r)}function ih(e,t,n,r,i){return xa(e,t,n,Qc,Br(e,0,r),Br(e,r+1,-1),r,i)}function xg(e,t,n){switch(o2(e,t)){case 5103:return B+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return B+e+e;case 4789:return zi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return B+e+zi+e+J+e+e;case 5936:switch(ve(e,t+11)){case 114:return B+e+J+O(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return B+e+J+O(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return B+e+J+O(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return B+e+J+e+e;case 6165:return B+e+J+"flex-"+e+e;case 5187:return B+e+O(e,/(\w+).+(:[^]+)/,B+"box-$1$2"+J+"flex-$1$2")+e;case 5443:return B+e+J+"flex-item-"+O(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":J+"grid-row-"+O(e,/flex-|-self/g,""))+e;case 4675:return B+e+J+"flex-line-pack"+O(e,/align-content|flex-|-self/g,"")+e;case 5548:return B+e+J+O(e,"shrink","negative")+e;case 5292:return B+e+J+O(e,"basis","preferred-size")+e;case 6060:return B+"box-"+O(e,"-grow","")+B+e+J+O(e,"grow","positive")+e;case 4554:return B+O(e,/([^-])(transform)/g,"$1"+B+"$2")+e;case 6187:return O(O(O(e,/(zoom-|grab)/,B+"$1"),/(image-set)/,B+"$1"),e,"")+e;case 5495:case 3959:return O(e,/(image-set\([^]*)/,B+"$1$`$1");case 4968:return O(O(e,/(.+:)(flex-)?(.*)/,B+"box-pack:$3"+J+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+B+e+e;case 4200:if(!zt(e,/flex-|baseline/))return J+"grid-column-align"+Br(e,t)+e;break;case 2592:case 3360:return J+O(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,zt(r.props,/grid-\w+-end/)})?~rs(e+(n=n[t].value),"span",0)?e:J+O(e,"-start","")+e+J+"grid-row-span:"+(~rs(n,"span",0)?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":J+O(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:J+O(O(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return O(e,/(.+)-inline(.+)/,B+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(ve(e,t+1)){case 109:if(ve(e,t+4)!==45)break;case 102:return O(e,/(.+:)(.+)-([^]+)/,"$1"+B+"$2-$3$1"+zi+(ve(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~rs(e,"stretch",0)?xg(O(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return O(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,l,c){return J+i+":"+o+c+(s?J+i+"-span:"+(a?l:+l-+o)+c:"")+e});case 4949:if(ve(e,t+6)===121)return O(e,":",":"+B)+e;break;case 6444:switch(ve(e,ve(e,14)===45?18:11)){case 120:return O(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+B+(ve(e,14)===45?"inline-":"")+"box$3$1"+B+"$2$3$1"+J+"$2box$3")+e;case 100:return O(e,":",":"+J)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return O(e,"scroll-","scroll-snap-")+e}return e}function Ns(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function x2(e,t,n,r){switch(e.type){case i2:if(e.children.length)break;case r2:case Qc:return e.return=e.return||e.value;case dg:return"";case pg:return e.return=e.value+"{"+Ns(e.children,r)+"}";case ma:if(!jt(e.value=e.props.join(",")))return""}return jt(n=Ns(e.children,r))?e.return=e.value+"{"+n+"}":""}function v2(e){var t=mg(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function y2(e){return function(t){t.root||(t=t.return)&&e(t)}}function w2(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Qc:e.return=xg(e.value,e.length,n);return;case pg:return Ns([Jt(e,{value:O(e.value,"@","@"+B)})],r);case ma:if(e.length)return s2(n=e.props,function(i){switch(zt(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lr(Jt(e,{props:[O(i,/:(read-\w+)/,":"+zi+"$1")]})),lr(Jt(e,{props:[i]})),ju(e,{props:nh(n,r)});break;case"::placeholder":lr(Jt(e,{props:[O(i,/:(plac\w+)/,":"+B+"input-$1")]})),lr(Jt(e,{props:[O(i,/:(plac\w+)/,":"+zi+"$1")]})),lr(Jt(e,{props:[O(i,/:(plac\w+)/,J+"input-$1")]})),lr(Jt(e,{props:[i]})),ju(e,{props:nh(n,r)});break}return""})}}var S2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ge={},Wr=typeof process<"u"&&Ge!==void 0&&(Ge.REACT_APP_SC_ATTR||Ge.SC_ATTR)||"data-styled",vg="active",yg="data-styled-version",ya="6.1.13",Yc=`/*!sc*/
`,Ms=typeof window<"u"&&"HTMLElement"in window,C2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Ge.REACT_APP_SC_DISABLE_SPEEDY!==""?Ge.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Ge.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Ge!==void 0&&Ge.SC_DISABLE_SPEEDY!==void 0&&Ge.SC_DISABLE_SPEEDY!==""&&Ge.SC_DISABLE_SPEEDY!=="false"&&Ge.SC_DISABLE_SPEEDY),j2={},wa=Object.freeze([]),Hr=Object.freeze({});function wg(e,t,n){return n===void 0&&(n=Hr),e.theme!==n.theme&&e.theme||t||n.theme}var Sg=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),A2=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,k2=/(^-|-$)/g;function oh(e){return e.replace(A2,"-").replace(k2,"")}var P2=/(a)(d)/gi,Oo=52,sh=function(e){return String.fromCharCode(e+(e>25?39:97))};function Pu(e){var t,n="";for(t=Math.abs(e);t>Oo;t=t/Oo|0)n=sh(t%Oo)+n;return(sh(t%Oo)+n).replace(P2,"$1-$2")}var ll,Cg=5381,Cr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jg=function(e){return Cr(Cg,e)};function qc(e){return Pu(jg(e)>>>0)}function $2(e){return e.displayName||e.name||"Component"}function ul(e){return typeof e=="string"&&!0}var Ag=typeof Symbol=="function"&&Symbol.for,kg=Ag?Symbol.for("react.memo"):60115,E2=Ag?Symbol.for("react.forward_ref"):60112,T2={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},L2={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pg={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R2=((ll={})[E2]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ll[kg]=Pg,ll);function ah(e){return("type"in(t=e)&&t.type.$$typeof)===kg?Pg:"$$typeof"in e?R2[e.$$typeof]:T2;var t}var _2=Object.defineProperty,z2=Object.getOwnPropertyNames,lh=Object.getOwnPropertySymbols,D2=Object.getOwnPropertyDescriptor,N2=Object.getPrototypeOf,uh=Object.prototype;function $g(e,t,n){if(typeof t!="string"){if(uh){var r=N2(t);r&&r!==uh&&$g(e,r,n)}var i=z2(t);lh&&(i=i.concat(lh(t)));for(var o=ah(e),s=ah(t),a=0;a<i.length;++a){var l=i[a];if(!(l in L2||n&&n[l]||s&&l in s||o&&l in o)){var c=D2(t,l);try{_2(e,l,c)}catch{}}}}return e}function Jn(e){return typeof e=="function"}function Zc(e){return typeof e=="object"&&"styledComponentId"in e}function Bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Is(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function to(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function $u(e,t,n){if(n===void 0&&(n=!1),!n&&!to(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=$u(e[r],t[r]);else if(to(t))for(var r in t)e[r]=$u(e[r],t[r]);return e}function Jc(e,t){Object.defineProperty(e,"toString",{value:t})}function er(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var M2=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw er(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),l=(s=0,n.length);s<l;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Yc);return n},e}(),ss=new Map,Os=new Map,as=1,bo=function(e){if(ss.has(e))return ss.get(e);for(;Os.has(as);)as++;var t=as++;return ss.set(e,t),Os.set(t,e),t},I2=function(e,t){as=t+1,ss.set(e,t),Os.set(t,e)},O2="style[".concat(Wr,"][").concat(yg,'="').concat(ya,'"]'),b2=new RegExp("^".concat(Wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),V2=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},F2=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Yc),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var l=a.match(b2);if(l){var c=0|parseInt(l[1],10),d=l[2];c!==0&&(I2(d,c),V2(e,d,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}},ch=function(e){for(var t=document.querySelectorAll(O2),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(Wr)!==vg&&(F2(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function B2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Eg=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Wr,"]")));return l[l.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wr,vg),r.setAttribute(yg,ya);var s=B2();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},U2=function(){function e(t){this.element=Eg(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw er(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),W2=function(){function e(t){this.element=Eg(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),H2=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),dh=Ms,G2={isServer:!Ms,useCSSOMInjection:!C2},bs=function(){function e(t,n,r){t===void 0&&(t=Hr),n===void 0&&(n={});var i=this;this.options=ye(ye({},G2),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ms&&dh&&(dh=!1,ch(this)),Jc(this,function(){return function(o){for(var s=o.getTag(),a=s.length,l="",c=function(p){var h=function(m){return Os.get(m)}(p);if(h===void 0)return"continue";var v=o.names.get(h),y=s.getGroup(p);if(v===void 0||!v.size||y.length===0)return"continue";var w="".concat(Wr,".g").concat(p,'[id="').concat(h,'"]'),S="";v!==void 0&&v.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),l+="".concat(y).concat(w,'{content:"').concat(S,'"}').concat(Yc)},d=0;d<a;d++)c(d);return l}(i)})}return e.registerId=function(t){return bo(t)},e.prototype.rehydrate=function(){!this.server&&Ms&&ch(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ye(ye({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new H2(i):r?new U2(i):new W2(i)}(this.options),new M2(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(bo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(bo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(bo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),K2=/&/g,Q2=/^\s*\/\/.*$/gm;function Tg(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Tg(n.children,t)),n})}function X2(e){var t,n,r,i=Hr,o=i.options,s=o===void 0?Hr:o,a=i.plugins,l=a===void 0?wa:a,c=function(h,v,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},d=l.slice();d.push(function(h){h.type===ma&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(K2,n).replace(r,c))}),s.prefix&&d.push(w2),d.push(x2);var p=function(h,v,y,w){v===void 0&&(v=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var S=h.replace(Q2,""),m=m2(y||v?"".concat(y," ").concat(v," { ").concat(S," }"):S);s.namespace&&(m=Tg(m,s.namespace));var f=[];return Ns(m,v2(d.concat(y2(function(x){return f.push(x)})))),f};return p.hash=l.length?l.reduce(function(h,v){return v.name||er(15),Cr(h,v.name)},Cg).toString():"",p}var Y2=new bs,Eu=X2(),Lg=me.createContext({shouldForwardProp:void 0,styleSheet:Y2,stylis:Eu});Lg.Consumer;me.createContext(void 0);function Tu(){return g.useContext(Lg)}var Rg=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Eu);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Jc(this,function(){throw er(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Eu),this.name+t.hash},e}(),q2=function(e){return e>="A"&&e<="Z"};function ph(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;q2(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _g=function(e){return e==null||e===!1||e===""},zg=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!_g(o)&&(Array.isArray(o)&&o.isCss||Jn(o)?r.push("".concat(ph(i),":"),o,";"):to(o)?r.push.apply(r,Fr(Fr(["".concat(i," {")],zg(o),!1),["}"],!1)):r.push("".concat(ph(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in S2||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(_g(e))return[];if(Zc(e))return[".".concat(e.styledComponentId)];if(Jn(e)){if(!Jn(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return xn(i,t,n,r)}var o;return e instanceof Rg?n?(e.inject(n,r),[e.getName(r)]):[e]:to(e)?zg(e):Array.isArray(e)?Array.prototype.concat.apply(wa,e.map(function(s){return xn(s,t,n,r)})):[e.toString()]}function Dg(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Jn(n)&&!Zc(n))return!1}return!0}var Z2=jg(ya),J2=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Dg(t),this.componentId=n,this.baseHash=Cr(Z2,n),this.baseStyle=r,bs.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Bn(i,this.staticRulesId);else{var o=Is(xn(this.rules,t,n,r)),s=Pu(Cr(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=Bn(i,s),this.staticRulesId=s}else{for(var l=Cr(this.baseHash,r.hash),c="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")c+=p;else if(p){var h=Is(xn(p,t,n,r));l=Cr(l,h+d),c+=h}}if(c){var v=Pu(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),i=Bn(i,v)}}return i},e}(),no=me.createContext(void 0);no.Consumer;function eS(e){var t=me.useContext(no),n=g.useMemo(function(){return function(r,i){if(!r)throw er(14);if(Jn(r)){var o=r(i);return o}if(Array.isArray(r)||typeof r!="object")throw er(8);return i?ye(ye({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?me.createElement(no.Provider,{value:n},e.children):null}var cl={};function tS(e,t,n){var r=Zc(e),i=e,o=!ul(e),s=t.attrs,a=s===void 0?wa:s,l=t.componentId,c=l===void 0?function(C,A){var k=typeof C!="string"?"sc":oh(C);cl[k]=(cl[k]||0)+1;var P="".concat(k,"-").concat(qc(ya+k+cl[k]));return A?"".concat(A,"-").concat(P):P}(t.displayName,t.parentComponentId):l,d=t.displayName,p=d===void 0?function(C){return ul(C)?"styled.".concat(C):"Styled(".concat($2(C),")")}(e):d,h=t.displayName&&t.componentId?"".concat(oh(t.displayName),"-").concat(t.componentId):t.componentId||c,v=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(C,A){return w(C,A)&&S(C,A)}}else y=w}var m=new J2(n,h,r?i.componentStyle:void 0);function f(C,A){return function(k,P,$){var M=k.attrs,z=k.componentStyle,Y=k.defaultProps,ke=k.foldedComponentIds,tt=k.styledComponentId,We=k.target,Tt=me.useContext(no),Oe=Tu(),q=k.shouldForwardProp||Oe.shouldForwardProp,L=wg(P,Tt,Y)||Hr,_=function(Yt,He,Lt){for(var ii,_n=ye(ye({},He),{className:void 0,theme:Lt}),za=0;za<Yt.length;za+=1){var wo=Jn(ii=Yt[za])?ii(_n):ii;for(var qt in wo)_n[qt]=qt==="className"?Bn(_n[qt],wo[qt]):qt==="style"?ye(ye({},_n[qt]),wo[qt]):wo[qt]}return He.className&&(_n.className=Bn(_n.className,He.className)),_n}(M,P,L),N=_.as||We,K={};for(var Q in _)_[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&_.theme===L||(Q==="forwardedAs"?K.as=_.forwardedAs:q&&!q(Q,N)||(K[Q]=_[Q]));var Rn=function(Yt,He){var Lt=Tu(),ii=Yt.generateAndInjectStyles(He,Lt.styleSheet,Lt.stylis);return ii}(z,_),dt=Bn(ke,tt);return Rn&&(dt+=" "+Rn),_.className&&(dt+=" "+_.className),K[ul(N)&&!Sg.has(N)?"class":"className"]=dt,K.ref=$,g.createElement(N,K)}(x,C,A)}f.displayName=p;var x=me.forwardRef(f);return x.attrs=v,x.componentStyle=m,x.displayName=p,x.shouldForwardProp=y,x.foldedComponentIds=r?Bn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=r?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=r?function(A){for(var k=[],P=1;P<arguments.length;P++)k[P-1]=arguments[P];for(var $=0,M=k;$<M.length;$++)$u(A,M[$],!0);return A}({},i.defaultProps,C):C}}),Jc(x,function(){return".".concat(x.styledComponentId)}),o&&$g(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function hh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var fh=function(e){return Object.assign(e,{isCss:!0})};function I(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Jn(e)||to(e))return fh(xn(hh(wa,Fr([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):fh(xn(hh(r,t)))}function Lu(e,t,n){if(n===void 0&&(n=Hr),!t)throw er(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,I.apply(void 0,Fr([i],o,!1)))};return r.attrs=function(i){return Lu(e,t,ye(ye({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Lu(e,t,ye(ye({},n),i))},r}var Ng=function(e){return Lu(tS,e)},j=Ng;Sg.forEach(function(e){j[e]=Ng(e)});var nS=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Dg(t),bs.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Is(xn(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&bs.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function rS(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=I.apply(void 0,Fr([e],t,!1)),i="sc-global-".concat(qc(JSON.stringify(r))),o=new nS(r,i),s=function(l){var c=Tu(),d=me.useContext(no),p=me.useRef(c.styleSheet.allocateGSInstance(i)).current;return c.styleSheet.server&&a(p,l,c.styleSheet,d,c.stylis),me.useLayoutEffect(function(){if(!c.styleSheet.server)return a(p,l,c.styleSheet,d,c.stylis),function(){return o.removeStyles(p,c.styleSheet)}},[p,l,c.styleSheet,d,c.stylis]),null};function a(l,c,d,p,h){if(o.isStatic)o.renderStyles(l,j2,d,h);else{var v=ye(ye({},c),{theme:wg(c,p,s.defaultProps)});o.renderStyles(l,v,d,h)}}return me.memo(s)}function ei(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Is(I.apply(void 0,Fr([e],t,!1))),i=qc(r);return new Rg(i,r)}/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ro(){return ro=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ro.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const mh="popstate";function iS(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:a}=r.location;return Ru("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Vs(i)}return sS(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function oS(){return Math.random().toString(36).substr(2,8)}function gh(e,t){return{usr:e.state,key:e.key,idx:t}}function Ru(e,t,n,r){return n===void 0&&(n=null),ro({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ti(t):t,{state:n,key:t&&t.key||r||oS()})}function Vs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ti(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sS(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=ln.Pop,l=null,c=d();c==null&&(c=0,s.replaceState(ro({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function p(){a=ln.Pop;let S=d(),m=S==null?null:S-c;c=S,l&&l({action:a,location:w.location,delta:m})}function h(S,m){a=ln.Push;let f=Ru(w.location,S,m);c=d()+1;let x=gh(f,c),C=w.createHref(f);try{s.pushState(x,"",C)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;i.location.assign(C)}o&&l&&l({action:a,location:w.location,delta:1})}function v(S,m){a=ln.Replace;let f=Ru(w.location,S,m);c=d();let x=gh(f,c),C=w.createHref(f);s.replaceState(x,"",C),o&&l&&l({action:a,location:w.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof S=="string"?S:Vs(S);return f=f.replace(/ $/,"%20"),pe(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let w={get action(){return a},get location(){return e(i,s)},listen(S){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(mh,p),l=S,()=>{i.removeEventListener(mh,p),l=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:v,go(S){return s.go(S)}};return w}var xh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xh||(xh={}));function aS(e,t,n){return n===void 0&&(n="/"),lS(e,t,n,!1)}function lS(e,t,n,r){let i=typeof t=="string"?ti(t):t,o=ed(i.pathname||"/",n);if(o==null)return null;let s=Ig(e);uS(s);let a=null;for(let l=0;a==null&&l<s.length;++l){let c=wS(o);a=vS(s[l],c,r)}return a}function Ig(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=vn([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(pe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ig(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:gS(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of Og(o.path))i(o,s,l)}),t}function Og(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Og(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function uS(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:xS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cS=/^:[\w-]+$/,dS=3,pS=2,hS=1,fS=10,mS=-2,vh=e=>e==="*";function gS(e,t){let n=e.split("/"),r=n.length;return n.some(vh)&&(r+=mS),t&&(r+=pS),n.filter(i=>!vh(i)).reduce((i,o)=>i+(cS.test(o)?dS:o===""?hS:fS),r)}function xS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function vS(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=yh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),h=l.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=yh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:vn([o,p.pathname]),pathnameBase:AS(vn([o,p.pathnameBase])),route:h}),p.pathnameBase!=="/"&&(o=vn([o,p.pathnameBase]))}return s}function yh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=yS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let w=a[p]||"";s=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[p];return v&&!y?c[h]=void 0:c[h]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function yS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Mg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function wS(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ed(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function SS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?ti(e):e;return{pathname:n?n.startsWith("/")?n:CS(n,t):t,search:kS(r),hash:PS(i)}}function CS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jS(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function bg(e,t){let n=jS(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Vg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ti(e):(i=ro({},e),pe(!i.pathname||!i.pathname.includes("?"),dl("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),dl("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),dl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let h=s.split("/");for(;h[0]==="..";)h.shift(),p-=1;i.pathname=h.join("/")}a=p>=0?t[p]:"/"}let l=SS(i,a),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),AS=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),kS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,PS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $S(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fg=["post","put","patch","delete"];new Set(Fg);const ES=["get",...Fg];new Set(ES);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function io(){return io=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},io.apply(this,arguments)}const td=g.createContext(null),TS=g.createContext(null),rr=g.createContext(null),Sa=g.createContext(null),En=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Bg=g.createContext(null);function LS(e,t){let{relative:n}=t===void 0?{}:t;mo()||pe(!1);let{basename:r,navigator:i}=g.useContext(rr),{hash:o,pathname:s,search:a}=Hg(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:vn([r,s])),i.createHref({pathname:l,search:a,hash:o})}function mo(){return g.useContext(Sa)!=null}function et(){return mo()||pe(!1),g.useContext(Sa).location}function Ug(e){g.useContext(rr).static||g.useLayoutEffect(e)}function Qt(){let{isDataRoute:e}=g.useContext(En);return e?US():RS()}function RS(){mo()||pe(!1);let e=g.useContext(td),{basename:t,future:n,navigator:r}=g.useContext(rr),{matches:i}=g.useContext(En),{pathname:o}=et(),s=JSON.stringify(bg(i,n.v7_relativeSplatPath)),a=g.useRef(!1);return Ug(()=>{a.current=!0}),g.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let p=Vg(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:vn([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,o,e])}function Wg(){let{matches:e}=g.useContext(En),t=e[e.length-1];return t?t.params:{}}function Hg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(rr),{matches:i}=g.useContext(En),{pathname:o}=et(),s=JSON.stringify(bg(i,r.v7_relativeSplatPath));return g.useMemo(()=>Vg(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function _S(e,t){return zS(e,t)}function zS(e,t,n,r){mo()||pe(!1);let{navigator:i}=g.useContext(rr),{matches:o}=g.useContext(En),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let c=et(),d;if(t){var p;let S=typeof t=="string"?ti(t):t;l==="/"||(p=S.pathname)!=null&&p.startsWith(l)||pe(!1),d=S}else d=c;let h=d.pathname||"/",v=h;if(l!=="/"){let S=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=aS(e,{pathname:v}),w=OS(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},a,S.params),pathname:vn([l,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:vn([l,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,n,r);return t&&w?g.createElement(Sa.Provider,{value:{location:io({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:ln.Pop}},w):w}function DS(){let e=BS(),t=$S(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const NS=g.createElement(DS,null);class MS extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(En.Provider,{value:this.props.routeContext},g.createElement(Bg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IS(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(td);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(En.Provider,{value:t},r)}function OS(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);d>=0||pe(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:h,errors:v}=n,y=p.route.loader&&h[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||y){l=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,p,h)=>{let v,y=!1,w=null,S=null;n&&(v=a&&p.route.id?a[p.route.id]:void 0,w=p.route.errorElement||NS,l&&(c<0&&h===0?(y=!0,S=null):c===h&&(y=!0,S=p.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,h+1)),f=()=>{let x;return v?x=w:y?x=S:p.route.Component?x=g.createElement(p.route.Component,null):p.route.element?x=p.route.element:x=d,g.createElement(IS,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:x})};return n&&(p.route.ErrorBoundary||p.route.errorElement||h===0)?g.createElement(MS,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var Gg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gg||{}),Fs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Fs||{});function bS(e){let t=g.useContext(td);return t||pe(!1),t}function VS(e){let t=g.useContext(TS);return t||pe(!1),t}function FS(e){let t=g.useContext(En);return t||pe(!1),t}function Kg(e){let t=FS(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function BS(){var e;let t=g.useContext(Bg),n=VS(Fs.UseRouteError),r=Kg(Fs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function US(){let{router:e}=bS(Gg.UseNavigateStable),t=Kg(Fs.UseNavigateStable),n=g.useRef(!1);return Ug(()=>{n.current=!0}),g.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,io({fromRouteId:t},o)))},[e,t])}function Rt(e){pe(!1)}function WS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=ln.Pop,navigator:o,static:s=!1,future:a}=e;mo()&&pe(!1);let l=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:l,navigator:o,static:s,future:io({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=ti(r));let{pathname:d="/",search:p="",hash:h="",state:v=null,key:y="default"}=r,w=g.useMemo(()=>{let S=ed(d,l);return S==null?null:{location:{pathname:S,search:p,hash:h,state:v,key:y},navigationType:i}},[l,d,p,h,v,y,i]);return w==null?null:g.createElement(rr.Provider,{value:c},g.createElement(Sa.Provider,{children:n,value:w}))}function HS(e){let{children:t,location:n}=e;return _S(_u(t),n)}new Promise(()=>{});function _u(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,i)=>{if(!g.isValidElement(r))return;let o=[...t,i];if(r.type===g.Fragment){n.push.apply(n,_u(r.props.children,o));return}r.type!==Rt&&pe(!1),!r.props.index||!r.props.children||pe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=_u(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zu(){return zu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zu.apply(this,arguments)}function GS(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function KS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function QS(e,t){return e.button===0&&(!t||t==="_self")&&!KS(e)}const XS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],YS="6";try{window.__reactRouterVersion=YS}catch{}const qS="startTransition",wh=Hv[qS];function ZS(e){let{basename:t,children:n,future:r,window:i}=e,o=g.useRef();o.current==null&&(o.current=iS({window:i,v5Compat:!0}));let s=o.current,[a,l]=g.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},d=g.useCallback(p=>{c&&wh?wh(()=>l(p)):l(p)},[l,c]);return g.useLayoutEffect(()=>s.listen(d),[s,d]),g.createElement(WS,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const JS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",e5=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bs=g.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:c,preventScrollReset:d,unstable_viewTransition:p}=t,h=GS(t,XS),{basename:v}=g.useContext(rr),y,w=!1;if(typeof c=="string"&&e5.test(c)&&(y=c,JS))try{let x=new URL(window.location.href),C=c.startsWith("//")?new URL(x.protocol+c):new URL(c),A=ed(C.pathname,v);C.origin===x.origin&&A!=null?c=A+C.search+C.hash:w=!0}catch{}let S=LS(c,{relative:i}),m=t5(c,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:p});function f(x){r&&r(x),x.defaultPrevented||m(x)}return g.createElement("a",zu({},h,{href:y||S,onClick:w||o?r:f,ref:n,target:l}))});var Sh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Sh||(Sh={}));var Ch;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ch||(Ch={}));function t5(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=t===void 0?{}:t,l=Qt(),c=et(),d=Hg(e,{relative:s});return g.useCallback(p=>{if(QS(p,n)){p.preventDefault();let h=r!==void 0?r:Vs(c)===Vs(d);l(e,{replace:h,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[c,l,d,r,i,n,e,o,s,a])}var Qg={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},jh=me.createContext&&me.createContext(Qg),n5=["attr","size","title"];function r5(e,t){if(e==null)return{};var n=i5(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function i5(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Us(){return Us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Us.apply(this,arguments)}function Ah(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ws(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ah(Object(n),!0).forEach(function(r){o5(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ah(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function o5(e,t,n){return t=s5(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s5(e){var t=a5(e,"string");return typeof t=="symbol"?t:t+""}function a5(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Xg(e){return e&&e.map((t,n)=>me.createElement(t.tag,Ws({key:n},t.attr),Xg(t.child)))}function G(e){return t=>me.createElement(l5,Us({attr:Ws({},e.attr)},t),Xg(e.child))}function l5(e){var t=n=>{var{attr:r,size:i,title:o}=e,s=r5(e,n5),a=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),me.createElement("svg",Us({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:Ws(Ws({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&me.createElement("title",null,o),e.children)};return jh!==void 0?me.createElement(jh.Consumer,null,n=>t(n)):t(Qg)}function u5(e){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(e)}function c5(e){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"},child:[]}]})(e)}const U=(e="row")=>I`
  display: flex;
  flex-direction: ${e};
`,b=(e,t)=>I`
  display: flex;
  justify-content: ${e};
  align-items: ${t};
`,T=(e,t,n)=>I`
  display: flex;
  flex-direction: ${n};
  justify-content: ${e};
  align-items: ${t};
`,d5=()=>I`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 0;
    left: 50%;
    height: 2px;
    background-color: ${({theme:e})=>e.colors.primaryLight};
    transition: all 0.5s ease;
  }
`,p5=(e,t)=>ei`
    0% {
      transform: rotate(0deg) scale(${e});
    }
    50% {
      transform: rotate(360deg) scale(${t});
    }
    100% {
      transform: rotate(720deg) scale(${e});
    }
`,h5=j.div`
  ${b("center","center")}

  width: ${({$width:e})=>e};
  height: ${({$height:e})=>e};
  position: relative;

  svg {
    animation-name: ${({$initScale:e,$finishScale:t})=>p5(e,t)};
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    position: absolute;
    color: ${({$color:e})=>e};
  }
  span {
    position: absolute;
    font-size: 18px;
  }

  &.context-loading {
    width: 100vw;
    height: 100vh;
    position: fixed;
    ${b("center","center")};
  }
`;function he(e){return u.jsx(h5,{$height:e.height?e.height:"100%",$width:e.width?e.width:"100%",$initScale:e.init?e.init:6,$finishScale:e.finish?e.finish:4,$color:e.color?e.color:"rgb(193, 42, 0)",className:`loading-spinner ${e.class||""}`,"data-testid":"loading-products-spinner",children:u.jsx(c5,{})})}const Yg=g.createContext(null),f5=({children:e})=>{const[t,n]=g.useState(!0),[r,i]=g.useState(null);return g.useEffect(()=>{(async()=>{const s=await fetch("https://rogeriodeveloper.com/api/site/settings");if(s.ok){const a=await s.json();i(a)}})().then(()=>n(!1))},[]),t?u.jsx(he,{class:"context-loading"}):u.jsx(Yg.Provider,{value:r,children:e})};function te(){const e=g.useContext(Yg);if(!e)throw new Error("useSettings must be inside SettingsContextProvider.");return e}const m5=j.div`
  width: 100%;
  height: 800px;
  position: relative;
  ${U("row")}
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 650px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    height: 550px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    height: 350px;
  }
`,g5=j.div`
  width: 100%;
  height: 25px;
  position: absolute;
  z-index: 4;
  bottom: 0;
  margin-bottom: 50px;
  ${T("center","center","row")};
  gap: 20px;

  button {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    transition: width 300ms linear;

    &.active {
      width: 50px;
    }
  }
  @media (min-width: 0px) and (max-width: 768px) {
    button {
      width: 20px;
      height: 20px;
    }
    margin-bottom: 25px;
  }
`,x5=j.div`
  min-width: 100%;
  height: 100%;
  position: absolute;
  img {
    width: 100%;
    height: 100%;
  }
`,v5=j.div`
  width: 50%;
  height: auto;
  position: absolute;
  left: 0;
  bottom: 0;

  margin-bottom: 150px;
  margin-left: 100px;
  ${({theme:e})=>({fontSize:e.text.size.title,color:e.colors.primaryDark,textShadow:"2px 2px 2px "+e.colors.primaryLight})}

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: ${({theme:e})=>e.text.size.xlarge};
    margin-left: 50px;
    margin-bottom: 100px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.text.size.large};
    margin-left: 25px;
    margin-bottom: 100px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    font-size: ${({theme:e})=>e.text.size.medium};
    margin-left: 25px;
    margin-bottom: 80px;
  }
`;function Ca(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Du=e=>Array.isArray(e);function qg(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function oo(e){return typeof e=="string"||Array.isArray(e)}function kh(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function nd(e,t,n,r){if(typeof t=="function"){const[i,o]=kh(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=kh(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function ja(e,t,n){const r=e.getProps();return nd(r,t,n!==void 0?n:r.custom,e)}const rd=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],id=["initial",...rd],go=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ir=new Set(go),bt=e=>e*1e3,Vt=e=>e/1e3,y5={type:"spring",stiffness:500,damping:25,restSpeed:10},w5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),S5={type:"keyframes",duration:.8},C5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},j5=(e,{keyframes:t})=>t.length>2?S5:ir.has(e)?e.startsWith("scale")?w5(t[1]):y5:C5;function od(e,t){return e?e[t]||e.default||e:void 0}const A5={skipAnimations:!1,useManualTiming:!1},k5=e=>e!==null;function Aa(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(k5),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Re=e=>e;function P5(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function a(c){o.has(c)&&(l.schedule(c),e()),c(s)}const l={schedule:(c,d=!1,p=!1)=>{const v=p&&r?t:n;return d&&o.add(c),v.has(c)||v.add(c),c},cancel:c=>{n.delete(c),o.delete(c)},process:c=>{if(s=c,r){i=!0;return}r=!0,[t,n]=[n,t],n.clear(),t.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const Vo=["read","resolveKeyframes","update","preRender","render","postRender"],$5=40;function Zg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Vo.reduce((m,f)=>(m[f]=P5(o),m),{}),{read:a,resolveKeyframes:l,update:c,preRender:d,render:p,postRender:h}=s,v=()=>{const m=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(m-i.timestamp,$5),1),i.timestamp=m,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),d.process(i),p.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},y=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Vo.reduce((m,f)=>{const x=s[f];return m[f]=(C,A=!1,k=!1)=>(n||y(),x.schedule(C,A,k)),m},{}),cancel:m=>{for(let f=0;f<Vo.length;f++)s[Vo[f]].cancel(m)},state:i,steps:s}}const{schedule:H,cancel:Sn,state:Ce,steps:pl}=Zg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Re,!0),Jg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,E5=1e-7,T5=12;function L5(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=Jg(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>E5&&++a<T5);return s}function xo(e,t,n,r){if(e===t&&n===r)return Re;const i=o=>L5(o,0,1,e,n);return o=>o===0||o===1?o:Jg(i(o),t,r)}const ex=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,tx=e=>t=>1-e(1-t),nx=xo(.33,1.53,.69,.99),sd=tx(nx),rx=ex(sd),ix=e=>(e*=2)<1?.5*sd(e):.5*(2-Math.pow(2,-10*(e-1))),ad=e=>1-Math.sin(Math.acos(e)),ox=tx(ad),sx=ex(ad),ax=e=>/^0[^.\s]+$/u.test(e);function R5(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||ax(e):!0}let Nu=Re;const lx=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ux=e=>t=>typeof t=="string"&&t.startsWith(e),cx=ux("--"),_5=ux("var(--"),ld=e=>_5(e)?z5.test(e.split("/*")[0].trim()):!1,z5=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,D5=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function N5(e){const t=D5.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function dx(e,t,n=1){const[r,i]=N5(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return lx(s)?parseFloat(s):s}return ld(i)?dx(i,t,n+1):i}const Cn=(e,t,n)=>n>t?t:n<e?e:n,ni={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},so={...ni,transform:e=>Cn(0,1,e)},Fo={...ni,default:1},vo=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),en=vo("deg"),$t=vo("%"),D=vo("px"),M5=vo("vh"),I5=vo("vw"),Ph={...$t,parse:e=>$t.parse(e)/100,transform:e=>$t.transform(e*100)},O5=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),$h=e=>e===ni||e===D,Eh=(e,t)=>parseFloat(e.split(", ")[t]),Th=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Eh(i[1],t);{const o=r.match(/^matrix\((.+)\)$/u);return o?Eh(o[1],e):0}},b5=new Set(["x","y","z"]),V5=go.filter(e=>!b5.has(e));function F5(e){const t=[];return V5.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Gr={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Th(4,13),y:Th(5,14)};Gr.translateX=Gr.x;Gr.translateY=Gr.y;const px=e=>t=>t.test(e),B5={test:e=>e==="auto",parse:e=>e},hx=[ni,D,$t,en,I5,M5,B5],Lh=e=>hx.find(px(e)),Kn=new Set;let Mu=!1,Iu=!1;function fx(){if(Iu){const e=Array.from(Kn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=F5(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))===null||a===void 0||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Iu=!1,Mu=!1,Kn.forEach(e=>e.complete()),Kn.clear()}function mx(){Kn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Iu=!0)})}function U5(){mx(),fx()}class ud{constructor(t,n,r,i,o,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Kn.add(this),Mu||(Mu=!0,H.read(mx),H.resolveKeyframes(fx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let o=0;o<t.length;o++)if(t[o]===null)if(o===0){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}else t[o]=t[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Kn.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Kn.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Di=e=>Math.round(e*1e5)/1e5,cd=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function W5(e){return e==null}const H5=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,dd=(e,t)=>n=>!!(typeof n=="string"&&H5.test(n)&&n.startsWith(e)||t&&!W5(n)&&Object.prototype.hasOwnProperty.call(n,t)),gx=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(cd);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},G5=e=>Cn(0,255,e),hl={...ni,transform:e=>Math.round(G5(e))},Un={test:dd("rgb","red"),parse:gx("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+hl.transform(e)+", "+hl.transform(t)+", "+hl.transform(n)+", "+Di(so.transform(r))+")"};function K5(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Ou={test:dd("#"),parse:K5,transform:Un.transform},jr={test:dd("hsl","hue"),parse:gx("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+$t.transform(Di(t))+", "+$t.transform(Di(n))+", "+Di(so.transform(r))+")"},Ee={test:e=>Un.test(e)||Ou.test(e)||jr.test(e),parse:e=>Un.test(e)?Un.parse(e):jr.test(e)?jr.parse(e):Ou.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Un.transform(e):jr.transform(e)},Q5=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function X5(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(cd))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Q5))===null||n===void 0?void 0:n.length)||0)>0}const xx="number",vx="color",Y5="var",q5="var(",Rh="${}",Z5=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ao(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(Z5,l=>(Ee.test(l)?(r.color.push(o),i.push(vx),n.push(Ee.parse(l))):l.startsWith(q5)?(r.var.push(o),i.push(Y5),n.push(l)):(r.number.push(o),i.push(xx),n.push(parseFloat(l))),++o,Rh)).split(Rh);return{values:n,split:a,indexes:r,types:i}}function yx(e){return ao(e).values}function wx(e){const{split:t,types:n}=ao(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===xx?o+=Di(i[s]):a===vx?o+=Ee.transform(i[s]):o+=i[s]}return o}}const J5=e=>typeof e=="number"?0:e;function e4(e){const t=yx(e);return wx(e)(t.map(J5))}const jn={test:X5,parse:yx,createTransformer:wx,getAnimatableNone:e4},t4=new Set(["brightness","contrast","saturate","opacity"]);function n4(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(cd)||[];if(!r)return e;const i=n.replace(r,"");let o=t4.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const r4=/\b([a-z-]*)\(.*?\)/gu,bu={...jn,getAnimatableNone:e=>{const t=e.match(r4);return t?t.map(n4).join(" "):e}},i4={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,backgroundPositionX:D,backgroundPositionY:D},o4={rotate:en,rotateX:en,rotateY:en,rotateZ:en,scale:Fo,scaleX:Fo,scaleY:Fo,scaleZ:Fo,skew:en,skewX:en,skewY:en,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:so,originX:Ph,originY:Ph,originZ:D},_h={...ni,transform:Math.round},pd={...i4,...o4,zIndex:_h,size:D,fillOpacity:so,strokeOpacity:so,numOctaves:_h},s4={...pd,color:Ee,backgroundColor:Ee,outlineColor:Ee,fill:Ee,stroke:Ee,borderColor:Ee,borderTopColor:Ee,borderRightColor:Ee,borderBottomColor:Ee,borderLeftColor:Ee,filter:bu,WebkitFilter:bu},hd=e=>s4[e];function Sx(e,t){let n=hd(e);return n!==bu&&(n=jn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const a4=new Set(["auto","none","0"]);function l4(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!a4.has(o)&&ao(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Sx(n,i)}class Cx extends ud{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let c=t[l];if(typeof c=="string"&&(c=c.trim(),ld(c))){const d=dx(c,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!O5.has(r)||t.length!==2)return;const[i,o]=t,s=Lh(i),a=Lh(o);if(s!==a)if($h(s)&&$h(a))for(let l=0;l<t.length;l++){const c=t[l];typeof c=="string"&&(t[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)R5(t[i])&&r.push(i);r.length&&l4(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Gr[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const o=n.getValue(r);o&&o.jump(this.measuredOrigin,!1);const s=i.length-1,a=i[s];i[s]=Gr[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function fd(e){return typeof e=="function"}let ls;function u4(){ls=void 0}const Et={now:()=>(ls===void 0&&Et.set(Ce.isProcessing||A5.useManualTiming?Ce.timestamp:performance.now()),ls),set:e=>{ls=e,queueMicrotask(u4)}},zh=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(jn.test(e)||e==="0")&&!e.startsWith("url("));function c4(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function d4(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=zh(i,t),a=zh(o,t);return!s||!a?!1:c4(e)||(n==="spring"||fd(n))&&r}const p4=40;class jx{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Et.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>p4?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&U5(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=Et.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:o,delay:s,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!d4(t,r,i,o))if(s)this.options.duration=0;else{l==null||l(Aa(t,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function Ax(e,t){return t?e*(1e3/t):0}const h4=5;function kx(e,t,n){const r=Math.max(t-h4,0);return Ax(n-e(r),t-r)}const fl=.001,f4=.01,m4=10,g4=.05,x4=1;function v4({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,o,s=1-t;s=Cn(g4,x4,s),e=Cn(f4,m4,Vt(e)),s<1?(i=c=>{const d=c*s,p=d*e,h=d-n,v=Vu(c,s),y=Math.exp(-p);return fl-h/v*y},o=c=>{const p=c*s*e,h=p*n+n,v=Math.pow(s,2)*Math.pow(c,2)*e,y=Math.exp(-p),w=Vu(Math.pow(c,2),s);return(-i(c)+fl>0?-1:1)*((h-v)*y)/w}):(i=c=>{const d=Math.exp(-c*e),p=(c-n)*e+1;return-fl+d*p},o=c=>{const d=Math.exp(-c*e),p=(n-c)*(e*e);return d*p});const a=5/e,l=w4(i,o,a);if(e=bt(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:s*2*Math.sqrt(r*c),duration:e}}}const y4=12;function w4(e,t,n){let r=n;for(let i=1;i<y4;i++)r=r-e(r)/t(r);return r}function Vu(e,t){return e*Math.sqrt(1-t*t)}const S4=["duration","bounce"],C4=["stiffness","damping","mass"];function Dh(e,t){return t.some(n=>e[n]!==void 0)}function j4(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Dh(e,C4)&&Dh(e,S4)){const n=v4(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function Px({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],o=e[e.length-1],s={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:d,velocity:p,isResolvedFromDuration:h}=j4({...r,velocity:-Vt(r.velocity||0)}),v=p||0,y=l/(2*Math.sqrt(a*c)),w=o-i,S=Vt(Math.sqrt(a/c)),m=Math.abs(w)<5;n||(n=m?.01:2),t||(t=m?.005:.5);let f;if(y<1){const x=Vu(S,y);f=C=>{const A=Math.exp(-y*S*C);return o-A*((v+y*S*w)/x*Math.sin(x*C)+w*Math.cos(x*C))}}else if(y===1)f=x=>o-Math.exp(-S*x)*(w+(v+S*w)*x);else{const x=S*Math.sqrt(y*y-1);f=C=>{const A=Math.exp(-y*S*C),k=Math.min(x*C,300);return o-A*((v+y*S*w)*Math.sinh(k)+x*w*Math.cosh(k))/x}}return{calculatedDuration:h&&d||null,next:x=>{const C=f(x);if(h)s.done=x>=d;else{let A=0;y<1&&(A=x===0?bt(v):kx(f,x,C));const k=Math.abs(A)<=n,P=Math.abs(o-C)<=t;s.done=k&&P}return s.value=s.done?o:C,s}}}function Nh({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:l,restDelta:c=.5,restSpeed:d}){const p=e[0],h={done:!1,value:p},v=$=>a!==void 0&&$<a||l!==void 0&&$>l,y=$=>a===void 0?l:l===void 0||Math.abs(a-$)<Math.abs(l-$)?a:l;let w=n*t;const S=p+w,m=s===void 0?S:s(S);m!==S&&(w=m-p);const f=$=>-w*Math.exp(-$/r),x=$=>m+f($),C=$=>{const M=f($),z=x($);h.done=Math.abs(M)<=c,h.value=h.done?m:z};let A,k;const P=$=>{v(h.value)&&(A=$,k=Px({keyframes:[h.value,y(h.value)],velocity:kx(x,$,h.value),damping:i,stiffness:o,restDelta:c,restSpeed:d}))};return P(0),{calculatedDuration:null,next:$=>{let M=!1;return!k&&A===void 0&&(M=!0,C($),P($)),A!==void 0&&$>=A?k.next($-A):(!M&&C($),h)}}}const A4=xo(.42,0,1,1),k4=xo(0,0,.58,1),$x=xo(.42,0,.58,1),P4=e=>Array.isArray(e)&&typeof e[0]!="number",md=e=>Array.isArray(e)&&typeof e[0]=="number",Mh={linear:Re,easeIn:A4,easeInOut:$x,easeOut:k4,circIn:ad,circInOut:sx,circOut:ox,backIn:sd,backInOut:rx,backOut:nx,anticipate:ix},Ih=e=>{if(md(e)){Nu(e.length===4);const[t,n,r,i]=e;return xo(t,n,r,i)}else if(typeof e=="string")return Nu(Mh[e]!==void 0),Mh[e];return e},$4=(e,t)=>n=>t(e(n)),Ft=(...e)=>e.reduce($4),Kr=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},ie=(e,t,n)=>e+(t-e)*n;function ml(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function E4({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,l=2*n-a;i=ml(l,a,e+1/3),o=ml(l,a,e),s=ml(l,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function Hs(e,t){return n=>n>0?t:e}const gl=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},T4=[Ou,Un,jr],L4=e=>T4.find(t=>t.test(e));function Oh(e){const t=L4(e);if(!t)return!1;let n=t.parse(e);return t===jr&&(n=E4(n)),n}const bh=(e,t)=>{const n=Oh(e),r=Oh(t);if(!n||!r)return Hs(e,t);const i={...n};return o=>(i.red=gl(n.red,r.red,o),i.green=gl(n.green,r.green,o),i.blue=gl(n.blue,r.blue,o),i.alpha=ie(n.alpha,r.alpha,o),Un.transform(i))},Fu=new Set(["none","hidden"]);function R4(e,t){return Fu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function _4(e,t){return n=>ie(e,t,n)}function gd(e){return typeof e=="number"?_4:typeof e=="string"?ld(e)?Hs:Ee.test(e)?bh:N4:Array.isArray(e)?Ex:typeof e=="object"?Ee.test(e)?bh:z4:Hs}function Ex(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>gd(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function z4(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=gd(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function D4(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const s=t.types[o],a=e.indexes[s][i[s]],l=(n=e.values[a])!==null&&n!==void 0?n:0;r[o]=l,i[s]++}return r}const N4=(e,t)=>{const n=jn.createTransformer(t),r=ao(e),i=ao(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Fu.has(e)&&!i.values.length||Fu.has(t)&&!r.values.length?R4(e,t):Ft(Ex(D4(r,i),i.values),n):Hs(e,t)};function Tx(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?ie(e,t,n):gd(e)(e,t)}function M4(e,t,n){const r=[],i=n||Tx,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const l=Array.isArray(t)?t[s]||Re:t;a=Ft(l,a)}r.push(a)}return r}function I4(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Nu(o===t.length),o===1)return()=>t[0];if(o===2&&e[0]===e[1])return()=>t[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=M4(t,r,i),a=s.length,l=c=>{let d=0;if(a>1)for(;d<e.length-2&&!(c<e[d+1]);d++);const p=Kr(e[d],e[d+1],c);return s[d](p)};return n?c=>l(Cn(e[0],e[o-1],c)):l}function O4(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Kr(0,t,r);e.push(ie(n,1,i))}}function b4(e){const t=[0];return O4(t,e.length-1),t}function V4(e,t){return e.map(n=>n*t)}function F4(e,t){return e.map(()=>t||$x).splice(0,e.length-1)}function Gs({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=P4(r)?r.map(Ih):Ih(r),o={done:!1,value:t[0]},s=V4(n&&n.length===t.length?n:b4(t),e),a=I4(s,t,{ease:Array.isArray(i)?i:F4(t,i)});return{calculatedDuration:e,next:l=>(o.value=a(l),o.done=l>=e,o)}}const Vh=2e4;function B4(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Vh;)t+=n,r=e.next(t);return t>=Vh?1/0:t}const U4=e=>{const t=({timestamp:n})=>e(n);return{start:()=>H.update(t,!0),stop:()=>Sn(t),now:()=>Ce.isProcessing?Ce.timestamp:Et.now()}},W4={decay:Nh,inertia:Nh,tween:Gs,keyframes:Gs,spring:Px},H4=e=>e/100;class xd extends jx{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:o}=this.options,s=(i==null?void 0:i.KeyframeResolver)||ud,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new s(o,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=this.options,a=fd(n)?n:W4[n]||Gs;let l,c;a!==Gs&&typeof t[0]!="number"&&(l=Ft(H4,Tx(t[0],t[1])),t=[0,100]);const d=a({...this.options,keyframes:t});o==="mirror"&&(c=a({...this.options,keyframes:[...t].reverse(),velocity:-s})),d.calculatedDuration===null&&(d.calculatedDuration=B4(d));const{calculatedDuration:p}=d,h=p+i,v=h*(r+1)-i;return{generator:d,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:p,resolvedDuration:h,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:$}=this.options;return{done:!0,value:$[$.length-1]}}const{finalKeyframe:i,generator:o,mirroredGenerator:s,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:d,resolvedDuration:p}=r;if(this.startTime===null)return o.next(0);const{delay:h,repeat:v,repeatType:y,repeatDelay:w,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const m=this.currentTime-h*(this.speed>=0?1:-1),f=this.speed>=0?m<0:m>d;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let x=this.currentTime,C=o;if(v){const $=Math.min(this.currentTime,d)/p;let M=Math.floor($),z=$%1;!z&&$>=1&&(z=1),z===1&&M--,M=Math.min(M,v+1),!!(M%2)&&(y==="reverse"?(z=1-z,w&&(z-=w/p)):y==="mirror"&&(C=s)),x=Cn(0,1,z)*p}const A=f?{done:!1,value:l[0]}:C.next(x);a&&(A.value=a(A.value));let{done:k}=A;!f&&c!==null&&(k=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&k);return P&&i!==void 0&&(A.value=Aa(l,this.options,i)),S&&S(A.value),P&&this.finish(),A}get duration(){const{resolved:t}=this;return t?Vt(t.calculatedDuration):0}get time(){return Vt(this.currentTime)}set time(t){t=bt(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Vt(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=U4,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const G4=new Set(["opacity","clipPath","filter","transform"]),K4=10,Q4=(e,t)=>{let n="";const r=Math.max(Math.round(t/K4),2);for(let i=0;i<r;i++)n+=e(Kr(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function vd(e){let t;return()=>(t===void 0&&(t=e()),t)}const X4={linearEasing:void 0};function Y4(e,t){const n=vd(e);return()=>{var r;return(r=X4[t])!==null&&r!==void 0?r:n()}}const Ks=Y4(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function Lx(e){return!!(typeof e=="function"&&Ks()||!e||typeof e=="string"&&(e in Bu||Ks())||md(e)||Array.isArray(e)&&e.every(Lx))}const Ci=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Bu={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ci([0,.65,.55,1]),circOut:Ci([.55,0,1,.45]),backIn:Ci([.31,.01,.66,-.59]),backOut:Ci([.33,1.53,.69,.99])};function Rx(e,t){if(e)return typeof e=="function"&&Ks()?Q4(e,t):md(e)?Ci(e):Array.isArray(e)?e.map(n=>Rx(n,t)||Bu.easeOut):Bu[e]}function q4(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a,times:l}={}){const c={[t]:n};l&&(c.offset=l);const d=Rx(a,i);return Array.isArray(d)&&(c.easing=d),e.animate(c,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"})}function Fh(e,t){e.timeline=t,e.onfinish=null}const Z4=vd(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Qs=10,J4=2e4;function eC(e){return fd(e.type)||e.type==="spring"||!Lx(e.ease)}function tC(e,t){const n=new xd({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let o=0;for(;!r.done&&o<J4;)r=n.sample(o),i.push(r.value),o+=Qs;return{times:void 0,keyframes:i,duration:o-Qs,ease:"linear"}}const _x={anticipate:ix,backInOut:rx,circInOut:sx};function nC(e){return e in _x}class Bh extends jx{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:o}=this.options;this.resolver=new Cx(o,(s,a)=>this.onKeyframesResolved(s,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){var r;let{duration:i=300,times:o,ease:s,type:a,motionValue:l,name:c,startTime:d}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof s=="string"&&Ks()&&nC(s)&&(s=_x[s]),eC(this.options)){const{onComplete:h,onUpdate:v,motionValue:y,element:w,...S}=this.options,m=tC(t,S);t=m.keyframes,t.length===1&&(t[1]=t[0]),i=m.duration,o=m.times,s=m.ease,a="keyframes"}const p=q4(l.owner.current,c,t,{...this.options,duration:i,times:o,ease:s});return p.startTime=d??this.calcStartTime(),this.pendingTimeline?(Fh(p,this.pendingTimeline),this.pendingTimeline=void 0):p.onfinish=()=>{const{onComplete:h}=this.options;l.set(Aa(t,this.options,n)),h&&h(),this.cancel(),this.resolveFinishedPromise()},{animation:p,duration:i,times:o,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return Vt(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return Vt(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=bt(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Re;const{animation:r}=n;Fh(r,t)}return Re}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:o,ease:s,times:a}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:d,onComplete:p,element:h,...v}=this.options,y=new xd({...v,keyframes:r,duration:i,type:o,ease:s,times:a,isGenerator:!0}),w=bt(this.time);c.setWithVelocity(y.sample(w-Qs).value,y.sample(w).value,Qs)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:o,damping:s,type:a}=t;return Z4()&&r&&G4.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&o!=="mirror"&&s!==0&&a!=="inertia"}}const rC=vd(()=>window.ScrollTimeline!==void 0);class iC{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>rC()&&i.attachTimeline?i.attachTimeline(t):n(i));return()=>{r.forEach((i,o)=>{i&&i(),this.animations[o].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function oC({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:l,elapsed:c,...d}){return!!Object.keys(d).length}const yd=(e,t,n,r={},i,o)=>s=>{const a=od(r,e)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-bt(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-c,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};oC(a)||(d={...d,...j5(e,d)}),d.duration&&(d.duration=bt(d.duration)),d.repeatDelay&&(d.repeatDelay=bt(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(p=!0)),p&&!o&&t.get()!==void 0){const h=Aa(d.keyframes,a);if(h!==void 0)return H.update(()=>{d.onUpdate(h),d.onComplete()}),new iC([])}return!o&&Bh.supports(d)?new Bh(d):new xd(d)},sC=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),aC=e=>Du(e)?e[e.length-1]||0:e;function wd(e,t){e.indexOf(t)===-1&&e.push(t)}function Sd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Cd{constructor(){this.subscriptions=[]}add(t){return wd(this.subscriptions,t),()=>Sd(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Uh=30,lC=e=>!isNaN(parseFloat(e));class uC{constructor(t,n={}){this.version="11.11.11",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const o=Et.now();this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Et.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=lC(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Cd);const r=this.events[t].add(n);return t==="change"?()=>{r(),H.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Uh)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Uh);return Ax(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function lo(e,t){return new uC(e,t)}function cC(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,lo(n))}function jd(e,t){const n=ja(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=aC(o[s]);cC(e,s,a)}}const Ad=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),dC="framerAppearId",zx="data-"+Ad(dC);function Dx(e){return e.props[zx]}const Le=e=>!!(e&&e.getVelocity);function pC(e){return!!(Le(e)&&e.add)}function Uu(e,t){const n=e.getValue("willChange");if(pC(n))return n.add(t)}function hC({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function Nx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var o;let{transition:s=e.getDefaultTransition(),transitionEnd:a,...l}=t;r&&(s=r);const c=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const p in l){const h=e.getValue(p,(o=e.latestValues[p])!==null&&o!==void 0?o:null),v=l[p];if(v===void 0||d&&hC(d,p))continue;const y={delay:n,...od(s||{},p)};let w=!1;if(window.MotionHandoffAnimation){const m=Dx(e);if(m){const f=window.MotionHandoffAnimation(m,p,H);f!==null&&(y.startTime=f,w=!0)}}Uu(e,p),h.start(yd(p,h,v,e.shouldReduceMotion&&ir.has(p)?{type:!1}:y,e,w));const S=h.animation;S&&c.push(S)}return a&&Promise.all(c).then(()=>{H.update(()=>{a&&jd(e,a)})}),c}function Wu(e,t,n={}){var r;const i=ja(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(Nx(e,i,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:h}=o;return fC(e,t,d+c,p,h,n)}:()=>Promise.resolve(),{when:l}=o;if(l){const[c,d]=l==="beforeChildren"?[s,a]:[a,s];return c().then(()=>d())}else return Promise.all([s(),a(n.delay)])}function fC(e,t,n=0,r=0,i=1,o){const s=[],a=(e.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(e.variantChildren).sort(mC).forEach((c,d)=>{c.notify("AnimationStart",t),s.push(Wu(c,t,{...o,delay:n+l(d)}).then(()=>c.notify("AnimationComplete",t)))}),Promise.all(s)}function mC(e,t){return e.sortNodePosition(t)}function Mx(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Wu(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Wu(e,t,n);else{const i=typeof t=="function"?ja(e,t,n.custom):t;r=Promise.all(Nx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const gC=id.length;function Ix(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ix(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<gC;n++){const r=id[n],i=e.props[r];(oo(i)||i===!1)&&(t[r]=i)}return t}const xC=[...rd].reverse(),vC=rd.length;function yC(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Mx(e,n,r)))}function wC(e){let t=yC(e),n=Wh(),r=!0;const i=l=>(c,d)=>{var p;const h=ja(e,d,l==="exit"?(p=e.presenceContext)===null||p===void 0?void 0:p.custom:void 0);if(h){const{transition:v,transitionEnd:y,...w}=h;c={...c,...w,...y}}return c};function o(l){t=l(e)}function s(l){const{props:c}=e,d=Ix(e.parent)||{},p=[],h=new Set;let v={},y=1/0;for(let S=0;S<vC;S++){const m=xC[S],f=n[m],x=c[m]!==void 0?c[m]:d[m],C=oo(x),A=m===l?f.isActive:null;A===!1&&(y=S);let k=x===d[m]&&x!==c[m]&&C;if(k&&r&&e.manuallyAnimateOnMount&&(k=!1),f.protectedKeys={...v},!f.isActive&&A===null||!x&&!f.prevProp||Ca(x)||typeof x=="boolean")continue;const P=SC(f.prevProp,x);let $=P||m===l&&f.isActive&&!k&&C||S>y&&C,M=!1;const z=Array.isArray(x)?x:[x];let Y=z.reduce(i(m),{});A===!1&&(Y={});const{prevResolvedValues:ke={}}=f,tt={...ke,...Y},We=q=>{$=!0,h.has(q)&&(M=!0,h.delete(q)),f.needsAnimating[q]=!0;const L=e.getValue(q);L&&(L.liveStyle=!1)};for(const q in tt){const L=Y[q],_=ke[q];if(v.hasOwnProperty(q))continue;let N=!1;Du(L)&&Du(_)?N=!qg(L,_):N=L!==_,N?L!=null?We(q):h.add(q):L!==void 0&&h.has(q)?We(q):f.protectedKeys[q]=!0}f.prevProp=x,f.prevResolvedValues=Y,f.isActive&&(v={...v,...Y}),r&&e.blockInitialAnimation&&($=!1),$&&(!(k&&P)||M)&&p.push(...z.map(q=>({animation:q,options:{type:m}})))}if(h.size){const S={};h.forEach(m=>{const f=e.getBaseTarget(m),x=e.getValue(m);x&&(x.liveStyle=!0),S[m]=f??null}),p.push({animation:S})}let w=!!p.length;return r&&(c.initial===!1||c.initial===c.animate)&&!e.manuallyAnimateOnMount&&(w=!1),r=!1,w?t(p):Promise.resolve()}function a(l,c){var d;if(n[l].isActive===c)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var v;return(v=h.animationState)===null||v===void 0?void 0:v.setActive(l,c)}),n[l].isActive=c;const p=s(l);for(const h in n)n[h].protectedKeys={};return p}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Wh(),r=!0}}}function SC(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!qg(t,e):!1}function zn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Wh(){return{animate:zn(!0),whileInView:zn(),whileHover:zn(),whileTap:zn(),whileDrag:zn(),whileFocus:zn(),exit:zn()}}class Tn{constructor(t){this.isMounted=!1,this.node=t}update(){}}class CC extends Tn{constructor(t){super(t),t.animationState||(t.animationState=wC(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Ca(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let jC=0;class AC extends Tn{constructor(){super(...arguments),this.id=jC++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const kC={animation:{Feature:CC},exit:{Feature:AC}},Ox=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function ka(e,t="page"){return{point:{x:e[`${t}X`],y:e[`${t}Y`]}}}const PC=e=>t=>Ox(t)&&e(t,ka(t));function It(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Bt(e,t,n,r){return It(e,t,PC(n),r)}const Hh=(e,t)=>Math.abs(e-t);function $C(e,t){const n=Hh(e.x,t.x),r=Hh(e.y,t.y);return Math.sqrt(n**2+r**2)}class bx{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:o=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=vl(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,v=$C(p.offset,{x:0,y:0})>=3;if(!h&&!v)return;const{point:y}=p,{timestamp:w}=Ce;this.history.push({...y,timestamp:w});const{onStart:S,onMove:m}=this.handlers;h||(S&&S(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),m&&m(this.lastMoveEvent,p)},this.handlePointerMove=(p,h)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=xl(h,this.transformPagePoint),H.update(this.updatePoint,!0)},this.handlePointerUp=(p,h)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=vl(p.type==="pointercancel"?this.lastMoveEventInfo:xl(h,this.transformPagePoint),this.history);this.startEvent&&v&&v(p,S),y&&y(p,S)},!Ox(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const s=ka(t),a=xl(s,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ce;this.history=[{...l,timestamp:c}];const{onSessionStart:d}=n;d&&d(t,vl(a,this.history)),this.removeListeners=Ft(Bt(this.contextWindow,"pointermove",this.handlePointerMove),Bt(this.contextWindow,"pointerup",this.handlePointerUp),Bt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Sn(this.updatePoint)}}function xl(e,t){return t?{point:t(e.point)}:e}function Gh(e,t){return{x:e.x-t.x,y:e.y-t.y}}function vl({point:e},t){return{point:e,delta:Gh(e,Vx(t)),offset:Gh(e,EC(t)),velocity:TC(t,.1)}}function EC(e){return e[0]}function Vx(e){return e[e.length-1]}function TC(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Vx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>bt(t)));)n--;if(!r)return{x:0,y:0};const o=Vt(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Fx(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Kh=Fx("dragHorizontal"),Qh=Fx("dragVertical");function Bx(e){let t=!1;if(e==="y")t=Qh();else if(e==="x")t=Kh();else{const n=Kh(),r=Qh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Ux(){const e=Bx(!0);return e?(e(),!1):!0}function Ar(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const Wx=1e-4,LC=1-Wx,RC=1+Wx,Hx=.01,_C=0-Hx,zC=0+Hx;function qe(e){return e.max-e.min}function DC(e,t,n){return Math.abs(e-t)<=n}function Xh(e,t,n,r=.5){e.origin=r,e.originPoint=ie(t.min,t.max,e.origin),e.scale=qe(n)/qe(t),e.translate=ie(n.min,n.max,e.origin)-e.originPoint,(e.scale>=LC&&e.scale<=RC||isNaN(e.scale))&&(e.scale=1),(e.translate>=_C&&e.translate<=zC||isNaN(e.translate))&&(e.translate=0)}function Ni(e,t,n,r){Xh(e.x,t.x,n.x,r?r.originX:void 0),Xh(e.y,t.y,n.y,r?r.originY:void 0)}function Yh(e,t,n){e.min=n.min+t.min,e.max=e.min+qe(t)}function NC(e,t,n){Yh(e.x,t.x,n.x),Yh(e.y,t.y,n.y)}function qh(e,t,n){e.min=t.min-n.min,e.max=e.min+qe(t)}function Mi(e,t,n){qh(e.x,t.x,n.x),qh(e.y,t.y,n.y)}function MC(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?ie(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?ie(n,e,r.max):Math.min(e,n)),e}function Zh(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function IC(e,{top:t,left:n,bottom:r,right:i}){return{x:Zh(e.x,n,i),y:Zh(e.y,t,r)}}function Jh(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function OC(e,t){return{x:Jh(e.x,t.x),y:Jh(e.y,t.y)}}function bC(e,t){let n=.5;const r=qe(e),i=qe(t);return i>r?n=Kr(t.min,t.max-r,e.min):r>i&&(n=Kr(e.min,e.max-i,t.min)),Cn(0,1,n)}function VC(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Hu=.35;function FC(e=Hu){return e===!1?e=0:e===!0&&(e=Hu),{x:ef(e,"left","right"),y:ef(e,"top","bottom")}}function ef(e,t,n){return{min:tf(e,t),max:tf(e,n)}}function tf(e,t){return typeof e=="number"?e:e[t]||0}const nf=()=>({translate:0,scale:1,origin:0,originPoint:0}),kr=()=>({x:nf(),y:nf()}),rf=()=>({min:0,max:0}),le=()=>({x:rf(),y:rf()});function rt(e){return[e("x"),e("y")]}function Gx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function BC({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function UC(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function yl(e){return e===void 0||e===1}function Gu({scale:e,scaleX:t,scaleY:n}){return!yl(e)||!yl(t)||!yl(n)}function Mn(e){return Gu(e)||Kx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Kx(e){return of(e.x)||of(e.y)}function of(e){return e&&e!=="0%"}function Xs(e,t,n){const r=e-n,i=t*r;return n+i}function sf(e,t,n,r,i){return i!==void 0&&(e=Xs(e,i,r)),Xs(e,n,r)+t}function Ku(e,t=0,n=1,r,i){e.min=sf(e.min,t,n,r,i),e.max=sf(e.max,t,n,r,i)}function Qx(e,{x:t,y:n}){Ku(e.x,t.translate,t.scale,t.originPoint),Ku(e.y,n.translate,n.scale,n.originPoint)}const af=.999999999999,lf=1.0000000000001;function WC(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:l}=o.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&$r(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Qx(e,s)),r&&Mn(o.latestValues)&&$r(e,o.latestValues))}t.x<lf&&t.x>af&&(t.x=1),t.y<lf&&t.y>af&&(t.y=1)}function Pr(e,t){e.min=e.min+t,e.max=e.max+t}function uf(e,t,n,r,i=.5){const o=ie(e.min,e.max,i);Ku(e,t,n,o,r)}function $r(e,t){uf(e.x,t.x,t.scaleX,t.scale,t.originX),uf(e.y,t.y,t.scaleY,t.scale,t.originY)}function Xx(e,t){return Gx(UC(e.getBoundingClientRect(),t))}function HC(e,t,n){const r=Xx(e,n),{scroll:i}=t;return i&&(Pr(r.x,i.offset.x),Pr(r.y,i.offset.y)),r}const Yx=({current:e})=>e?e.ownerDocument.defaultView:null,GC=new WeakMap;class KC{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=le(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:p}=this.getProps();p?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ka(d,"page").point)},o=(d,p)=>{const{drag:h,dragPropagation:v,onDragStart:y}=this.getProps();if(h&&!v&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Bx(h),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),rt(S=>{let m=this.getAxisMotionValue(S).get()||0;if($t.test(m)){const{projection:f}=this.visualElement;if(f&&f.layout){const x=f.layout.layoutBox[S];x&&(m=qe(x)*(parseFloat(m)/100))}}this.originPoint[S]=m}),y&&H.postRender(()=>y(d,p)),Uu(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},s=(d,p)=>{const{dragPropagation:h,dragDirectionLock:v,onDirectionLock:y,onDrag:w}=this.getProps();if(!h&&!this.openGlobalLock)return;const{offset:S}=p;if(v&&this.currentDirection===null){this.currentDirection=QC(S),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",p.point,S),this.updateAxis("y",p.point,S),this.visualElement.render(),w&&w(d,p)},a=(d,p)=>this.stop(d,p),l=()=>rt(d=>{var p;return this.getAnimationState(d)==="paused"&&((p=this.getAxisMotionValue(d).animation)===null||p===void 0?void 0:p.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new bx(t,{onSessionStart:i,onStart:o,onMove:s,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:Yx(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&H.postRender(()=>o(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Bo(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=MC(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,o=this.constraints;n&&Ar(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=IC(i.layoutBox,n):this.constraints=!1,this.elastic=FC(r),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&rt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=VC(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ar(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=HC(r,i.root,this.visualElement.getTransformPagePoint());let s=OC(i.layout.layoutBox,o);if(n){const a=n(BC(s));this.hasMutatedConstraints=!!a,a&&(s=Gx(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=rt(d=>{if(!Bo(d,n,this.currentDirection))return;let p=l&&l[d]||{};s&&(p={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...o,...p};return this.startAxisValueAnimation(d,y)});return Promise.all(c).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Uu(this.visualElement,t),r.start(yd(t,r,0,n,this.visualElement,!1))}stopAnimation(){rt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){rt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){rt(n=>{const{drag:r}=this.getProps();if(!Bo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-ie(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ar(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};rt(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const l=a.get();i[s]=bC({min:l,max:l},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),rt(s=>{if(!Bo(s,t,null))return;const a=this.getAxisMotionValue(s),{min:l,max:c}=this.constraints[s];a.set(ie(l,c,i[s]))})}addListeners(){if(!this.visualElement.current)return;GC.set(this.visualElement,this);const t=this.visualElement.current,n=Bt(t,"pointerdown",l=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Ar(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),H.read(r);const s=It(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(rt(d=>{const p=this.getAxisMotionValue(d);p&&(this.originPoint[d]+=l[d].translate,p.set(p.get()+l[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Hu,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Bo(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function QC(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class XC extends Tn{constructor(t){super(t),this.removeGroupControls=Re,this.removeListeners=Re,this.controls=new KC(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Re}unmount(){this.removeGroupControls(),this.removeListeners()}}const cf=e=>(t,n)=>{e&&H.postRender(()=>e(t,n))};class YC extends Tn{constructor(){super(...arguments),this.removePointerDownListener=Re}onPointerDown(t){this.session=new bx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:cf(t),onStart:cf(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&H.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Bt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Pa=g.createContext(null);function qC(){const e=g.useContext(Pa);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=g.useId();g.useEffect(()=>r(i),[]);const o=g.useCallback(()=>n&&n(i),[i,n]);return!t&&n?[!1,o]:[!0]}const kd=g.createContext({}),qx=g.createContext({}),us={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function df(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=df(e,t.target.x),r=df(e,t.target.y);return`${n}% ${r}%`}},ZC={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=jn.parse(e);if(i.length>5)return r;const o=jn.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,l=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=l;const c=ie(a,l,.5);return typeof i[2+s]=="number"&&(i[2+s]/=c),typeof i[3+s]=="number"&&(i[3+s]/=c),o(i)}},Ys={};function JC(e){Object.assign(Ys,e)}const{schedule:Pd,cancel:xT}=Zg(queueMicrotask,!1);class e3 extends g.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;JC(t3),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),us.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,s=r.projection;return s&&(s.isPresent=o,i||t.layoutDependency!==n||n===void 0?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||H.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Pd.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Zx(e){const[t,n]=qC(),r=g.useContext(kd);return u.jsx(e3,{...e,layoutGroup:r,switchLayoutGroup:g.useContext(qx),isPresent:t,safeToRemove:n})}const t3={borderRadius:{...hi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hi,borderTopRightRadius:hi,borderBottomLeftRadius:hi,borderBottomRightRadius:hi,boxShadow:ZC},Jx=["TopLeft","TopRight","BottomLeft","BottomRight"],n3=Jx.length,pf=e=>typeof e=="string"?parseFloat(e):e,hf=e=>typeof e=="number"||D.test(e);function r3(e,t,n,r,i,o){i?(e.opacity=ie(0,n.opacity!==void 0?n.opacity:1,i3(r)),e.opacityExit=ie(t.opacity!==void 0?t.opacity:1,0,o3(r))):o&&(e.opacity=ie(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let s=0;s<n3;s++){const a=`border${Jx[s]}Radius`;let l=ff(t,a),c=ff(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||hf(l)===hf(c)?(e[a]=Math.max(ie(pf(l),pf(c),r),0),($t.test(c)||$t.test(l))&&(e[a]+="%")):e[a]=c}(t.rotate||n.rotate)&&(e.rotate=ie(t.rotate||0,n.rotate||0,r))}function ff(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const i3=e1(0,.5,ox),o3=e1(.5,.95,Re);function e1(e,t,n){return r=>r<e?0:r>t?1:n(Kr(e,t,r))}function mf(e,t){e.min=t.min,e.max=t.max}function nt(e,t){mf(e.x,t.x),mf(e.y,t.y)}function gf(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function xf(e,t,n,r,i){return e-=t,e=Xs(e,1/n,r),i!==void 0&&(e=Xs(e,1/i,r)),e}function s3(e,t=0,n=1,r=.5,i,o=e,s=e){if($t.test(t)&&(t=parseFloat(t),t=ie(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=ie(o.min,o.max,r);e===o&&(a-=t),e.min=xf(e.min,t,n,a,i),e.max=xf(e.max,t,n,a,i)}function vf(e,t,[n,r,i],o,s){s3(e,t[n],t[r],t[i],t.scale,o,s)}const a3=["x","scaleX","originX"],l3=["y","scaleY","originY"];function yf(e,t,n,r){vf(e.x,t,a3,n?n.x:void 0,r?r.x:void 0),vf(e.y,t,l3,n?n.y:void 0,r?r.y:void 0)}function wf(e){return e.translate===0&&e.scale===1}function t1(e){return wf(e.x)&&wf(e.y)}function Sf(e,t){return e.min===t.min&&e.max===t.max}function u3(e,t){return Sf(e.x,t.x)&&Sf(e.y,t.y)}function Cf(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function n1(e,t){return Cf(e.x,t.x)&&Cf(e.y,t.y)}function jf(e){return qe(e.x)/qe(e.y)}function Af(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class c3{constructor(){this.members=[]}add(t){wd(this.members,t),t.scheduleRender()}remove(t){if(Sd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function d3(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:c,rotate:d,rotateX:p,rotateY:h,skewX:v,skewY:y}=n;c&&(r=`perspective(${c}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotateX(${p}deg) `),h&&(r+=`rotateY(${h}deg) `),v&&(r+=`skewX(${v}deg) `),y&&(r+=`skewY(${y}deg) `)}const a=e.x.scale*t.x,l=e.y.scale*t.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const p3=(e,t)=>e.depth-t.depth;class h3{constructor(){this.children=[],this.isDirty=!1}add(t){wd(this.children,t),this.isDirty=!0}remove(t){Sd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(p3),this.isDirty=!1,this.children.forEach(t)}}function cs(e){const t=Le(e)?e.get():e;return sC(t)?t.toValue():t}function f3(e,t){const n=Et.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Sn(r),e(o-t))};return H.read(r,!0),()=>Sn(r)}function m3(e){return e instanceof SVGElement&&e.tagName!=="svg"}function g3(e,t,n){const r=Le(e)?e:lo(e);return r.start(yd("",r,t,n)),r.animation}const In={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ji=typeof window<"u"&&window.MotionDebug!==void 0,wl=["","X","Y","Z"],x3={visibility:"hidden"},kf=1e3;let v3=0;function Sl(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function r1(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Dx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",H,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&r1(r)}function i1({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=v3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ji&&(In.totalNodes=In.resolvedTargetDeltas=In.recalculatedProjection=0),this.nodes.forEach(S3),this.nodes.forEach(P3),this.nodes.forEach($3),this.nodes.forEach(C3),ji&&window.MotionDebug.record(In)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new h3)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Cd),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const l=this.eventHandlers.get(s);l&&l.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=m3(s),this.instance=s;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),e){let p;const h=()=>this.root.updateBlockedByResize=!1;e(s,()=>{this.root.updateBlockedByResize=!0,p&&p(),p=f3(h,250),us.hasAnimatedSinceResize&&(us.hasAnimatedSinceResize=!1,this.nodes.forEach($f))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h,hasRelativeTargetChanged:v,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const w=this.options.transition||d.getDefaultTransition()||_3,{onLayoutAnimationStart:S,onLayoutAnimationComplete:m}=d.getProps(),f=!this.targetLayout||!n1(this.targetLayout,y)||v,x=!h&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||h&&(f||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(p,x);const C={...od(w,"layout"),onPlay:S,onComplete:m};(d.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else h||$f(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Sn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(E3),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&r1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pf);return}this.isUpdating||this.nodes.forEach(A3),this.isUpdating=!1,this.nodes.forEach(k3),this.nodes.forEach(y3),this.nodes.forEach(w3),this.clearAllSnapshots();const a=Et.now();Ce.delta=Cn(0,1e3/60,a-Ce.timestamp),Ce.timestamp=a,Ce.isProcessing=!0,pl.update.process(Ce),pl.preRender.process(Ce),pl.render.process(Ce),Ce.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Pd.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(j3),this.sharedNodes.forEach(T3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,H.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){H.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=le(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!t1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,d=c!==this.prevTransformTemplateValue;s&&(a||Mn(this.latestValues)||d)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return s&&(l=this.removeTransform(l)),z3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var s;const{visualElement:a}=this.options;if(!a)return le();const l=a.measureViewportBox();if(!(((s=this.scroll)===null||s===void 0?void 0:s.wasRoot)||this.path.some(D3))){const{scroll:d}=this.root;d&&(Pr(l.x,d.offset.x),Pr(l.y,d.offset.y))}return l}removeElementScroll(s){var a;const l=le();if(nt(l,s),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:p,options:h}=d;d!==this.root&&p&&h.layoutScroll&&(p.wasRoot&&nt(l,s),Pr(l.x,p.offset.x),Pr(l.y,p.offset.y))}return l}applyTransform(s,a=!1){const l=le();nt(l,s);for(let c=0;c<this.path.length;c++){const d=this.path[c];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&$r(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Mn(d.latestValues)&&$r(l,d.latestValues)}return Mn(this.latestValues)&&$r(l,this.latestValues),l}removeTransform(s){const a=le();nt(a,s);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Mn(c.latestValues))continue;Gu(c.latestValues)&&c.updateSnapshot();const d=le(),p=c.measurePageBox();nt(d,p),yf(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,d)}return Mn(this.latestValues)&&yf(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ce.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:h}=this.options;if(!(!this.layout||!(p||h))){if(this.resolvedRelativeTargetAt=Ce.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Mi(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=le(),this.targetWithTransforms=le()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),NC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nt(this.target,this.layout.layoutBox),Qx(this.target,this.targetDelta)):nt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=le(),this.relativeTargetOrigin=le(),Mi(this.relativeTargetOrigin,this.target,v.target),nt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ji&&In.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gu(this.parent.latestValues)||Kx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var s;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((s=this.parent)===null||s===void 0)&&s.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ce.timestamp&&(c=!1),c)return;const{layout:d,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||p))return;nt(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,v=this.treeScale.y;WC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=le());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(gf(this.prevProjectionDelta.x,this.projectionDelta.x),gf(this.prevProjectionDelta.y,this.projectionDelta.y)),Ni(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==v||!Af(this.projectionDelta.x,this.prevProjectionDelta.x)||!Af(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ji&&In.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),s){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=kr(),this.projectionDelta=kr(),this.projectionDeltaWithTransform=kr()}setAnimationOrigin(s,a=!1){const l=this.snapshot,c=l?l.latestValues:{},d={...this.latestValues},p=kr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=le(),v=l?l.source:void 0,y=this.layout?this.layout.source:void 0,w=v!==y,S=this.getStack(),m=!S||S.members.length<=1,f=!!(w&&!m&&this.options.crossfade===!0&&!this.path.some(R3));this.animationProgress=0;let x;this.mixTargetDelta=C=>{const A=C/1e3;Ef(p.x,s.x,A),Ef(p.y,s.y,A),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Mi(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),L3(this.relativeTarget,this.relativeTargetOrigin,h,A),x&&u3(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=le()),nt(x,this.relativeTarget)),w&&(this.animationValues=d,r3(d,c,this.latestValues,A,f,m)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=A},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Sn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=H.update(()=>{us.hasAnimatedSinceResize=!0,this.currentAnimation=g3(0,kf,{...s,onUpdate:a=>{this.mixTargetDelta(a),s.onUpdate&&s.onUpdate(a)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(kf),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:d}=s;if(!(!a||!l||!c)){if(this!==s&&this.layout&&c&&o1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||le();const p=qe(this.layout.layoutBox.x);l.x.min=s.target.x.min,l.x.max=l.x.min+p;const h=qe(this.layout.layoutBox.y);l.y.min=s.target.y.min,l.y.max=l.y.min+h}nt(a,l),$r(a,d),Ni(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new c3),this.sharedNodes.get(s).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var s;const{layoutId:a}=this.options;return a?((s=this.getStack())===null||s===void 0?void 0:s.lead)||this:this}getPrevLead(){var s;const{layoutId:a}=this.options;return a?(s=this.getStack())===null||s===void 0?void 0:s.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:l}=s;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Sl("z",s,c,this.animationValues);for(let d=0;d<wl.length;d++)Sl(`rotate${wl[d]}`,s,c,this.animationValues),Sl(`skew${wl[d]}`,s,c,this.animationValues);s.render();for(const d in c)s.setStaticValue(d,c[d]),this.animationValues&&(this.animationValues[d]=c[d]);s.scheduleRender()}getProjectionStyles(s){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return x3;const c={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=cs(s==null?void 0:s.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const w={};return this.options.layoutId&&(w.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,w.pointerEvents=cs(s==null?void 0:s.pointerEvents)||""),this.hasProjected&&!Mn(this.latestValues)&&(w.transform=d?d({},""):"none",this.hasProjected=!1),w}const h=p.animationValues||p.latestValues;this.applyTransformsToTarget(),c.transform=d3(this.projectionDeltaWithTransform,this.treeScale,h),d&&(c.transform=d(h,c.transform));const{x:v,y}=this.projectionDelta;c.transformOrigin=`${v.origin*100}% ${y.origin*100}% 0`,p.animationValues?c.opacity=p===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=p===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const w in Ys){if(h[w]===void 0)continue;const{correct:S,applyTo:m}=Ys[w],f=c.transform==="none"?h[w]:S(h[w],p);if(m){const x=m.length;for(let C=0;C<x;C++)c[m[C]]=f}else c[w]=f}return this.options.layoutId&&(c.pointerEvents=p===this?cs(s==null?void 0:s.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Pf),this.root.sharedNodes.clear()}}}function y3(e){e.updateLayout()}function w3(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=n.source!==e.layout.source;o==="size"?rt(p=>{const h=s?n.measuredBox[p]:n.layoutBox[p],v=qe(h);h.min=r[p].min,h.max=h.min+v}):o1(o,n.layoutBox,r)&&rt(p=>{const h=s?n.measuredBox[p]:n.layoutBox[p],v=qe(r[p]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+v)});const a=kr();Ni(a,r,n.layoutBox);const l=kr();s?Ni(l,e.applyTransform(i,!0),n.measuredBox):Ni(l,r,n.layoutBox);const c=!t1(a);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:h,layout:v}=p;if(h&&v){const y=le();Mi(y,n.layoutBox,h.layoutBox);const w=le();Mi(w,r,v.layoutBox),n1(y,w)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=w,e.relativeTargetOrigin=y,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function S3(e){ji&&In.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function C3(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function j3(e){e.clearSnapshot()}function Pf(e){e.clearMeasurements()}function A3(e){e.isLayoutDirty=!1}function k3(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $f(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function P3(e){e.resolveTargetDelta()}function $3(e){e.calcProjection()}function E3(e){e.resetSkewAndRotation()}function T3(e){e.removeLeadSnapshot()}function Ef(e,t,n){e.translate=ie(t.translate,0,n),e.scale=ie(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Tf(e,t,n,r){e.min=ie(t.min,n.min,r),e.max=ie(t.max,n.max,r)}function L3(e,t,n,r){Tf(e.x,t.x,n.x,r),Tf(e.y,t.y,n.y,r)}function R3(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const _3={duration:.45,ease:[.4,0,.1,1]},Lf=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Rf=Lf("applewebkit/")&&!Lf("chrome/")?Math.round:Re;function _f(e){e.min=Rf(e.min),e.max=Rf(e.max)}function z3(e){_f(e.x),_f(e.y)}function o1(e,t,n){return e==="position"||e==="preserve-aspect"&&!DC(jf(t),jf(n),.2)}function D3(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const N3=i1({attachResizeListener:(e,t)=>It(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Cl={current:void 0},s1=i1({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Cl.current){const e=new N3({});e.mount(window),e.setOptions({layoutScroll:!0}),Cl.current=e}return Cl.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),M3={pan:{Feature:YC},drag:{Feature:XC,ProjectionNode:s1,MeasureLayout:Zx}};function zf(e,t){const n=t?"pointerenter":"pointerleave",r=t?"onHoverStart":"onHoverEnd",i=(o,s)=>{if(o.pointerType==="touch"||Ux())return;const a=e.getProps();e.animationState&&a.whileHover&&e.animationState.setActive("whileHover",t);const l=a[r];l&&H.postRender(()=>l(o,s))};return Bt(e.current,n,i,{passive:!e.getProps()[r]})}class I3 extends Tn{mount(){this.unmount=Ft(zf(this.node,!0),zf(this.node,!1))}unmount(){}}class O3 extends Tn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ft(It(this.node.current,"focus",()=>this.onFocus()),It(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const a1=(e,t)=>t?e===t?!0:a1(e,t.parentElement):!1;function jl(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,ka(n))}class b3 extends Tn{constructor(){super(...arguments),this.removeStartListeners=Re,this.removeEndListeners=Re,this.removeAccessibleListeners=Re,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),o=Bt(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:d,globalTapTarget:p}=this.node.getProps(),h=!p&&!a1(this.node.current,a.target)?d:c;h&&H.update(()=>h(a,l))},{passive:!(r.onTap||r.onPointerUp)}),s=Bt(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Ft(o,s),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=o=>{if(o.key!=="Enter"||this.isPressing)return;const s=a=>{a.key!=="Enter"||!this.checkPressEnd()||jl("up",(l,c)=>{const{onTap:d}=this.node.getProps();d&&H.postRender(()=>d(l,c))})};this.removeEndListeners(),this.removeEndListeners=It(this.node.current,"keyup",s),jl("down",(a,l)=>{this.startPress(a,l)})},n=It(this.node.current,"keydown",t),r=()=>{this.isPressing&&jl("cancel",(o,s)=>this.cancelPress(o,s))},i=It(this.node.current,"blur",r);this.removeAccessibleListeners=Ft(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&H.postRender(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Ux()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&H.postRender(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Bt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=It(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ft(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Qu=new WeakMap,Al=new WeakMap,V3=e=>{const t=Qu.get(e.target);t&&t(e)},F3=e=>{e.forEach(V3)};function B3({root:e,...t}){const n=e||document;Al.has(n)||Al.set(n,{});const r=Al.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(F3,{root:e,...t})),r[i]}function U3(e,t,n){const r=B3(t);return Qu.set(e,n),r.observe(e),()=>{Qu.delete(e),r.unobserve(e)}}const W3={some:0,all:1};class H3 extends Tn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:W3[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,o&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:d,onViewportLeave:p}=this.node.getProps(),h=c?d:p;h&&h(l)};return U3(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(G3(t,n))&&this.startObserver()}unmount(){}}function G3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const K3={inView:{Feature:H3},tap:{Feature:b3},focus:{Feature:O3},hover:{Feature:I3}},Q3={layout:{ProjectionNode:s1,MeasureLayout:Zx}},$d=g.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$a=g.createContext({}),Ed=typeof window<"u",Td=Ed?g.useLayoutEffect:g.useEffect,l1=g.createContext({strict:!1});function X3(e,t,n,r,i){var o,s;const{visualElement:a}=g.useContext($a),l=g.useContext(l1),c=g.useContext(Pa),d=g.useContext($d).reducedMotion,p=g.useRef();r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d}));const h=p.current,v=g.useContext(qx);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&Y3(p.current,n,i,v);const y=g.useRef(!1);g.useInsertionEffect(()=>{h&&y.current&&h.update(n,c)});const w=n[zx],S=g.useRef(!!w&&!(!((o=window.MotionHandoffIsComplete)===null||o===void 0)&&o.call(window,w))&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,w)));return Td(()=>{h&&(y.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),Pd.render(h.render),S.current&&h.animationState&&h.animationState.animateChanges())}),g.useEffect(()=>{h&&(!S.current&&h.animationState&&h.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var m;(m=window.MotionHandoffMarkAsComplete)===null||m===void 0||m.call(window,w)}),S.current=!1))}),h}function Y3(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:l,layoutRoot:c}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:u1(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&Ar(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function u1(e){if(e)return e.options.allowProjection!==!1?e.projection:u1(e.parent)}function q3(e,t,n){return g.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Ar(n)&&(n.current=r))},[t])}function Ea(e){return Ca(e.animate)||id.some(t=>oo(e[t]))}function c1(e){return!!(Ea(e)||e.variants)}function Z3(e,t){if(Ea(e)){const{initial:n,animate:r}=e;return{initial:n===!1||oo(n)?n:void 0,animate:oo(r)?r:void 0}}return e.inherit!==!1?t:{}}function J3(e){const{initial:t,animate:n}=Z3(e,g.useContext($a));return g.useMemo(()=>({initial:t,animate:n}),[Df(t),Df(n)])}function Df(e){return Array.isArray(e)?e.join(" "):e}const Nf={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qr={};for(const e in Nf)Qr[e]={isEnabled:t=>Nf[e].some(n=>!!t[n])};function ej(e){for(const t in e)Qr[t]={...Qr[t],...e[t]}}const tj=Symbol.for("motionComponentSymbol");function nj({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&ej(e);function o(a,l){let c;const d={...g.useContext($d),...a,layoutId:rj(a)},{isStatic:p}=d,h=J3(a),v=r(a,p);if(!p&&Ed){ij();const y=oj(d);c=y.MeasureLayout,h.visualElement=X3(i,v,d,t,y.ProjectionNode)}return u.jsxs($a.Provider,{value:h,children:[c&&h.visualElement?u.jsx(c,{visualElement:h.visualElement,...d}):null,n(i,a,q3(v,h.visualElement,l),v,p,h.visualElement)]})}const s=g.forwardRef(o);return s[tj]=i,s}function rj({layoutId:e}){const t=g.useContext(kd).id;return t&&e!==void 0?t+"-"+e:e}function ij(e,t){g.useContext(l1).strict}function oj(e){const{drag:t,layout:n}=Qr;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const sj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ld(e){return typeof e!="string"||e.includes("-")?!1:!!(sj.indexOf(e)>-1||/[A-Z]/u.test(e))}function d1(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const o in n)e.style.setProperty(o,n[o])}const p1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function h1(e,t,n,r){d1(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(p1.has(i)?i:Ad(i),t.attrs[i])}function f1(e,{layout:t,layoutId:n}){return ir.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ys[e]||e==="opacity")}function Rd(e,t,n){var r;const{style:i}=e,o={};for(const s in i)(Le(i[s])||t.style&&Le(t.style[s])||f1(s,e)||((r=n==null?void 0:n.getValue(s))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(o[s]=i[s]);return o}function m1(e,t,n){const r=Rd(e,t,n);for(const i in e)if(Le(e[i])||Le(t[i])){const o=go.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}function Ta(e){const t=g.useRef(null);return t.current===null&&(t.current=e()),t.current}function aj({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,o){const s={latestValues:lj(r,i,o,e),renderState:t()};return n&&(s.mount=a=>n(r,a,s)),s}const g1=e=>(t,n)=>{const r=g.useContext($a),i=g.useContext(Pa),o=()=>aj(e,t,r,i);return n?o():Ta(o)};function lj(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=cs(o[h]);let{initial:s,animate:a}=e;const l=Ea(e),c=c1(e);t&&c&&!l&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const p=d?a:s;if(p&&typeof p!="boolean"&&!Ca(p)){const h=Array.isArray(p)?p:[p];for(let v=0;v<h.length;v++){const y=nd(e,h[v]);if(y){const{transitionEnd:w,transition:S,...m}=y;for(const f in m){let x=m[f];if(Array.isArray(x)){const C=d?x.length-1:0;x=x[C]}x!==null&&(i[f]=x)}for(const f in w)i[f]=w[f]}}}return i}const _d=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),x1=()=>({..._d(),attrs:{}}),v1=(e,t)=>t&&typeof e=="number"?t.transform(e):e,uj={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},cj=go.length;function dj(e,t,n){let r="",i=!0;for(let o=0;o<cj;o++){const s=go[o],a=e[s];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(s.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=v1(a,pd[s]);if(!l){i=!1;const d=uj[s]||s;r+=`${d}(${c}) `}n&&(t[s]=c)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function zd(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const l in t){const c=t[l];if(ir.has(l)){s=!0;continue}else if(cx(l)){i[l]=c;continue}else{const d=v1(c,pd[l]);l.startsWith("origin")?(a=!0,o[l]=d):r[l]=d}}if(t.transform||(s||n?r.transform=dj(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:d=0}=o;r.transformOrigin=`${l} ${c} ${d}`}}function Mf(e,t,n){return typeof e=="string"?e:D.transform(t+n*e)}function pj(e,t,n){const r=Mf(t,e.x,e.width),i=Mf(n,e.y,e.height);return`${r} ${i}`}const hj={offset:"stroke-dashoffset",array:"stroke-dasharray"},fj={offset:"strokeDashoffset",array:"strokeDasharray"};function mj(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?hj:fj;e[o.offset]=D.transform(-r);const s=D.transform(t),a=D.transform(n);e[o.array]=`${s} ${a}`}function Dd(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:o,pathLength:s,pathSpacing:a=1,pathOffset:l=0,...c},d,p){if(zd(e,c,p),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:v,dimensions:y}=e;h.transform&&(y&&(v.transform=h.transform),delete h.transform),y&&(i!==void 0||o!==void 0||v.transform)&&(v.transformOrigin=pj(y,i!==void 0?i:.5,o!==void 0?o:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),s!==void 0&&mj(h,s,a,l,!1)}const Nd=e=>typeof e=="string"&&e.toLowerCase()==="svg",gj={useVisualState:g1({scrapeMotionValuesFromProps:m1,createRenderState:x1,onMount:(e,t,{renderState:n,latestValues:r})=>{H.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),H.render(()=>{Dd(n,r,Nd(t.tagName),e.transformTemplate),h1(t,n)})}})},xj={useVisualState:g1({scrapeMotionValuesFromProps:Rd,createRenderState:_d})};function y1(e,t,n){for(const r in t)!Le(t[r])&&!f1(r,n)&&(e[r]=t[r])}function vj({transformTemplate:e},t){return g.useMemo(()=>{const n=_d();return zd(n,t,e),Object.assign({},n.vars,n.style)},[t])}function yj(e,t){const n=e.style||{},r={};return y1(r,n,e),Object.assign(r,vj(e,t)),r}function wj(e,t){const n={},r=yj(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Sj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function qs(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Sj.has(e)}let w1=e=>!qs(e);function Cj(e){e&&(w1=t=>t.startsWith("on")?!qs(t):e(t))}try{Cj(require("@emotion/is-prop-valid").default)}catch{}function jj(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(w1(i)||n===!0&&qs(i)||!t&&!qs(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Aj(e,t,n,r){const i=g.useMemo(()=>{const o=x1();return Dd(o,t,Nd(r),e.transformTemplate),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};y1(o,e.style,e),i.style={...o,...i.style}}return i}function kj(e=!1){return(n,r,i,{latestValues:o},s)=>{const l=(Ld(n)?Aj:wj)(r,o,s,n),c=jj(r,typeof n=="string",e),d=n!==g.Fragment?{...c,...l,ref:i}:{},{children:p}=r,h=g.useMemo(()=>Le(p)?p.get():p,[p]);return g.createElement(n,{...d,children:h})}}function Pj(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const s={...Ld(r)?gj:xj,preloadedFeatures:e,useRender:kj(i),createVisualElement:t,Component:r};return nj(s)}}const Xu={current:null},S1={current:!1};function $j(){if(S1.current=!0,!!Ed)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Xu.current=e.matches;e.addListener(t),t()}else Xu.current=!1}function Ej(e,t,n){for(const r in t){const i=t[r],o=n[r];if(Le(i))e.addValue(r,i);else if(Le(o))e.addValue(r,lo(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,lo(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const If=new WeakMap,Tj=[...hx,Ee,jn],Lj=e=>Tj.find(px(e)),Of=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Rj{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ud,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=Et.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,H.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=s;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=Ea(n),this.isVariantNode=c1(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in p){const v=p[h];l[h]!==void 0&&Le(v)&&v.set(l[h],!1)}}mount(t){this.current=t,If.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),S1.current||$j(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Xu.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){If.delete(this.current),this.projection&&this.projection.unmount(),Sn(this.notifyUpdate),Sn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=ir.has(t),i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&H.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),o=n.on("renderRequest",this.scheduleRender);let s;window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o(),s&&s(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Qr){const n=Qr[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):le()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Of.length;r++){const i=Of[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=Ej(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=lo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(lx(i)||ax(i))?i=parseFloat(i):!Lj(i)&&jn.test(n)&&(i=Sx(t,n)),this.setBaseTarget(t,Le(i)?i.get():i)),Le(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const s=nd(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);s&&(i=s[t])}if(r&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,t);return o!==void 0&&!Le(o)?o:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Cd),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class C1 extends Rj{constructor(){super(...arguments),this.KeyframeResolver=Cx}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}}function _j(e){return window.getComputedStyle(e)}class zj extends C1{constructor(){super(...arguments),this.type="html",this.renderInstance=d1}readValueFromInstance(t,n){if(ir.has(n)){const r=hd(n);return r&&r.default||0}else{const r=_j(t),i=(cx(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Xx(t,n)}build(t,n,r){zd(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Rd(t,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Le(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Dj extends C1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=le}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ir.has(n)){const r=hd(n);return r&&r.default||0}return n=p1.has(n)?n:Ad(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return m1(t,n,r)}build(t,n,r){Dd(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){h1(t,n,r,i)}mount(t){this.isSVGTag=Nd(t.tagName),super.mount(t)}}const Nj=(e,t)=>Ld(e)?new Dj(t):new zj(t,{allowProjection:e!==g.Fragment}),j1=Pj({...kC,...K3,...M3,...Q3},Nj),Xt=j1("div"),Mj={open:{x:["100%",0]},close:{x:[0,"-100%"]}};function Ij({imgUrl:e,imgAlt:t,text:n,current:r}){return u.jsxs(x5,{as:Xt,variants:Mj,initial:"open",animate:r?"open":"close",exit:"close",transition:{duration:.4},layout:!0,children:[u.jsx("img",{src:e,alt:t}),u.jsx(v5,{children:u.jsx("span",{children:n})})]})}function Oj(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const wt=Oj(j1);class bj extends g.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Vj({children:e,isPresent:t}){const n=g.useId(),r=g.useRef(null),i=g.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=g.useContext($d);return g.useInsertionEffect(()=>{const{width:s,height:a,top:l,left:c}=i.current;if(t||!r.current||!s||!a)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return o&&(d.nonce=o),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),u.jsx(bj,{isPresent:t,childRef:r,sizeRef:i,children:g.cloneElement(e,{ref:r})})}const Fj=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:o,mode:s})=>{const a=Ta(Bj),l=g.useId(),c=g.useCallback(p=>{a.set(p,!0);for(const h of a.values())if(!h)return;r&&r()},[a,r]),d=g.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:c,register:p=>(a.set(p,!1),()=>a.delete(p))}),o?[Math.random(),c]:[n,c]);return g.useMemo(()=>{a.forEach((p,h)=>a.set(h,!1))},[n]),g.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),s==="popLayout"&&(e=u.jsx(Vj,{isPresent:n,children:e})),u.jsx(Pa.Provider,{value:d,children:e})};function Bj(){return new Map}const Uo=e=>e.key||"";function bf(e){const t=[];return g.Children.forEach(e,n=>{g.isValidElement(n)&&t.push(n)}),t}const ri=({children:e,exitBeforeEnter:t,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:s="sync"})=>{const a=g.useMemo(()=>bf(e),[e]),l=a.map(Uo),c=g.useRef(!0),d=g.useRef(a),p=Ta(()=>new Map),[h,v]=g.useState(a),[y,w]=g.useState(a);Td(()=>{c.current=!1,d.current=a;for(let f=0;f<y.length;f++){const x=Uo(y[f]);l.includes(x)?p.delete(x):p.get(x)!==!0&&p.set(x,!1)}},[y,l.length,l.join("-")]);const S=[];if(a!==h){let f=[...a];for(let x=0;x<y.length;x++){const C=y[x],A=Uo(C);l.includes(A)||(f.splice(x,0,C),S.push(C))}s==="wait"&&S.length&&(f=S),w(bf(f)),v(a);return}const{forceRender:m}=g.useContext(kd);return u.jsx(u.Fragment,{children:y.map(f=>{const x=Uo(f),C=a===y||l.includes(x),A=()=>{if(p.has(x))p.set(x,!0);else return;let k=!0;p.forEach(P=>{P||(k=!1)}),k&&(m==null||m(),w(d.current),i&&i())};return u.jsx(Fj,{isPresent:C,initial:!c.current||r?void 0:!1,custom:C?void 0:n,presenceAffectsLayout:o,mode:s,onExitComplete:C?void 0:A,children:f},x)})})};function Uj(e){e.values.forEach(t=>t.stop())}function Yu(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&jd(e,i),e.variantChildren&&e.variantChildren.forEach(o=>{Yu(o,t)})})}function Wj(e,t){if(Array.isArray(t))return Yu(e,t);if(typeof t=="string")return Yu(e,[t]);jd(e,t)}function Hj(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(o=>{i.push(Mx(o,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{Wj(r,n)})},stop(){e.forEach(n=>{Uj(n)})},mount(){return()=>{t.stop()}}};return t}function Gj(){const e=Ta(Hj);return Td(e.mount,[]),e}const La=Gj,Kj=["https://blog.meninashoes.com.br/wp-content/uploads/2023/07/4-pessoas-com-oculos-de-sol.jpg","https://png.pngtree.com/thumb_back/fw800/background/20240717/pngtree-wearing-sunglasses-portrait-of-twin-brothers-studio-shot-in-dark-studio-image_15879421.jpg","https://www.visaohospital.com.br/wp-content/uploads/2023/03/2023-0314-Oculos-de-sol-com-grau-Blog.jpg"];function Qj(){const[e,t]=g.useState(0),n=g.useRef(null);return g.useEffect(()=>{var r;(r=n.current)==null||r.click()},[]),g.useEffect(()=>{const r=setInterval(()=>{const i=e===2?0:e+1;t(i)},2e3);return()=>clearInterval(r)},[e]),u.jsxs(m5,{children:[u.jsx(ri,{initial:!0,children:Kj.map((r,i)=>u.jsx(Ij,{imgUrl:r,current:e===i,imgAlt:"carrousel image 1",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta fuga explicabo eius nisi doloremque!"},i))}),u.jsxs(g5,{children:[u.jsx("button",{onClick:()=>t(0),className:e===0?"active":""}),u.jsx("button",{onClick:()=>t(1),className:e===1?"active":"",ref:n}),u.jsx("button",{onClick:()=>t(2),className:e===2?"active":""})]})]})}function Xj(){return u.jsx("header",{children:u.jsx(Qj,{})})}const Yj=j.section`
  ${T("center","center","column")}
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;

  img[content='background'] {
    width: 100%;
    min-height: 100%;
    position: absolute;
    opacity: 0.1;
  }
`,qj=j.div`
  ${T("center","center","column")}
  margin-top: 100px;
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
  gap: 50px;
`,Zj=j.div`
  ${({theme:e})=>I`
    ${U("column")}
    width: 70%;
    height: max-content;
    padding-bottom: 80px;
    text-align: center;
    gap: 40px;

    h1 {
      font-size: ${e.text.size.title};
    }
    p {
      font-size: ${e.text.size.large};
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      h1 {
        font-size: ${e.text.size.large};
      }
      p {
        font-size: ${e.text.size.medium};
      }
    }

    @media (min-width: 0px) and (max-width: 767px) {
      h1 {
        font-size: ${e.text.size.large};
      }
      p {
        font-size: ${e.text.size.small};
      }
      width: 80%;
    }
  `}
`,Jj=j.div`
  ${T("center","center","column")}
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  padding-bottom: 100px;
  gap: 120px;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 50px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    gap: 100px;
  }
`,eA=j.div`
  ${({theme:e})=>I`
      ${T("center","center","column")}
      width: 40%;
      height: 600px;
      text-align: start;

      img {
        width: 100%;
        height: 400px;
      }
      div {
        width: 100%;
        height: 150px;

        h2 {
          font-size: ${e.text.size.xxlarge};
        }
        span {
          font-size: ${e.text.size.medium};
        }
      }

      @media (min-width: 768px) and (max-width: 1023px) {
        gap: 20px;
        width: 80%;
        img {
          height: 100%;
        }
        h2 {
          font-size: ${e.text.size.xlarge};
        }
        span {
          font-size: ${e.text.size.medium};
        }
      }

      @media (min-width: 520px) and (max-width: 767px) {
        width: 90%;
        gap: 30px;
        img {
          height: 100%;
        }
        h2 {
          font-size: ${e.text.size.xlarge};
        }
        span {
          font-size: ${e.text.size.medium};
        }
      }

      @media (min-width: 0px) and (max-width: 519px) {
        width: 90%;
        gap: 30px;
        height: 400px;
        h2 {
          font-size: ${e.text.size.xlarge};
        }
        span {
          font-size: ${e.text.size.medium};
        }
      }
    `}
`;function Vf({imgUrl:e,imgAlt:t,title:n,text:r}){return u.jsxs(eA,{children:[u.jsx("img",{src:e,alt:t}),u.jsxs("div",{children:[u.jsx("h2",{children:n}),u.jsx("span",{children:r})]})]})}function tA(){return u.jsxs(Yj,{children:[u.jsx("img",{content:"background",src:"https://images.unsplash.com/photo-1528669833931-275d4bd6e9bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"background image"}),u.jsxs(qj,{children:[u.jsxs(Zj,{children:[u.jsx("div",{content:"title",children:u.jsx("h1",{children:"Lorem ipsum dolor"})}),u.jsx("div",{content:"text",children:u.jsx("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nihil odio doloribus veritatis expedita asperiores! Cumque asperiores, veniam officia, illo quidem minus quia expedita nihil excepturi qui voluptas dicta placeat?"})})]}),u.jsxs(Jj,{children:[u.jsx(Vf,{imgUrl:"https://medriocheck-up.com.br/wp-content/uploads/2023/11/Oculos-de-sol-opcao-4-Freepik-1024x768.jpg",imgAlt:"Masculino",title:"Doloribus veritatis",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, libero, fuga nostrum ab deleniti officiis quis iste, esse aliquid facilis mollitia possimus! Tempore ratione atque commodi voluptates, aliquid ut!"}),u.jsx(Vf,{imgUrl:"https://img.freepik.com/fotos-premium/um-grupo-de-pessoas-esta-sorrindo-e-usando-oculos-e-gravata-preta_670382-21962.jpg",imgAlt:"Masculino",title:"Minus quia expedita",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi, libero, fuga nostrum ab deleniti officiis quis iste, esse aliquid facilis mollitia possimus! Tempore ratione atque commodi voluptates, aliquid ut!"})]})]})]})}const nA=j.div`
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.primaryDark};

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 400px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    height: 250px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    height: 250px;
  }
`,rA=j.div`
  ${({theme:e})=>I`
    width: 400px;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 100px;
    margin-top: 50px;
    font-size: ${e.text.size.xxlarge};
    color: ${e.colors.primaryRed};

    p {
      color: ${e.colors.primaryLight};
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      font-size: ${e.text.size.large};
      margin-left: 20px;
      margin-top: 100px;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      font-size: ${e.text.size.medium};
      width: 300px;
      margin-left: 20px;
      margin-top: 30px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      font-size: ${e.text.size.small};
      width: 200px;
      margin-left: 20px;
      margin-top: 20px;
    }
  `}
`,iA=j.div`
  width: 400px;
  background-color: ${({theme:e})=>e.colors.primaryRed};
  height: 1000px;
  position: absolute;
  ${b("center","center")};
  right: 0;
  margin-right: 400px;
  transform: rotate(20deg) translateY(-200px);

  img {
    transform: rotate(-10deg) translateY(-50px) scale(1.2);
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    margin-right: 200px;
    width: 300px;

    img {
      transform: rotate(-10deg) translateY(-50px) scale(1);
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-right: 150px;
    width: 250px;

    img {
      transform: rotate(-10deg) translateY(-100px) scale(0.7);
    }
  }
  @media (min-width: 520px) and (max-width: 767px) {
    margin-right: 150px;
    width: 150px;
    img {
      transform: rotate(-10deg) translateY(-180px) translateX(25px) scale(0.5);
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    margin-right: 200px;
    width: 150px;

    transform: rotate(30deg) translateY(-180px);
    img {
      transform: rotate(-20deg) translateY(-180px) translateX(25px) scale(0.5);
    }
  }
`,oA="/assets/rayban_3-removebg-preview-Cv7GpvUD.png";function sA(){return u.jsxs(nA,{children:[u.jsxs(rA,{children:[u.jsx("h2",{children:"Ray-Ban: Ícone de Estilo"}),u.jsx("p",{children:"Explore a icônica coleção Ray-Ban. Elegância, qualidade e proteção em cada modelo. Seja único, seja Ray-Ban."})]}),u.jsx(iA,{children:u.jsx("img",{src:oA,alt:"oculos ray-ban"})})]})}const aA=j.section`
  ${T("center","center","column")}
  width: 100%;
  height: auto;

  transition: height 300ms linear;
  gap: 50px;
  border-bottom: 1px solid white;
`,lA=j.div`
  ${T("center","center","column")}

  width: 100%;
  height: 150px;
  text-align: center;
  font-size: ${({theme:e})=>e.text.size.xlarge};

  @media (min-width: 0px) and (max-width: 768px) {
    font-size: ${({theme:e})=>e.text.size.medium};
  }
`,uA=j.div`
  ${T("center","center","row")}
  padding: 20px 50px;

  width: 100%;
  height: 100%;
  gap: 50px;
  flex-wrap: wrap;
  position: relative;
  cursor: grab;
  scroll-behavior: smooth;
  @media (min-width: 0px) and (max-width: 768px) {
    gap: 20px;
    padding: 10px;
  }
`,cA=j.div`
  ${({theme:e})=>I`
    width: 200px;
    height: 150px;
    ${b("center","center")}

    button {
      width: 200px;
      height: 40px;
      background-color: ${e.colors.secondaryDark};
      color: ${e.colors.primaryLight};
      border-radius: 10px;
      &:hover {
        color: ${e.colors.primaryGray};
      }
    }
  `}
`,dA=j.div`
  ${({theme:e})=>I`
    width: 100%;
    height: auto;
    ${T("center","center","column")};
    gap: 10px;

    button {
      width: 100%;
      height: 60px;
      background-color: ${e.colors.secondaryDark};
      color: ${e.colors.primaryLight};
      font-size: ${e.text.size.xlarge};

      svg {
        transform: scale(2);
      }

      &:hover {
        background-color: ${e.colors.primaryGreen};
        color: ${e.colors.primaryDark};
        font-size: ${e.text.size.xlarge};
      }

      transition: all 100ms ease-out;
    }

    @media (min-width: 0px) and (max-width: 1023px) {
      button {
        height: 30px;
        font-size: ${e.text.size.medium};

        svg {
          transform: scale(1.1);
        }
      }
    }
  `}
`,pA=j.div`
  ${U("column")}
  overflow: hidden;
  text-align: start;
  width: 350px;
  height: auto;
  position: relative;
  border-radius: 5px 5px 20px 20px;
  user-select: none;
  box-shadow: 3px 10px 10px 0px ${({theme:e})=>e.colors.secondaryDark};

  img {
    width: 350px;
    height: 350px;
  }

  @media (min-width: 1300px) and (max-width: 1600px) {
    width: 300px;
    img {
      width: 300px;
      height: 300px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1299px) {
    width: 250px;
    img {
      width: 250px;
      height: 250px;
    }
  }

  @media (min-width: 470px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
    width: 200px;
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (min-width: 0px) and (max-width: 469px) {
    width: 150px;
    img {
      width: 150px;
      height: 150px;
    }
  }
`,hA=j.div`
  ${({theme:e})=>I`
    text-align: center;
    width: 100%;
    height: auto;
    min-height: 50px;
    color: ${e.colors.primaryDark};
    font-size: ${e.text.size.large};
    ${b("center","center")};

    @media (min-width: 0px) and (max-width: 469px) {
      font-size: ${e.text.size.small};
    }
  `}
`,fA=j.div`
  ${({theme:e})=>I`
    padding: 0px 5px;
    height: 150px;
    ${T("center","center","column")}
    width: 100%;
    span {
      color: green;
    }
    .current-amount {
      color: ${e.colors.primaryGreen};
      font-size: ${e.text.size.xxlarge};
    }
    .old-value,
    .installments {
      color: ${e.colors.primaryDark};
      font-size: ${e.text.size.medium};
    }

    .old-value {
      text-decoration: line-through;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      height: 120px;

      .current-amount {
        font-size: ${e.text.size.large};
      }
      .old-value,
      .installments {
        font-size: ${e.text.size.medium};
      }
    }

    @media (min-width: 480px) and (max-width: 768px) {
      height: 100px;

      .current-amount {
        font-size: ${e.text.size.medium};
      }
      .old-value,
      .installments {
        font-size: ${e.text.size.small};
      }
    }

    @media (min-width: 0px) and (max-width: 469px) {
      height: 60px;
      .current-amount {
        font-size: ${e.text.size.small};
      }
      .old-value,
      .installments {
        font-size: ${e.text.size.xsmall};
      }
    }
  `}
`,mA=j.div`
  ${b("center","center")}
  width: 150px;
  height: 40px;
  ${({theme:e})=>({backgroundColor:e.colors.primaryGreen,color:e.colors.primaryDark,fontSize:e.text.size.medium,fontWeight:e.spacing.xxlarge})};
  position: absolute;
  right: 0;
  top: 0;
  transform: rotate(40deg) translate(30px, -15px);
`;function Md(e,t=!1){return{data:{name:e.name,amount:String(e.amount),slug:e.slug,images:e.images},isFromLocalStorage:t}}function A1(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"176",cy:"416",r:"32"},child:[]},{tag:"circle",attr:{cx:"400",cy:"416",r:"32"},child:[]},{tag:"path",attr:{d:"M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93z"},child:[]}]})(e)}function gA(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Id(e){var r,i;const t=Qt(),n=e.domain+((r=e.images)!=null&&r.url?e.images.url:e.defaultImageUrl);return u.jsx(u.Fragment,{children:u.jsxs(pA,{children:[e.is_promo&&u.jsxs(mA,{children:[e.discount,"% OFF"]}),u.jsx("img",{src:n,alt:(i=e.images)==null?void 0:i.description}),u.jsx(hA,{children:u.jsx("h3",{children:e.name})}),u.jsxs(fA,{children:[e.is_promo&&u.jsxs("span",{className:"old-value",children:["R$",e.amount]}),u.jsxs("span",{className:"current-amount",children:["R$",u.jsx("strong",{children:e.final_amount})]}),u.jsxs("span",{className:"installments",children:[e.installments_count,"x de R$",u.jsx("strong",{children:e.installments_amount})]})]}),u.jsxs(dA,{children:[u.jsx("button",{onClick:()=>{t("/oculos/"+e.slug)},children:"Mais"}),u.jsx("button",{children:u.jsx(A1,{onClick:()=>{e.addItem(Md(e))}})})]})]})})}const k1="ADD",P1="REMOVE",$1="OPEN",E1="CLOSE";function xA(e){return{addItem:t=>{e({type:k1,payload:t})},removeItem:t=>{e({type:P1,payload:t})},openSideBar:()=>{e({type:$1})},closeSideBar:()=>{e({type:E1})}}}function vA(e,t){const n=t.type;if(n===k1){const{data:r,isFromLocalStorage:i}=t.payload;if(Array.isArray(r)){if(i)return{...e,products:r}}else return e.products.find(o=>o.slug===r.slug)?e:(localStorage.setItem(`cart-${r.slug}`,JSON.stringify(r)),{...e,products:[...e.products,r],runAnimation:!0})}if(n===P1)return localStorage.removeItem(`cart-${t.payload}`),{...e,products:e.products.filter(i=>i.slug!==t.payload)};if(n===$1){const r=document.querySelector("[data-content='cart-side-bar']");r instanceof HTMLDivElement&&r.classList.add("open-cart")}if(n===E1){const r=document.querySelector("[data-content='cart-side-bar']");r instanceof HTMLDivElement&&r.classList.remove("open-cart")}return e}const T1=g.createContext(void 0);function yA({children:e}){const[t,n]=g.useState(!0),[r,i]=g.useReducer(vA,wA),o=g.useRef(xA(i));if(g.useEffect(()=>{const a=[];for(let l=0;l<localStorage.length;l++){const c=localStorage.key(l);if(c&&c.startsWith("cart-")){const d=localStorage.getItem(c);d&&a.push(JSON.parse(d))}}if(a.length>0){const l={data:a,isFromLocalStorage:!0};o.current.addItem(l)}n(!1)},[]),t)return u.jsx(he,{class:"context-loading"});const s={cart:r,actions:o.current};return u.jsx(T1.Provider,{value:s,children:e})}const wA={products:[],runAnimation:!1};function Ln(){const e=g.useContext(T1);if(!e)throw new Error("useCartContext must be inside CartContextProvider!");return e}const SA=j(Xt)`
  ${U("row")}
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 30px 20px 150px 20px;
  width: 100%;
  gap: 20px;
  flex-wrap: wrap;
  position: relative;
  @media (min-width: 0px) and (max-width: 1024px) {
    padding-top: 10px;
  }
`,L1=j.div`
  ${T("center","center","column")}
  margin-top: 150px;
  width: 100%;
  color: gray;
  gap: 100px;

  svg {
    transform: scale(10);
  }

  span {
    font-size: 30px;
    text-align: center;
  }
`;function CA(e){return G({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM13 13c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5c0-2.481 2.019-4.5 4.5-4.5s4.5 2.019 4.5 4.5zM4.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM10.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1z"},child:[]}]})(e)}function or({text:e}){return u.jsxs(L1,{"data-testid":"no-data-founded",children:[u.jsx(CA,{}),u.jsxs("span",{children:[e," :("]})]})}const R1={animate:{opacity:1,transition:{staggerChildren:.1}}},_1={initial:{opacity:0,x:-50},animate:{opacity:1,x:0,transition:{duration:1}}};function jA({products:e=[],reference:t}){const{settings:n}=te(),{actions:r}=Ln();return u.jsx(SA,{"data-testid":"search-products",ref:t,variants:R1,animate:"animate",initial:"initial",children:e.map(i=>u.jsx(wt.div,{variants:_1,children:u.jsx(Id,{name:i.name,images:i.images,amount:i.amount,installments_amount:i.installments_amount,installments_count:i.installments_count,is_promo:i.is_promo,slug:i.slug,discount:i.discount,final_amount:i.final_amount,addItem:r.addItem,defaultImageUrl:n.default_image_url,domain:n.site_domain})},i.id))})}function AA({url:e}){const{settings:t}=te(),[n,r]=g.useState(!1),[i,o]=g.useState({data:[],page:1,hasNext:!0}),{actions:s}=Ln();g.useEffect(()=>{a(i.page)},[]);const a=async l=>{r(!0);try{const c=await fetch(e+"/"+l);if(c.ok){const d=await c.json();o(p=>({data:[...p.data,...d.data],page:l,hasNext:d.has_next}))}}finally{r(!1)}};return u.jsx(aA,{as:wt.div,variants:R1,animate:"animate",initial:"initial",children:i.data.length>0&&u.jsxs(u.Fragment,{children:[u.jsx(lA,{children:u.jsx("h2",{children:"Confira nossas promoções"})}),u.jsx(uA,{children:u.jsx(ri,{children:i.data.map(l=>u.jsx(wt.div,{variants:_1,children:u.jsx(Id,{name:l.name,final_amount:l.final_amount,amount:l.amount,installments_amount:l.installments_amount,installments_count:l.installments_count,images:l.images,is_promo:l.is_promo,slug:l.slug,addItem:s.addItem,discount:l.discount,defaultImageUrl:t.default_image_url,domain:t.site_domain},l.id)},l.id))})}),u.jsx(cA,{children:i.hasNext&&(n?u.jsx(he,{}):u.jsx("div",{onClick:()=>a(i.page+1),children:u.jsx("button",{children:"Mostrar mais resultados"})}))})]})})}const kA=j.main`
  ${T("center","center","column")}
  width: 100%;
  height: auto;
  /* background-color: ${({theme:e})=>e.colors.primaryLight}; */
`;function PA(){const{api:e}=te();return u.jsxs(u.Fragment,{children:[u.jsx(Xj,{}),u.jsxs(kA,{children:[u.jsx(tA,{}),u.jsx(sA,{}),u.jsx(AA,{url:e.promotions})]})]})}const z1=j.div`
  width: calc(100% - 400px);
  min-height: calc(100vh - 120px);
  height: auto;
  ${U("column")}
  gap: 50px;

  .loading-products {
    margin-top: 200px;
  }
  @media (min-width: 1024px) and (max-width: 1600px) {
    width: calc(100% - 300px);
  }
`,$A=j.div`
  ${T("center","start","row")}

  width: 100%;
  height: auto;
  margin: 0 auto;
  position: relative;
  padding: 50px 150px 50px 100px;
  gap: 50px;
  transition: height 300ms linear;

  &.direction-layout {
    flex-direction: column !important;
    padding: 50px 20px;
    gap: 20px;

    ${z1} {
      width: 100%;
    }

    @media (min-width: 0px) and (max-width: 520px) {
      padding: 10px 5px;
      gap: 5px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1920px) {
    padding: 50px 20px;
    gap: 20px;
  }
`,EA=j.form`
  ${U("column")}
  gap: 10px;
  width: 400px;
  height: auto;
  padding: 10px 30px;
  border-radius: 20px;

  @media (min-width: 0px) and (max-width: 1024px) {
    width: auto;
  }
`,TA=j.div`
  ${b("start","center")}

  position: relative;
  font-size: 30px;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid ${({theme:e})=>e.colors.secondaryDark};
  margin-bottom: 30px;
  padding-bottom: 10px;

  svg {
    margin-left: 20px;
    margin-top: 25px;
  }

  ${({$isLowerSize:e})=>{if(e===!0)return{width:"140px"}}}
`,LA=j.div`
  ${({theme:e})=>I`
    height: calc(100vh - 120px);
    overflow: scroll;
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 120px;
    height: calc(100vh - 120px);
    gap: 20px;
    background-color: white;
    border-right: 1px solid ${e.colors.primaryDark};
    padding: 70px 30px 30px 30px;
    width: 100%;
    ${U("column")}
    z-index: 30;

    .close-filter {
      width: 50px;
      height: 40px;
      background-color: ${e.colors.secondaryDark};
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0px 0px 0px 10px;
      ${b("center","center")}
      cursor: pointer;

      svg {
        transform: scale(2.5);
        color: ${e.colors.primaryLight};
      }

      &:hover {
        svg {
          color: ${e.colors.primaryDark};
        }
      }
    }
  `}
`,RA=I`
  position: relative;
  padding-top: 120px;
`,_A=I`
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  width: 100%;

  span {
    font-size: 20px;
  }
`,zA=j.main`
  width: 100%;
  height: auto;

  ${RA}
`,D1=j.div`
  width: 100%;
  height: 30px;
  cursor: pointer;
  z-index: 5;
  position: relative;

  ${({theme:e})=>({borderTop:e.colors.primaryDark,borderLeft:e.colors.primaryDark,borderRight:e.colors.primaryDark,color:e.colors.secondaryDark,fontSize:e.text.size.medium})};

  ${d5()};

  &:hover {
    /* background-color: ${({theme:e})=>e.colors.primaryGray}; */
  }
  ${b("start","center")};
  svg {
    position: absolute;
    right: 0;
    transform: ${({$open:e})=>e==="open"?"rotate(0deg)":"rotate(180deg)"};

    transition: all 300ms linear;
  }
`,DA=j.div`
  ${T("center","center","column")};
  /* ${_A}; */
  gap: 20px;

  &:hover {
    ${D1}::after {
      width: 100%;
      bottom: -10px;
      left: 0;
    }
  }
`,NA=j(Xt)`
  ${({$direction:e})=>T("center","center",e)}

  /* background-color: black; */
  position: relative;
  width: 100%;
  gap: 10px;
  padding: 10px 20px;
  padding-bottom: 5px;
`,N1=j.div`
  ${U("row")};

  justify-content: start;
  align-items: center;
  width: 100%;
  height: fit-content;
  position: relative;

  input {
    transform: scale(1.3);
    accent-color: black;
    cursor: pointer;
    margin-right: 10px;
  }

  label {
    width: 100%;
    height: 100%;
    /* padding-left: 30px; */
    position: relative;
    cursor: pointer;
    & .item-count {
      position: absolute;
      right: 0;
    }
  }
`;function kl({setterOrder:e,testName:t,id:n,order:r,name:i,isSelected:o}){return u.jsxs(N1,{children:[u.jsx("input",{onClick:()=>{e(r)},type:"radio",name:"filter-order",id:`filter-order-${n}`,"data-id":r,defaultChecked:o,"data-testid":t}),u.jsx("label",{htmlFor:`filter-order-${n}`,children:i})]})}function Ra(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"},child:[]}]})(e)}function MA(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"},child:[]},{tag:"path",attr:{d:"M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"},child:[]}]})(e)}function Od(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M170.718 216.482L141.6 245.6l93.6 93.6 208-208-29.118-29.118L235.2 279.918l-64.482-63.436zM422.4 256c0 91.518-74.883 166.4-166.4 166.4S89.6 347.518 89.6 256 164.482 89.6 256 89.6c15.6 0 31.2 2.082 45.764 6.241L334 63.6C310.082 53.2 284.082 48 256 48 141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208h-41.6z"},child:[]}]})(e)}function M1(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}const IA={hidden:{height:0,opacity:0,overflow:"hidden"},open:{height:"auto",opacity:1}};function bd({name:e,testName:t,isAmount:n,children:r}){const[i,o]=g.useState(!0),s=La();return u.jsxs(DA,{children:[u.jsxs(D1,{onClick:()=>{s.start(i?"open":"hidden"),o(!i)},$open:i?"open":"hidden",children:[u.jsx("span",{children:e}),u.jsx(Ra,{})]}),u.jsx(NA,{"data-testid":`${t}-children-container`,variants:IA,animate:s,initial:"hidden",transition:{duration:.5,type:"linear"},$direction:n?"row":"column",children:r})]})}function OA({relatedAction:e,params:t}){const[n,r]=g.useState(!0),[i,o]=g.useState("");if(g.useEffect(()=>{t&&(e(t),o(t)),r(!1)},[]),n)return u.jsx("h1",{children:"carregando"});const s=a=>{e(a)};return u.jsx(bd,{name:"Ordenação",children:u.jsxs(u.Fragment,{children:[u.jsx(kl,{id:1,setterOrder:s,testName:"search-order-random",order:"RAND",name:"Aleatório",isSelected:!1}),u.jsx(kl,{id:2,setterOrder:s,testName:"search-order-higher",order:"DESC",name:"Maior preço",isSelected:i==="DESC"}),u.jsx(kl,{id:3,setterOrder:s,testName:"search-order-lower",order:"ASC",name:"Menor preço",isSelected:i==="ASC"})]})})}const bA=j.div`
  @include flexBox(center, center);

  padding-bottom: 50px;

  input {
    width: 100%;
    height: 40px;

    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 30px;
    ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})}
    &:hover {
      background-color: ${({theme:e})=>e.colors.primaryDark};
    }
    transition: all 300ms linear;
  }
`,I1="ADD_FILTER_1",O1="ADD_FILTER_2",b1="ADD_FILTER_3",V1="ADD_ORDER",F1="ADD_AMOUNT_MAX",B1="ADD_AMOUNT_MIN",U1="ADD_FILTER_4",W1="ADD_FILTER_5",H1="RESET",VA=e=>({addFilter1:t=>{e({type:I1,payload:t})},addFilter2:t=>{e({type:O1,payload:t})},addFilter3:t=>{e({type:b1,payload:t})},addFilter4:t=>{e({type:U1,payload:t})},addFilter5:t=>{e({type:W1,payload:t})},addOrder:t=>{e({type:V1,payload:t})},addAmountMax:t=>{e({type:F1,payload:t})},addAmountMin:t=>{e({type:B1,payload:t})},applyReset:()=>{e({type:H1})}}),FA=(e,t)=>{const n=t.type;if(n===F1)return e.amount[0].max=t.payload,e;if(n===B1)return e.amount[0].min=t.payload,e;if(n===I1){const{value:r,isRemover:i}=t.payload;if(i){const o=e.filter_1.indexOf(r);e.filter_1.splice(o,1)}else e.filter_1.push(r);return e}if(n===O1){const{value:r,isRemover:i}=t.payload;if(i){const o=e.filter_2.indexOf(r);e.filter_2.splice(o,1)}else e.filter_2.push(r);return e}if(n===b1){const{value:r,isRemover:i}=t.payload;if(i){const o=e.filter_3.indexOf(r);e.filter_3.splice(o,1)}else e.filter_3.push(r);return e}if(n===U1){const{value:r,isRemover:i}=t.payload;if(i){const o=e.filter_4.indexOf(r);e.filter_4.splice(o,1)}else e.filter_4.push(r);return e}if(n===W1){const{value:r,isRemover:i}=t.payload;if(i){const o=e.filter_5.indexOf(r);e.filter_5.splice(o,1)}else e.filter_5.push(r);return e}return n===V1?(t.payload==="RAND"?e.order.pop():e.order[0]=t.payload,e):n===H1?{filter_1:[],filter_2:[],filter_3:[],filter_4:[],filter_5:[],order:[],amount:[{min:"",max:""}]}:e},BA=()=>{const{api:e}=te(),[t,n]=g.useState(!0),[r,i]=g.useState({products:[],count:0,last:1,page:1}),o=g.useCallback(async s=>{n(!0);try{const a=await fetch(e.products+s);if(a.ok){const l=await a.json();i({products:l.products,count:l.count,last:l.last,page:l.page}),history.replaceState({},"",location.pathname+s)}}finally{n(!1)}},[]);return{content:r,getProducts:o,isLoading:t}},G1=g.createContext(void 0),UA=()=>{const{key:e}=et(),[t,n]=g.useReducer(FA,WA),r=g.useRef(VA(n)),{content:i,getProducts:o,isLoading:s}=BA();g.useEffect(()=>{r.current.applyReset()},[e]);const a={getProducts:o,content:i,isLoading:s,filter:t};return u.jsx(G1.Provider,{value:a,children:u.jsx(ck,{actions:r.current})})},WA={filter_1:[],filter_2:[],filter_3:[],filter_4:[],filter_5:[],order:[],amount:[{min:"",max:""}]};function K1(){const e=g.useContext(G1);if(!e)throw Error("useSearchContext must be inside the SearchContextProvider!");return e}function HA(e,t){const n=[];let r,i;e<=2?[r,i]=[1,5>t?t:5]:e==t?[r,i]=[e-4,t]:e==t-1?[r,i]=[e-3,t]:[r,i]=[e-2,e+2];for(let o=r;o<=i;o++)o>0&&n.push(o);return n}function GA({filter_1:e,filter_2:t,filter_3:n,filter_4:r,filter_5:i,amount:o,order:s},a){const l=new URLSearchParams,{param_1:c,param_2:d,param_3:p,param_4:h,param_5:v}=a;return e.length!==0&&l.set(c,String(e)),t.length!==0&&l.set(d,String(t)),n.length!==0&&l.set(p,String(n)),r.length!==0&&l.set(h,String(r)),i.length!==0&&l.set(v,String(i)),o[0].min&&l.set("min",String(o[0].min)),o[0].max&&l.set("max",String(o[0].max)),s.length!==0&&l.set("ordem",String(s)),"?"+decodeURIComponent(l.toString())}function KA(e){const t=new URLSearchParams(location.search);return t.set("page",String(e)),"?"+decodeURIComponent(t.toString())}const Pl=()=>{var e;return(e=document.querySelector("[content='navbar']"))==null?void 0:e.scrollIntoView({behavior:"smooth"})};function QA({settings:e,setShowFilter:t}){const{filter:n,getProducts:r}=K1(),i=()=>{const o=GA(n,e);if(!(o===location.search||"?"+o===location.search))return t&&t(!1),r(o)};return u.jsx(bA,{children:u.jsx("input",{onClick:i,type:"button",value:"Filtrar","data-testid":"submit-filter"})})}function XA(e){const[t,n]=g.useState(!0),[r,i]=g.useState({filter_1:[],filter_2:[],amount:{min:"",max:""},filter_3:[],filter_4:[],filter_5:[],params:new URLSearchParams(window.location.search)});return g.useEffect(()=>{(async()=>{try{const s=await fetch(e);if(!s.ok)throw new Error("Failed to fetch filters type");const a=await s.json();i(l=>({...l,filter_1:a.filter_1,filter_2:a.filter_2,amount:a.amount,filter_3:a.filter_3,filter_4:a.filter_4,filter_5:a.filter_5}))}catch{}})().then(()=>{n(!1)})},[]),{isLoading:t,filterData:r}}function YA({id:e,name:t,count:n,slug:r,setFilterContext:i,isFiltered:o,testName:s}){const a=l=>{const c=l.target;c instanceof HTMLInputElement&&i(r,!c.checked)};return u.jsxs(N1,{children:[u.jsx("input",{defaultChecked:o,onClick:a,type:"checkbox",id:`glasses-${s}-${e}`,"data-testid":`search-${s}-${e}`}),u.jsxs("label",{htmlFor:`glasses-${s}-${e}`,children:[u.jsx("span",{children:t}),u.jsxs("span",{className:"item-count",children:["(",n,")"]})]})]})}const fi=({containerName:e,testName:t,relatedAction:n,params:r,data:i=[]})=>{const[o,s]=g.useState(!0),[a,l]=g.useState([]);if(g.useEffect(()=>{if(r){const d=r.split(",");d.forEach(p=>{n({value:p,isRemover:!1})}),l(d)}s(!1)},[]),o)return u.jsx("h1",{children:"..."});const c=(d,p)=>{n({value:d,isRemover:p})};return u.jsx(bd,{name:e,testName:t,children:i.map(d=>u.jsx(YA,{setFilterContext:c,id:d.id,name:d.name,slug:d.slug,count:d.count,testName:t,isFiltered:a.includes(d.slug)},d.id))})};j.div`
  ${U("column")}

  text-align: center;
`;j.div`
  ${U("row")}

  gap: 30px;
  margin-top: 20px;
  justify-content: center;
`;const qA=j.div`
  width: 70px;
  height: 40px;

  input {
    height: 30px;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    outline: none;

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &:focus {
      ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})};

      transition: all 300ms ease;
    }
  }
`;function Ff({setterAmount:e,id:t,data:n,placeholder:r,initValue:i}){const[o,s]=g.useState(i);function a(l){if(l.target instanceof HTMLInputElement){const c=l.target.value;s(c),n==="min"?e(c,!0):e(c,!1)}}return u.jsx(qA,{children:u.jsx("input",{id:t,onChange:a,type:"number","data-testid":`search-${n}-amount`,placeholder:r,value:o})})}const ZA=({data:e,actions:t,params:n})=>{const[r,i]=g.useState(!0),[o,s]=g.useState({min:"",max:""});if(g.useEffect(()=>{let l=n.get("max"),c=n.get("min");c?t.addAmountMin(c):c="",l?t.addAmountMax(l):l="",s({max:l,min:c}),i(!1)},[]),r)return u.jsx(he,{});const a=(l,c)=>{c?t.addAmountMin(l):t.addAmountMax(l)};return u.jsxs(bd,{name:"Preço",isAmount:!0,children:[u.jsx(Ff,{id:"min-amount-value",data:"min",placeholder:e.min,setterAmount:a,initValue:o.min},1),u.jsx(Ff,{id:"max-amount-value",data:"max",placeholder:e.max,setterAmount:a,initValue:o.max},2)]})};function Q1(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(e)}function JA(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{fill:"none"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M0 0h24v24H0V0z",opacity:".87"},child:[]}]},{tag:"path",attr:{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14a2 2 0 0 0-2-2zM11 16l4-4-4-4v3H1v2h10v3z"},child:[]}]})(e)}const ek={hidden:{maxWidth:0,display:"none",opacity:0},open:{maxWidth:400,display:"flex",opacity:1}},tk=({actions:e,containerRef:t})=>{const{api:n,settings:r}=te(),{isLoading:i,filterData:o}=XA(n.filters),[s,a]=g.useState(!1),[l,c]=g.useState(!1);return g.useEffect(()=>{const d=()=>{var p,h;window.screen.width<1450?(a(!0),(p=t.current)==null||p.classList.add("direction-layout")):(a(!1),(h=t.current)==null||h.classList.remove("direction-layout"))};return d(),window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),i?u.jsx("h1",{"data-testid":"filter-data-loading",children:"Is loading the page Search"}):u.jsxs(EA,{"data-testid":"search-form-wrapper",children:[u.jsx(TA,{onClick:()=>c(!0),$isLowerSize:s,children:u.jsxs("span",{children:["Filtrar",s&&u.jsx(Ra,{style:{transform:l?"rotate(180deg)":"rotate(0deg)"}})]})}),s?u.jsxs(LA,{as:Xt,initial:"hidden",animate:l?"open":"hidden",exit:"hidden",variants:ek,transition:{duration:1,type:"spring"},children:[u.jsx("div",{className:"close-filter",onClick:()=>c(!1),children:u.jsx(Q1,{})}),u.jsx(Bf,{filterData:o,settings:r,actions:e,setShowFilter:c})]}):u.jsx(Bf,{filterData:o,settings:r,actions:e})]})},Bf=({filterData:e,settings:t,actions:n,setShowFilter:r})=>u.jsxs(u.Fragment,{children:[u.jsx(fi,{data:e.filter_1,containerName:t.filter_1,testName:t.param_1,relatedAction:n.addFilter1,params:e.params.get(t.param_1)}),u.jsx(fi,{data:e.filter_2,containerName:t.filter_2,testName:t.param_2,relatedAction:n.addFilter2,params:e.params.get(t.param_2)}),u.jsx(fi,{data:e.filter_3,containerName:t.filter_3,testName:t.param_3,relatedAction:n.addFilter3,params:e.params.get(t.param_3)}),u.jsx(fi,{data:e.filter_4,containerName:t.filter_4,testName:t.param_4,relatedAction:n.addFilter4,params:e.params.get(t.param_4)}),u.jsx(fi,{data:e.filter_5,containerName:t.filter_5,testName:t.param_5,relatedAction:n.addFilter5,params:e.params.get(t.param_5)}),u.jsx(OA,{relatedAction:n.addOrder,params:e.params.get("ordem")}),u.jsx(ZA,{data:e.amount,actions:n,params:e.params}),u.jsx(QA,{settings:t,setShowFilter:r})]}),nk=g.memo(tk),rk=j.section`
  ${T("center","center","row")}

  width: 100vw !important;
  height: max-content;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  gap: 10px;
  overflow: hidden;
  padding: 50px 0px;
`,Uf=j.div`
  ${({theme:e})=>I`
    ${T("center","center","row")}
    width: 200px;
    height: 50px;
    color: ${e.colors.primaryLight};
    gap: 25px;

    span {
      font-size: ${e.text.size.large};
      text-decoration: underline;
      color: darkgrey;
      cursor: pointer;
      white-space: nowrap;

      &:hover {
        color: ${e.colors.secondaryDark};
        text-decoration: none;
      }
    }

    @media (min-width: 520px) and (max-width: 768px) {
      width: fit-content;
      gap: 10px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      width: fit-content;
      gap: 5px;
      span {
        font-size: ${e.text.size.small};
      }
    }
  `}
`,Wf=j.div`
  ${b("center","center")}
  width: 30px;
  height: 30px;
  cursor: pointer;

  svg {
    color: ${({theme:e})=>e.colors.primaryDark};
    height: 100%;
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    height: 20px;
  }
`,ik=j.div`
  ${T("center","center","row")}
  width: auto;
  height: auto;
  gap: 10px;
  overflow: hidden;
  @media (min-width: 520px) and (max-width: 768px) {
    width: 200px;
    overflow: unset;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    overflow: unset;
    width: 185px;
  }
`,ok=j.button`
  ${b("center","center")}

  width: 50px;
  height: 50px;
  ${({$isCurrent:e})=>e==="true"?{backgroundColor:"white",color:"black"}:{backgroundColor:"black",color:"white"}}
  text-decoration: none;
  border: 2px solid darkgray;
  text-align: center;
  cursor: pointer;

  @media (min-width: 520px) and (max-width: 768px) {
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    min-width: 25px;
    min-height: 25px;
    width: 25px;
    height: 25px;
  }
`;function sk({is_current:e,searchNavClickHandler:t,page:n}){return u.jsx(ok,{$isCurrent:e?"true":"false",onClick:t,type:"button","data-target":n,children:n})}function X1(e){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M752.145 0c8.685 0 17.572 3.434 24.237 10.099 13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"},child:[]}]})(e)}function Y1(e){return G({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163 254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475 13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"},child:[]}]})(e)}function ak({last:e,page:t,searchNavClickHandler:n}){const r=HA(t,e);return u.jsxs(rk,{"data-testid":"search-navigation",children:[u.jsx(Uf,{children:t>1&&u.jsxs(u.Fragment,{children:[u.jsx("span",{onClick:n,"data-target":"1",children:"Inicio"}),u.jsx(Wf,{"data-testid":"navigation-icon-left",onClick:n,"data-target":t-1,children:u.jsx(X1,{})})]})}),u.jsx(ik,{"data-testid":"navigation-button-group",children:r.map(i=>u.jsx(sk,{page:i,is_current:t==i,searchNavClickHandler:n},i))}),u.jsx(Uf,{children:t<e&&u.jsxs(u.Fragment,{children:[u.jsx(Wf,{"data-testid":"navigation-icon-right",onClick:n,"data-target":t+1,children:u.jsx(Y1,{})}),u.jsx("span",{onClick:n,"data-target":e,children:"Final"})]})})]})}function lk(e,t){const n=g.useRef(null);return g.useEffect(()=>{Pl(),e(location.search)},[]),{searchNavClickHandler:i=>{Pl();const o=i.currentTarget.getAttribute("data-target")||"1";if(t==Number(o))return;const s=KA(o);e(s),Pl()},productsElement:n}}function uk(){const{content:e,getProducts:t,isLoading:n}=K1(),{searchNavClickHandler:r,productsElement:i}=lk(t,e.page);return u.jsx(z1,{children:n?u.jsx(he,{init:12,finish:16,class:"loading-products"}):e.count===0?u.jsx(or,{text:"Nenhum produto foi encontrado"}):u.jsxs(u.Fragment,{children:[u.jsx(jA,{products:e.products,reference:i}),u.jsx(ak,{last:e.last,page:e.page,searchNavClickHandler:r})]})})}function ck({actions:e}){const t=g.useRef(null);return u.jsxs($A,{ref:t,children:[u.jsx(nk,{actions:e,containerRef:t}),u.jsx(uk,{})]})}function dk(){return u.jsx(UA,{})}const pk=j.div`
  ${T("center","center","column")};

  width: 100%;
  height: auto;
  padding: 0px 0px 50px 0px;
`,hk=j.div`
  ${T("center","center","row")}
  width: 100%;
  margin-top: 50px;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    gap: 50px;
  }
`,fk=j.div`
  ${({theme:e})=>I`
    ${T("center","center","column")};
    width: 100%;

    .related-text-container {
      span {
        font-size: ${e.text.size.title};
      }
      margin-bottom: 100px;
    }

    .related-container {
      ${T("center","center","row")};
      flex-wrap: wrap;
      gap: 100px;
    }

    margin-top: 50px;
    padding: 100px 0px 100px 0px;
    background-color: ${e.colors.primaryLight};
    flex-wrap: wrap;

    @media (min-width: 0px) and (max-width: 768px) {
      padding: 50px 0px 50px 0px;

      .related-text-container {
        span {
          font-size: ${e.text.size.large};
        }
      }

      .related-container {
        gap: 20px;
      }
    }
  `}
`,mk=({relateds_glasses:e})=>{const{settings:t}=te(),{actions:n}=Ln();return u.jsxs(fk,{"data-testid":"__related_glasses",children:[u.jsx("div",{className:"related-text-container",children:u.jsx("span",{children:"Você também pode gostar"})}),u.jsx("div",{className:"related-container",children:e.map(r=>u.jsx(Id,{...r,addItem:n.addItem,defaultImageUrl:t.default_image_url,domain:t.site_domain},r.id))})]})},gk=j.div`
  ${({theme:e})=>I`
    ${T("center","center","column")}

    position: relative;
    padding: 20px;
    width: 400px;
    height: 700px;
    gap: 40px;
    overflow: hidden;

    .product-promotion {
      ${b("center","center")}
      width: 250px;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      background-color: ${e.colors.primaryDark};
      color: ${e.colors.primaryLight};
      font-size: ${e.text.size.large};
      transform: rotate(40deg) translate(70px, -25px);
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      height: 500px;
      width: 350px;

      .product-promotion {
        height: 35px;
      }
    }

    @media (min-width: 520px) and (max-width: 767px) {
      height: 400px;
      width: 520px;

      .product-promotion {
        height: 25px;
        width: 100%;
        font-size: ${e.text.size.medium};
        transform: rotate(0deg) translate(0px, 0px);
        position: relative;
      }

      padding: 5px;
      gap: 20px;
    }

    @media (min-width: 0px) and (max-width: 519px) {
      height: 100%;
      width: 100%;

      .product-promotion {
        height: 25px;
        width: 100%;
        font-size: ${e.text.size.medium};
        transform: rotate(0deg) translate(0px, 0px);
        position: relative;
      }

      padding: 5px;
      gap: 20px;
    }
  `}
`;j.div`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;

  svg {
    transform: scale(2);
  }
`;const xk=j.div`
  ${({theme:e})=>I`
    width: 80%;
    height: auto;
    text-align: start;
    font-weight: ${e.text.weight.xsmall};
    color: ${e.colors.primaryDark};
    font-size: ${e.text.size.xxlarge};

    @media (min-width: 0px) and (max-width: 767px) {
      width: 95%;
      font-size: ${e.text.size.title};
      text-align: center;
    }
  `}
`,vk=j.div`
  ${({theme:e})=>I`
    ${T("center","center","column")}

    width: 80%;
    gap: 10px;

    button {
      width: 100%;
      height: 50px;
      background-color: ${e.colors.primaryDark};
      font-weight: ${e.text.weight.xsmall};
      color: ${e.colors.primaryLight};
      font-size: ${e.text.size.large};

      border-radius: 10px;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      width: 95%;
      button {
        height: 40px;
        font-size: ${e.text.size.medium};
      }
    }
  `}
`,yk=j.div`
  ${({theme:e})=>I`
    width: 80%;
    text-align: start;
    font-weight: ${e.text.weight.xsmall};
    color: ${e.colors.primaryDark};
    font-size: ${e.text.size.medium};

    .current {
      color: ${e.colors.primaryGreen};
      font-size: ${e.text.size.xxlarge};
    }
    .old {
      margin-left: 10px;
      text-decoration: line-through;
    }

    @media (min-width: 0px) and (max-width: 767px) {
      width: 95%;
      text-align: center;
    }
  `}
`,wk=j.div`
  width: 80%;
  height: auto;
  position: relative;
  ${T("start","start","column")}

  border-radius: 10px;
  gap: 10px;
  div {
    ${T("start","center","row")}
    gap: 10px;
    flex-wrap: wrap;
  }

  /* ${({theme:e})=>({backgroundColor:e.colors.primaryDark})} */

  .color-ball {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    margin-top: 50px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    width: 95%;
  }
`,Sk=({color:e,name:t,amount:n,installments_amount:r,installments_count:i,slug:o,images:s,final_amount:a,is_promo:l,discount:c})=>{const{actions:d}=Ln();return u.jsxs(gk,{"data-testid":"__glasses_information",children:[l&&u.jsxs("div",{className:"product-promotion",children:[c,"% OFF"]}),u.jsx(xk,{children:u.jsx("span",{children:t})}),u.jsxs(yk,{children:[u.jsxs("span",{className:"current",children:["R$",a]}),l&&u.jsxs("span",{className:"old",children:["R$",n]}),u.jsx("br",{}),u.jsxs("span",{children:["em até ",i,"x de R$",r," sem juros."]})]}),u.jsxs(wk,{children:[u.jsx("span",{children:"Cores disponiveis:"}),u.jsx("div",{children:e.map(p=>u.jsx("div",{style:{backgroundColor:p.css_color},className:"color-ball"},p.id))})]}),u.jsx(vk,{children:u.jsx("button",{type:"button",onClick:()=>{const p=Md({amount:n,name:t,slug:o,images:s},!1);d.addItem(p)},children:"Adicionar no Carrinho"})})]})},Ck=j.div`
  ${T("center","center","row")};
  width: 100%;
  height: 100px;
  position: relative;
`,Hf=j.div`
  ${b("center","center")};
  width: 25px;
  height: 100px;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.5);

  ${({$data:e})=>e==="left"?"left: 0;":"right: 0;"}

  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }
`,jk=j.div`
  ${U("row")};
  width: 100%;
  height: 100px;
  position: relative;
  overflow: hidden;
  width: ${({$width:e})=>e===1?"500px":"600px"};
`,Ak=j.div`
  opacity: ${({$isprimary:e})=>e===1?"0.4":"1"};
  position: relative;
  min-width: 100px;
  min-height: 100px;
  background-color: red;
  border: 1px solid black;
  cursor: pointer;

  transition: all linear 300ms;

  h1 {
    position: absolute;
    top: 50%;
    bottom: 50%;
    font-size: 40px;
  }

  img {
    width: 100px;
    min-height: 100%;
    max-height: 100%;
  }
`;function $l(e){e instanceof HTMLDivElement&&(e.style.visibility="hidden")}function El(e){e instanceof HTMLDivElement&&(e.style.visibility="visible")}function kk({primaryImage:e,setPrimaryImage:t,images:n}){const r=g.useRef(null),i=g.useRef(null),o=g.useRef(null),[s,a]=g.useState({firstLimit:0,lastLimit:(n.length-6)*-100,isLower:n.length<6});return g.useEffect(()=>{const l=()=>{const c=window.screen.width;c>=768&&c<1024?a(d=>({...d,isLower:n.length<4,lastLimit:(n.length-4)*-100})):c>520&&c<768?a(d=>({...d,isLower:n.length<5,lastLimit:(n.length-5)*-100})):c>0&&c<519?a(d=>({...d,isLower:n.length<3,lastLimit:(n.length-3)*-100})):a(d=>({...d,lastLimit:(n.length-6)*-100,isLower:n.length<6}))};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[]),g.useEffect(()=>{const{firstLimit:l,lastLimit:c,isLower:d}=s;if(!d){let p=0;const h=o.current;h&&(h.style.visibility="hidden");const v=i.current;r.current&&(r.current.style.marginLeft="0px"),El(v);const y=()=>{p<=c||(El(h),p-=100,r.current instanceof HTMLDivElement&&(r.current.style.marginLeft=`${p}px`),p===c&&$l(v))},w=()=>{if(p>=l){$l(h);return}El(v),p+=100,r.current instanceof HTMLDivElement&&(r.current.style.marginLeft=`${p}px`),p>=l&&$l(h)};return v==null||v.addEventListener("click",y),h==null||h.addEventListener("click",w),()=>{v==null||v.removeEventListener("click",y),h==null||h.removeEventListener("click",w)}}},[s]),u.jsx(u.Fragment,{children:u.jsxs(Ck,{children:[!s.isLower&&u.jsx(Hf,{$data:"left","data-testid":"__arrow_view_left",ref:o,children:u.jsx(X1,{})}),u.jsx(jk,{$width:s.isLower?1:0,"data-testid":"__viewer_container",children:n.map(l=>{if(l)return u.jsx(Ak,{ref:l===n[0]?r:null,onClick:()=>{t(l)},$isprimary:e===l?1:0,children:u.jsx(Vd,{url:l.url,description:l.description,isComment:!1})},l.id)})}),!s.isLower&&u.jsx(Hf,{$data:"right","data-testid":"__arrow_view_right",ref:i,children:u.jsx(Y1,{})})]})})}function Vd({url:e,description:t,domain:n,isComment:r}){return e!=null&&e.startsWith("blob:")?u.jsx("img",{src:e,alt:t}):u.jsx("img",{src:r?n+e:e,alt:t,"data-testid":"__image_profile_view"})}const Pk=j.div`
  ${T("start","center","column")};

  width: 600px;
  height: 700px;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 500px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    width: 520px;
    height: 620px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 350px;
    height: 450px;
  }
`,q1=j.div`
  width: 600px;
  height: 600px;
  overflow: hidden;
  cursor: zoom-in;

  img {
    width: 100%;
    height: 100%;
    transition: transform 0.2 ease-out;
  }

  &:hover img {
    transform: ${({$isActiveWatcher:e,$xOffset:t,$yOffset:n})=>e?`translate(${t}px, ${n}px) scale(1.5)`:"none;"};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }
  @media (min-width: 520px) and (max-width: 767px) {
    width: 520px;
    height: 520px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 320px;
    height: 320px;
  }
`,$k="/assets/default_img_1-CWdYBoWF.png",Ek="/assets/default_img_2-BgSQufO8.png",Tk="/assets/default_img_3-B4D6iqgt.jpg",Lk="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEBISExIPFREQEBASDw4QEhATEBMQFREWFhUXFRMYHiggGBslGxYXIT0hJSkrLi4uFx8zOD8tNygtLi0BCgoKDg0OGxAQGy0mIB0tNystMC4wLS8tLS8tLS0rLS0tLS8tLSs1LS0yLS0uLS0uLy0tLS0tLS0tLS01LS0tLf/AABEIALcBFAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xAA8EAACAQMBBQUFBQYHAQAAAAAAAQIDBBEhBRIxQVEGE2FxkSIygaGxBxRSYnIjM4KSwdFCQ3OisuHwU//EABgBAQEBAQEAAAAAAAAAAAAAAAACAQME/8QAKREBAQACAAQEBgMBAAAAAAAAAAECEQMSITETMkHwQlFhcYGhkbHhIv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFSoorLfACsi3F6ovdinKb4RXHzfReZYdWdX3fZh/wDRrV/pT+rJVtbRgsRXHjJ6yb6tk7t7K1ruj93WlxlGP5Ut5+v/AEe/dZ/jz5wX9CckByQ5mPffx5Rl5Saf+4s09qTTkp02kpYWq3uCfk+Jlg0RcMvhybzT1iHT2lSfFtfqT+q0JNOrGXuyi/JpludpTlxivhp9CNU2TB6ptProzN8Wekv6brC/RkAYx2teHu1G/BvP/IgXXaeFv+/nSWOOG1JLxSz0xyyzLx5j5pYeHb26tiIt7tGjRWalSEEvxNJ+hyvtF9qNSb3beO5Tlld9JPe0eNF156mqTvHVnvyn3sn/AJkpN+i4R+Bvi29vf4RdY93Z6fbfZrePvMOOMuM1H+bGF8WbDCSaTTTTSaaeU0+DTPn23hk619nVw5We43+5qSjH9DSkl82vgVjnbdUmrNtpAB0YAAAAAAAAAAAAAAAAAAAAAAAApqPCLE6SljKzrnD6kiSyWu7b09fIytVwXp9SsA1gCxcXdOmm5zhFL8Ukvqa5c9vrGDaUpNrriC9ZNHPLi4Y96qYZXtG1A1zZ3aqnctKlK13nwjK4puf8kdTKujcS41YQ/wBOGfnJmTiy+WW+/rpvJrvU1vHH1INXakM7tNSqS/DT1S85cERJ0qTeH31xJcsuUV9Iohdpdvq0tamIujUwlTc9xRSfvzi02nuQUpY8Ec7xrfXX7/zf8rmE9+9sB277TVKC7uU8VJ6Rt6L9p6LjNrhrxWV01TRzqU6lZuVSSc85hTWVTiue6s6y8Xlvqe3lzUualS7qe9XlmCTzGFJaQhHwS9dXzLO8c8OFq8161x4vGt/5nSKrmCaw0m8e0/HOmvUiKzWcp4fz9USGyqB0sjjjlV20lOLSfDq9fmda+zZPuar5OccfynMrGk5tRXP5HW+w9p3dvLVtuo8t+SxhctNPgbhLzR6JZytiAB6EgAAAAAUVKqjyl8It/QrKZxTWHwYHlKrGSzFp+XLz6FZEnRnF5g89YyevqYd9qFSnNXFOcKSluq4jFzpweFpUSzKP6sY64IucndXLvs2MFu3rwqRU4SjOElmM4NSjJdU1oy4WkAAAAAAAABHvrynRg5zklFerfRLr/ZnP9u9uKtXehbJRhw795/24w356LjxIyz0dJN1v95fUqMXKpOEIri5NI1TaH2j2kMqjGrXlrrTWKef1vQ5/WhKq96rKVSXJ1HlL9MPdXwR5Oi+WhFyyrneLPSNhuu39/Vz3cKFFdZb1Wa+Gi+Zhbva17W/eXdd/lptU4+kdfmRcY/qj1rJNm+6LxckWpawessyfWcpT/wCTKPulNcIU/wCWJKlF+BadNhG7UOvZUpLDp035xiZXsn2iuqN1b2E68pWtxXpqHePfnBap0lOWu421o88Fw1zEdJ9THU7aFCv3sl3lSpVpdw2lmlKM4vKbzw8Ohlm5p24OWsn0hTgorCWF0OefbZaTnY78XiMJrvsPDdNqUWn1WZRfwOgXUpKEnHG8otrPDJqfalTvbG4glDCp4UNXUdZJSjpwSbWOfyL4txmsffR6MZe7kux7N0rPdqSbqb0njLcY08ezjPDyIzZPjdRq04tLSSTefmvUoUV0Rmnkyu6iRi3wTJltZyfF4+pcgiXboabiy+yLdRxhfHmdS2JR3KEF1W8/i9Plg592ftXOcV1aR0+EUkkuCSS8kdMI7+j0AFsAAAAAAorVVFZecZS0TfF4Kyzd0FUhKDylJYytGvIC8UVKUZLDSeStAWbGuVezCpSlUs6krepJ5lGGtCb/AD0X7LfisPxLa7TVLf2b2hKmlp96oKdW3fjOKW/S+Ka8TZyipTUtGkzl4dnkv49F80vmW7O8pVoKdKcKkJcJ05KUX8UXzWrzshR33VoSqW9ZvMqtvLu3J/nivZn/ABJln77tS1/eU6V3TX+OnihcY8YP9nN+TiZ4vL55r+m8m/LW1gwFh2ws6slCU5UKr/yLqLozz4b3sy/hbM8mdZlMusRZZ3ehgxnaatuWdxLLWKNTVcdYtaeOot1Nk6uY7f2u9pXMp5f3WjKULeHKfJzfXP0wupZlFFFnSUIRj0Sz58/mXq6RykebPLmqy0USZVJluTCFurHPmR95p/VEiTLNRZAb2Szc1dyEpYzhPC6vkjyWV/cg7WrNU9OOr9EZVYzd0h0tqZlpN72fdllZ/hZnNhWautpWlPGVGSqTy3pj2msdd1ZNa2bQit5za9pbzl0WrliXlzOnfYxsjMq15Lg13NJZbXHL1fHC3VnxYwnV6dTe3VTVXs2f3zu99xpTjJyjw30tYbr5SUufTJtRHu7VVN15xKD3oTXFP+q8C+JhMp9l4ZcrhXafZMtn31Sg891WbrW08YTUvfj8HnT+5Gizsfbns4r+23Uo9/RfeW0nw7xLWLfJSWnho+RxdNptNNNNqUWsSjJPDTXJp6C46cM512kxJtqtSBTkZrYts6lSMUsttJIkxjfexVjxqNe6sLzf/X1NtI2zrRUacYLktX1fMknWTUdaAA1gAAAAAAAAAAAAABgAQr7ZVCvFxqU4Si+MZRTXo9DX5dkZ0Muzua9DmqSl3lDPjRnlL4NG2g5ZcHC9e32XOJlGmS2ntajpVt4VlF537WcKbmujp1f8T04Sx5GG7Y9ra87GvGVjd0FhJ1KypbjW9FJezJvVtI6YYHttbb9jWSxlKMtfyzTOd4WU+JXPj8nNdm2d5UpKtOnSjTlCM4bs5uWHqstxUOH5soplI8bKJMqS+rw5WXtCTLcmJMtyZqCTKGw2UNhoyLe0sPhnTEscVxzj5EzKSTaeuuU+GpTOsk3hLzy/pyMs3F43V2x1DZMq+7QgsyqyjGklo1l516Lm+iTZ37YOyoWdtSt4e7SglnhvS4yk/Ntv4msfZ72a7mP3mqv2tSOKUHxp03z8JS+S82bsdMMdR3m/UABbQ0Dt52KlWk7m2iu9f76isLvML34/mxxXPz47+BZssfPdOhUU+7cJqpnHduMt/PTd45Or9iOzcrePe1lirJexT5wi+v5n05G2YPSZiToAAoAAAAAAAAAAAAAAAAAAAAAAg7doudrXiuLo1MLx3Xj5k4AcSTyUSMp2n2XK0uJQx+zm3Ki+Tg3w81w9OpiHM5PNZpRNlqUi5KRGqPBidKnIqpy0ePe+ePAjSqCjGc5KMFKU20oxim5N+CQbIvV63LRvCz5m7dhOyLm43NxH2FiVGlJe8+UpL8PRc/LjL7I9hdxqtdJOfGFDjGL6z6vw4fQ34qY/N2xw11oADo6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbX2XSuqbp1Y5XGMlpKMvxRfJ/+Zzra/Ye7pNulitDlutRqJeMG9fg35I6kDLNsuMrhNxYXEHiVCvF/mpVF/Qoo7Ju6rxC3uJePdzS9WsI7yCeRPhxyjZH2c3VRp15RpR5xTU6notF6nQdh9nbazX7KHtY9qrL2qj+PLyWDLA2YyKmMgACmgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=",Rk="/assets/default_img_5-BpRFnyBp.jpg",_k="/assets/default_img_6-Cl0Dwk1J.png",zk="/assets/default_img_7-jbqXo8S8.jpg",Dk=[{url:$k,description:"default image 1",id:1},{url:Ek,description:"default image 2",id:2},{url:Tk,description:"default image 3",id:3},{url:Lk,description:"default image 4",id:4},{url:Rk,description:"default image 5",id:5},{url:_k,description:"default image 6",id:6},{url:zk,description:"default image 7",id:7}];function Nk(){const e=Dk,[t,n]=g.useState(e[0]),{settings:r}=te();return u.jsx(Pk,{"data-testid":"__images_viewer_container",children:t!==null?u.jsxs(u.Fragment,{children:[u.jsx(Mk,{url:t.url,description:t.description}),u.jsx(kk,{primaryImage:t,images:e,setPrimaryImage:n})]}):u.jsx(u.Fragment,{children:u.jsx(q1,{children:u.jsx(Vd,{isComment:!1,url:r.default_image_url,description:"Não há imagem"})})})})}function Mk({url:e,description:t}){const[n,r]=g.useState(!1),i=g.useRef(null),o=s=>{if(n){const{clientX:a,clientY:l,currentTarget:c}=s,{width:d,height:p,left:h,top:v}=c.getBoundingClientRect(),y=((a-h)/d-.5)*150,w=((l-v)/p-.5)*150;i.current&&(i.current.style.transform=`translate(${y}px, ${w}px) scale(1.5)`)}else i.current&&(i.current.style.transform="none")};return u.jsx(q1,{$isActiveWatcher:n,"data-testid":"__primary_image",onClick:()=>r(!0),onMouseLeave:()=>r(!1),onMouseMove:o,children:u.jsx("img",{ref:i,src:e,alt:t,"data-testid":"__image_profile_view"})})}const Ik=j.div`
  width: 80%;
  height: auto;
  padding: 50px;

  @media (min-width: 0px) and (max-width: 767px) {
    margin-top: 80px;
    width: 100%;
    padding: 50px 10px;
  }
`,Ok=j.div`
  ${({theme:e})=>I`
    ${T("start","start","column")}
    gap: 15px;
    padding: 20px;

    &.close {
      max-height: 0px;
      overflow: hidden;
      opacity: 0;
    }
    &.open {
      max-height: 1000px;
      opacity: 1;
    }
    transition:
      opacity 500ms ease-in-out,
      max-height 300ms linear;
    .tb-container {
      width: 100%;
      height: auto;
      ${T("start","start","row")}
    }
    .tb-title {
      width: 10%;

      height: 20px;
      font-size: ${e.text.size.large};
      font-weight: ${e.text.weight.xsmall};
    }

    .tb-value {
      width: 80%;
      word-wrap: break-word;
      font-size: ${({theme:t})=>t.text.size.medium};
    }

    @media (min-width: 0px) and (max-width: 767px) {
      width: 100%;

      .tb-title {
        width: 120px;
      }

      .tb-value {
        width: calc(100% - 120px);
      }
    }
  `}
`,bk=j.div`
  ${({theme:e})=>({borderTop:`1px solid ${e.colors.primaryLight}`,borderBottom:`1px solid ${e.colors.primaryLight}`})}
  width: 100%;
  height: 100px;
  ${b("center","center")}
  cursor: pointer;
  position: relative;
  span {
    ${({theme:e})=>({fontSize:e.text.size.xlarge,fontWeight:e.text.weight.xsmall,color:e.colors.secondaryDark})}
  }

  svg {
    position: absolute;
    transform: scale(2)
      ${({$isOpen:e})=>e==="true"?"rotate(180deg)":"rotate(0deg)"};
    right: 0;
    transition: transform 300ms linear;
  }
`;function mi(e){let t="";return e.forEach(n=>{t+=`, ${n.name}`}),t.slice(2)}const Z1=g.createContext(null),yo=()=>{const e=g.useContext(Z1);if(!e)throw new Error("useGlassesContext() must be wrapped inside GlassesProfileContextProvider.");return e};function Vk({children:e,value:t}){return u.jsx(Z1.Provider,{value:t,children:e})}function De({title:e,value:t}){return u.jsxs("div",{className:"tb-container",children:[u.jsx("div",{className:"tb-title",children:u.jsxs("span",{children:[e,":"]})}),u.jsx("div",{className:"tb-value",children:u.jsxs("span",{children:[t,"."]})})]})}const Fk=g.memo(()=>{const{color:e,brand:t,shape:n,model:r,category:i,warranty:o,description:s}=yo();return u.jsxs(u.Fragment,{children:[u.jsx(De,{title:"Descrição",value:s}),u.jsx(De,{title:"Marca",value:mi(t)}),u.jsx(De,{title:"Formato",value:mi(n)}),u.jsx(De,{title:"Modelo",value:mi(r)}),u.jsx(De,{title:"Categoria",value:mi(i)}),u.jsx(De,{title:"Cor",value:mi(e)}),u.jsx(De,{title:"Garantia",value:o})]})}),Bk=g.memo(()=>{const{material:e,height:t,width:n,rim:r,bridge:i,temple:o,nose_pads:s,gender:a}=yo();return u.jsxs(u.Fragment,{children:[u.jsx(De,{title:"Material",value:e}),u.jsx(De,{title:"Altura",value:t}),u.jsx(De,{title:"Largura",value:n}),u.jsx(De,{title:"Aro",value:r}),u.jsx(De,{title:"Ponte",value:i}),u.jsx(De,{title:"Hastes",value:o}),u.jsx(De,{title:"Protetor",value:s}),u.jsx(De,{title:"Genero",value:a})]})});function Gf({title:e,isDescription:t}){const[n,r]=g.useState(!1);return u.jsxs(u.Fragment,{children:[u.jsxs(bk,{$isOpen:n?"true":"false",onClick:()=>{r(!n)},children:[u.jsxs("span",{children:[e,":"]})," ",u.jsx(Ra,{})]}),u.jsx(Ok,{className:n?"open":"close",children:t?u.jsx(Fk,{}):u.jsx(Bk,{})})]})}const Uk=()=>u.jsxs(Ik,{children:[u.jsx(Gf,{title:"Descrição",isDescription:!0}),u.jsx(Gf,{title:"Especificação",isDescription:!1})]}),Wk=()=>{const{id:e,name:t,amount:n,installments_amount:r,installments_count:i,color:o,slug:s,images:a,final_amount:l,is_promo:c,discount:d}=yo();return u.jsxs(u.Fragment,{children:[u.jsxs(hk,{children:[a?u.jsx(Nk,{images:a}):u.jsx("h1",{children:"no image found"}),u.jsx(Sk,{name:t,amount:n,installments_amount:r,installments_count:i,color:o,slug:s,images:a[0],final_amount:l,is_promo:c,discount:d},e)]}),u.jsx(Uk,{})]})},Hk=ei`
  0% {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 300ms, transform 300ms;
  }
  100% {
    opacity: 1;
    transform: translateY(0);

  }
`,Xr=I`
  width: max-content;
  height: max-content;
`,J1=j.div`
  width: 90%;
  height: auto;
  position: relative;
  padding: 10px 0px;
  animation: ${Hk};
  animation-duration: 3s;
  transition: 300ms all linear;

  &::after {
    content: '';
    width: 100%;
    margin-top: 20px;
    border-top: 1px solid ${({theme:e})=>e.colors.primaryLight};
    position: absolute;
  }
`,Gk=j.div`
  ${T("center","center","column")};
  width: 100%;
  height: auto;
  gap: 25px;

  ${J1}:nth-child(1) {
    margin-top: 25px;
    &::before {
      content: '';
      width: 100%;
      border-top: 1px solid ${({theme:e})=>e.colors.primaryLight};
      position: absolute;
      transform: translateY(-15px);
    }
  }

  button {
    width: 200px;
    height: 40px;
    margin-top: 20px;
    ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.secondaryDark})}
  }
`,Kk=j.div`
  ${({theme:e})=>I`
    margin-top: 10px;
    ${Xr};
    max-width: 70%;

    h3 {
      font-size: 25px;
    }
    word-wrap: break-word;

    @media (min-width: 0px) and (max-width: 767px) {
      h3 {
        font-size: ${e.text.size.medium};
      }
    }
  `}
`;j.div`
  ${Xr};
`;const Qk=j.div`
  ${T("center","center","row")}
  gap: 10px;
  ${Xr};

  p {
    font-size: 20px;
    font-weight: 500;
  }

  div[content='user'] {
    ${b("center","center")}
    width: 40px;
    height: 40px;
    background-color: darkgray;
  }

  svg {
    transform: scale(1.4);
  }

  .delete-post {
    ${U("row")};
    margin-left: 20px;
    gap: 5px;
    cursor: pointer;

    &:hover {
      background-color: ${({theme:e})=>e.colors.primaryLight};
    }
  }

  @media (min-width: 520px) and (max-width: 768px) {
    p,
    span {
      font-size: 15px;
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    p {
      font-size: 15px;
    }
    gap: 5;
    div[content='user'] {
      ${b("center","center")}
      width: 25px;
      height: 25px;
      background-color: darkgray;
    }
    svg {
      transform: scale(1.1);
    }
    .delete-post {
      margin-left: 0px;
      gap: 5px;
      font-size: 12px;
    }
  }
`;j.div`
  ${Xr};
`;const Xk=j.div`
  ${T("center","end","column")}
  ${Xr};
  position: absolute;
  right: 0;
  margin-right: 10px;
  color: black;

  .fa-solid {
    color: black;
  }
  .fa-regular {
    color: darkgray;
  }

  div {
    ${Xr};
  }

  @media (min-width: 520px) and (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    font-size: 10px;
  }
`,Yk=j.div`
  ${({theme:e})=>I`
    max-width: 70%;
    font-size: ${e.text.size.medium};
    font-weight: 100;
    word-wrap: break-word;

    @media (min-width: 0px) and (max-width: 767px) {
      font-size: ${e.text.size.small};
    }
  `}
`,qk=j.div`
  ${U("row")}
  width: 100%;
  height: auto;
  margin-top: 20px;
  gap: 10px;
  img {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    gap: 5px;
    img {
      width: 140px;
      height: 140px;
    }
  }

  @media (min-width: 400px) and (max-width: 519px) {
    gap: 5px;
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media (min-width: 0px) and (max-width: 399px) {
    gap: 10px;
    flex-direction: column;
    img {
      width: 200px;
      height: 200px;
    }
  }
`,ev=3,tv=2,Zk=tv*1024*1024,_a=[1,2,3,4,5],nv="LOGIN",rv="LOGOUT",iv="UPDATE",Jk=e=>({logIn:t=>{e({type:nv,payload:t})},logOut:()=>{e({type:rv})},updateToken:t=>{e({type:iv,payload:t})}}),eP=(e,t)=>{switch(t.type){case nv:return{isAuthenticated:!0,info:t.payload.user,token:t.payload.token};case rv:return lv;case iv:return{...e,token:t.payload};default:return e}},tP={400:"Bad request",401:"Permission denied",404:"Failed to fetch data",405:"Method not allowed",500:"Something went wrong"};function nP(e){return`Error: ${tP[e]||"Unknow error has ocurred."}.`}async function ov(e){const t=await fetch(e,{method:"GET",credentials:"include"});if(!t.ok)throw new Error("Algo deu errado, por favor, tente novamente mais tarde.");return t}async function rP(e,t){return await fetch(e.urls.login,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":t},body:JSON.stringify(e.userInfo),credentials:"include"})}async function sv(e,t){return await fetch(t,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},credentials:"include"})}async function iP(e){return await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"})}async function oP(e){const t=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!t.ok){const n=nP(t.status);throw new Error(n)}return!1}async function sP(e,t,n,r,i){let o={Authorization:`Bearer ${r}`};return n==="json"&&(o["Content-Type"]="application/json"),await fetch(e+i,{method:"POST",headers:o,body:t instanceof FormData?t:JSON.stringify(t),credentials:"include"})}async function aP(e){const t=await iP(e.refresh);if(t.status!==200)return null;const n=await t.json(),r=await sv(n.access,e.get_user_data);return r.ok?{user:await r.json(),token:n}:null}const av=g.createContext(void 0),lP=({children:e})=>{const[t,n]=g.useState(!0),{api:r}=te(),[i,o]=g.useReducer(eP,lv),s=g.useRef(Jk(o));if(g.useEffect(()=>{(async()=>{try{await aP(r).then(c=>{c&&s.current.logIn(c)})}catch{}})().then(()=>{n(!1)})},[]),t)return u.jsx(he,{class:"context-loading"});const a={user:i,actions:s.current};return u.jsx(av.Provider,{value:a,children:e})},lv={isAuthenticated:!1,info:null,token:null},sr=()=>{const e=g.useContext(av);if(!e)throw Error("useAuthContext must be used inside of AuthContextProvider");return e};function uP(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Circle_Check"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M15.81,10.4a.5.5,0,0,0-.71-.71l-3.56,3.56L9.81,11.52a.5.5,0,0,0-.71.71l2.08,2.08a.513.513,0,0,0,.71,0Z"},child:[]},{tag:"path",attr:{d:"M12,21.934A9.934,9.934,0,1,1,21.933,12,9.945,9.945,0,0,1,12,21.934ZM12,3.067A8.934,8.934,0,1,0,20.933,12,8.944,8.944,0,0,0,12,3.067Z"},child:[]}]}]}]})(e)}function cP(e){return G({tag:"svg",attr:{version:"1.1",id:"search",x:"0px",y:"0px",viewBox:"0 0 24 24",style:"enable-background:new 0 0 24 24;"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:`M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
		c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
		 M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
		z`},child:[]}]}]})(e)}function Fd(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Star"},child:[{tag:"path",attr:{d:"M16.6,20.463a1.5,1.5,0,0,1-.7-.174l-3.666-1.927a.5.5,0,0,0-.464,0L8.1,20.289a1.5,1.5,0,0,1-2.177-1.581l.7-4.082a.5.5,0,0,0-.143-.442L3.516,11.293a1.5,1.5,0,0,1,.832-2.559l4.1-.6a.5.5,0,0,0,.376-.273l1.833-3.714a1.5,1.5,0,0,1,2.69,0l1.833,3.714a.5.5,0,0,0,.376.274l4.1.6a1.5,1.5,0,0,1,.832,2.559l-2.965,2.891a.5.5,0,0,0-.144.442l.7,4.082A1.5,1.5,0,0,1,16.6,20.463Zm-3.9-2.986L16.364,19.4a.5.5,0,0,0,.725-.527l-.7-4.082a1.5,1.5,0,0,1,.432-1.328l2.965-2.89a.5.5,0,0,0-.277-.853l-4.1-.6a1.5,1.5,0,0,1-1.13-.821L12.449,4.594a.516.516,0,0,0-.9,0L9.719,8.308a1.5,1.5,0,0,1-1.13.82l-4.1.6a.5.5,0,0,0-.277.853L7.18,13.468A1.5,1.5,0,0,1,7.611,14.8l-.7,4.082a.5.5,0,0,0,.726.527L11.3,17.477a1.5,1.5,0,0,1,1.4,0Z"},child:[]}]}]})(e)}function dP(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"User"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M17.438,21.937H6.562a2.5,2.5,0,0,1-2.5-2.5V18.61c0-3.969,3.561-7.2,7.938-7.2s7.938,3.229,7.938,7.2v.827A2.5,2.5,0,0,1,17.438,21.937ZM12,12.412c-3.826,0-6.938,2.78-6.938,6.2v.827a1.5,1.5,0,0,0,1.5,1.5H17.438a1.5,1.5,0,0,0,1.5-1.5V18.61C18.938,15.192,15.826,12.412,12,12.412Z"},child:[]},{tag:"path",attr:{d:"M12,9.911a3.924,3.924,0,1,1,3.923-3.924A3.927,3.927,0,0,1,12,9.911Zm0-6.847a2.924,2.924,0,1,0,2.923,2.923A2.926,2.926,0,0,0,12,3.064Z"},child:[]}]}]}]})(e)}function pP(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Warning"},child:[{tag:"g",attr:{},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M12.5,8.752a.5.5,0,0,0-1,0h0v6a.5.5,0,0,0,1,0Z"},child:[]},{tag:"circle",attr:{cx:"11.999",cy:"16.736",r:"0.5"},child:[]}]},{tag:"path",attr:{d:"M18.642,20.934H5.385A2.5,2.5,0,0,1,3.163,17.29L9.792,4.421a2.5,2.5,0,0,1,4.444,0L20.865,17.29a2.5,2.5,0,0,1-2.223,3.644ZM12.014,4.065a1.478,1.478,0,0,0-1.334.814L4.052,17.748a1.5,1.5,0,0,0,1.333,2.186H18.642a1.5,1.5,0,0,0,1.334-2.186L13.348,4.879A1.478,1.478,0,0,0,12.014,4.065Z"},child:[]}]}]}]})(e)}const hP=j.div`
  ${b("center","center")};
  /* width: ${()=>window.innerWidth}; */
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
`,qu=j.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 2px;
  cursor: pointer;
  z-index: 10;

  [modal-content='modal-closer'] {
    transform: scale(2);
  }
  &:hover [modal-content='modal-closer'] {
    color: gray;
  }
`,fP=j(Xt)`
  ${T("center","center","column")}
  position: relative;
  width: 600px;
  min-height: 200px;
  height: auto;
  border-radius: 20px;

  @media (min-width: 0px) and (max-width: 768px) {
    width: 90%;
    ${qu} {
      margin-right: 25px;
    }
  }

  @media (min-width: 0px) and (max-width: 520px) {
    ${qu} {
      margin-right: 15px;
    }
  }
`,mP={close:{y:500,opacity:0},open:{y:0,opacity:1}};function gP(e){return u.jsx(hP,{children:u.jsxs(fP,{variants:mP,initial:"close",exit:"close",animate:"open",children:[u.jsx(qu,{onClick:e.handler,children:u.jsx(gA,{"modal-content":"modal-closer"})}),e.children]})})}const Zu=j.div`
  ${b("center","center")}
  width: 80%;
  height: auto;

  span {
    text-align: center;
    font-size: 20px;
  }
`,Zs=j.button`
  width: 100px !important;
  height: 30px;

  ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.secondaryDark})}
`,xP=j.div`
  ${({theme:e})=>I`
    ${T("center","center","column")}
    width: 100%;
    min-height: 200px;
    border-radius: 20px;
    &.success {
      background-color: ${e.colors.primaryGreen};
      color: ${e.colors.secondaryDark};
      ${Zs} {
        background-color: ${e.colors.primaryLight};
        color: ${e.colors.secondaryDark};
      }
    }
    &.warning {
      background-color: ${e.colors.primaryLight};
      color: ${e.colors.secondaryDark};

      ${Zs} {
        background-color: ${e.colors.secondaryDark};
        color: ${e.colors.primaryLight};
      }
    }

    @media (min-width: 0px) and (max-width: 768px) {
      width: 90%;

      ${Zu} {
        margin-top: 20px;
        span {
          font-size: ${e.text.size.medium};
        }
      }
    }

    @media (min-width: 0px) and (max-width: 520px) {
      ${Zu} {
        margin-top: 20px;
        span {
          font-size: ${e.text.size.small};
        }
      }
    }
  `}
`,vP=j.div`
  ${T("center","center","row")}
  gap: 20px;
  width: 100%;
  height: auto;
`,yP=j.div`
  ${T("center","center","column")}

  width: 100%;
  height: 200px;
  gap: 30px;
  position: relative;

  .icon-related {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 20px;
    margin-left: 20px;
    svg {
      transform: scale(3);
    }
  }
`;function An({mode:e,message:t,handler:n,secondaryHandler:r,text:i,secondaryText:o}){return u.jsx(gP,{handler:n,children:u.jsx(xP,{"data-testid":"__warning_modal",className:e,children:u.jsxs(yP,{children:[u.jsxs("div",{className:"icon-related",children:[e==="warning"&&u.jsx(pP,{}),e==="success"&&u.jsx(Od,{})]}),u.jsx(Zu,{children:u.jsx("span",{children:t})}),u.jsxs(vP,{children:[o&&u.jsx(Zs,{onClick:r,children:o}),u.jsx(Zs,{onClick:n,children:i})]})]})})})}const wP=`É permitido enviar no máximo ${ev} arquivos.`,SP=`Arquivos não podem ultrapassar o tamanho de ${tv}MB.`,CP='Somente arquivos "PNG" e "JPG" são permitidos.',jP="É obrigátorio especificar a cor do Óculos avaliado",AP="É obrigátorio dar uma nota a avaliação do Óculos.",kP="Ó titulo não pode estar vazio.",PP="O comentário nao pode estar vazio.",$P="Comentário criado com sucesso! Obrigado pela sua avaliação.";function uv({handler:e,message:t}){return u.jsx(An,{mode:"success",text:"Ok",handler:e,message:t||$P})}function EP({slug:e,token:t,commentId:n,deleteComment:r}){const[i,o]=g.useState(!1),[s,a]=g.useState(!1),{api:l}=te(),c=()=>o(!1);if(!i)return u.jsxs("div",{onClick:()=>{o(!0)},className:"delete-post",children:[u.jsx(u5,{}),u.jsx("span",{children:"Excluir"})]});if(s)return u.jsx(uv,{message:"Comentário excluído com sucesso!",handler:()=>r(n)});const d=async()=>{(await fetch(l.comments+`${e}/${n}`,{headers:{Authorization:`Bearar ${t}`},method:"DELETE",credentials:"include"})).status===204?a(!0):c()};return u.jsx(An,{mode:"warning",message:"Tem certeza que deseja excluir sua avaliação?",text:"Não",secondaryText:"Sim",handler:c,secondaryHandler:d})}async function TP(e,t,n,r){const i=e+`${t}/page/${n}?order=${r}`,o=await fetch(i);return o.ok?await o.json():null}const LP=j.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 50px;
  position: relative;
  gap: 20px;

  .total-assessment {
    position: absolute;
    left: 40%;
    font-size: ${({theme:e})=>e.text.size.large};
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    .total-assessment {
      position: relative;
      left: 0%;
    }
  }
`,RP=j.div`
  width: max-content;
  height: 30px;

  select {
    width: 100%;
    font-size: 20px;
    color: black;
    /* -webkit-appearance: none; */
    padding: 5px;
    border-radius: 3px;

    option:hover {
      color: blue;
      background-color: black;
      cursor: pointer;
    }
  }

  @media (min-width: 0px) and (max-width: 520px) {
    width: 80%;
    select {
      font-size: 12px;
    }
  }
`,_P=({setCommentArray:e,orderBy:t,max:n})=>u.jsxs(LP,{children:[u.jsxs("span",{className:"total-assessment",children:["Total de ",n," avaliações."]}),u.jsx(RP,{children:u.jsxs("select",{name:"filters",id:"filter-comments",onChange:r=>{r.target instanceof HTMLSelectElement&&r.target.value!==null&&e(i=>({...i,orderBy:r.target.value,comments:[]}))},defaultValue:t,children:[u.jsx("option",{value:"higher",children:"Comentários com maiores avaliações"}),u.jsx("option",{value:"lower",children:"Comentários com menores avaliações"}),u.jsx("option",{value:"newer",children:"Comentários mais recentes"}),u.jsx("option",{value:"older",children:"Comentários mais antigos"}),u.jsx("option",{value:"image",children:"Comentários que possuem fotos"})]})})]}),zP=g.memo(_P);function DP(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(e)}function NP(e){return G({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Bd(e){return G({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(e)}function cv(e){return G({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"},child:[]}]})(e)}function dv(e){return G({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function MP({commentArray:e,setCommentArray:t,slug:n}){const[r,i]=g.useState(!0),{settings:o}=te(),{user:s}=sr(),{api:a}=te(),{comments:l,orderBy:c,limit:d,max:p}=e,h=Math.ceil(l.length/5+1||1);g.useEffect(()=>{v()},[c,n]);const v=async()=>{try{i(!0);const w=await TP(a.comments,n,h,c);if(w){const{new_comments:S,limit:m,max:f}=w;t(x=>{const C=[...x.comments,...S];return{...x,comments:C,limit:m,max:f}})}}finally{i(!1)}},y=w=>{t(S=>{const m=S.comments.filter(f=>f.id!==w);return{...S,comments:m,max:S.max-1}})};return u.jsx(u.Fragment,{children:l.length!==0?u.jsxs(u.Fragment,{children:[u.jsx(zP,{setCommentArray:t,orderBy:c,max:p}),u.jsxs(Gk,{"data-testid":"__comments_data",children:[l.map(w=>u.jsx(IP,{...w,currentUser:s,slug:n,deleteComment:y,domain:o.site_domain},w.id)),r?u.jsx(he,{width:"200px",height:"400px",init:10,finish:14}):h<=d&&u.jsx("button",{onClick:v,type:"button",children:"Carregar mais avaliações"})]})]}):r?u.jsx(he,{height:"400px",init:10,finish:14}):u.jsx(or,{text:"Infelizmente ainda não há avaliações"})})}function IP({user:e,title:t,text:n,images_comments:r,created_at:i,rating:o,color:s,id:a,currentUser:l,slug:c,deleteComment:d,domain:p}){var v,y,w;const h=`${e.first_name} ${e.last_name}`;return u.jsxs(J1,{children:[u.jsxs(Xk,{children:[u.jsx("div",{className:"detail-date",children:u.jsx("span",{children:i})}),u.jsx("div",{className:"detail-rate",children:_a.map(S=>S>o?u.jsx(Fd,{},S):u.jsx(Bd,{},S))}),u.jsx("div",{className:"detail-color",children:u.jsx("span",{children:s.name})})]}),u.jsxs(Qk,{children:[u.jsx("div",{content:"user",children:((v=l.info)==null?void 0:v.id)===e.id?u.jsx(cv,{}):u.jsx(dv,{})}),u.jsx("p",{children:h}),((y=l.info)==null?void 0:y.id)===e.id?u.jsx(EP,{commentId:a,slug:c,token:((w=l==null?void 0:l.token)==null?void 0:w.access)||"",deleteComment:d}):""]}),u.jsx(Kk,{children:u.jsx("h3",{children:t})}),u.jsx(Yk,{children:u.jsx("p",{children:n})}),r?u.jsx(qk,{children:r.map((S,m)=>u.jsx(Vd,{domain:p,isComment:!0,url:S.image,description:`Imagem review ${m+1} do usuário ${h}`},S.id))}):u.jsx(u.Fragment,{})]})}const OP=j.div`
  ${T("center","center","column")}

  gap: 25px;
  width: 80%;
  padding: 20px;

  input[type='text'],
  textarea {
    border: 1px solid ${({theme:e})=>e.colors.primaryLight};
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`,bP=j.div`
  ${T("start","start","column")}
  width: 80%;
  height: max-content;

  gap: 10px;
  input {
    width: 100%;
    height: 30px;
    padding: 5px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`,VP=j.div`
  ${T("start","start","column")}
  width: 80%;
  height: max-content;
  gap: 10px;

  textarea {
    text-align: start;
    padding: 5px;
    width: 100%;
    height: 200px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
  }
`,FP=j.div`
  ${T("center","center","column")};
  gap: 25px;

  width: 80%;

  img {
    width: 200px;
    height: 200px;
  }

  .input-file {
    width: 200px;
    text-align: center;

    input[type='file'] {
      display: none;
    }

    label {
      width: 200px;
      height: 100px;
      cursor: pointer;
      &:hover {
        svg {
          color: ${({theme:e})=>e.colors.secondaryDark};
        }
      }
      transition: all 300ms linear;

      svg {
        width: 100%;
        height: 100%;
        color: ${({theme:e})=>e.colors.primaryLight};
      }
    }
  }
  .uploaded-files {
    ${U("column")}
    gap: 30px;
    text-align: center;
    width: 80%;

    div {
      width: 100%;
      ${T("center","center","row")}
      gap: 20px;
      flex-wrap: wrap;
    }
  }
`,BP=(e,t)=>n=>{if(n.target instanceof HTMLInputElement&&n.target.files!==null){const r=n.target.files;if(r.length>ev){t(wP);return}for(const o of r){if(o.size>Zk){t(SP);return}if(!o.type.match("image/jpeg")&&!o.type.match("image/png")){t(CP);return}}const i=Array.from(r);e(i),t(null)}};function pv({message:e,setterHandler:t}){return u.jsx(An,{message:e,handler:t,mode:"warning",text:"Ok"})}function UP({fileRef:e}){const[t,n]=g.useState([]),[r,i]=g.useState(null);function o(){n([]),i(null)}return r?u.jsx(pv,{message:r,setterHandler:o}):u.jsx(u.Fragment,{children:u.jsxs(FP,{children:[u.jsxs("div",{className:"input-file",children:[u.jsx("span",{children:"Deseja adicionar imagens?"}),u.jsx("input",{onChange:BP(n,i),ref:e,type:"file",id:"form-images",name:"images",accept:"image/png, image/jpeg",multiple:!0}),u.jsx("label",{htmlFor:"form-images",children:u.jsx(JA,{})})]}),t.length>0&&u.jsxs("div",{className:"uploaded-files",children:[u.jsx("span",{children:"Imagens adicionadas até agora:"}),u.jsx("div",{children:t.map((s,a)=>u.jsx("img",{src:URL.createObjectURL(s),alt:"unknow"},a+1))})]})]})})}function WP({titleRef:e,defaultTitleValue:t,textRef:n,defaultTextValue:r,fileRef:i}){return u.jsxs(OP,{children:[u.jsx(bP,{children:u.jsx("input",{ref:e,name:"title",type:"text",id:"comment-title",defaultValue:t,placeholder:"Digite aqui o titulo do comentário"})}),u.jsx(VP,{children:u.jsx("textarea",{ref:n,name:"comment",id:"comment-text",defaultValue:r,placeholder:"Digite aqui o seu comentário"})}),u.jsx(UP,{fileRef:i})]})}const HP=j(Xt)`
  ${T("center","center","column")}
  gap: 50px;
  width: 100%;
  height: auto;
  padding: 50px;
  color: ${({theme:e})=>e.colors.secondaryDark};
  overflow: hidden;

  .mk-comment-options {
    ${T("center","center","row")}
    width: 100%;
    gap: 20px;
    button {
      width: 200px;
      height: 40px;
      ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight,fontSize:e.text.size.medium})}

      &:hover {
        ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.primaryDark})}
      }
    }
  }
`,GP=j.div`
  ${T("center","center","column")}

  width: 100%;
  height: 100%;
  gap: 50px;

  div[content='rating'] {
    ${T("center","center","column")}
    width: max-content;
    height: max-content;
    gap: 10px;

    div {
      ${U("row")}
      gap: 3px;

      i {
        cursor: pointer;
      }
    }
  }

  div[content='colors'] {
    ${T("center","center","column")}
    gap: 3px;
  }
`,Wo=(e,t)=>()=>{e(t)},Kf=(e,t)=>()=>{e(t)};function KP({ratingRef:e,defaultRatingValue:t}){const[n,r]=g.useState(t),[i,o]=g.useState(n);return u.jsxs(u.Fragment,{children:[u.jsx("span",{children:"Qual é a sua avaliação?"}),u.jsx("div",{"data-selected":n,ref:e,children:_a.map(s=>i===null||s>i?u.jsx(Fd,{onMouseEnter:Wo(o,s),onMouseLeave:Wo(o,n),onClick:Kf(r,s),style:{cursor:"pointer"}},s):u.jsx(Bd,{onMouseEnter:Wo(o,s),onMouseLeave:Wo(o,n),onClick:Kf(r,s),style:{cursor:"pointer"}},s))}),n!==null?u.jsxs("span",{children:["Sua avaliação foi de ",n," ",n===1?"Estrela":"Estrelas","!"]}):u.jsx(u.Fragment,{})]})}function QP({ratingRef:e,colorRef:t,defaultRatingValue:n,defaultColorValue:r}){const{name:i,color:o}=yo();return u.jsxs(GP,{children:[u.jsx("div",{content:"title",children:u.jsx("h2",{children:i})}),u.jsxs("div",{content:"colors",children:[u.jsx("span",{children:"Qual foi a cor escolhida?"}),u.jsxs("select",{ref:t,name:"color",defaultValue:r,id:"comment-color",children:[u.jsx("option",{children:"Nenhum"}),o.map(s=>u.jsx("option",{value:s.id,"data-content":`color-option-${s.id}`,"data-name":s.name,children:s.name},s.id))]})]}),u.jsx("div",{content:"rating",children:u.jsx(KP,{ratingRef:e,defaultRatingValue:n})})]})}const XP="Infelizmente tivemos um problema ao enviar sua avaliação. Tente novamente mais tarde!";class hv{constructor(t,n){Da(this,"status");Da(this,"message");this.status=t,this.message=n,Object.setPrototypeOf(this,new.target.prototype)}applyWarning(t){t({status:this.status,message:this.message})}}const Qf=(e,t,n,r=null)=>{if(r){const i=new FormData;i.append("glasses",n.toString()),i.append("user",t.toString()),i.append("color",e.color),i.append("rating",e.rating.toString()),i.append("title",e.title),i.append("text",e.text);for(let o=0;o<r.length;o++)i.append("images",r[o]);return i}else return{glasses:n,color:e.color,rating:e.rating,title:e.title,text:e.text,user:t}};function YP(e,t){const{ratingRef:n,colorRef:r,titleRef:i,textRef:o}=e,s={};if(r.current instanceof HTMLSelectElement){const a=r.current.value;if(a===void 0||a==="Nenhum"||typeof a!="string")return t({status:0,message:jP}),!1;s.color=a}if(n.current instanceof HTMLDivElement){const a=n.current.getAttribute("data-selected"),l=Number(a);if(a===null||l<=0&&l>5)return t({status:0,message:AP}),!1;s.rating=l}if(i.current instanceof HTMLInputElement){const a=i.current.value;if(a===""||typeof a!="string")return t({status:0,message:kP}),!1;s.title=a}if(o.current instanceof HTMLTextAreaElement){const a=o.current.value;if(a===""||typeof a!="string")return t({status:0,message:PP}),!1;s.text=a}return s.color&&s.title&&s.text&&s.rating?{color:s.color,title:s.title,text:s.text,rating:s.rating}:(t({status:0,message:"Ocorreu um erro desconhecido, por favor, tente novamente mais tarde."}),!1)}function qP(e,t,n,r){var s,a;let i,o="json";return t.info&&((a=(s=r.current)==null?void 0:s.files)!=null&&a.length?(o="form",i=Qf(e,t.info.id,n,r.current.files)):i=Qf(e,t.info.id,n)),{form:i,contentType:o}}async function ZP(e,t,n,r,i,o){var c;const{form:s,contentType:a}=qP(t,n.user,r,o),l=await sP(e,s,a,((c=n.user.token)==null?void 0:c.access)||"",i);if(!l.ok)throw new hv(l.status,XP);return l}function JP(e,t,n,r,i){const o=e$(e,t,r,i);n(s=>{const a=[o].concat(s.comments);return{...s,comments:a,max:s.max+1}})}function e$(e,t,n,r){var s;return{color:{id:1,name:((s=document.querySelector(`[data-content="color-option-${e.color}"]`))==null?void 0:s.getAttribute("data-name"))||""},images_comments:n$(r),id:t,rating:Number(e.rating),text:e.text,title:e.title,created_at:t$(),user:{id:n.id,email:n.email,first_name:n.first_name,last_name:n.last_name}}}function t$(){const e=new Date,t=String(e.getHours()).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),o=e.getFullYear();return`ás ${t}:${n}hrs, ${r}/${i}/${o}`}function n$(e){return e instanceof HTMLInputElement&&e.files instanceof FileList?Array.from(e.files).map((n,r)=>({id:r+1,image:URL.createObjectURL(n),description:"unknow"})):null}function r$(){const e=g.useRef(null),t=g.useRef(null),n=g.useRef(null),r=g.useRef(null),i=g.useRef(null),{state:o}=et(),s=g.useRef(null);g.useEffect(()=>{o!=null&&o.scroll&&s.current instanceof HTMLDivElement&&s.current.scrollIntoView({behavior:"smooth"})},[o]);function a(l){var d,p,h,v;const c={color:((d=e.current)==null?void 0:d.value)??void 0,rating:Number((p=t.current)==null?void 0:p.getAttribute("data-selected"))||null,title:((h=n.current)==null?void 0:h.value)??"",text:((v=r.current)==null?void 0:v.value)??""};l(c)}return{form:{colorRef:e,ratingRef:t,titleRef:n,textRef:r,fileRef:i},updateComment:a,goTo:s}}const i$={hidden:{opacity:0,maxHeight:0,display:"none",transition:{duration:1,type:"tween"}},open:{opacity:1,maxHeight:2200,display:"flex",transition:{duration:.5,type:"tween"}}};function o$({setError:e,setIsCommentCreated:t,setCommentArray:n,setOpenCommentForm:r,openCommentForm:i,setComment:o,comment:s,slug:a}){const{form:l,updateComment:c,goTo:d}=r$(),{api:p}=te(),{id:h}=yo(),v=sr(),y=async()=>{const w=YP(l,e);if(!w){c(o);return}try{const S=await ZP(p.comments,w,v,h,a,l.fileRef);if((S==null?void 0:S.status)===201){const{comment_ID:m}=await S.json();v.user.info&&(JP(w,m,n,v.user.info,l.fileRef.current),t(!0))}}catch(S){S instanceof hv?S.applyWarning(e):e({message:"Algo deu errado, tente novamente mais tarde."}),c(o)}};return u.jsxs(HP,{ref:d,variants:i$,initial:"open",exit:"hidden",animate:i?"open":"hidden",children:[u.jsx(QP,{ratingRef:l.ratingRef,colorRef:l.colorRef,defaultRatingValue:s.rating,defaultColorValue:s.color}),u.jsx(WP,{titleRef:l.titleRef,defaultTitleValue:s.title,textRef:l.textRef,defaultTextValue:s.text,fileRef:l.fileRef}),u.jsxs("div",{className:"mk-comment-options",children:[u.jsx("button",{type:"button",onClick:()=>y(),children:"Enviar"}),u.jsx("button",{type:"button",onClick:()=>r(!1),children:"Cancelar"})]})]})}function s$({setCommentArray:e,setOpenCommentForm:t,openCommentForm:n,slug:r}){const[i,o]=g.useState(null),[s,a]=g.useState(!1),[l,c]=g.useState({color:void 0,rating:null,title:"",text:""});return i?u.jsx(pv,{message:i.message,setterHandler:()=>{o(null)}}):s?u.jsx(uv,{handler:()=>{a(!1),t(!1)}}):u.jsx(o$,{openCommentForm:n,setError:o,setIsCommentCreated:a,setCommentArray:e,setOpenCommentForm:t,setComment:c,comment:l,slug:r})}const a$=j.div`
  ${T("center","center","column")}
  font-size: 30px;
  width: 100%;
  gap: 50px;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.primaryLight};
  }

  .rating-group {
    width: 100%;
    ${T("center","center","row")};
    position: relative;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    .rating-group {
      flex-direction: column;
      gap: 50px;
    }
  }
`,l$=j.div`
  ${({theme:e})=>I`
    ${T("center","center","column")}
    width: fit-content;
    height: auto;
    position: relative;
    color: ${e.colors.primaryDark};
    .container-rate {
      ${U("row")}
      gap: 20px;
    }
    .rate-star {
      width: 150px;
    }
    .rate-progress {
      width: 300px;
      progress {
        width: 100%;
        &::-webkit-progress-value {
          background-color: ${e.colors.primaryDark};
        }
      }
    }
    .rate-count {
      width: 80px;
    }

    &::after {
      content: '';
      width: 1px;
      height: 100%;
      background-color: ${e.colors.primaryLight};
      position: absolute;
      right: 0;
    }

    @media (min-width: 520px) and (max-width: 767px) {
      padding-bottom: 50px;
      &::after {
        width: 50%;
        height: 1px;
        right: auto;
        bottom: 0;
      }
      .rate-progress {
        width: 200px;
      }
      .rate-count {
      }
    }
    @media (min-width: 0px) and (max-width: 519px) {
      padding-bottom: 50px;
      &::after {
        width: 50%;
        height: 1px;
        right: auto;
        bottom: 0;
      }

      .container-rate {
        gap: 5px;
      }
      .rate-star {
        svg {
          transform: scale(0.7);
        }
      }
      .rate-progress {
        width: 150px;
      }
      .rate-count {
        text-align: end;
        width: 30px;
        font-size: ${e.text.size.large};
      }
    }
  `}
`,u$=j.div`
  ${b("center","center")}

  width: 30%;

  button {
    width: 50%;
    height: 50px;
    border-radius: 10px;
    font-size: 19px;

    &:hover {
      ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})}
    }
  }

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100%;
    button {
      width: 80%;
    }
  }
`,c$=rS`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    width: 100vw;
    /* min-height: 100vh; */
    height: auto;
    overflow-x: hidden;

    // abel font style

    font-family: "Abel", sans-serif;
    font-weight: 100;
    font-style: normal;
  }

  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`,d$=j.h3`
  ${({theme:e})=>({fontSize:e.text.size.title,fontWeight:e.text.weight.xsmall,color:e.colors.secondaryDark})}
`,p$=({setOpenCommentForm:e,max:t,ratings:n})=>{const r=()=>{const i=[];return _a.map(o=>{let s=0;n.map(a=>{a.rating===o&&(s=a.count)}),i.push(s)}),i};return u.jsxs(a$,{children:[u.jsx(d$,{style:{textAlign:"center"},children:"Avaliações dos usuários"}),u.jsxs("div",{className:"rating-group",children:[u.jsx(l$,{children:r().map((i,o)=>u.jsx(h$,{level:o+1,max:t,count:i},o+1))}),u.jsx(u$,{children:u.jsx("button",{onClick:()=>{e(!0)},children:"Faça uma avaliação"})})]})]})},h$=({level:e,max:t,count:n})=>u.jsxs("div",{className:"container-rate",children:[u.jsx("div",{className:"rate-star",children:_a.map((r,i)=>r<=e?u.jsx(Bd,{},i):u.jsx(Fd,{},i))}),u.jsx("div",{className:"rate-progress",children:u.jsx("progress",{max:t,value:n})}),u.jsx("div",{className:"rate-count",children:n})]}),f$=g.memo(p$),m$=j.div`
  width: 100%;
  padding: 10px;
`,g$=j.div`
  ${T("center","center","row")}
  gap: 20px;
  width: 100%;
  text-align: center;

  span {
    font-size: 18px;
  }
`,Xf=j.span`
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${({theme:e})=>e.colors.primaryDark};
  }
`;function x$({setRegisterOrLogin:e}){return u.jsxs(g$,{children:[u.jsx(Xf,{onClick:()=>e("register"),children:"Registrar"}),u.jsx("span",{children:"|"}),u.jsx(Xf,{onClick:()=>e("login"),children:"Login"})]})}const v$=j.div`
  ${b("center","center")}

  width: 100%;
  font-size: 30px;
  position: relative;
  padding-bottom: 50px;
`;function y$({mode:e}){return u.jsx(v$,{children:u.jsx("span",{children:e==="login"?"Bem-vindo!":"Criar conta"})})}const w$=j.div`
  ${b("center","center")}
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
`,S$=j.form`
  ${T("center","center","column")}

  width: 400px;
  height: auto;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px white;
  gap: 20px;
  background-color: rgba(229, 228, 228, 0.7);
  ${({theme:e})=>({color:e.colors.secondaryDark})}
  position: relative;

  .close-session {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    transform: scale(2);
    cursor: pointer;
    color: ${({theme:e})=>e.colors.primaryDark};

    &:hover {
      color: ${({theme:e})=>e.colors.secondaryDark};
    }
  }

  .auth-process {
    ${T("center","center","column")}

    span {
      color: red;
      font-size: 20px;
    }
    gap: 10px;
    height: auto;
    min-height: 60px;
  }

  @media (min-width: 0px) and (max-width: 450px) {
    width: 90%;
  }
`,C$=j.div`
  ${b("center","center")}
  position: absolute;
  height: 100%;
  width: 40px;
  right: 0;
  top: 0;
  z-index: 2;
  cursor: pointer;
`,fv=j.div`
  width: 300px;
  height: 40px;
  position: relative;
  margin: 0 auto;

  svg {
    color: ${({theme:e})=>e.colors.primaryLight};
  }
  .input-icon {
    position: absolute;
    transform: scale(2);
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-top: 10px;
  }
`,mv=j.input`
  width: 100%;
  height: 40px;
  ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})}
  font-size: 15px;
  padding: 0px 10px;
  padding-left: 40px;
  border-radius: 15px;
  outline: none;
  z-index: 2;
`,j$=j.div`
  ${T("center","start","column")}

  width: 300px;
  height: auto;
  position: relative;
  gap: 5px;

  p {
    color: rgb(201, 71, 71);
  }
`;function A$(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24"},child:[]},{tag:"path",attr:{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"},child:[]},{tag:"path",attr:{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"},child:[]},{tag:"line",attr:{x1:"2",x2:"22",y1:"2",y2:"22"},child:[]}]})(e)}function k$(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(e)}function P$(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M254.28 17.313c-81.048 0-146.624 65.484-146.624 146.406V236h49.594v-69.094c0-53.658 43.47-97.187 97.03-97.187 53.563 0 97.032 44.744 97.032 97.186V236h49.594v-72.28c0-78.856-65.717-146.407-146.625-146.407zM85.157 254.688c-14.61 22.827-22.844 49.148-22.844 76.78 0 88.358 84.97 161.5 191.97 161.5 106.998 0 191.968-73.142 191.968-161.5 0-27.635-8.26-53.95-22.875-76.78H85.155zM254 278.625c22.34 0 40.875 17.94 40.875 40.28 0 16.756-10.6 31.23-25.125 37.376l32.72 98.126h-96.376l32.125-98.125c-14.526-6.145-24.532-20.62-24.532-37.374 0-22.338 17.972-40.28 40.312-40.28z"},child:[]}]})(e)}function $$({warning:e}){return u.jsx("p",{children:e})}function E$({elementId:e,initValue:t,placeholder:n,reference:r}){const[i,o]=g.useState(!0);return u.jsxs(fv,{children:[u.jsx(P$,{className:"input-icon"}),u.jsx(mv,{id:e,type:i?"password":"text",defaultValue:t,ref:r,placeholder:n}),u.jsx(C$,{onClick:()=>{o(!i)},children:i?u.jsx(A$,{}):u.jsx(NP,{})})]})}function T$({type:e,elementId:t,reference:n,placeholder:r,initValue:i}){return u.jsxs(fv,{children:[u.jsx(dP,{className:"input-icon"}),u.jsx(mv,{id:t,type:e,defaultValue:i,ref:n,placeholder:r,minLength:3})]})}function On({elementId:e,type:t,placeholder:n,warnings:r,initValue:i,reference:o}){return u.jsxs(j$,{children:[t==="password"?u.jsx(E$,{reference:o,elementId:e,placeholder:n,initValue:i,type:t}):u.jsx(T$,{elementId:e,type:t,initValue:i,reference:o,placeholder:n}),r&&r.length>0&&(r==null?void 0:r.map((s,a)=>u.jsx($$,{warning:s},a)))]})}const L$=j.button`
  width: 100px;
  height: 30px;
  ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})}

  cursor: pointer;

  &:hover {
    background-color: ${({theme:e})=>e.colors.primaryGray};
  }
`;function gv({label:e,handler:t}){return u.jsx(L$,{onClick:t,type:"button",children:e})}async function R$(e){const t=await ov(e.urls.csrf);if(!t.ok)return;const n=await t.json(),r=await rP(e,n.csrf_token);if(!r.ok)return;const i=await r.json(),o=await sv(i.access,e.urls.user);if(o.ok)return{user:await o.json(),token:i}}function _$(e){const{api:t}=te(),{actions:n}=sr(),[r,i]=g.useState(!1),o=g.useRef(null),s=g.useRef(null),[a,l]=g.useState({email:"",password:""}),[c,d]=g.useState("");return{user:{email:o,password:s},initValues:a,loginHandler:async()=>{var v,y;const h={urls:{login:t.token,csrf:t.csrf,user:t.get_user_data},userInfo:{email:((v=o.current)==null?void 0:v.value)||"",password:((y=s.current)==null?void 0:y.value)||""}};if(h.userInfo.email.length<=0||h.userInfo.password.length<=0){d("Nenhum campo pode ficar vazio.");return}d(""),i(!0);try{const w=await R$(h);w?(n.logIn({user:w.user,token:w.token}),e()):d("Email ou senha incorreto.")}finally{i(!1),l(h.userInfo)}},loading:r,warning:c}}function z$({foreignSetterHandler:e}){const{user:t,loading:n,initValues:r,warning:i,loginHandler:o}=_$(e);return u.jsxs(u.Fragment,{children:[u.jsx(On,{placeholder:"Email",elementId:"email-id",type:"email",label:"Email",initValue:r.email,reference:t.email}),u.jsx(On,{placeholder:"Senha",elementId:"password-id",type:"password",label:"Senha",initValue:r.password,reference:t.password}),u.jsxs("div",{className:"auth-process",children:[i&&u.jsx("span",{children:i}),n?u.jsx(he,{init:2,finish:3}):u.jsx(gv,{label:"Fazer Login",handler:o})]})]})}const D$="Este campo não pode haver espaço.",N$="A senha deve conter no minino 8 digitos.",M$="A senha precisa conter no mínimo: um numero, uma letra minuscula, maiuscula e um caractere especial.";function I$(e,t){return e.length<8}function O$(e){return/\s/.test(e)}function b$(e){return!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(e)}function V$(e){const t=[];return/\s/.test(e)&&t.push("Este campo não pode haver espaço."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)||t.push("Insira um endereço de email válido."),t}function F$(e){const t=[];return I$(e)&&t.push(N$),O$(e)&&t.push(D$),b$(e)&&t.push(M$),t}function B$(e,t){const n=[];return e!==t&&n.push("As senhas não batem, verifique novamente."),n}function U$(e){let t=!0;const n={email:[],password:[],repPassword:[],fName:[]},r=V$(e.email),i=F$(e.password),o=B$(e.password,e.repPassword),s=e.fName.length<3?["Esté campo deve ter mais de 2 caracteres."]:[];return(r.length!==0||i.length!==0||o.length!==0||s.length!==0)&&(n.email=r,n.password=i,n.repPassword=o,n.fName=s,t=!1),{isValidated:t,warningsValidator:n}}function W$(e,t){e!=null&&e.email&&t(n=>({...n,email:e.email})),e!=null&&e.password&&t(n=>({...n,password:e.password}))}async function H$({urls:e,userInfo:t}){const n=await ov(e.csrf);if(!n)return!1;const r=await n.json();return await fetch(e.create,{method:"POST",headers:{"Content-Type":"application/json","x-CSRFToken":r.csrf_token},body:JSON.stringify({first_name:t.fName,last_name:t.lName,email:t.email,password:t.password}),credentials:"include"})}function G$(){const{api:e}=te(),[t,n]=g.useState(!1),r=g.useRef(null),i=g.useRef(null),o=g.useRef(null),s=g.useRef(null),a=g.useRef(null),[l,c]=g.useState({fName:"",lName:"",email:"",password:"",repPassword:""}),[d,p]=g.useState({email:[],password:[],repPassword:[],fName:[]}),[h,v]=g.useState(!1);return{initValues:l,user:{fName:r,lName:i,email:o,password:s,repPassword:a},warnings:d,loading:t,registerHandler:async()=>{var f,x,C,A,k;n(!0),p({email:[],password:[],repPassword:[],fName:[]});const w={fName:((f=r.current)==null?void 0:f.value)||"",lName:((x=i.current)==null?void 0:x.value)||"",email:((C=o.current)==null?void 0:C.value)||"",password:((A=s.current)==null?void 0:A.value)||"",repPassword:((k=a.current)==null?void 0:k.value)||""};c(w);const{isValidated:S,warningsValidator:m}=U$(w);if(S)try{const P={create:e.create_user,csrf:e.csrf};H$({urls:P,userInfo:w}).then(async $=>{if($){const M=$.status;M===201?v(!0):M===400&&W$(await $.json(),p)}})}finally{n(!1)}else p(m),n(!1)},isSignedIn:h}}function K$({setRegisterOrLogin:e}){const{user:t,loading:n,registerHandler:r,warnings:i,initValues:o,isSignedIn:s}=G$();return s?u.jsx(An,{handler:()=>e("login"),text:"Ok",message:"Sua conta foi criada com sucesso!",mode:"success"}):u.jsxs(u.Fragment,{children:[u.jsx(On,{placeholder:"Nome",elementId:"first-name",type:"text",label:"Nome",initValue:o.fName,reference:t.fName,warnings:i.fName}),u.jsx(On,{placeholder:"Sobrenome",elementId:"last-name",type:"text",initValue:o.lName,label:"Sobrenome",reference:t.lName,warnings:[]}),u.jsx(On,{placeholder:"Email",elementId:"email",type:"email",initValue:o.email,label:"Email",reference:t.email,warnings:i.email}),u.jsx(On,{placeholder:"Senha",elementId:"password",type:"password",label:"Senha",initValue:o.password,reference:t.password,warnings:i.password}),u.jsx(On,{placeholder:"Repita a senha",elementId:"repeat-password",type:"password",initValue:o.repPassword,label:"Repetir senha",reference:t.repPassword,warnings:i.repPassword}),u.jsx("div",{className:"auth-process",children:n?u.jsx(he,{init:2,finish:3}):u.jsx(gv,{label:"Registrar",handler:r})})]})}function Ud({foreignSetterHandler:e,mode:t}){const[n,r]=g.useState(t);return u.jsx(w$,{children:u.jsxs(S$,{children:[u.jsx(M1,{onClick:()=>{e()},className:"close-session"}),u.jsx(y$,{mode:n}),n==="login"?u.jsx(z$,{foreignSetterHandler:e}):u.jsx(K$,{setRegisterOrLogin:r}),u.jsx(x$,{setRegisterOrLogin:r})]})})}function Q$({setOpenCommentForm:e}){const[t,n]=g.useState(!1);return t?u.jsx(Ud,{foreignSetterHandler:()=>{e(!1),n(!1)},mode:"login"}):u.jsx(An,{handler:()=>e(!1),secondaryHandler:()=>n(!0),text:"Não",secondaryText:"Sim",mode:"warning",message:"É necessário estar logado para enviar uma avaliação. Deseja fazer login?"})}function X$({slug:e,ratings:t}){const[n,r]=g.useState({comments:[],limit:1,orderBy:"higher",max:0});return g.useEffect(()=>{r({comments:[],limit:1,orderBy:"higher",max:0})},[e]),u.jsxs(m$,{children:[u.jsx(Y$,{setCommentArray:r,slug:e,max:n.max,ratings:t}),u.jsx(MP,{commentArray:n,setCommentArray:r,slug:e})]})}const Y$=g.memo(({setCommentArray:e,slug:t,max:n,ratings:r})=>{const[i,o]=g.useState(!1),{user:s}=sr();return u.jsxs(u.Fragment,{children:[u.jsx(f$,{setOpenCommentForm:o,max:n,ratings:r}),s.isAuthenticated?u.jsx(s$,{openCommentForm:i,slug:t,setCommentArray:e,setOpenCommentForm:o}):i&&u.jsx(Q$,{setOpenCommentForm:o})]})});function q$(){const e=Wg(),{api:t}=te(),[n,r]=g.useState({glasses:null,relateds_glasses:[],ratings:[]}),[i,o]=g.useState(!0);if(g.useEffect(()=>{try{fetch(t.product_profile+e.slug).then(async c=>{if(!c.ok)throw o(!1),new Error("Failed to fetch glasses data.");const{glasses:d,relateds_glasses:p,ratings:h}=await c.json();r({glasses:d,relateds_glasses:p,ratings:h}),o(!1)})}catch{o(!1)}},[e.slug]),i)return u.jsx(he,{});const{glasses:s,relateds_glasses:a,ratings:l}=n;return s?u.jsx(Vk,{value:s,children:u.jsxs(pk,{"data-testid":"glasses-container",children:[u.jsx(Wk,{}),u.jsx(X$,{slug:s.slug,ratings:l}),u.jsx(mk,{relateds_glasses:a})]})}):u.jsx("div",{style:{width:"100vw",height:"calc(100vh - 350px)"},children:u.jsx(or,{text:"Não existe esse produto"})})}const Wd=ei`
  0% {
    opacity: 0;
    max-height: 0px;
  }
  100% {
    opacity: 1;
    max-height: 800px;
  }
`,Z$=j.div`
  button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    ${({theme:e})=>({backgroundColor:e.colors.primaryGreen,color:e.colors.primaryDark})}
  }
  button:hover {
    background-color: ${({theme:e})=>e.colors.primaryLight};
  }

  width: 100%;
  padding: 0px 20px;
  height: calc(100vh - 220px) !important;
  right: 0;
  left: 0;
  top: 120px;
  position: absolute;
  margin: 0 auto;
  overflow-y: scroll;
  ${T("start","safe center","column")}
  background-color: ${({theme:e})=>e.colors.secondaryDark};
  gap: 20px;

  animation: ${Wd} 1s ease forwards;

  @media (min-width: 1400px) {
    width: 70%;
  }
  @media (min-width: 1200px) and (max-width: 1399px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    height: calc(100vh - 150px) !important;
  }

  @media (min-width: 0px) and (max-width: 1023) {
    width: 100%;
  }
`,J$=j.div`
  width: 100%;
  height: 60px;
  padding-left: 20px;
  ${b("start","center")};
  ${({theme:e})=>({backgroundColor:e.colors.primaryGray,color:e.colors.primaryLight,fontSize:e.text.size.large})}

  @media (min-width: 768px) and (max-width: 1023px) {
    height: 30px;
    ${({theme:e})=>({fontSize:e.text.size.medium})}
  }
  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 300px;
  }
`,xv=j.div`
  width: 100%;
  height: auto;
  /* padding: 20px; */
  ${U("column")}
  gap: 20px;
  ${({theme:e,$mode:t})=>{if(t!=="checkout")return{backgroundColor:e.colors.secondaryDark}}};
  padding-bottom: 50px;

  animation: ${Wd} 1s ease forwards;
`,e6=j.div`
  min-height: 100px;
  ${b("center","start")};
  height: 200px;

  button {
    width: 200px;
    height: 40px;
    border-radius: 5px;
  }

  .loading {
    justify-content: center;
    align-items: start;
    svg {
      margin-top: 25px;
    }
  }
`,vv=j.div`
  width: 100%;
  height: 40px;
  display: grid;

  ${({$mode:e,theme:t})=>e==="checkout"?I`
        grid-template-columns: calc(100% - 500px) 100px 100px 100px;

        @media (min-width: 768px) and (max-width: 1300px) {
          grid-template-columns: calc(100% - 300px) 100px 50px 100px;
        }

        @media (min-width: 520px) and (max-width: 768px) {
          grid-template-columns: calc(100% - 220px) 70px 50px 70px;
          font-size: ${t.text.size.xsmall} !important;
        }

        @media (min-width: 0px) and (max-width: 519px) {
          grid-template-columns: calc(100% - 170px) 50px 40px 60px;
          font-size: ${t.text.size.xsmall} !important;
        }
      `:I`
      grid-template-columns: calc(100% - 400px) 100px 100px;

      @media (min-width: 768px) and (max-width: 1023px) {
        grid-template-columns: calc(100% - 240px) 80px 80px;
      }

      @media (min-width: 520px) and (max-width: 767px) {
        grid-template-columns: calc(100% - 190px) 50px 50px;
      }

      @media (min-width: 0px) and (max-width: 519px) {
        grid-template-columns: calc(100% - 150px) 40px 50px;

        font-size: ${t.text.size.xsmall} !important;
      }
    `}

  &:nth-child(1) {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
  }
  &:nth-child(4) {
    grid-column: 4 / 5;
  }

  grid-template-columns: calc(100% - 400px) 100px 100px 150px;
`,t6=I`
  grid-template-columns: calc(100% - 200px) 200px;

  &:first-child {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    grid-template-columns: calc(100% - 150px) 150px;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    img {
      width: 60px !important;
      height: 60px !important;
    }
    div > h2 {
      font-size: ${({theme:e})=>e.text.size.medium} !important;
    }
    div {
      gap: 5px;
    }
  }

  @media (min-width: 0px) and (max-width: 767px) {
    div > h2 {
      font-size: ${({theme:e})=>e.text.size.small} !important;
    }
    div > span {
      font-size: ${({theme:e})=>e.text.size.xsmall} !important;
    }
  }
`,n6=I`
  grid-template-columns: calc(100% - 400px) 100px 100px 150px;

  &:first-child {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
  }
  &:nth-child(4) {
    grid-column: 4 / 5;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: calc(100% - 240px) 80px 80px 80px;

    div > .search-save-cart {
      width: 120px !important;
    }
    div > span {
      font-size: ${({theme:e})=>e.text.size.small} !important;
    }
  }

  @media (min-width: 520px) and (max-width: 767px) {
    grid-template-columns: calc(100% - 190px) 50px 50px 90px;

    div > .search-save-cart {
      width: 90px !important;
    }
    div > span {
      font-size: ${({theme:e})=>e.text.size.small} !important;
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    grid-template-columns: calc(100% - 150px) 40px 50px 60px;

    div > .search-save-cart {
      width: 60px !important;
      height: 30px !important;
      font-size: ${({theme:e})=>e.text.size.xsmall} !important;
    }
    div > span {
      font-size: ${({theme:e})=>e.text.size.xsmall} !important;
    }
    div > h2 {
      font-size: ${({theme:e})=>e.text.size.small} !important;
    }
    img {
      width: 60px !important;
      height: 60px !important;
    }
    div {
      gap: 10px;
    }
  }
`,r6=I`
  grid-template-columns: calc(100% - 400px) 100px 100px 100px 150px;

  &:first-child {
    grid-column: 1 / 2;
  }
  &:nth-child(2) {
    grid-column: 2 / 3;
  }
  &:nth-child(3) {
    grid-column: 3 / 4;
  }
  &:nth-child(4) {
    grid-column: 4 / 5;
  }
  &:nth-child(5) {
    grid-column: 5 / 6;
  }

  @media (min-width: 768px) and (max-width: 1300px) {
    grid-template-columns: calc(100% - 300px) 100px 50px 100px 50px;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    grid-template-columns: calc(100% - 220px) 70px 50px 70px 30px;
  }

  @media (min-width: 0px) and (max-width: 519px) {
    grid-template-columns: calc(100% - 170px) 50px 40px 60px 10px;
  }
`,i6=j(Xt)`
  .important {
    color: ${({theme:e})=>e.colors.primaryGreen};
  }
  ._price {
    font-size: 20px;
  }
  .sold-out {
    color: ${({theme:e})=>e.colors.primaryRed};
  }
  width: 100%;
  height: 100px;
  display: grid;
  position: relative;

  &:hover {
    ${({theme:e,$mode:t})=>{if(t!=="checkout")return{color:e.colors.primaryDark}}};
  }

  animation: ${Wd} 2.5s ease forwards;

  ${({$mode:e})=>e==="cart"?t6:e==="search"?n6:r6};

  @media (min-width: 768px) and (max-width: 1023px) {
    div > .search-save-cart {
      width: 80px !important;
    }
  }
`,Ju=j.div`
  ${T("start","start","row")}
  gap: 30px;
  div {
    h2 {
      white-space: normal;
    }
    padding-right: 5px;
  }

  &:hover {
    cursor: pointer;
  }

  img {
    width: 100px;
    height: 100px;
  }
  div {
    div {
      max-width: 100%;
      height: auto;

      span {
        font-size: ${({theme:e})=>e.text.size.xxlarge};
      }
    }
  }
`,o6={initial:{opacity:1},exit:{opacity:0,x:-2e3,transition:{duration:.5}}};function Hd({name:e,slug:t,images:n,quantitaty:r,amount:i,navigateHandler:o,mode:s,children:a,addItem:l,defaultImageUrl:c,domain:d}){const p=d+(n?n.url:c);return u.jsxs(i6,{variants:o6,$mode:s,initial:"initial",animate:"initial",exit:"exit",layout:!0,children:[u.jsxs(Ju,{onClick:()=>o(t),children:[u.jsx("img",{src:p,alt:(n==null?void 0:n.description)||"imagem padrão"}),u.jsxs("div",{children:[u.jsx("div",{children:u.jsx("h2",{children:e})}),s==="cart"&&u.jsxs("span",{className:"important _price",children:["R$ ",i]}),s==="search"&&(r&&r>0?u.jsx("span",{className:"important",children:"Disponivel"}):u.jsx("span",{className:"sold-out",children:"Esgotado"}))]})]}),s==="search"?u.jsxs(u.Fragment,{children:[u.jsx("div",{children:u.jsx("span",{className:"important",children:r})}),u.jsx("div",{children:u.jsxs("span",{className:"important _price",children:["R$ ",i]})}),u.jsx("div",{children:u.jsx("button",{onClick:()=>l&&l(Md({name:e,slug:t,images:n,amount:i})),className:"search-save-cart",children:"Salvar no carrinho"})})]}):a]},t)}function yv(e){return G({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},child:[]}]})(e)}const s6=j.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: absolute;
  right: 0;
  ${b("center","center")}

  svg {
    transform: scale(2);
  }
  cursor: pointer;

  &:hover {
    svg {
      color: ${({theme:e})=>e.colors.primaryRed};
    }
  }

  @media (min-width: 520px) and (max-width: 767px) {
    svg {
      transform: scale(1.3);
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    transform: translate(20px, -20px);
    svg {
      transform: scale(1);
    }
  }
`,Yf=j.div`
  ${({$mode:e})=>I`
    width: ${e==="color"?"90px":"40px"};
    height: 30px;

    select {
      width: 100%;
      font-size: 12px;
      color: black;
      /* -webkit-appearance: none; */
      padding: 5px;
      border-radius: 3px;

      option:hover {
        color: blue;
        background-color: black;
        cursor: pointer;
      }
    }

    @media (min-width: 520px) and (max-width: 767px) {
      width: ${e==="color"?"50px":"40px"};
      select {
        font-size: 8px;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      width: ${e==="color"?"45px":"35px"};
      select {
        font-size: 6px;
      }
    }
  `}
`,a6=g.memo(({count:e})=>{const t=[];for(let n=1;n<=e;n++)t.push(u.jsx("option",{value:n,children:n},n));return t}),l6=e=>u.jsx(Hd,{slug:e.slug,name:e.name,amount:e.amount,mode:"checkout",images:e.images,navigateHandler:e.navigateHandler,defaultImageUrl:e.defaultImageUrl,domain:e.domain,children:u.jsxs(u.Fragment,{children:[u.jsx(Yf,{$mode:"color",children:u.jsx("select",{name:"color",id:"product-color",onChange:e.onChangeHandler("color",e.index),children:e.color.map(t=>u.jsx("option",{value:t.id,children:t.name},t.id))})}),u.jsx(Yf,{$mode:"qtd",children:u.jsx("select",{onChange:e.onChangeHandler("QTD",e.index),value:e.currentQTD,children:u.jsx(a6,{count:e.quantitaty})})}),u.jsx("div",{children:u.jsxs("span",{className:"important _price",children:["R$ ",e.amount]})}),u.jsx(s6,{onClick:e.onDeleteHandler(e.id),children:u.jsx(yv,{})})]})}),u6=g.memo(l6),c6=j.section`
  ${T("center","start","row")}
  width: 100%;
  height: calc(100vh - 120px);
  margin-top: 120px;
  background-color: ${({theme:e})=>e.colors.primaryLight};

  @media (min-width: 0px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .back-home {
    width: 100%;
    height: 400px;
    ${b("center","center")}
  }
`,d6=j.div`
  ${T("start","center","column")}
  padding: 50px 30px 0px 30px;
  width: 70%;
  height: auto;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  @media (min-width: 0px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 520px) and (max-width: 767px) {
    padding: 20px 10px 0px 10px;
    ._price {
      font-size: 10px;
    }

    div h2 {
      font-size: 16px;
    }

    ${Ju} {
      gap: 10px;

      img {
        width: 60px;
        height: 60px;
      }
    }
  }

  @media (min-width: 0px) and (max-width: 519px) {
    ._price {
      font-size: 12px;
    }

    div h2 {
      font-size: 14px;
    }

    ${Ju} {
      gap: 5px;

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`,p6=j.div`
  ${T("start","center","column")}
  gap: 20px;
  width: 30%;
  height: 100%;
  background-color: #fff;
  padding-top: 120px;
  padding-bottom: 50px;

  .resume {
    width: 100%;
    height: 50px;
    text-align: center;
    font-size: ${({theme:e})=>e.text.size.title};
  }
  .separator {
    width: 80%;
    height: 1px;
    background-color: black;
  }

  select {
    width: 200px;
    height: 30px;
    padding: 5px;
  }

  .checkout-details {
    width: 80%;
    ${U("row")}
    position: relative;
    justify-content: space-between;
    font-size: ${({theme:e})=>e.text.size.large};
  }

  .checkout-button {
    margin-top: 50px;
    width: 80%;
    height: 50px;

    button {
      width: 100%;
      height: 100%;
      ${({theme:e})=>({backgroundColor:e.colors.primaryDark,color:e.colors.primaryLight})}
    }
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    padding-top: 20px;
    width: 100%;
    height: 300px;
    gap: 10px;
    /* background-color: blue; */
  }
`;I`
  background-color: ${({theme:e})=>e.colors.primaryLight};
`;async function h6(e,t){const n=await fetch(`${t}?query=${e}`);return n.ok?n:null}async function f6(e,t,n){return await fetch(n,{method:"POST",headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"})}function m6({finalAmount:e,setLogUserIn:t,user:n,listProducts:r,url:i}){const[o,s]=g.useState(!1);return u.jsxs(p6,{children:[u.jsx("div",{className:"resume",children:u.jsx("span",{children:"RESUMO"})}),u.jsx("div",{className:"separator"}),u.jsxs("div",{className:"checkout-details",children:[u.jsx("span",{children:"Total:"}),u.jsxs("span",{children:["R$",e]})]}),u.jsx("div",{className:"checkout-button",children:o?u.jsx(he,{}):u.jsxs("button",{type:"button",onClick:()=>{var a;if(n.isAuthenticated&&n.token)try{s(!0);const l={user_ID:(a=n.info)==null?void 0:a.id,installments_count:12,data:r.map(c=>({productID:c.id,colorID:c.selectedColor,quantitaty:c.currentQTD}))};f6(l,n.token.access,i).then(async c=>{if(c.status===303){const d=await c.json();window.open(d.checkout_url),s(!1)}else c.status===401&&s(!1)})}catch{}else t(!0)},children:["Fazer checkout",o&&"ASKDPKSDPFOKSDPOF"]})})]})}function g6(e){const{state:t}=et(),n=Qt(),r=t.shoppingList||null,[i,o]=g.useState([]),[s,a]=g.useState(!0),[l,c]=g.useState(!1);if(!r)return n("/",{replace:!0});const{items:d,returnURL:p}=r;g.useEffect(()=>{try{h6(String(d),e).then(async w=>{if(!w)return n("/");const m=(await w.json()).map(f=>({...f,selectedColor:f.color[0].id}));o(m)})}finally{a(!1)}},[]);const h=i.reduce((w,S)=>Number(S.amount)*S.currentQTD+w,0).toFixed(2),v=g.useCallback((w,S)=>m=>{o(f=>{const x=Number(m.target.value),C=[...f];return w==="color"?C[S]={...C[S],selectedColor:x}:C[S]={...C[S],currentQTD:x},C})},[]),y=g.useCallback(w=>()=>{o(S=>S.filter(m=>w!==m.id))},[]);return{finalAmount:h,isLoading:s,listProducts:i,returnURL:p,setListProducts:o,setLogUserIn:c,logUserIn:l,onChangeHandler:v,onDeleteHandler:y}}const x6=()=>{const{api:e}=te(),{finalAmount:t,isLoading:n,listProducts:r,logUserIn:i,setLogUserIn:o,onChangeHandler:s,onDeleteHandler:a}=g6(e.payment_products),{user:l}=sr(),{settings:c}=te(),d=Qt(),p=h=>d("/oculos/"+h);return u.jsxs(c6,{children:[n?u.jsx(he,{}):!l.isAuthenticated&&i&&u.jsx(Ud,{foreignSetterHandler:()=>{o(!1)},mode:"login"}),r.length===0?u.jsx("div",{className:"back-home",children:u.jsx("h1",{onClick:()=>d("/"),children:"Voltar"})}):u.jsx(d6,{children:u.jsxs(xv,{$mode:"checkout",children:[u.jsxs(vv,{$mode:"checkout",children:[u.jsx("span",{children:"Produto"}),u.jsx("span",{children:"Cor"}),u.jsx("span",{children:"QTD"}),u.jsx("span",{children:"Preço"})]}),r.map((h,v)=>g.createElement(u6,{...h,index:v,key:v,onChangeHandler:s,onDeleteHandler:a,navigateHandler:p,defaultImageUrl:c.default_image_url,domain:c.site_domain}))]})}),u.jsx(m6,{finalAmount:t,setLogUserIn:o,user:l,url:e.checkout,listProducts:r})]})},v6=j.div`
  width: 15%;
  height: auto;
  text-align: center;
  ${T("center","center","column")}

  @media (min-width: 0px) and (max-width: 768px) {
    flex-direction: row;
    width: 100%;
  }
`,y6=j.div`
  width: 100%;
  height: 100px;
  ${b("center","center")}
  ${({$current:e,theme:t})=>{if(e==="true")return{backgroundColor:t.colors.secondaryDark,color:t.colors.primaryLight}}}

  span {
    font-size: 20px;
  }

  &:hover {
    ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})};
    cursor: pointer;
  }

  @media (min-width: 0px) and (max-width: 768px) {
    height: 50px;
  }

  @media (min-width: 0px) and (max-width: 520px) {
    span {
      font-size: 14px;
    }
  }
`,w6=j.div`
  width: 85%;
  height: auto;

  div {
    transition: all 300ms linear;
  }
  @media (min-width: 0px) and (max-width: 768px) {
    width: 100%;
  }
`,S6=j.div`
  div.separator {
    width: 1px;
    height: 100vh;
    background-color: ${({theme:e})=>e.colors.primaryLight};
  }
  width: 70%;
  height: 100%;
  margin: 0px auto;
  /* box-shadow: 0px 0px 230px black; */
  ${T("center","start","row")}

  @media (min-width: 0px) and (max-width: 1023px) {
    width: 100%;
  }

  @media (min-width: 0px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    div.separator {
      width: 100vw;
      height: 1px;
      background-color: ${({theme:e})=>e.colors.primaryLight};
    }
  }
`,C6=j.div`
  /* width: max-content; */
  height: max-content;
  padding: 10px;
  position: relative;
  padding-left: 150px;
  ${U("row")}
  gap: 20px;

  input {
    width: ${({$width:e})=>e};
    height: ${({$height:e})=>e};
    padding: 5px;
    background-color: white;
    border: 1px solid black;
  }
  label {
    position: absolute;
    left: 0;
    min-width: 100px !important;
    font-size: 25px;
  }

  .input-error {
    color: red;
  }

  @media (min-width: 0px) and (max-width: 520px) {
    flex-direction: column;
    gap: 5px;
    padding-left: 0px;
    font-size: 15px;
    input {
      max-width: 300px;
    }
    label {
      position: relative;
    }
  }
`,ur=({type:e,label:t,id:n,width:r,height:i,value:o,isDisabled:s,limitValue:a,onChangeHandler:l,inputName:c,message:d})=>u.jsxs(C6,{$height:i,$width:r,children:[u.jsxs("label",{htmlFor:n,children:[t,":"]}),u.jsx("input",{type:e,onChange:p=>l(p,a,c),value:o,placeholder:e==="password"?"***********":t,id:n,disabled:s}),d&&u.jsx("div",{children:d.map((p,h)=>u.jsx("span",{className:"input-error",children:p},h))})]});function j6(e,t,n){if(t==="first_name")return{...e,first_name:n};if(t==="last_name")return{...e,last_name:n};if(t==="email")return{...e,email:n};if(t==="zipcode")return Number.isInteger(Number(n))?{...e,zipcode:n}:void 0;if(t==="address")return{...e,address:n};if(t==="complement")return{...e,complement:n}}function A6(e){const t={};return e.email&&(t.email=e.email),e.first_name&&(t.first_name=e.first_name),e.last_name&&(t.last_name=e.last_name),e.zipcode&&(t.zipcode=e.zipcode),e.complement&&(t.complement=e.complement),e.address&&(t.address=e.address),t}function k6(){const{data:e,postUpdateData:t,deleteUser:n}=Gd(),[r,i]=g.useState(!1),{email:o,first_name:s,last_name:a,address:l,complement:c,zipcode:d,slug:p}=e,[h,v]=g.useState(!1),[y,w]=g.useState(!1),[S,m]=g.useState(!1),[f,x]=g.useState(null),[C,A]=g.useState({first_name:s,last_name:a,email:o,zipcode:d||"",address:l||"",complement:c||""}),[k,P]=g.useState({...C,slug:p});return{isEdit:h,setIsEdit:v,updateInfo:C,currentData:k,onChangeHandler:(Y,ke,tt)=>{y||w(!0);const We=Y.target.value;We.length<=ke&&(A(Tt=>{const Oe=j6(Tt,tt,We);return Oe||Tt}),tt==="zipcode"&&We.length===ke&&Number.isInteger(Number(We))&&fetch(`https://viacep.com.br/ws/${We}/json/`).then(async Tt=>{const Oe=await Tt.json();if(!(Oe!=null&&Oe.erro)){const{estado:q,localidade:L,logradouro:_}=Oe;A(N=>({...N,address:`${_}, ${L}, ${q}.`}))}}))},postUserData:async()=>{if(y){const Y=await t(C,k.slug||""),ke=await Y.json();Y.ok?(P({...C,slug:ke.slug}),x({success:"Informações salvas com sucesso!"})):x(A6(ke)),w(!1),m(!1)}},isLoading:S,message:f,setMessage:x,deleteUserAccount:()=>{n(k.slug||"")},isDeleteConfirmed:r,setIsDeleteConfirmed:i}}const P6=j.section`
  width: auto;
  padding: 20px;
  display: ${({$display:e})=>`${e} !important`};
  ${U("column")}
  gap: 20px;

  .form-details {
    ${T("start","center","row")};
    gap: 20px;
    button {
      width: 200px;
      height: 40px;
    }
  }
`,$6=({isCurrent:e})=>{const t=e?"flex":"none",{isEdit:n,setIsEdit:r,updateInfo:i,onChangeHandler:o,postUserData:s,isLoading:a,currentData:l,message:c,setMessage:d,deleteUserAccount:p,isDeleteConfirmed:h,setIsDeleteConfirmed:v}=k6();return u.jsxs(P6,{$display:t,children:[u.jsx(ur,{width:"250px",height:"40px",label:"Nome",type:"text",id:"input-profile-name",isDisabled:!n,value:n?i.first_name:l.first_name,limitValue:300,onChangeHandler:o,inputName:"first_name",message:c==null?void 0:c.first_name}),u.jsx(ur,{width:"250px",height:"40px",label:"Sobrenome",type:"text",id:"input-profile-last-name",isDisabled:!n,value:n?i.last_name:l.last_name,limitValue:120,onChangeHandler:o,inputName:"last_name",message:c==null?void 0:c.last_name}),u.jsx(ur,{width:"250px",height:"40px",type:"email",label:"Email",id:"input-profile-email",value:n?i.email:l.email,isDisabled:!n,limitValue:150,onChangeHandler:o,inputName:"email",message:c==null?void 0:c.email}),u.jsx(ur,{width:"100px",height:"40px",type:"text",label:"CEP",value:n?i.zipcode:l.zipcode,id:"input-profile-cep",isDisabled:!n,limitValue:8,onChangeHandler:o,inputName:"zipcode",message:c==null?void 0:c.zipcode}),u.jsx(ur,{width:"400px",height:"40px",type:"text",label:"Endereço",id:"input-profile-address",value:n?i.address:l.address,isDisabled:!n,limitValue:200,onChangeHandler:o,inputName:"address",message:c==null?void 0:c.address}),u.jsx(ur,{width:"400px",height:"40px",type:"text",value:n?i.complement:l.complement,label:"Complemento",id:"input-profile-complement",isDisabled:!n,limitValue:100,onChangeHandler:o,inputName:"complement",message:c==null?void 0:c.complement}),u.jsxs("div",{className:"form-details",children:[u.jsx("button",{onClick:()=>r(!n),content:"edit-button",children:n?"Desativar Edição":"Editar"}),n&&(a?u.jsx(he,{}):u.jsx("button",{onClick:s,children:"Salvar Informações"})),(c==null?void 0:c.success)&&u.jsx(An,{mode:"success",message:c==null?void 0:c.success,handler:()=>d(null),text:"Ok"}),u.jsx("button",{onClick:()=>v(!0),children:"Excluir conta"})]}),h&&u.jsx(An,{text:"Não",secondaryText:"Sim",mode:"warning",handler:()=>{v(!1)},secondaryHandler:()=>{p()},message:"Tem certeza de que deseja excluir sua conta?"})]})},E6=j.div`
  width: 90%;
  height: auto;
  border-radius: 20px 20px 0px 0px;
  ${T("center","center","column")};
  border: 1px solid ${({theme:e})=>e.colors.primaryLight};
`,T6=j.section`
  width: 100%;
  height: auto;
  display: ${({$display:e})=>`${e} !important`};
  ${T("start","center","column")}
  gap: 20px;
  padding: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 220px);
  padding-top: 20px;
  min-height: calc(100vh - 220px);
`,L6=j.div`
  width: 100%;
  padding: 10px;
  ${T("center","center","column")}
  gap: 10px;
`,R6=j.div`
  width: 100%;
  height: 50px;
  ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.primaryDark})}
  padding-left: 40px;
  border-radius: 20px 20px 0px 0px;
  gap: 30px;
  div {
    width: max-content;
    ${U("column")}
    gap: 5px;
  }
  ${T("start","center","row")}

  @media (min-width: 520px) and (max-width: 767px) {
    div span {
      font-size: 12px;
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    padding-left: 10px;
    gap: 10px;
    div span {
      font-size: 10px;
    }
  }
`,_6=j.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 200px calc(100% - 200px);
  grid-template-rows: 1fr;

  &:nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
  }

  img {
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 200px calc(100% - 200px);
    height: auto;

    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    img {
      grid-area: 1 / 1 / 2 / 2;
      width: 200px;
      height: 200px;
    }
  }
`,z6=j.div`
  ${({theme:e})=>I`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: minmax(0px, 80px) 50px 50px;
    padding: 5px 10px;

    div.item-title {
      font-size: ${e.text.size.title} !important;
    }

    span {
      font-size: ${e.text.size.medium};
    }
    div:nth-child(1) {
      width: 100%;
      height: auto;
    }
    div {
      grid-column: 1 / 2;
      width: 100%;
      position: relative;

      .color-ball {
        min-width: 30px;
        max-height: 30px;
        min-height: 30px;
        max-width: 30px;

        border-radius: 50%;
      }
    }

    div:nth-child(2) {
      ${U("row")};
      gap: 20px;
    }

    button {
      width: 200px;
      height: 40px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
      div.item-title {
        font-size: ${e.text.size.xxlarge} !important;
      }
      span {
        font-size: ${e.text.size.small};
      }

      div:nth-child(2) {
        ${U("row")};
        gap: 15px;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      div.item-title {
        font-size: ${e.text.size.xxlarge} !important;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      div.item-title {
        font-size: ${e.text.size.xxlarge} !important;
      }

      span {
        font-size: ${e.text.size.small};
      }
    }
  `}
`,D6=({name:e,amount:t,quantitaty:n,imageUrl:r,slug:i,color:o,defaultImageUrl:s})=>{const a=r||s;return u.jsxs(_6,{children:[u.jsx("img",{src:a,alt:"Image of the respectily product."}),u.jsxs(z6,{children:[u.jsx("div",{className:"item-title",children:u.jsx("p",{children:e})}),u.jsxs("div",{className:"item-info",children:[u.jsxs("span",{children:["Valor: ",t," R$"]}),u.jsxs("span",{children:["Quantidade: ",n]}),u.jsx("span",{children:"Cor: "}),u.jsx("div",{className:"color-ball",style:{backgroundColor:o}})]}),u.jsx("div",{children:u.jsx("button",{children:u.jsx(Bs,{to:"/oculos/"+i,children:"Ver Produto"})})})]})]})},N6=({isCurrent:e})=>{const t=e?"flex":"none",{data:n}=Gd(),{settings:r}=te(),{payment_orders:i}=n;return u.jsx(T6,{$display:t,children:i.length===0?u.jsx(or,{text:"Você ainda não possui pedidos"}):i.map((o,s)=>u.jsx(M6,{orders:o.order,created_at:o.created_at,order_number:o.order_number,order_status:o.order_status,amount:o.amount,defaultImageUrl:r.default_image_url},s))})},M6=({orders:e,created_at:t,order_number:n,order_status:r,amount:i,defaultImageUrl:o})=>{const{settings:s}=te();return u.jsxs(E6,{children:[u.jsxs(R6,{children:[u.jsxs("div",{children:[u.jsx("span",{children:"Data:"}),u.jsx("span",{children:t})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Total:"}),u.jsxs("span",{children:["R$",i/100]})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Status:"}),u.jsx("span",{children:r})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Pedido:"}),u.jsx("span",{children:n})]})]}),u.jsx(L6,{children:e.map((a,l)=>{var c,d;return u.jsx(D6,{name:a.product.name,quantitaty:a.quantitaty,amount:a.product.amount,slug:a.product.slug,imageUrl:s.site_domain+(((c=a.product.images)==null?void 0:c.url)||s.default_image_url),color:((d=a.color)==null?void 0:d.css_color)||"",comeFrom:"profile",defaultImageUrl:o},l)})})]})},I6=j.section`
  width: 100%;
  height: auto;
  margin-top: 50px;
  min-height: calc(100vh - 270px);
  display: ${({$display:e})=>`${e} !important`};
  ${T("start","center","column")}
  gap: 10px;

  .change-warning {
    width: 100%;
    text-align: center;
    color: red;
  }

  button {
    width: 200px;
    height: 40px;
    background-color: gray;
    color: white;
  }

  .helper-text {
    ${b("center","center")}
    width: 90%;

    text-align: center;
  }
`,O6=j.div`
  width: auto;
  ${U("row")}
  input {
    border: 1px solid ${({theme:e})=>e.colors.secondaryDark};
    height: 40px;
    width: 200px;
    padding-left: 5px;
  }
`,b6=j.div`
  width: auto;
  ${T("start","start","column")}
  gap: 5px;
`;function V6({setShowForm:e,postResetCode:t}){const[n,r]=g.useState(!1),i=async()=>{r(!0);try{(await t()).ok&&e(!0)}finally{r(!1)}};return u.jsx("div",{children:n?u.jsx("div",{children:u.jsx(he,{})}):u.jsx("button",{onClick:i,children:"Gerar código"})})}function F6({postChangePassword:e,setMessage:t,setIsLoading:n}){const[r,i]=g.useState(""),[o,s]=g.useState(""),[a,l]=g.useState("");return u.jsxs(u.Fragment,{children:[u.jsxs(b6,{children:[u.jsx(Tl,{setter:s,type:"password",value:o,placeholder:"Senha antiga"}),u.jsx(Tl,{setter:l,type:"password",value:a,placeholder:"Nova senha"}),u.jsx(Tl,{setter:i,type:"text",value:r,placeholder:"Codigo de verificação"}),u.jsx("button",{onClick:async()=>{n(!0);const p=await(await e({password:a,current_password:o,reset_code:r})).json();(p.success||p.password||p.non_field_errors||p.reset_code)&&t(p),n(!1)},children:"Trocar senha"})]}),u.jsx("div",{className:"helper-text",children:u.jsx("span",{children:"Verifique o código enviado ao seu email vinculado a está conta."})})]})}const Tl=({setter:e,type:t,value:n,placeholder:r})=>u.jsx(O6,{children:u.jsx("input",{type:t,value:n,placeholder:r,onChange:i=>{const o=i.target.value;t==="text"?o.length<=6&&e(o):e(o)}})});function B6({message:e,setMessage:t}){const[n,r]=g.useState(!1);if(g.useEffect(()=>{const o=setTimeout(()=>{r(!0),t(null)},8e3);return()=>clearTimeout(o)},[e]),n)return null;const i=()=>{if(e.reset_code)return u.jsx("span",{className:"change-warning",children:e.reset_code});if(e.non_field_errors)return e.non_field_errors.map(o=>u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"change-warning",children:o})," ",u.jsx("br",{})]}));if(e.password)return e.password.map(o=>u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"change-warning",children:o})," ",u.jsx("br",{})]}))};return u.jsx("div",{className:"change-warning",children:u.jsx(i,{})})}const U6=({isCurrent:e})=>{const{postResetCode:t,postChangePassword:n}=Gd(),r=e?"flex":"none",[i,o]=g.useState(!1),[s,a]=g.useState(!1),[l,c]=g.useState(null);return u.jsxs(I6,{$display:r,children:[s?u.jsx(he,{}):i?u.jsx(F6,{postChangePassword:n,setMessage:c,setIsLoading:a}):u.jsx(V6,{setShowForm:o,postResetCode:t}),l&&(l.success?u.jsx(An,{message:l.success,text:"Ok",mode:"success",handler:()=>{o(!1),c(null)}}):u.jsx(B6,{message:l,setMessage:c}))]})},W6=()=>{const{state:e}=et(),[t,n]=g.useState((e==null?void 0:e.page)||"perfil");return u.jsxs(S6,{children:[u.jsxs(v6,{children:[u.jsx(Ll,{page:"pedidos",navName:"Meus pedidos",setCurrentPage:n,isCurrent:t==="pedidos"}),u.jsx(Ll,{page:"perfil",navName:"Perfil",setCurrentPage:n,isCurrent:t==="perfil"}),u.jsx(Ll,{page:"mudar-senha",navName:"Trocar senha",setCurrentPage:n,isCurrent:t==="mudar-senha"})]}),u.jsx("div",{className:"separator"}),u.jsxs(w6,{children:[u.jsx(N6,{isCurrent:t==="pedidos"}),u.jsx($6,{isCurrent:t==="perfil"}),u.jsx(U6,{isCurrent:t==="mudar-senha"})]})]})},Ll=({page:e,navName:t,setCurrentPage:n,isCurrent:r})=>u.jsx(y6,{onClick:()=>n(e),$current:r?"true":"",children:u.jsx("span",{children:t})});function H6(){return u.jsx(G6,{children:u.jsx(W6,{})})}const wv=g.createContext(null),Gd=()=>{const e=g.useContext(wv);if(!e)throw new Error("useUserProfileContext must be used inside UserProfileContextProvider.");return e},G6=({children:e})=>{const[t,n]=g.useState(!0),{slug:r}=Wg(),i=Qt(),{api:o}=te(),[s,a]=g.useState(null),{user:l,actions:c}=sr();g.useEffect(()=>{(async()=>{var S;try{const m=await fetch(o.user_profile+r,{headers:{Authorization:"Bearer "+((S=l.token)==null?void 0:S.access)||""},credentials:"include"});if(m.ok){const f=await m.json();a(f)}m.status===401&&i("/",{replace:!0})}finally{n(!1)}})()},[l.isAuthenticated]),r===void 0&&i("/",{replace:!0});const y={data:s,postChangePassword:async w=>{var m;return await fetch(o.change,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+((m=l.token)==null?void 0:m.access)},body:JSON.stringify(w),credentials:"include"})},postResetCode:async()=>{var S;return await fetch(o.reset_code,{method:"POST",credentials:"include",headers:{Authorization:"Bearer "+((S=l.token)==null?void 0:S.access)}})},postUpdateData:async(w,S)=>{var f;return await fetch(o.user_profile+S,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+((f=l.token)==null?void 0:f.access)},body:JSON.stringify(w),credentials:"include"})},deleteUser:async w=>{var m;(await fetch(o.user_profile+w,{method:"DELETE",headers:{Authorization:`Bearer ${((m=l.token)==null?void 0:m.access)||""}`},credentials:"include"})).ok&&c.logOut()}};return u.jsx(wv.Provider,{value:y,children:t?u.jsx(he,{}):e})},K6={hidden:{opacity:0,x:"100%"},enter:{opacity:1,x:0},exit:{opacity:0,x:"-100%"}},gi=({children:e})=>u.jsx(u.Fragment,{children:u.jsx(wt.div,{initial:"hidden",animate:"enter",exit:"exit",variants:K6,transition:{duration:.5,type:"tween"},children:u.jsx(zA,{children:e})})});function Q6(){return u.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"green",color:"white"},children:u.jsx("span",{children:"Congratilations! you have earned a new pair of glasses."})})}function X6(){return u.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"red",color:"black"},children:u.jsx("span",{children:"Ooops! Something goes wrong with your orders. Please, try again."})})}function Y6(){const{search:e}=et(),t=new URLSearchParams(e),n=t.get("success"),r=t.get("cancelled");return u.jsxs("div",{style:{width:"100vw",height:"100vh"},children:[n&&u.jsx(Q6,{}),r&&u.jsx(X6,{})]})}const q6=j.nav`
  ${T("center","center","column")}
  position: fixed;
  z-index: 6;
  top: 0;
  width: 100%;
  height: 120px;

  ${({theme:e})=>({backgroundColor:e.colors.primaryDark,color:e.colors.primaryLight})};
`;j.div`
  ${T("center","center","row")}

  height: 20%;
  width: 100%;
  gap: 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  margin-bottom: 5px;

  h1 {
    font-size: 40px;
    color: white;
    position: relative;
    right: 150px;
    font-weight: 100;
  }
`;const Z6=ei`
  0% {
    transform: rotate(0deg) scale(3.5);
  }
  25% {
    transform:  scale(2.5);
  }
  50% {
    transform:  scale(3.5);
  }
  75% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(3.5);
  }
`,J6=ei`
  0% {
    transform: translateX(0px)
  }
  30% {
    transform: translateX(120px) rotate(-20deg);
  }
  40% {
    transform: translateX(120px)
  }
  70% {
    transform: translateX(0px) rotate(20deg)
  }
  100% {
    transform: translateX(0px)
  }
`,Sv=j.div`
  width: 20px;
  height: 20px;
  ${b("center","center")}
  border-radius: 50%;
  position: absolute;
  ${({theme:e})=>({backgroundColor:e.colors.secondaryDark,color:e.colors.primaryLight})}
  left: 20px;
  bottom: 10px;

  @media (max-width: 1023px) {
    ${({theme:e})=>({backgroundColor:e.colors.primaryDark,color:e.colors.primaryLight})}
  }
`,eE=j(wt.div)`
  ${b("center","center")}
  position: relative;
  right: 0;
  text-decoration: none;
  margin-top: 10px;

  &.run-transition {
    animation: ${J6} 2s linear;
  }
  svg {
    transform: scale(3.5);
    color: ${({theme:e})=>e.colors.primaryLight};

    cursor: pointer;
    &.increasing-transition {
      animation: ${Z6} 3s linear infinite;
    }
  }

  &:hover {
    svg {
      color: ${({theme:e})=>e.colors.secondaryDark};
    }
    transition: all 300ms linear;
    div {
      color: ${({theme:e})=>e.colors.primaryLight};
    }
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    svg {
      transform: scale(2);
    }
  }

  @media (max-width: 520px) {
    svg {
      transform: scale(1.5) !important;
    }
    ${Sv} {
      left: 10px;
      width: 15px;
      height: 15px;
      font-size: ${({theme:e})=>e.text.size.small};
    }
  }
`;function Cv(){const{cart:e,actions:t}=Ln(),[n,r]=g.useState(!0),[i,o]=g.useState(e.products.length),s=g.useRef(null),a=l=>{var d;if(n){r(!1);return}const c=s.current;if(l){c==null||c.classList.add("run-transition");const p=setTimeout(()=>{var h;(h=c==null?void 0:c.firstElementChild)==null||h.classList.add("increasing-transition"),c==null||c.classList.remove("run-transition")},2e3);return()=>clearTimeout(p)}else(d=c==null?void 0:c.firstElementChild)==null||d.classList.remove("increasing-transition"),c==null||c.classList.remove("run-transition")};return g.useEffect(()=>{i<=e.products.length&&a(!0),o(e.products.length)},[e.products.length]),u.jsxs(eE,{title:"Carrinho",ref:s,children:[u.jsx(A1,{onClick:()=>{t.openSideBar(),a(!1)}}),u.jsx(Sv,{children:u.jsx("span",{children:i})})]})}const tE=j.div`
  width: max-content;
  height: fit-content;


  ${T("center","center","row")}
  gap: 20px;

  @media (min-width: 0px) and (max-width: 519px) {
    gap: 0px !important;
  }
`,nE=j.div`
  width: fit-content;
  height: max-content;
  position: relative;

  cursor: pointer;
  ${({theme:e})=>({color:e.colors.primaryLight,padding:e.spacing.small,fontSize:e.text.size.large})};

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: ${({theme:e})=>e.colors.primaryLight};

    transition:
      width 0.5s ease,
      left 0.5s ease;
  }

  svg {
    position: relative;
    top: 5px;
    transition: all 300ms linear;
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: ${({theme:e})=>e.text.size.medium};
  }
  @media (min-width: 0px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.text.size.small};
  }
`,rE=j(wt.div)`
  border-top: 1px solid white;
  width: auto;
  position: absolute;
  top: 135px;




  left: 0;
  background-color: ${({theme:e})=>e.colors.primaryDark};
  display: flex;
  z-index: 20;

  svg {
    position: absolute;
    top: 15px;
    margin-left: 5px;
    transition: all 300ms linear;
  }
  div {
    min-width: 100px;
  }

  @media (max-width: 1024px) {
    ${({$type:e})=>{if(e==="category")return{position:"fixed",top:"120px",width:"100%"}}};
  }
`,iE=j.div`

  width: max-content;
  height: auto;
  position: relative;
  min-height: 150px;
  cursor: pointer;

  &:hover {
    & .title::after {
      width: 100%;
      left: 0;
    }

    & .title svg {
      transform: rotate(-180deg);
    }
  }
  ${T("center","center","column")}
`,oE=e=>ei`
  0% {
    opacity: 0;
    ${!e}

  }
  100% {
    opacity: 1;
  }
`,sE=e=>I`
  animation-name: ${oE(e)};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
`,aE=j.div`
  width: auto;
  height: 100%;
  ${U("row")}
  position: relative;
`,lE=j(wt.div)`
  width: auto;
  height: auto;
  position: relative;
  ${T("center","center","column")}
`,uE=j.div`
  ${U("row")}
  width: auto;
  height: auto;

  .category-title:hover {
    ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.primaryDark})}
  }

  &:hover .category-title {
    ${({theme:e})=>({backgroundColor:e.colors.primaryLight,color:e.colors.primaryDark})};
  }
`,cE=j.div`
  width: 150px;
  height: 50px;
  ${T("center","center","column")}
  gap: 40px;
  cursor: pointer;
  transition: all 300ms linear;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100px;
  }
`,dE=j.div`
  ${({theme:e,$display:t})=>I`
    width: max-content;
    position: absolute;
    padding: 10px 40px;
    margin-left: 150px;
    top: 0;
    ${T("start","center","column")};
    flex-wrap: wrap;
    row-gap: 20px;
    gap: 20px;
    height: 100%;

    ${sE(!0)}
    ${t==="none"&&{display:"none !important"}};
    background-color: ${e.colors.primaryLight};
    color: ${e.colors.primaryDark};
    div {
      width: 120px;
      height: 50px;

      ${b("center","center")}
      text-align: center;
      a {
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
        color: ${e.colors.primaryDark};
        font-size: ${e.text.size.medium};

        &:hover {
          color: ${e.colors.secondaryDark};
        }
      }
    }
    @media (min-width: 0px) and (max-width: 1023px) {
      overflow-y: auto !important;
      flex-direction: row;
      align-items: start;
      padding-top: 20px !important;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 10px 20px;
      width: calc(100vw - 150px);
    }
    @media (min-width: 0px) and (max-width: 767px) {
      padding: 5px 10px;
      gap: 10px;
      div {
        width: 100px;
        a {
          font-size: ${e.text.size.small};
        }
      }

      width: calc(100vw - 100px);
      margin-left: 100px;
    }
  `}
`;function pE(){const{api:e}=te(),[t,n]=g.useState(!0),[r,i]=g.useState([]);return g.useEffect(()=>{fetch(e.navbar_filters).then(async o=>{if(!o.ok)throw new Error("Failed to fetch data.");const s=await o.json();i(s),n(!1)})},[]),t?u.jsx(he,{}):u.jsx(aE,{children:u.jsx(lE,{children:r.map((o,s)=>u.jsx(hE,{filterName:o.filter_name,name:o.name,data:o.data},s))})})}function hE({name:e,filterName:t,data:n}){const[r,i]=g.useState(!0);return u.jsxs(uE,{onMouseOver:()=>i(!1),onMouseLeave:()=>i(!0),children:[u.jsx(cE,{className:"category-title",children:u.jsx("span",{children:e})}),u.jsx(fE,{filterName:t,data:n,hide:r})]})}function fE({filterName:e,data:t,hide:n}){return u.jsx(dE,{className:"category-data",$display:n?"none":"flex",children:t.map(r=>u.jsx("div",{children:u.jsx(Bs,{to:`/pesquisa?${e}=${r.slug}`,children:u.jsx("span",{children:r.name})})},r.id))})}function mE(){return u.jsxs(gE,{children:[u.jsx(Bs,{to:"/",children:u.jsx("div",{children:u.jsx("span",{children:"Home"})})}),u.jsx(Bs,{to:"/pesquisa",children:u.jsx("div",{children:u.jsx("span",{children:"Pesquisa"})})})]})}const gE=j.div`
  ${T("center","center","column")}
  height: auto;

  div {
    width: 100px;
    height: 50px;
    ${b("center","center")}
    transition: all 150ms linear;
    &:hover {
      ${({theme:e})=>({backgroundColor:e.colors.primaryLight})}

      span {
        ${({theme:e})=>({color:e.colors.secondaryDark})};
      }
    }
    span {
      text-decoration: none;
      ${({theme:e})=>({color:e.colors.primaryLight,fontSize:e.text.size.medium})};

      &:hover {
      }
    }
  }
`,xE={hidden:{opacity:0,x:"50px",display:"none"},enter:{opacity:1,x:0,display:"flex"}};function qf({text:e,type:t}){const{pathname:n}=et(),r=La();return u.jsxs(iE,{onMouseEnter:()=>r.start("enter"),onMouseLeave:()=>r.start("hidden"),style:n==="/pesquisa"&&t==="category"?{display:"none"}:{},children:[u.jsx(nE,{className:"title",children:u.jsxs("span",{children:[e," ",u.jsx(Ra,{})]})}),u.jsx(rE,{variants:xE,initial:"hidden",animate:r,transition:{duration:.5,type:"easeOut"},$type:t,children:t!=="category"?u.jsx(mE,{}):u.jsx(pE,{})})]})}function vE(){return u.jsxs(tE,{children:[u.jsx(qf,{text:"Filtros",type:"category"}),u.jsx(qf,{text:"Site",type:"pages"})]})}const yE=j(wt.div)`
  ${T("center","center","row")}
  width: 100%;
  height: max-content;
  gap: 100px;
`,wE=j.div`
  ${T("center","center","row")}
  width: auto;
  height: max-content;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 10px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    position: absolute;
    left: 0;
    margin-left: 5px;
    gap: 5;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    position: absolute;
    left: 0;
    margin-left: 50px;
  }
  @media (min-width: 520px) and (max-width: 767px) {
    position: absolute;
    left: 0;
    margin-left: 20px;
  }
`,SE=j.div`
  ${T("center","center","row")}
  width: max-content;
  height: max-content;
  gap: 25px;

  @media (min-width: 1024px) and (max-width: 1400px) {
    gap: 10px;
  }
`,CE=j.h1`
  white-space: nowrap;

  &::after {
    content: '';
    border-right: 2px solid ${({theme:e})=>e.colors.primaryLight};
    margin-left: 40px;
  }
  ${({theme:e})=>({fontSize:e.text.size.xxlarge,fontWeight:e.text.weight.xsmall})};

  @media (min-width: 1400px) {
    font-size: ${({theme:e})=>e.text.size.title};
  }
  @media (min-width: 520px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.text.size.large};
  }
  @media (min-width: 0px) and (max-width: 519px) {
    font-size: ${({theme:e})=>e.text.size.medium};
    &::after {
      border-right: 1px solid ${({theme:e})=>e.colors.primaryLight};
      margin-left: 20px;
    }
  }
`;j.div`
  ${U("column")}
  position: relative;
`;const jE=j.form`
  width: 500px;
  height: 2.5rem;
  position: relative;
  color: ${({theme:e})=>e.colors.primaryDark};

  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-left: 50px;
    border-radius: 10px;
    border: 0;
    outline: none;

    &::-webkit-search-cancel-button {
      display: none;
    }

    &:focus {
      background-color: ${({theme:e})=>e.colors.secondaryDark};
    }

    &:focus,
    &:focus ~ svg {
      color: ${({theme:e})=>e.colors.primaryLight};
      transition: all 300ms linear;
    }
  }
  svg {
    transform: scale(1.5) rotate(90deg);
    position: absolute;
    left: 0;
    margin-left: 20px;
    top: 30%;
    cursor: pointer;
  }

  &:hover {
    svg,
    input {
      color: ${({theme:e})=>e.colors.primaryLight};
      transition: all 300ms linear;
    }

    input {
      background-color: ${({theme:e})=>e.colors.secondaryDark};
    }
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    width: 300px;
  }

  @media (min-width: 520px) and (max-width: 768px) {
    width: 350px;
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 250px;
  }
`;j.div`
  width: 100vw !important;
  height: calc(100vh - 120px) !important;
  margin-top: 120px;
  right: 0;
  left: 0;
  top: 0;
  ${b("center","start")}
  position: absolute;
  @media (min-width: 1024px) and (max-width: 1400px) {
    /* width: 300px; */
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: calc(100vh - 100px) !important;
    margin-top: 100px;
  }
`;function AE(){const{api:e}=te(),[t,n]=g.useState(!1),[r,i]=g.useState({count:0,page:1,data:[],limit:5}),[o,s]=g.useState(""),[a,l]=g.useState("");return g.useEffect(()=>{n(!0);const d=setTimeout(async()=>{if(o.length<=0){i({page:1,data:[],limit:1,count:0}),n(!1);return}const p=a!==o,h=p?1:r.page,v=await fetch(e.dynamic_search+`?query=${o}&page=${h}`);if(v.ok){const y=await v.json();i(w=>{let S,m;return p?(S=y.products,m={...w,data:S,page:1,count:y.count,limit:y.last}):(S=[...w.data,...y.products],m={...w,data:S,count:y.count,limit:y.last}),m})}n(!1)},1500);if(o)return()=>clearTimeout(d)},[o,r.page]),{isLoading:t,query:o,setQuery:s,search:r,getNextPageQuery:()=>{l(o),i(d=>({...d,page:r.page+1}))}}}const kE={hidden:{opacity:0,height:0,display:"none"},open:{opacity:1,height:"auto",display:"flex"}};function PE({search:e,containerRef:t,isLoading:n,getNextPageQuery:r,controls:i}){const{count:o,data:s,limit:a,page:l}=e,c=Qt(),{actions:d}=Ln(),{settings:p}=te(),h=g.useRef(null);g.useEffect(()=>{if(h.current){const y=h.current.lastElementChild,w=setTimeout(()=>{y==null||y.scrollIntoView({behavior:"smooth"})},300);return()=>clearTimeout(w)}},[s.length]);const v=y=>{i.start("hidden"),c("/oculos/"+y)};return u.jsx(Z$,{as:wt.div,ref:t,variants:kE,initial:"hidden",animate:i,transition:{duration:1,type:"spring"},children:n&&l===1?u.jsx(he,{}):s.length>0?u.jsxs(u.Fragment,{children:[u.jsx(J$,{children:u.jsxs("span",{children:[o," produtos encontrados."]})}),u.jsxs(xv,{ref:h,$mode:"search",children:[u.jsxs(vv,{$mode:"search",children:[u.jsx("span",{children:"Produto"}),u.jsx("span",{children:window.screen.width<768?"Qtd":"Quantidade"}),u.jsx("span",{children:"Preço"})]}),s.map(y=>u.jsx(Hd,{...y,navigateHandler:v,mode:"search",addItem:d.addItem,defaultImageUrl:p.default_image_url,domain:p.site_domain})),u.jsx(e6,{children:n?u.jsx(he,{height:"100%",class:"loading"}):l<a&&u.jsx("button",{onClick:()=>r(),children:"Buscar mais resultados"})})]})]}):u.jsx(or,{text:"Nenhum produto encontrado com este filtro"})})}function jv(){const{isLoading:e,search:t,query:n,setQuery:r,getNextPageQuery:i}=AE(),o=g.useRef(null),s=g.useRef(null),a=La();return g.useEffect(()=>{const l=c=>{var d;if(o.current&&!o.current.contains(c==null?void 0:c.target)&&!((d=s.current)!=null&&d.contains(c==null?void 0:c.target)))return a.start("hidden")};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[]),u.jsxs("div",{children:[u.jsxs(jE,{ref:s,children:[u.jsx("input",{content:"search",type:"text",placeholder:"Pesquisar",value:n,onChange:l=>r(l.target.value),onFocus:()=>{var l;a.start("open"),(l=o.current)==null||l.focus()}}),u.jsx(cP,{})]}),u.jsx(PE,{search:t,containerRef:o,isLoading:e,getNextPageQuery:i,controls:a})]})}const $E=j.div`
  ${T("center","center","row")}

  cursor: pointer;
  width: 50px;
  height: 1.5rem;
  margin-top: 17px;
  border-radius: 20px;
  color: ${({theme:e})=>e.colors.primaryLight};
  padding: 10px;
  font-size: 12px;
  margin-bottom: 15px;
  gap: 20px;
  word-wrap: break-word;

  @media (min-width: 0px) and (max-width: 519px) {
    padding: 0;
  }
`,EE=j.div`
  ${b("center","center")}
  width: max-content;
  svg {
    transform: scale(3);

    &:hover {
      color: ${({theme:e})=>e.colors.secondaryDark};
    }

    @media (min-width: 1024px) and (max-width: 1400px) {
      transform: scale(2);
    }
  }
`,TE=j(wt.div)`
  position: relative;
  ${T("start","start","column")}
  width: auto;
  height: auto;
  gap: 20px;
  ${({theme:e})=>({backgroundColor:e.colors.primaryDark,padding:e.spacing.medium})}

  border-radius: 0px 0px 10px 10px;
  .logout {
    font-size: ${({theme:e})=>e.text.size.medium};
  }

  @media (min-width: 0px) and (max-width: 1024px) {
    width: 100%;
  }
`,Ii=j.div`
  width: 100%;
  ${b("start","center")}
  color:;
  ${({theme:e})=>({color:e.colors.primaryLight,fontSize:e.text.size.large})}
  display: inline-block !important;
  &:hover {
    span {
      color: ${({theme:e})=>e.colors.primaryGray};
    }
  }

  &:hover::after {
    width: 60%;
    left: 0;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    margin-top: 30px;
    width: 0;
    height: 1px;
    background-color: ${({theme:e})=>e.colors.primaryLight};
    transition:
      width 0.5s ease,
      left 0.5s ease;
  }
`,Av=j.div`
  width: 100%;
  height: 50px;
  ${({theme:e})=>({color:e.colors.primaryLight,fontSize:e.text.size.xlarge})}
`,LE=j(wt.div)`
  width: auto;
  position: absolute;
  top: 120px;
  border-top: 1px solid white;

  @media (min-width: 0px) and (max-width: 1023px) {
    border-top: 0px;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    left: 0;
  }
`,RE=({isUserAuthenticated:e})=>u.jsx(EE,{children:e?u.jsx(cv,{}):u.jsx(dv,{})});function _E({children:e}){return u.jsx(ri,{children:u.jsx(TE,{children:e})})}function zE({user:e,navigate:t,logOut:n,controls:r}){const i=o=>(t("/usuario/"+e.slug,{state:{page:o}}),r.start("hidden"));return u.jsxs(u.Fragment,{children:[u.jsx(Av,{children:u.jsxs("span",{children:["Olá, ",e==null?void 0:e.first_name,"!"]})}),u.jsx(Ii,{onClick:()=>i("perfil"),children:u.jsx("span",{children:"Perfil"})}),u.jsx(Ii,{onClick:()=>i("pedidos"),children:u.jsx("span",{children:"Pedidos"})}),u.jsx(Ii,{onClick:()=>i("mudar-senha"),children:u.jsx("span",{children:"Trocar senha"})}),u.jsxs("span",{onClick:()=>n(),className:"logout",children:[u.jsx(MA,{})," Sair"]})]})}function DE({setOpenAuth:e}){return u.jsxs(u.Fragment,{children:[u.jsx(Av,{children:u.jsx("span",{children:"Você está offline no momento."})}),u.jsx(Ii,{onClick:()=>e({isOpen:!0,mode:"login"}),children:u.jsx("span",{children:"Login"})}),u.jsx(Ii,{onClick:()=>e({isOpen:!0,mode:"register"}),children:u.jsx("span",{children:"Registrar"})})]})}const NE={hidden:{opacity:0,maxHeight:0,display:"none"},open:{opacity:1,maxHeight:800,display:"flex"}},kv=()=>{const{user:e,actions:t}=sr(),{api:n}=te(),[r,i]=g.useState({isOpen:!1,mode:"login"}),o=g.useRef(null),s=Qt(),a=La();g.useEffect(()=>{const c=d=>{o.current&&!o.current.contains(d.target)&&a.start("hidden")};return document.addEventListener("click",c),()=>document.removeEventListener("click",c)},[]);const l=()=>{i({isOpen:!1,mode:"login"})};return u.jsxs($E,{onClick:()=>a.start("open"),ref:o,children:[u.jsx(RE,{isUserAuthenticated:e.isAuthenticated}),r.isOpen?u.jsx(Ud,{foreignSetterHandler:l,mode:r.mode}):u.jsx(LE,{variants:NE,initial:"hidden",animate:a,exit:"hidden",transition:{duration:.5,type:"easeInOut"},layout:!0,children:u.jsx(_E,{children:e.isAuthenticated?u.jsx(zE,{navigate:s,user:e.info,logOut:()=>{oP(n.logout),t.logOut()},controls:a}):u.jsx(DE,{setOpenAuth:i})})})]})},ME=j.div`
  width: 100px;
  height: 100%;
  position: absolute;
  right: 0;

  ${b("center","center")}

  .nav-hamburguer {
    transform: scale(3);
    transition: all 300ms linear;
  }

  @media (min-width: 520px) and (max-width: 768px) {
    .nav-hamburguer {
      transform: scale(2);
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    width: 50px;
    .nav-hamburguer {
      transform: scale(1.5);
    }
  }
`,IE=j(Xt)`
  ${T("center","start","row")};

  background-color: ${({theme:e})=>e.colors.secondaryDark};
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  height: auto;
  color: black;
  top: 120px;
  gap: 5%;
  z-index: 10;
  & > div {
    padding-top: 30px;
  }

  @media (min-width: 0px) and (max-width: 1023px) {
    svg:hover {
      color: ${({theme:e})=>e.colors.primaryDark};
    }
    ${L1} {
      padding: 0px 50px;
      svg {
        transform: scale(8) !important;
      }
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    /* width: 250px; */
    svg {
      transform: scale(1.5);
    }

    gap: 5px;
  }
`,OE={close:{maxHeight:0,paddingBottom:0,overflow:"hidden"},open:{maxHeight:2e3,paddingBottom:50,overflow:"unset"}};function bE(){const[e,t]=g.useState(!1),n=g.useRef(null);return g.useEffect(()=>{const r=i=>{var o;!((o=n.current)!=null&&o.contains(i.target))&&e&&n.current&&t(!1)};return document.addEventListener("click",r),()=>document.removeEventListener("click",r)},[e]),u.jsxs(ME,{ref:n,onClick:r=>r.stopPropagation(),children:[e?u.jsx(Q1,{className:"nav-hamburguer",onClick:()=>{t(!1)}}):u.jsx(k$,{className:"nav-hamburguer",onClick:()=>{t(!0)}}),u.jsxs(IE,{variants:OE,initial:"close",animate:e?"open":"close",exit:"close",children:[u.jsx(jv,{}),u.jsx(kv,{}),u.jsx(Cv,{})]})]})}function VE(){return u.jsxs(yE,{children:[u.jsx(BE,{}),u.jsx(FE,{})]})}const FE=()=>{const[e,t]=g.useState(!1);return g.useEffect(()=>{const n=()=>{window.screen.width<1024?t(!0):t(!1)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),u.jsx(SE,{children:e?u.jsx(bE,{}):u.jsxs(u.Fragment,{children:[u.jsx(jv,{}),u.jsx(kv,{}),u.jsx(Cv,{})]})})},BE=()=>u.jsxs(wE,{children:[u.jsx(CE,{children:"Óculos de Fábrica"}),u.jsx(vE,{})]}),UE=j.div`
  ${T("center","center","column")}
  width: 250px;
  height: auto;
  position: fixed;
  opacity: 1;
  z-index: 0;
  gap: 20px;
  right: 0;
  bottom: 0;
  margin-right: 100px;
  margin-bottom: 50px;

  @media (min-width: 0px) and (max-width: 520px) {
    width: 100%;
    margin: 0 auto;
    left: 0;
    margin-right: 0px;
  }
`,WE=j(Xt)`
  ${({theme:e})=>I`
    width: 350px;
    height: 100px;
    ${T("start","center","column")}
    gap: 20px;
    background-color: ${e.colors.primaryGreen};
    color: ${e.colors.primaryDark};
    font-size: ${e.text.size.large};
    border-radius: 10px;
    svg {
      transform: scale(3);
    }

    @media (min-width: 0px) and (max-width: 520px) {
      width: 250px;
      height: 60px;
      gap: 10px;

      font-size: ${e.text.size.small};
    }
  `}
`;function HE(){const{cart:e}=Ln(),[t,n]=g.useState(e.products.length),[r,i]=g.useState([]);return g.useEffect(()=>{if(e.products.length>t&&e.runAnimation){const o=e.products[e.products.length-1].name;i(s=>[...s,o])}n(e.products.length)},[e.products.length]),g.useEffect(()=>{if(e.runAnimation&&r.length>0){const o=setTimeout(()=>{i(s=>{const a=[...s];return a.pop(),a})},3e3);return()=>clearTimeout(o)}},[r.length]),u.jsx(UE,{children:u.jsx(ri,{children:r.map((o,s)=>u.jsx(KE,{},s+1))})})}const GE={open:{opacity:1,x:0},hidden:{opacity:0,x:200}};function KE(){return u.jsxs(WE,{variants:GE,animate:"open",initial:"hidden",exit:"hidden",layout:!0,children:[u.jsx("span",{children:"Adicionado ao carrinho com sucesso!"}),u.jsx(uP,{})]})}function QE(){const{actions:e,cart:t}=Ln(),{pathname:n,search:r}=et(),[i,o]=g.useState([]),s=g.useCallback(d=>{e.removeItem(d),o(p=>p.filter(h=>h.slug!==d))},[]),a=()=>e.closeSideBar(),l=i.reduce((d,p)=>Number(p.amount)+d,0),c={items:i.map(d=>d.slug),returnURL:n+r};return{cart:t,setShoppingList:o,removeCart:s,totalValue:l,shoppingContext:c,shoppingList:i,closeSideBar:a}}const XE=j.div`
  width: 50%;
  height: 100vh;
  position: fixed;
  right: -50%;
  bottom: 0;
  top: 0;
  z-index: 15;
  background-color: ${({theme:e})=>e.colors.primaryLight};
  ${U("column")}
  gap: 20px;
  transition: all 500ms ease-out;

  &.open-cart {
    right: 0 !important;
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 75% !important;
    right: -75%;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 100% !important;
    right: -100%;
  }
`,YE=j.div`
  width: 100%;
  height: 80px;
  position: relative;
  ${({theme:e})=>({color:e.colors.primaryLight,fontSize:e.text.size.title,backgroundColor:e.colors.secondaryDark})}
  ${b("start","center")}

  svg {
    position: absolute;
    right: 0;
    margin-right: 20px;
    cursor: pointer;
    &:hover {
      color: ${({theme:e})=>e.colors.primaryDark};
    }
  }
  padding-left: 20px;
`,qE=j.div`
  padding: 0px 20px;
  width: 100%;
  max-height: calc((100% - 80px) - 30%);
  ${U("column")}
  gap: 20px;
  ${({theme:e})=>({color:e.colors.primaryDark,fontSize:e.text.size.medium})}
  overflow-y: auto;
`,ZE=j.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  max-height: calc(100% - ((100% - 50px) - 20%));
  ${({theme:e})=>({color:e.colors.primaryDark,fontSize:e.text.size.xlarge})}

  ${T("center","center","column")}
  gap: 20px;

  div {
    width: 100%;
    ${T("space-between","center","row")}
    padding: 0px 15%;
  }
  div:nth-child(1) {
    width: 80%;
    height: 2px;
    background-color: white;
  }
  button {
    width: 100%;
    height: 50px;
    font-size: ${({theme:e})=>e.text.size.large};
    &:hover {
      ${({theme:e})=>({backgroundColor:e.colors.primaryGreen})}
    }
    transition: background-color 300ms linear;
  }

  @media (min-width: 0px) and (max-width: 767px) {
    font-size: ${({theme:e})=>e.text.size.medium};
  }
`;function JE({length:e,amount:t,shoppingContext:n,navigate:r,closeSideBar:i}){return u.jsxs(ZE,{children:[u.jsx("div",{}),u.jsxs("div",{children:[u.jsx("span",{children:"Items selecionados: "}),u.jsx("span",{children:e})]}),u.jsxs("div",{children:[u.jsx("span",{children:"Subtotal: "}),u.jsxs("span",{children:["R$ ",t]})]}),u.jsx("hr",{}),u.jsx("div",{onClick:()=>{e>0&&(r("/pagamento/checkin",{state:{shoppingList:n}}),i())},children:u.jsx("button",{children:"Checkout"})})]})}function eT({removeCart:e,setShoppingList:t,name:n,amount:r,slug:i}){const[o,s]=g.useState(!1);return u.jsxs(tT,{children:[u.jsx("button",{onClick:()=>{o?(t(a=>a.filter(l=>l.slug!==i)),s(!1)):(t(a=>[...a,{name:n,amount:r,slug:i}]),s(!0))},className:o?"cart-confirm":"",children:o?u.jsx(Od,{}):u.jsx(DP,{})}),u.jsx("div",{}),u.jsx("button",{onClick:()=>e(i),className:"cart-trash",children:u.jsx(yv,{})})]})}const tT=j.div`
  width: 150px;
  height: 100%;
  ${U("row")}
  position: absolute;
  right: 0;

  button {
    width: 50%;
    svg {
      transform: scale(2);
    }
    &:hover {
      background-color: ${({theme:e})=>e.colors.primaryGreen};
    }
    transition: all 300ms ease-out;
  }
  div {
    width: 1px;
    height: 100%;
  }

  .cart-trash:hover {
    ${({theme:e})=>({backgroundColor:e.colors.primaryRed,color:e.colors.primaryLight})}
  }

  .cart-confirm {
    ${({theme:e})=>({backgroundColor:e.colors.primaryGreen,color:e.colors.primaryLight})}
    svg {
      transform: scale(3) !important;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 150px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 120px;
  }
`;function nT(){const{removeCart:e,totalValue:t,shoppingContext:n,setShoppingList:r,cart:i,shoppingList:o,closeSideBar:s}=QE(),a=Qt(),{settings:l}=te(),c=d=>{s(),a("/oculos/"+d)};return u.jsxs(XE,{"data-content":"cart-side-bar",children:[u.jsxs(YE,{children:[u.jsx("span",{children:"Carrinho"}),u.jsx(M1,{onClick:s,title:"Fechar"})]}),u.jsx(qE,{children:i.products.length===0?u.jsx(or,{text:"Não há produtos no carrinho"}):u.jsx(ri,{children:i.products.map(d=>u.jsx(Hd,{name:d.name,amount:d.amount,slug:d.slug,mode:"cart",navigateHandler:c,images:d.images,defaultImageUrl:l.default_image_url,domain:l.site_domain,children:u.jsx(eT,{setShoppingList:r,removeCart:e,name:d.name,amount:d.amount,slug:d.slug})},d.slug))})}),u.jsx(JE,{closeSideBar:s,amount:t.toFixed(2),length:o.length,navigate:a,shoppingContext:n})]})}const rT=()=>u.jsxs(q6,{content:"navbar",children:[u.jsx(VE,{}),u.jsx(nT,{}),u.jsx(HE,{})]}),iT=g.memo(rT),oT=j.div`
  width: 100vw;
  height: 100vh;
  ${b("center","center")};

  background-color: ${({theme:e,$status:t})=>t==="success"?e.colors.primaryGreen:e.colors.primaryRed};
`,sT=j.div`
  ${({theme:e})=>I`
    width: 400px;
    height: 500px;
    margin-bottom: 250px;
    text-align: center;
    color: ${e.colors.primaryDark};
    font-size: ${e.text.size.xxlarge};

    svg {
      transform: scale(8);
    }
    ${T("center","center","column")};
    gap: 150px;

    span {
      white-space: nowrap;
    }
    @media (min-width: 520px) and (max-width: 768px) {
      font-size: ${e.text.size.xlarge};

      span {
        white-space: wrap;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      font-size: ${e.text.size.large};

      span {
        white-space: wrap;
      }
    }
  `}
`;function aT(e){return G({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M400 406.1V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V440.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4V288c0-13.3-10.7-24-24-24s-24 10.7-24 24V406.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320v32c0 26.5 21.5 48 48 48s48-21.5 48-48V320c0-26.5-21.5-48-48-48s-48 21.5-48 48z"},child:[]}]})(e)}function lT(){const e=Qt(),{search:t}=et(),[n,r]=g.useState(15),i=t.includes("success");return g.useEffect(()=>{const o=setTimeout(()=>{r(n-1)},1e3);return()=>clearTimeout(o)},[n]),n<=0&&e("/",{replace:!0}),u.jsx(oT,{$status:i?"success":"canceled",children:u.jsxs(sT,{children:[u.jsx("div",{children:u.jsx("span",{children:i?"Parabéns, você concluiu sua compra!":"Ops, algo de errado aconteceu e o seu pedido não foi finalizado!"})}),u.jsx("div",{children:i?u.jsx(Od,{}):u.jsx(aT,{})}),u.jsx("div",{className:"result-countdown",children:u.jsxs("span",{children:["Você será redirecionado de volta em ",n," segundos!"]})})]})})}const uT=j.footer`
  width: 100%;
  height: 100px;
  ${({theme:e})=>({backgroundColor:e.colors.primaryDark,color:e.colors.primaryLight})};
  gap: 10px;
  ${T("center","center","column")}
`;function cT(){return u.jsxs(uT,{children:[u.jsx("div",{children:u.jsx("span",{children:"Esté site é um projeto e-commerce criado para portfolio."})}),u.jsx("div",{children:"Powered by Django | React"})]})}function dT(){return u.jsx(pT,{children:u.jsx(or,{text:"Esta pagina não existe"})})}const pT=j.div`
  width: 100vw;
  height: 100vh;
  ${b("center","center")}
`;function hT(){const e=et();return u.jsxs(u.Fragment,{children:[u.jsx(iT,{}),u.jsxs(HS,{location:e,children:[u.jsx(Rt,{path:"/",element:u.jsx(gi,{children:u.jsx(PA,{})})}),u.jsx(Rt,{path:"/pesquisa",element:u.jsx(gi,{children:u.jsx(dk,{})})}),u.jsx(Rt,{path:"/oculos/:slug",element:u.jsx(gi,{children:u.jsx(q$,{})})}),u.jsx(Rt,{path:"/pagamento/checkin",element:u.jsx(x6,{})}),u.jsx(Rt,{path:"/pagamento/checkout",element:u.jsx(Y6,{})}),u.jsx(Rt,{path:"/usuario/:slug",element:u.jsx(gi,{children:u.jsx(H6,{})})}),u.jsx(Rt,{path:"/checkout/result",element:u.jsx(gi,{children:u.jsx(lT,{})})}),u.jsx(Rt,{path:"*",element:u.jsx(dT,{})})]},e.pathname),u.jsx(cT,{})]})}function fT(){return u.jsx(ZS,{children:u.jsx(ri,{mode:"wait",initial:!0,children:u.jsx(hT,{})})})}const mT={text:{size:{xsmall:"10px",small:"14px",medium:"18px",large:"22px",xlarge:"26px",xxlarge:"30px",title:"42px"},weight:{xsmall:100,small:300,medium:500,large:700,xlarge:900}},colors:{primaryDark:"rgb(25, 25, 25)",secondaryDark:"rgb(66, 66, 66)",primaryGray:"rgb(92, 92, 92)",primaryLight:"rgba(229, 228, 228, 1)",primaryGreen:"rgb(98, 218, 97)",primaryRed:"rgb(193, 42, 0)"},spacing:{xsmall:"5px",small:"10px",medium:"15px",large:"20px",xlarge:"25px",xxlarge:"100px"}};cg(document.getElementById("root")).render(u.jsxs(u.Fragment,{children:[u.jsx(c$,{}),u.jsx(f5,{children:u.jsx(eS,{theme:mT,children:u.jsx(lP,{children:u.jsx(yA,{children:u.jsx(fT,{})})})})})]}));
