!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase)}(this,function(at){"use strict";try{(function(){at=at&&Object.prototype.hasOwnProperty.call(at,"default")?at.default:at;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function d(e,a,s,u){return new(s=s||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function i(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,i)}o((u=u.apply(e,a||[])).next())})}function h(n,r){var i,o,a,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function r(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}(arguments[t]));return e}function f(){return"indexedDB"in window&&null!==indexedDB}function p(){return new Promise(function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=window.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||window.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function v(){return!(!navigator||!navigator.cookieEnabled)}var i,e,t,o="FirebaseError",g=(i=Error,n(e=u,t=i),e.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a),u);function a(){this.constructor=e}function u(e,t){var n=i.call(this,t)||this;return n.code=e,n.name=o,Object.setPrototypeOf(n,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,c.prototype.create),n}var c=(y.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r,i=t[0]||{},o=this.service+"/"+e,a=this.errors[e],s=a?(r=i,a.replace(b,function(e,t){var n=r[t];return null!=n?String(n):"<"+t+"?>"})):"Error",u=this.serviceName+": "+s+" ("+o+").",c=new g(o,u),l=0,f=Object.keys(i);l<f.length;l++){var p=f[l];"_"!==p.slice(-1)&&(p in c&&console.warn('Overwriting FirebaseError base field "'+p+'" can cause unexpected behavior.'),c[p]=i[p])}return c},y);function y(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var b=/\{\$([^}]+)}/g,w=(m.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},m.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},m.prototype.setServiceProps=function(e){return this.serviceProps=e,this},m);function m(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function _(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function E(n,r,i){var o,e=new Promise(function(e,t){_(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function I(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function S(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return E(this[n],e,arguments)})})}function T(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function O(e,r,t,n){n.forEach(function(n){n in t.prototype&&(e.prototype[n]=function(){return e=this[r],(t=E(e,n,arguments)).then(function(e){if(e)return new N(e,t.request)});var e,t})})}function C(e){this._index=e}function N(e,t){this._cursor=e,this._request=t}function P(e){this._store=e}function A(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function x(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new A(n)}function D(e){this._db=e}I(C,"_index",["name","keyPath","multiEntry","unique"]),S(C,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),O(C,"_index",IDBIndex,["openCursor","openKeyCursor"]),I(N,"_cursor",["direction","key","primaryKey","value"]),S(N,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(N.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),_(t._request).then(function(e){if(e)return new N(e,t._request)})})})}),P.prototype.createIndex=function(){return new C(this._store.createIndex.apply(this._store,arguments))},P.prototype.index=function(){return new C(this._store.index.apply(this._store,arguments))},I(P,"_store",["name","keyPath","indexNames","autoIncrement"]),S(P,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),O(P,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),T(P,"_store",IDBObjectStore,["deleteIndex"]),A.prototype.objectStore=function(){return new P(this._tx.objectStore.apply(this._tx,arguments))},I(A,"_tx",["objectStoreNames","mode"]),T(A,"_tx",IDBTransaction,["abort"]),x.prototype.createObjectStore=function(){return new P(this._db.createObjectStore.apply(this._db,arguments))},I(x,"_db",["name","version","objectStoreNames"]),T(x,"_db",IDBDatabase,["deleteObjectStore","close"]),D.prototype.transaction=function(){return new A(this._db.transaction.apply(this._db,arguments))},I(D,"_db",["name","version","objectStoreNames"]),T(D,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(o){[P,C].forEach(function(e){o in e.prototype&&(e.prototype[o.replace("open","iterate")]=function(){var e,t=(e=arguments,Array.prototype.slice.call(e)),n=t[t.length-1],r=this._store||this._index,i=r[o].apply(r,t.slice(0,-1));i.onsuccess=function(){n(i.result)}})})}),[C,P].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var R,L="0.4.15",k=1e4,j="w:"+L,B="FIS_v2",H="https://firebaseinstallations.googleapis.com/v1",F=36e5,q=((R={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',R["not-registered"]="Firebase Installation is not registered.",R["installation-not-found"]="Firebase Installation not found.",R["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',R["app-offline"]="Could not process request. Application offline.",R["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",R),V=new c("installations","Installations",q);function G(e){return e instanceof g&&e.code.includes("request-failed")}function M(e){var t=e.projectId;return H+"/projects/"+t+"/installations"}function U(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function K(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,V.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function W(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function z(e,t){var n=t.refreshToken,r=W(e);return r.append("Authorization",B+" "+n),r}function $(n){return d(this,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function J(t){return new Promise(function(e){setTimeout(e,t)})}var Y=/^[cdef][\w-]{21}$/,X="";function Z(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return btoa(String.fromCharCode.apply(String,r(e))).replace(/\+/g,"-").replace(/\//g,"_")}(e).substr(0,22);return Y.test(t)?t:X}catch(e){return X}}function Q(e){return e.appName+"!"+e.appId}var ee=new Map;function te(e,t){var n=Q(e);ne(n,t),function(e,t){var n=ie();n&&n.postMessage({key:e,fid:t});oe()}(n,t)}function ne(e,t){var n,r,i=ee.get(e);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var re=null;function ie(){return!re&&"BroadcastChannel"in self&&((re=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){ne(e.data.key,e.data.fid)}),re}function oe(){0===ee.size&&re&&(re.close(),re=null)}var ae,se,ue,ce,le="firebase-installations-database",fe=1,pe="firebase-installations-store",de=null;function he(){var t,e,n;return de||(t=function(e){switch(e.oldVersion){case 0:e.createObjectStore(pe)}},e=E(indexedDB,"open",[le,fe]),(n=e.request)&&(n.onupgradeneeded=function(e){t&&t(new x(n.result,e.oldVersion,n.transaction))}),de=e.then(function(e){return new D(e)})),de}function ve(a,s){return d(this,void 0,void 0,function(){var t,n,r,i,o;return h(this,function(e){switch(e.label){case 0:return t=Q(a),[4,he()];case 1:return n=e.sent(),r=n.transaction(pe,"readwrite"),[4,(i=r.objectStore(pe)).get(t)];case 2:return o=e.sent(),[4,i.put(s,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===s.fid||te(a,s.fid),[2,s]}})})}function ge(i){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return t=Q(i),[4,he()];case 1:return n=e.sent(),[4,(r=n.transaction(pe,"readwrite")).objectStore(pe).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function ye(s,u){return d(this,void 0,void 0,function(){var t,n,r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=Q(s),[4,he()];case 1:return n=e.sent(),r=n.transaction(pe,"readwrite"),[4,(i=r.objectStore(pe)).get(t)];case 2:return o=e.sent(),void 0!==(a=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(a,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!a||o&&o.fid===a.fid||te(s,a.fid),[2,a]}})})}function be(i){return d(this,void 0,void 0,function(){var r,t,n;return h(this,function(e){switch(e.label){case 0:return[4,ye(i,function(e){var t=me(e||{fid:Z(),registrationStatus:0}),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return d(this,void 0,void 0,function(){var t,n,r,i;return h(this,function(e){switch(e.label){case 0:return[4,we(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,J(100)];case 3:return e.sent(),[4,we(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,be(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(V.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(s,e){var u=e.fid;return d(this,void 0,void 0,function(){var t,n,r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=M(s),n=W(s),r={fid:u,authVersion:B,appId:s.appId,sdkVersion:j},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,$(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return a=e.sent(),[2,{fid:a.fid||u,registrationStatus:2,refreshToken:a.refreshToken,authToken:U(a.authToken)}];case 3:return[4,K("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,ve(r,t)];case 2:return G(n=e.sent())&&409===n.serverCode?[4,ge(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,ve(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==X?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function we(e){return ye(e,function(e){if(!e)throw V.create("installation-not-found");return me(e)})}function me(e){return 1===(t=e).registrationStatus&&t.registrationTime+k<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function _e(e,l){var f=e.appConfig,p=e.platformLoggerProvider;return d(this,void 0,void 0,function(){var r,i,o,a,s,u,c;return h(this,function(e){switch(e.label){case 0:return t=f,n=l.fid,r=M(t)+"/"+n+"/authTokens:generate",i=z(f,l),(o=p.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:j}},s={method:"POST",headers:i,body:JSON.stringify(a)},[4,$(function(){return fetch(r,s)})];case 1:return(u=e.sent()).ok?[4,u.json()]:[3,3];case 2:return c=e.sent(),[2,U(c)];case 3:return[4,K("Generate Auth Token",u)];case 4:throw e.sent()}var t,n})})}function Ee(s,u){return void 0===u&&(u=!1),d(this,void 0,void 0,function(){var a,t,n;return h(this,function(e){switch(e.label){case 0:return[4,ye(s.appConfig,function(e){if(!Se(e))throw V.create("not-registered");var t,n,r,i=e.authToken;if(u||2!==(r=i).requestStatus||function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+F}(r)){if(1===i.requestStatus)return a=function(r,i){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,Ie(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,J(100)];case 3:return e.sent(),[4,Ie(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,Ee(r,i)]:[2,n]}})})}(s,u),e;if(!navigator.onLine)throw V.create("app-offline");var o=(t=e,n={requestStatus:1,requestTime:Date.now()},l(l({},t),{authToken:n}));return a=function(i,o){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,_e(i,o)];case 1:return t=e.sent(),r=l(l({},o),{authToken:t}),[4,ve(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!G(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,ge(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=l(l({},o),{authToken:{requestStatus:0}}),[4,ve(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(s,o),o}return e})];case 1:return t=e.sent(),a?[4,a]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function Ie(e){return ye(e,function(e){if(!Se(e))throw V.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+k<Date.now()?l(l({},e),{authToken:{requestStatus:0}}):e})}function Se(e){return void 0!==e&&2===e.registrationStatus}function Te(t,n){return void 0===n&&(n=!1),d(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:return[4,function(n){return d(this,void 0,void 0,function(){var t;return h(this,function(e){switch(e.label){case 0:return[4,be(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,Ee(t,n)];case 2:return[2,e.sent().token]}})})}function Oe(s,u){return d(this,void 0,void 0,function(){var r,i,o,a;return h(this,function(e){switch(e.label){case 0:return t=s,n=u.fid,r=M(t)+"/"+n,i=z(s,u),o={method:"DELETE",headers:i},[4,$(function(){return fetch(r,o)})];case 1:return(a=e.sent()).ok?[3,3]:[4,K("Delete Installation",a)];case 2:throw e.sent();case 3:return[2]}var t,n})})}function Ce(e,r){var i=e.appConfig;return function(e,t){ie();var n=Q(e),r=ee.get(n);r||(r=new Set,ee.set(n,r)),r.add(t)}(i,r),function(){var e,t,n;e=r,t=Q(i),(n=ee.get(t))&&(n.delete(e),0===n.size&&ee.delete(t),oe())}}function Ne(e){return V.create("missing-app-config-values",{valueName:e})}function Pe(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r}(ae=at).INTERNAL.registerComponent(new w("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Ne("App Configuration");if(!e.name)throw Ne("App Name");try{for(var r=s(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Ne(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return d(this,void 0,void 0,function(){var t,n,r;return h(this,function(e){switch(e.label){case 0:return[4,be(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):Ee(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return Te(n,e)},delete:function(){return function(r){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,ye(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw V.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw V.create("app-offline");case 3:return[4,Oe(t,n)];case 4:return e.sent(),[4,ge(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return Ce(n,e)}}},"PUBLIC")),ae.registerVersion("@firebase/installations",L),(ce=ue=ue||{})[ce.DEBUG=0]="DEBUG",ce[ce.VERBOSE=1]="VERBOSE",ce[ce.INFO=2]="INFO",ce[ce.WARN=3]="WARN",ce[ce.ERROR=4]="ERROR",ce[ce.SILENT=5]="SILENT";function Ae(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=Re[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,Pe(["["+i+"]  "+e.name+":"],n))}}var xe={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},De=ue.INFO,Re=((se={})[ue.DEBUG]="log",se[ue.VERBOSE]="log",se[ue.INFO]="info",se[ue.WARN]="warn",se[ue.ERROR]="error",se),Le=(Object.defineProperty(ke.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in ue))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),ke.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?xe[e]:e},Object.defineProperty(ke.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(ke.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),ke.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Pe([this,ue.DEBUG],e)),this._logHandler.apply(this,Pe([this,ue.DEBUG],e))},ke.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Pe([this,ue.VERBOSE],e)),this._logHandler.apply(this,Pe([this,ue.VERBOSE],e))},ke.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Pe([this,ue.INFO],e)),this._logHandler.apply(this,Pe([this,ue.INFO],e))},ke.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Pe([this,ue.WARN],e)),this._logHandler.apply(this,Pe([this,ue.WARN],e))},ke.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Pe([this,ue.ERROR],e)),this._logHandler.apply(this,Pe([this,ue.ERROR],e))},ke);function ke(e){this.name=e,this._logLevel=De,this._logHandler=Ae,this._userLogHandler=null}var je,Be,He,Fe,qe="measurementId",Ve="firebase_id",Ge="origin",Me="https://www.googletagmanager.com/gtag/js";(Be=je=je||{}).EVENT="event",Be.SET="set",Be.CONFIG="config",(Fe=He=He||{}).ADD_SHIPPING_INFO="add_shipping_info",Fe.ADD_PAYMENT_INFO="add_payment_info",Fe.ADD_TO_CART="add_to_cart",Fe.ADD_TO_WISHLIST="add_to_wishlist",Fe.BEGIN_CHECKOUT="begin_checkout",Fe.CHECKOUT_PROGRESS="checkout_progress",Fe.EXCEPTION="exception",Fe.GENERATE_LEAD="generate_lead",Fe.LOGIN="login",Fe.PAGE_VIEW="page_view",Fe.PURCHASE="purchase",Fe.REFUND="refund",Fe.REMOVE_FROM_CART="remove_from_cart",Fe.SCREEN_VIEW="screen_view",Fe.SEARCH="search",Fe.SELECT_CONTENT="select_content",Fe.SELECT_ITEM="select_item",Fe.SELECT_PROMOTION="select_promotion",Fe.SET_CHECKOUT_OPTION="set_checkout_option",Fe.SHARE="share",Fe.SIGN_UP="sign_up",Fe.TIMING_COMPLETE="timing_complete",Fe.VIEW_CART="view_cart",Fe.VIEW_ITEM="view_item",Fe.VIEW_ITEM_LIST="view_item_list",Fe.VIEW_PROMOTION="view_promotion",Fe.VIEW_SEARCH_RESULTS="view_search_results";var Ue,Ke=new Le("@firebase/analytics");function We(e,n,t){var p,d,r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[n].push(arguments)};return window[t]&&"function"==typeof window[t]&&(r=window[t]),window[t]=(p=r,d=e,function(e,t,n){if(e===je.EVENT){var r=[];if(n&&n.send_to){var i=n.send_to;Array.isArray(i)||(i=[i]);for(var o=0,a=i;o<a.length;o++){var s=a[o],u=d[s];if(!u){r=[];break}r.push(u)}}if(0===r.length)for(var c=0,l=Object.values(d);c<l.length;c++){var f=l[c];r.push(f)}Promise.all(r).then(function(){return p(je.EVENT,t,n||{})}).catch(function(e){return Ke.error(e)})}else e===je.CONFIG?(d[t]||Promise.resolve()).then(function(){p(je.CONFIG,t,n)}).catch(function(e){return Ke.error(e)}):p(je.SET,t)}),{gtagCore:r,wrappedGtag:window[t]}}var ze,$e,Je=((Ue={})["no-ga-id"]='"'+qe+'" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',Ue["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",Ue["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",Ue["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",Ue["indexedDB-unsupported"]="IndexedDB is not supported by current browswer",Ue["invalid-indexedDB-context"]="Environment doesn't support IndexedDB: {$errorInfo}. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments",Ue["cookies-not-enabled"]="Cookies are not enabled in this browser environment. Analytics requires cookies to be enabled.",Ue),Ye=new c("analytics","Analytics",Je),Xe={},Ze="dataLayer",Qe="gtag",et=!1;function tt(e){if(et)throw Ye.create("already-initialized");e.dataLayerName&&(Ze=e.dataLayerName),e.gtagName&&(Qe=e.gtagName)}function nt(e,t){if(!v())throw Ye.create("cookies-not-enabled");if(!f())throw Ye.create("indexedDB-unsupported");p().catch(function(e){throw Ye.create("invalid-indexedDB-context",{errorInfo:e})});var n,r,i,o,a,s,u,c=e.options[qe];if(!c)throw Ye.create("no-ga-id");if(null!=Xe[c])throw Ye.create("already-exists",{id:c});return et||(function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(Me))return r}}()||(s=Ze,(u=document.createElement("script")).src=Me+"?l="+s,u.async=!0,document.head.appendChild(u)),o=Ze,a=[],Array.isArray(window[o])?a=window[o]:window[o]=a,r=(n=We(Xe,Ze,Qe)).wrappedGtag,i=n.gtagCore,$e=r,ze=i,et=!0),Xe[c]=function(r,i,o){return d(this,void 0,void 0,function(){var t,n;return h(this,function(e){switch(e.label){case 0:return[4,i.getId()];case 1:return t=e.sent(),o("js",new Date),o(je.CONFIG,r.options[qe],((n={})[Ve]=t,n[Ge]="firebase",n.update=!0,n)),[2]}})})}(e,t,ze),{app:e,logEvent:function(e,t,n){return r=$e,i=c,o=e,u=(a=t)||{},(s=n)&&s.global||(u=l(l({},a),{send_to:i})),void r(je.EVENT,o,u||{});var r,i,o,a,s,u},setCurrentScreen:function(e,t){return n=$e,r=c,i=e,void((o=t)&&o.global?n(je.SET,{screen_name:i}):n(je.CONFIG,r,{update:!0,screen_name:i}));var n,r,i,o},setUserId:function(e,t){return n=$e,r=c,i=e,void((o=t)&&o.global?n(je.SET,{user_id:i}):n(je.CONFIG,r,{update:!0,user_id:i}));var n,r,i,o},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},o=0,a=Object.keys(n);o<a.length;o++){var s=a[o];i["user_properties."+s]=n[s]}e(je.SET,i)}else e(je.CONFIG,t,{update:!0,user_properties:n})}($e,c,e,t)},setAnalyticsCollectionEnabled:function(e){return t=e,void(window["ga-disable-"+c]=!t);var t}}}var rt,it="analytics";function ot(){return d(this,void 0,void 0,function(){return h(this,function(e){switch(e.label){case 0:if(!v())return[2,!1];if(!f())return[2,!1];e.label=1;case 1:return e.trys.push([1,3,,4]),[4,p()];case 2:return[2,e.sent()];case 3:return e.sent(),[2,!1];case 4:return[2]}})})}(rt=at).INTERNAL.registerComponent(new w(it,function(e){return nt(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())},"PUBLIC").setServiceProps({settings:tt,EventName:He,isSupported:ot})),rt.INTERNAL.registerComponent(new w("analytics-internal",function(e){try{return{logEvent:e.getProvider(it).getImmediate().logEvent}}catch(e){throw Ye.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),rt.registerVersion("@firebase/analytics","0.4.1")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-analytics.js.map