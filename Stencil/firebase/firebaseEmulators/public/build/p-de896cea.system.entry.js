System.register(["./p-23fca9ea.system.js","./p-c372d0b7.system.js","./p-dae270e3.system.js","./p-1391e1b3.system.js"],(function(t){"use strict";var e,n,r,o,i,a,s,f,c,u,l,v,h,d,p,y,g,m,b,w;return{setters:[function(t){e=t.r;n=t.i;r=t.h;o=t.e},function(t){i=t.A},function(t){a=t.s;s=t.a;f=t.c;c=t.b;u=t.h;l=t.d;v=t.e;h=t.f;d=t.l},function(t){p=t.s;y=t.a;g=t.b;m=t.g;b=t.c;w=t.d}],execute:function(){var P=function(t){var e=[];for(var n=1;n<arguments.length;n++){e[n-1]=arguments[n]}if(!t){console.warn.apply(console,e)}};var T=function(){var t;var e=[];var n=function(e){P(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var r=function(e,n,r,o){if(t!=null){var i=typeof t==="function"?t(e,n):t;if(typeof i==="string"){if(typeof r==="function"){r(i,o)}else{P(false,"A history needs a getUserConfirmation function in order to use a prompt message");o(true)}}else{o(i!==false)}}else{o(true)}};var o=function(t){var n=true;var r=function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}if(n){t.apply(void 0,e)}};e.push(r);return function(){n=false;e=e.filter((function(t){return t!==r}))}};var i=function(){var t=[];for(var n=0;n<arguments.length;n++){t[n]=arguments[n]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:n,confirmTransitionTo:r,appendListener:o,notifyListeners:i}};var k=function(t,e){if(e===void 0){e="scrollPositions"}var n=new Map;var r=function(e,r){n.set(e,r);if(p(t,"sessionStorage")){var o=[];n.forEach((function(t,e){o.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(o))}};var o=function(t){return n.get(t)};var i=function(t){return n.has(t)};var a=function(e){r(e,[t.scrollX,t.scrollY])};if(p(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);n=s?new Map(JSON.parse(s)):n}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:r,get:o,has:i,capture:a}};var O="popstate";var L="hashchange";var S=function(t,e){if(e===void 0){e={}}var n=false;var r=t.history;var o=t.location;var i=t.navigator;var h=y(t);var d=!g(i);var p=k(t);var w=e.forceRefresh!=null?e.forceRefresh:false;var S=e.getUserConfirmation!=null?e.getUserConfirmation:m;var x=e.keyLength!=null?e.keyLength:6;var E=e.basename?a(s(e.basename)):"";var j=function(){try{return t.history.state||{}}catch(e){return{}}};var U=function(t){t=t||{};var e=t.key,n=t.state;var r=o.pathname,i=o.search,a=o.hash;var s=r+i+a;P(!E||u(s,E),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+E+'".');if(E){s=l(s,E)}return f(s,n,e||c(x))};var A=T();var H=function(t){p.capture(K.location.key);Object.assign(K,t);K.location.scrollPosition=p.get(K.location.key);K.length=r.length;A.notifyListeners(K.location,K.action)};var I=function(t){if(!b(i,t)){C(U(t.state))}};var R=function(){C(U(j()))};var C=function(t){if(n){n=false;H()}else{var e="POP";A.confirmTransitionTo(t,e,S,(function(n){if(n){H({action:e,location:t})}else{B(t)}}))}};var B=function(t){var e=K.location;var r=Y.indexOf(e.key);var o=Y.indexOf(t.key);if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;D(i)}};var V=U(j());var Y=[V.key];var q=0;var M=false;var F=function(t){return E+v(t)};var J=function(t,e){P(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="PUSH";var i=f(t,e,c(x),K.location);A.confirmTransitionTo(i,n,S,(function(t){if(!t){return}var e=F(i);var a=i.key,s=i.state;if(h){r.pushState({key:a,state:s},"",e);if(w){o.href=e}else{var f=Y.indexOf(K.location.key);var c=Y.slice(0,f===-1?0:f+1);c.push(i.key);Y=c;H({action:n,location:i})}}else{P(s===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");o.href=e}}))};var N=function(t,e){P(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var n="REPLACE";var i=f(t,e,c(x),K.location);A.confirmTransitionTo(i,n,S,(function(t){if(!t){return}var e=F(i);var a=i.key,s=i.state;if(h){r.replaceState({key:a,state:s},"",e);if(w){o.replace(e)}else{var f=Y.indexOf(K.location.key);if(f!==-1){Y[f]=i.key}H({action:n,location:i})}}else{P(s===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");o.replace(e)}}))};var D=function(t){r.go(t)};var W=function(){return D(-1)};var X=function(){return D(1)};var _=function(e){q+=e;if(q===1){t.addEventListener(O,I);if(d){t.addEventListener(L,R)}}else if(q===0){t.removeEventListener(O,I);if(d){t.removeEventListener(L,R)}}};var z=function(t){if(t===void 0){t=""}var e=A.setPrompt(t);if(!M){_(1);M=true}return function(){if(M){M=false;_(-1)}return e()}};var G=function(t){var e=A.appendListener(t);_(1);return function(){_(-1);e()}};var K={length:r.length,action:"POP",location:V,createHref:F,push:J,replace:N,go:D,goBack:W,goForward:X,block:z,listen:G,win:t};return K};var x="hashchange";var E={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+h(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:h,decodePath:s},slash:{encodePath:s,decodePath:s}};var j=function(t,e){if(e===void 0){e={}}var n=false;var r=null;var o=0;var i=false;var h=t.location;var p=t.history;var y=w(t.navigator);var g=e.keyLength!=null?e.keyLength:6;var b=e.getUserConfirmation,k=b===void 0?m:b,O=e.hashType,L=O===void 0?"slash":O;var S=e.basename?a(s(e.basename)):"";var j=E[L],U=j.encodePath,A=j.decodePath;var H=function(){var t=h.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var I=function(t){return h.hash=t};var R=function(t){var e=h.href.indexOf("#");h.replace(h.href.slice(0,e>=0?e:0)+"#"+t)};var C=function(){var t=A(H());P(!S||u(t,S),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+S+'".');if(S){t=l(t,S)}return f(t,undefined,c(g))};var B=T();var V=function(t){Object.assign(tt,t);tt.length=p.length;B.notifyListeners(tt.location,tt.action)};var Y=function(){var t=H();var e=U(t);if(t!==e){R(e)}else{var o=C();var i=tt.location;if(!n&&d(i,o)){return}if(r===v(o)){return}r=null;q(o)}};var q=function(t){if(n){n=false;V()}else{var e="POP";B.confirmTransitionTo(t,e,k,(function(n){if(n){V({action:e,location:t})}else{M(t)}}))}};var M=function(t){var e=tt.location;var r=D.lastIndexOf(v(e));var o=D.lastIndexOf(v(t));if(r===-1){r=0}if(o===-1){o=0}var i=r-o;if(i){n=true;z(i)}};var F=H();var J=U(F);if(F!==J){R(J)}var N=C();var D=[v(N)];var W=function(t){return"#"+U(S+v(t))};var X=function(t,e){P(e===undefined,"Hash history cannot push state; it is ignored");var n="PUSH";var o=f(t,undefined,c(g),tt.location);B.confirmTransitionTo(o,n,k,(function(t){if(!t){return}var e=v(o);var i=U(S+e);var a=H()!==i;if(a){r=e;I(i);var s=D.lastIndexOf(v(tt.location));var f=D.slice(0,s===-1?0:s+1);f.push(e);D=f;V({action:n,location:o})}else{P(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");V()}}))};var _=function(t,e){P(e===undefined,"Hash history cannot replace state; it is ignored");var n="REPLACE";var o=f(t,undefined,c(g),tt.location);B.confirmTransitionTo(o,n,k,(function(t){if(!t){return}var e=v(o);var i=U(S+e);var a=H()!==i;if(a){r=e;R(i)}var s=D.indexOf(v(tt.location));if(s!==-1){D[s]=e}V({action:n,location:o})}))};var z=function(t){P(y,"Hash history go(n) causes a full page reload in this browser");p.go(t)};var G=function(){return z(-1)};var K=function(){return z(1)};var Q=function(t,e){o+=e;if(o===1){t.addEventListener(x,Y)}else if(o===0){t.removeEventListener(x,Y)}};var Z=function(e){if(e===void 0){e=""}var n=B.setPrompt(e);if(!i){Q(t,1);i=true}return function(){if(i){i=false;Q(t,-1)}return n()}};var $=function(e){var n=B.appendListener(e);Q(t,1);return function(){Q(t,-1);n()}};var tt={length:p.length,action:"POP",location:N,createHref:W,push:X,replace:_,go:z,goBack:G,goForward:K,block:Z,listen:$,win:t};return tt};var U=function(t,e){var n=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:n})};var A={browser:S,hash:j};var H=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=n(this,"isServer");this.queue=n(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=A[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=U(e,t.root);t.location=e}));this.location=U(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(i.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}())}}}));