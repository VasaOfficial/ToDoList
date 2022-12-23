(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(81),o=n.n(t),a=n(645),i=n.n(a)()(o());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap);"]),i.push([e.id,"body {\r\n  margin: 0;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  gap: 15px;\r\n  background-color: #1DA1F2;\r\n  color: black;\r\n  padding: 20px;\r\n  font-size: larger;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  min-height: calc(97vh - 100px - 60px);\r\n}\r\n\r\n/* Form Menu */\r\nnav {\r\n  width: 300px;\r\n  background-color: rgb(200, 200, 200);\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  gap: 10px;\r\n  font-size: larger;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.inbox {\r\n  width: 100%;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n}\r\n\r\n.add-project {\r\n  width: 100%;\r\n    padding: 10px 20px;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-family: inherit;\r\n}\r\n\r\n.submit-reset {\r\n  margin-top: 20px;\r\n}\r\n\r\n.submit, .reset {\r\n  padding: 10px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n\r\n.inbox:hover, .add-project:hover, .submit:hover, .reset:hover {\r\n  background-color: #1DA1F2;\r\n}\r\n\r\ninput {\r\n  width: 100%;\r\n}\r\n\r\n/* Inbox Screen */\r\n.project-screen {\r\n  width: 100%;\r\n  background-color: whitesmoke;\r\n  padding: 40px;\r\n  display: none;\r\n  font-family: 'Rubik', sans-serif;\r\n}\r\n\r\nfooter {\r\n  background-color: #1DA1F2;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  align-items: center;\r\n  font-size: larger;\r\n  font-weight: 600;\r\n  position: absolute;\r\n  width: 100%;\r\n}\r\n\r\n#github {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Todo Cards*/\r\n.card {\r\n  width: 300px;\r\n  height: 200px;\r\n  padding: 10px;\r\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\r\n  font-family: 'Rubik', sans-serif;\r\n  border-radius: 5px;\r\n  text-align: center;\r\n  font-weight: 600;\r\n}\r\n\r\n.card h3 {\r\n  font-size: 18px;\r\n}\r\n\r\n.card p {\r\n  color: #1DA1F2;\r\n}\r\n\r\n.card p:last-of-type {\r\n  color: rgb(240, 77, 77);\r\n}\r\n\r\n.card button {\r\n  background-color: #1DA1F2;\r\n  border: none;\r\n  color: black;\r\n  padding: 15px 50px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n="",t=void 0!==r[5];return r[4]&&(n+="@supports (".concat(r[4],") {")),r[2]&&(n+="@media ".concat(r[2]," {")),t&&(n+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),n+=e(r),t&&(n+="}"),r[2]&&(n+="}"),r[4]&&(n+="}"),n})).join("")},r.i=function(e,n,t,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var r=[];function n(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function t(e,t){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=t.base?s[0]+t.base:s[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var m=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,r){var n=r.domAPI(r);return n.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;n.update(e=r)}else n.remove()}}e.exports=function(e,o){var a=t(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=n(a[i]);r[c].references--}for(var s=t(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=s}}},569:e=>{var r={};e.exports=function(e,n){var t=function(e){if(void 0===r[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}r[e]=n}return r[e]}(e);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,n)=>{e.exports=function(e){var r=n.nc;r&&e.setAttribute("nonce",r)}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(n){!function(e,r,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,e,r.options)}(r,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,n),a.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.nc=void 0,(()=>{Math.pow(10,8);var e=36e5;function r(e,r){if(r.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+r.length+" present")}function t(e){if(null===e||!0===e||!1===e)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}var o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},a=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,i=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,c=/^([+-])(\d{2})(?::?(\d{2}))?$/;function s(e){var r,n={},t=e.split(o.dateTimeDelimiter);if(t.length>2)return n;if(/:/.test(t[0])?r=t[0]:(n.date=t[0],r=t[1],o.timeZoneDelimiter.test(n.date)&&(n.date=e.split(o.timeZoneDelimiter)[0],r=e.substr(n.date.length,e.length))),r){var a=o.timezone.exec(r);a?(n.time=r.replace(a[1],""),n.timezone=a[1]):n.time=r}return n}function u(e,r){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+r)+"})|(\\d{2}|[+-]\\d{"+(2+r)+"})$)"),t=e.match(n);if(!t)return{year:NaN,restDateString:""};var o=t[1]?parseInt(t[1]):null,a=t[2]?parseInt(t[2]):null;return{year:null===a?o:100*a,restDateString:e.slice((t[1]||t[2]).length)}}function l(e,r){if(null===r)return new Date(NaN);var n=e.match(a);if(!n)return new Date(NaN);var t=!!n[4],o=d(n[1]),i=d(n[2])-1,c=d(n[3]),s=d(n[4]),u=d(n[5])-1;if(t)return function(e,r,n){return r>=1&&r<=53&&n>=0&&n<=6}(0,s,u)?function(e,r,n){var t=new Date(0);t.setUTCFullYear(e,0,4);var o=7*(r-1)+n+1-(t.getUTCDay()||7);return t.setUTCDate(t.getUTCDate()+o),t}(r,s,u):new Date(NaN);var l=new Date(0);return function(e,r,n){return r>=0&&r<=11&&n>=1&&n<=(g[r]||(v(e)?29:28))}(r,i,c)&&function(e,r){return r>=1&&r<=(v(e)?366:365)}(r,o)?(l.setUTCFullYear(r,i,Math.max(o,c)),l):new Date(NaN)}function d(e){return e?parseInt(e):1}function p(r){var n=r.match(i);if(!n)return NaN;var t=f(n[1]),o=f(n[2]),a=f(n[3]);return function(e,r,n){return 24===e?0===r&&0===n:n>=0&&n<60&&r>=0&&r<60&&e>=0&&e<25}(t,o,a)?t*e+6e4*o+1e3*a:NaN}function f(e){return e&&parseFloat(e.replace(",","."))||0}function m(r){if("Z"===r)return 0;var n=r.match(c);if(!n)return 0;var t="+"===n[1]?-1:1,o=parseInt(n[2]),a=n[3]&&parseInt(n[3])||0;return function(e,r){return r>=0&&r<=59}(0,a)?t*(o*e+6e4*a):NaN}var g=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400==0||e%4==0&&e%100!=0}function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e){r(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"===y(e)&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}const b=()=>{localStorage.setItem("title",document.querySelector(".title").value),localStorage.setItem("description",document.querySelector(".description").value),localStorage.setItem("date",document.querySelector(".date").value);const e=localStorage.getItem("title"),n=localStorage.getItem("description"),o=localStorage.getItem("date");if(""==e||""==n)return void alert("Please fill in title and discription fields!");if(function(e,n){var o;r(1,arguments);var a=t(null!==(o=null==n?void 0:n.additionalDigits)&&void 0!==o?o:2);if(2!==a&&1!==a&&0!==a)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,c=s(e);if(c.date){var d=u(c.date,a);i=l(d.restDateString,d.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var f,g=i.getTime(),v=0;if(c.time&&(v=p(c.time),isNaN(v)))return new Date(NaN);if(!c.timezone){var y=new Date(g+v),h=new Date(0);return h.setFullYear(y.getUTCFullYear(),y.getUTCMonth(),y.getUTCDate()),h.setHours(y.getUTCHours(),y.getUTCMinutes(),y.getUTCSeconds(),y.getUTCMilliseconds()),h}return f=m(c.timezone),isNaN(f)?new Date(NaN):new Date(g+v+f)}(o)<function(e){r(1,arguments);var n=h(e);return n.setHours(0,0,0,0),n}(Date.now()))return void alert("You entered wrong date!");const a=e,i=n,c=o;!function(){const e=document.querySelector(".project-screen"),r=document.createElement("div");r.classList.add("card"),r.innerHTML=`\n      <h3>${a}</h3>\n      <p>${i}</p>\n      <p>${c}</p>\n    `,e.append(r)}(),x()};const x=()=>{const e=document.querySelector(".reset"),r=document.querySelector(".form");e.addEventListener("click",(()=>{r.reset()}))};var w=n(379),N=n.n(w),S=n(795),D=n.n(S),T=n(569),C=n.n(T),k=n(565),j=n.n(k),I=n(216),M=n.n(I),E=n(589),q=n.n(E),U=n(426),F={};F.styleTagTransform=q(),F.setAttributes=j(),F.insert=C().bind(null,"head"),F.domAPI=D(),F.insertStyleElement=M(),N()(U.Z,F),U.Z&&U.Z.locals&&U.Z.locals,document.querySelector(".todo-input").style.display="none",document.querySelector(".add-project").addEventListener("click",(function(){document.querySelector(".todo-input").style.display=""})),x(),document.querySelector(".submit").addEventListener("click",(()=>{b()})),(()=>{const e=document.querySelector(".inbox"),r=document.querySelector(".project-screen");e.addEventListener("click",(()=>{r.style.display="grid"}))})()})()})();