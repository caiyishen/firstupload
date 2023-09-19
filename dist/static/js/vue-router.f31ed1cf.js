"use strict";(self.webpackChunkhello_world=self.webpackChunkhello_world||[]).push([[517],{78345:function(t,e,r){function n(t,e){for(var r in e)t[r]=e[r];return t}r.d(e,{ZP:function(){return Ft}});var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,s=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")};function u(t){try{return decodeURIComponent(t)}catch(t){}return t}var c=function(t){return null==t||"object"==typeof t?t:String(t)};function p(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=u(r.shift()),o=r.length>0?u(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function f(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return s(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(s(e)):n.push(s(e)+"="+s(t)))})),n.join("&")}return s(e)+"="+s(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var h=/\/?$/;function l(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=d(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:m(e,o),matched:t?y(t):[]};return r&&(a.redirectedFrom=m(r,o)),Object.freeze(a)}function d(t){if(Array.isArray(t))return t.map(d);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=d(t[r]);return e}return t}var v=l(null,{path:"/"});function y(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function m(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||f)(n)+o}function g(t,e,r){return e===v?t===e:!!e&&(t.path&&e.path?t.path.replace(h,"")===e.path.replace(h,"")&&(r||t.hash===e.hash&&w(t.query,e.query)):!(!t.name||!e.name)&&t.name===e.name&&(r||t.hash===e.hash&&w(t.query,e.query)&&w(t.params,e.params)))}function w(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t).sort(),n=Object.keys(e).sort();return r.length===n.length&&r.every((function(r,o){var i=t[r];if(n[o]!==r)return!1;var a=e[r];return null==i||null==a?i===a:"object"==typeof i&&"object"==typeof a?w(i,a):String(i)===String(a)}))}function b(t){for(var e=0;e<t.matched.length;e++){var r=t.matched[e];for(var n in r.instances){var o=r.instances[n],i=r.enteredCbs[n];if(o&&i){delete r.enteredCbs[n];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var x={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,o=e.children,i=e.parent,a=e.data;a.routerView=!0;for(var s=i.$createElement,u=r.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;){var l=i.$vnode?i.$vnode.data:{};l.routerView&&f++,l.keepAlive&&i._directInactive&&i._inactive&&(h=!0),i=i.$parent}if(a.routerViewDepth=f,h){var d=p[u],v=d&&d.component;return v?(d.configProps&&k(v,a,d.route,d.configProps),s(v,a,o)):s()}var y=c.matched[f],m=y&&y.components[u];if(!y||!m)return p[u]=null,s();p[u]={component:m},a.registerRouteInstance=function(t,e){var r=y.instances[u];(e&&r!==t||!e&&r===t)&&(y.instances[u]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){y.instances[u]=e.componentInstance},a.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==y.instances[u]&&(y.instances[u]=t.componentInstance),b(c)};var g=y.props&&y.props[u];return g&&(n(p[u],{route:c,configProps:g}),k(m,a,c,g)),s(m,a,o)}};function k(t,e,r,o){var i=e.props=function(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}(r,o);if(i){i=e.props=n({},i);var a=e.attrs=e.attrs||{};for(var s in i)t.props&&s in t.props||(a[s]=i[s],delete i[s])}}function R(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function E(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var C=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=function t(e,r,n){return C(r)||(n=r||n,r=[]),n=n||{},e instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return U(t,e)}(e,r):C(e)?function(e,r,n){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],r,n).source);return U(new RegExp("(?:"+o.join("|")+")",B(n)),r)}(e,r,n):function(t,e,r){return I(P(t,r),e,r)}(e,r,n)},O=P,_=L,j=I,S=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t,e){for(var r,n=[],o=0,i=0,a="",s=e&&e.delimiter||"/";null!=(r=S.exec(t));){var u=r[0],c=r[1],p=r.index;if(a+=t.slice(i,p),i=p+u.length,c)a+=c[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||s,k=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:k?q(k):m?".*":"[^"+$(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function T(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function L(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"==typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",B(e)));return function(e,n){for(var o="",i=e||{},a=(n||{}).pretty?T:encodeURIComponent,s=0;s<t.length;s++){var u=t[s];if("string"!=typeof u){var c,p=i[u.name];if(null==p){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(C(p)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!r[s].test(c))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?u.prefix:u.delimiter)+c}}else{if(c=u.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):a(p),!r[s].test(c))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+c+'"');o+=u.prefix+c}}else o+=u}return o}}function $(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function q(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){return t.keys=e,t}function B(t){return t&&t.sensitive?"":"i"}function I(t,e,r){C(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=$(s);else{var u=$(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var p=$(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",U(new RegExp("^"+i,B(r)),e)}A.parse=O,A.compile=function(t,e){return L(P(t,e),e)},A.tokensToFunction=_,A.tokensToRegExp=j;var M=Object.create(null);function V(t,e,r){e=e||{};try{var n=M[t]||(M[t]=A.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(t){return""}finally{delete e[0]}}function H(t,e,r,o){var i="string"==typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){var a=(i=n({},t)).params;return a&&"object"==typeof a&&(i.params=n({},a)),i}if(!i.path&&i.params&&e){(i=n({},i))._normalized=!0;var s=n(n({},e.params),i.params);if(e.name)i.name=e.name,i.params=s;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;i.path=V(u,s,e.path)}return i}var f=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),h=e&&e.path||"/",l=f.path?R(f.path,h,r||i.append):h,d=function(t,e,r){void 0===e&&(e={});var n,o=r||p;try{n=o(t||"")}catch(t){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(c):c(a)}return n}(f.query,i.query,o&&o.options.parseQuery),v=i.hash||f.hash;return v&&"#"!==v.charAt(0)&&(v="#"+v),{_normalized:!0,path:l,query:d,hash:v}}var N,F=function(){},z={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function(t){var e=this,r=this.$router,o=this.$route,i=r.resolve(this.to,o,this.append),a=i.location,s=i.route,u=i.href,c={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,d=null==p?"router-link-active":p,v=null==f?"router-link-exact-active":f,y=null==this.activeClass?d:this.activeClass,m=null==this.exactActiveClass?v:this.exactActiveClass,w=s.redirectedFrom?l(null,H(s.redirectedFrom),null,r):s;c[m]=g(o,w,this.exactPath),c[y]=this.exact||this.exactPath?c[m]:function(t,e){return 0===t.path.replace(h,"/").indexOf(e.path.replace(h,"/"))&&(!e.hash||t.hash===e.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(t.query,e.query)}(o,w);var b=c[m]?this.ariaCurrentValue:null,x=function(t){D(t)&&(e.replace?r.replace(a,F):r.push(a,F))},k={click:D};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=x})):k[this.event]=x;var R={class:c},E=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:u,route:s,navigate:x,isActive:c[y],isExactActive:c[m]});if(E){if(1===E.length)return E[0];if(E.length>1||!E.length)return 0===E.length?t():t("span",{},E)}if("a"===this.tag)R.on=k,R.attrs={href:u,"aria-current":b};else{var C=K(this.$slots.default);if(C){C.isStatic=!1;var A=C.data=n({},C.data);for(var O in A.on=A.on||{},A.on){var _=A.on[O];O in k&&(A.on[O]=Array.isArray(_)?_:[_])}for(var j in k)j in A.on?A.on[j].push(k[j]):A.on[j]=x;var S=C.data.attrs=n({},C.data.attrs);S.href=u,S["aria-current"]=b}else R.on=k}return t(this.tag,R,this.$slots.default)}};function D(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function K(t){if(t)for(var e,r=0;r<t.length;r++){if("a"===(e=t[r]).tag)return e;if(e.children&&(e=K(e.children)))return e}}var J="undefined"!=typeof window;function Q(t,e,r,n,o){var i=e||[],a=r||Object.create(null),s=n||Object.create(null);t.forEach((function(t){X(i,a,s,t,o)}));for(var u=0,c=i.length;u<c;u++)"*"===i[u]&&(i.push(i.splice(u,1)[0]),c--,u--);return{pathList:i,pathMap:a,nameMap:s}}function X(t,e,r,n,o,i){var a=n.path,s=n.name,u=n.pathToRegexpOptions||{},c=function(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:E(e.path+"/"+t)}(a,o,u.strict);"boolean"==typeof n.caseSensitive&&(u.sensitive=n.caseSensitive);var p={path:c,regex:Y(c,u),components:n.components||{default:n.component},alias:n.alias?"string"==typeof n.alias?[n.alias]:n.alias:[],instances:{},enteredCbs:{},name:s,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?E(i+"/"+n.path):void 0;X(t,e,r,n,p,o)})),e[p.path]||(t.push(p.path),e[p.path]=p),void 0!==n.alias)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var l={path:f[h],children:n.children};X(t,e,r,l,o,p.path||"/")}s&&(r[s]||(r[s]=p))}function Y(t,e){return A(t,[],e)}function W(t,e){var r=Q(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t,r,a){var u=H(t,r,!1,e),c=u.name;if(c){var p=i[c];if(!p)return s(null,u);var f=p.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof u.params&&(u.params={}),r&&"object"==typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=V(p.path,u.params),s(p,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(Z(v.regex,u.path,u.params))return s(v,u,a)}}return s(null,u)}function s(t,r,n){return t&&t.redirect?function(t,r){var n=t.redirect,o="function"==typeof n?n(l(t,r,null,e)):n;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return s(null,r);var u=o,c=u.name,p=u.path,f=r.query,h=r.hash,d=r.params;if(f=u.hasOwnProperty("query")?u.query:f,h=u.hasOwnProperty("hash")?u.hash:h,d=u.hasOwnProperty("params")?u.params:d,c)return i[c],a({_normalized:!0,name:c,query:f,hash:h,params:d},void 0,r);if(p){var v=function(t,e){return R(t,e.parent?e.parent.path:"/",!0)}(p,t);return a({_normalized:!0,path:V(v,d),query:f,hash:h},void 0,r)}return s(null,r)}(t,n||r):t&&t.matchAs?function(t,e,r){var n=a({_normalized:!0,path:V(r,e.params)});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,s(i,e)}return s(null,e)}(0,r,t.matchAs):l(t,r,n,e)}return{match:a,addRoute:function(t,e){var r="object"!=typeof t?i[t]:void 0;Q([e||t],n,o,i,r),r&&r.alias.length&&Q(r.alias.map((function(t){return{path:t,children:[e]}})),n,o,i,r)},getRoutes:function(){return n.map((function(t){return o[t]}))},addRoutes:function(t){Q(t,n,o,i)}}}function Z(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1];a&&(r[a.name||"pathMatch"]="string"==typeof n[o]?u(n[o]):n[o])}return!0}var G=J&&window.performance&&window.performance.now?window.performance:Date;function tt(){return G.now().toFixed(3)}var et=tt();function rt(){return et}function nt(t){return et=t}var ot=Object.create(null);function it(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=n({},window.history.state);return r.key=rt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",ut),function(){window.removeEventListener("popstate",ut)}}function at(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=function(){var t=rt();if(t)return ot[t]}(),a=o.call(t,e,r,n?i:null);a&&("function"==typeof a.then?a.then((function(t){lt(t,i)})).catch((function(t){})):lt(a,i))}))}}function st(){var t=rt();t&&(ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function ut(t){st(),t.state&&t.state.key&&nt(t.state.key)}function ct(t){return ft(t.x)||ft(t.y)}function pt(t){return{x:ft(t.x)?t.x:window.pageXOffset,y:ft(t.y)?t.y:window.pageYOffset}}function ft(t){return"number"==typeof t}var ht=/^#\d/;function lt(t,e){var r,n="object"==typeof t;if(n&&"string"==typeof t.selector){var o=ht.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(o){var i=t.offset&&"object"==typeof t.offset?t.offset:{};e=function(t,e){var r=document.documentElement.getBoundingClientRect(),n=t.getBoundingClientRect();return{x:n.left-r.left-e.x,y:n.top-r.top-e.y}}(o,i={x:ft((r=i).x)?r.x:0,y:ft(r.y)?r.y:0})}else ct(t)&&(e=pt(t))}else n&&ct(t)&&(e=pt(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var dt,vt=J&&(-1===(dt=window.navigator.userAgent).indexOf("Android 2.")&&-1===dt.indexOf("Android 4.0")||-1===dt.indexOf("Mobile Safari")||-1!==dt.indexOf("Chrome")||-1!==dt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState;function yt(t,e){st();var r=window.history;try{if(e){var o=n({},r.state);o.key=rt(),r.replaceState(o,"",t)}else r.pushState({key:nt(tt())},"",t)}catch(r){window.location[e?"replace":"assign"](t)}}function mt(t){yt(t,!0)}var gt={redirected:2,aborted:4,cancelled:8,duplicated:16};function wt(t,e){return bt(t,e,gt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function bt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var xt=["params","query","hash"];function kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Rt(t,e){return kt(t)&&t._isRouter&&(null==e||t.type===e)}function Et(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}function Ct(t,e){return At(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function At(t){return Array.prototype.concat.apply([],t)}var Ot="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function _t(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var jt=function(t,e){this.router=t,this.base=function(t){if(!t)if(J){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}(e),this.current=v,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function St(t,e,r,n){var o=Ct(t,(function(t,n,o,i){var a=function(t,e){return"function"!=typeof t&&(t=N.extend(t)),t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return At(n?o.reverse():o)}function Pt(t,e){if(e)return function(){return t.apply(e,arguments)}}jt.prototype.listen=function(t){this.cb=t},jt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},jt.prototype.onError=function(t){this.errorCbs.push(t)},jt.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(t){throw this.errorCbs.forEach((function(e){e(t)})),t}var i=this.current;this.confirmTransition(n,(function(){o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(n,i)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(Rt(t,gt.redirected)&&i===v||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},jt.prototype.confirmTransition=function(t,e,r){var n=this,o=this.current;this.pending=t;var i,a,s=function(t){!Rt(t)&&kt(t)&&(n.errorCbs.length?n.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},u=t.matched.length-1,c=o.matched.length-1;if(g(t,o)&&u===c&&t.matched[u]===o.matched[c])return this.ensureURL(),t.hash&&at(this.router,o,t,!1),s(((a=bt(i=o,t,gt.duplicated,'Avoided redundant navigation to current location: "'+i.fullPath+'".')).name="NavigationDuplicated",a));var p,f=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),h=f.updated,l=f.deactivated,d=f.activated,v=[].concat(function(t){return St(t,"beforeRouteLeave",Pt,!0)}(l),this.router.beforeHooks,function(t){return St(t,"beforeRouteUpdate",Pt)}(h),d.map((function(t){return t.beforeEnter})),(p=d,function(t,e,r){var n=!1,o=0,i=null;Ct(p,(function(t,e,a,s){if("function"==typeof t&&void 0===t.cid){n=!0,o++;var u,c=_t((function(e){var n;((n=e).__esModule||Ot&&"Module"===n[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:N.extend(e),a.components[s]=e,--o<=0&&r()})),p=_t((function(t){var e="Failed to resolve async component "+s+": "+t;i||(i=kt(t)?t:new Error(e),r(i))}));try{u=t(c,p)}catch(t){p(t)}if(u)if("function"==typeof u.then)u.then(c,p);else{var f=u.component;f&&"function"==typeof f.then&&f.then(c,p)}}})),n||r()})),y=function(e,r){if(n.pending!==t)return s(wt(o,t));try{e(t,o,(function(e){!1===e?(n.ensureURL(!0),s(function(t,e){return bt(t,e,gt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}(o,t))):kt(e)?(n.ensureURL(!0),s(e)):"string"==typeof e||"object"==typeof e&&("string"==typeof e.path||"string"==typeof e.name)?(s(function(t,e){return bt(t,e,gt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+function(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return xt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}(e)+'" via a navigation guard.')}(o,t)),"object"==typeof e&&e.replace?n.replace(e):n.push(e)):r(e)}))}catch(t){s(t)}};Et(v,y,(function(){var r=function(t){return St(t,"beforeRouteEnter",(function(t,e,r,n){return function(t,e,r){return function(n,o,i){return t(n,o,(function(t){"function"==typeof t&&(e.enteredCbs[r]||(e.enteredCbs[r]=[]),e.enteredCbs[r].push(t)),i(t)}))}}(t,r,n)}))}(d);Et(r.concat(n.router.resolveHooks),y,(function(){if(n.pending!==t)return s(wt(o,t));n.pending=null,e(t),n.router.app&&n.router.app.$nextTick((function(){b(t)}))}))}))},jt.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},jt.prototype.setupListeners=function(){},jt.prototype.teardown=function(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=v,this.pending=null};var Tt=function(t){function e(e,r){t.call(this,e,r),this._startLocation=Lt(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=vt&&r;n&&this.listeners.push(it());var o=function(){var r=t.current,o=Lt(t.base);t.current===v&&o===t._startLocation||t.transitionTo(o,(function(t){n&&at(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){yt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){mt(E(n.base+t.fullPath)),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(Lt(this.base)!==this.current.fullPath){var e=E(this.base+this.current.fullPath);t?yt(e):mt(e)}},e.prototype.getCurrentLocation=function(){return Lt(this.base)},e}(jt);function Lt(t){var e=window.location.pathname,r=e.toLowerCase(),n=t.toLowerCase();return!t||r!==n&&0!==r.indexOf(E(n+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var $t=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=Lt(t);if(!/^\/#/.test(e))return window.location.replace(E(t+"/#"+e)),!0}(this.base)||qt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router.options.scrollBehavior,r=vt&&e;r&&this.listeners.push(it());var n=function(){var e=t.current;qt()&&t.transitionTo(Ut(),(function(n){r&&at(t.router,n,e,!0),vt||Mt(n.fullPath)}))},o=vt?"popstate":"hashchange";window.addEventListener(o,n),this.listeners.push((function(){window.removeEventListener(o,n)}))}},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){It(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,(function(t){Mt(t.fullPath),at(n.router,t,o,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Ut()!==e&&(t?It(e):Mt(e))},e.prototype.getCurrentLocation=function(){return Ut()},e}(jt);function qt(){var t=Ut();return"/"===t.charAt(0)||(Mt("/"+t),!1)}function Ut(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function Bt(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function It(t){vt?yt(Bt(t)):window.location.hash=t}function Mt(t){vt?mt(Bt(t)):window.location.replace(Bt(t))}var Vt=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){var t=e.current;e.index=r,e.updateRoute(n),e.router.afterHooks.forEach((function(e){e&&e(n,t)}))}),(function(t){Rt(t,gt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(jt),Ht=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=W(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!vt&&!1!==t.fallback,this.fallback&&(e="hash"),J||(e="abstract"),this.mode=e,e){case"history":this.history=new Tt(this,t.base);break;case"hash":this.history=new $t(this,t.base,this.fallback);break;case"abstract":this.history=new Vt(this,t.base)}},Nt={currentRoute:{configurable:!0}};Ht.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Nt.currentRoute.get=function(){return this.history&&this.history.current},Ht.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardown()})),!this.app){this.app=t;var r=this.history;if(r instanceof Tt||r instanceof $t){var n=function(t){r.setupListeners(),function(t){var n=r.current,o=e.options.scrollBehavior;vt&&o&&"fullPath"in t&&at(e,t,n,!1)}(t)};r.transitionTo(r.getCurrentLocation(),n,n)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},Ht.prototype.beforeEach=function(t){return zt(this.beforeHooks,t)},Ht.prototype.beforeResolve=function(t){return zt(this.resolveHooks,t)},Ht.prototype.afterEach=function(t){return zt(this.afterHooks,t)},Ht.prototype.onReady=function(t,e){this.history.onReady(t,e)},Ht.prototype.onError=function(t){this.history.onError(t)},Ht.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},Ht.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!=typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},Ht.prototype.go=function(t){this.history.go(t)},Ht.prototype.back=function(){this.go(-1)},Ht.prototype.forward=function(){this.go(1)},Ht.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Ht.prototype.resolve=function(t,e,r){var n=H(t,e=e||this.history.current,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=function(t,e,r){var n="hash"===r?"#"+e:e;return t?E(t+"/"+n):n}(this.history.base,i,this.mode);return{location:n,route:o,href:a,normalizedTo:n,resolved:o}},Ht.prototype.getRoutes=function(){return this.matcher.getRoutes()},Ht.prototype.addRoute=function(t,e){this.matcher.addRoute(t,e),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Ht.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==v&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Ht.prototype,Nt);var Ft=Ht;function zt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}Ht.install=function t(e){if(!t.installed||N!==e){t.installed=!0,N=e;var r=function(t){return void 0!==t},n=function(t,e){var n=t.$options._parentVnode;r(n)&&r(n=n.data)&&r(n=n.registerRouteInstance)&&n(t,e)};e.mixin({beforeCreate:function(){r(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",x),e.component("RouterLink",z);var o=e.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}},Ht.version="3.6.5",Ht.isNavigationFailure=Rt,Ht.NavigationFailureType=gt,Ht.START_LOCATION=v,J&&window.Vue&&window.Vue.use(Ht)}}]);
//# sourceMappingURL=vue-router.f31ed1cf.js.map