(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=7)})([function(a,b,c){var d=c(1),e=c(2);e=e.__esModule?e.default:e,'string'==typeof e&&(e=[[a.i,e,'']]);d(e,{insert:'head',singleton:!1});a.exports=e.locals||{}},function(a,b,c){'use strict';function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k=''.concat(h,' ').concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement('style'),d=a.attributes||{};if('undefined'==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),'function'==typeof a.insert)a.insert(b);else{var f=l(a.insert||'head');if(!f)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?'':d.media?'@media '.concat(d.media,' {').concat(d.css,'}'):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute('media',e):a.removeAttribute('media'),f&&btoa&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))),' */')),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return'undefined'==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if('undefined'==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],'[object Array]'===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}},function(a,b,c){var d=c(3),e=c(4),f=c(5);b=d(!1),b.push([a.i,'@import url(https://fonts.googleapis.com/css2?family=Montserrat&display=swap);']);var g=e(f);b.push([a.i,'body {\n  background: #224941 url('+g+') center center/cover;\n  background-repeat: no-repeat;\n  color: #FFFFFF;\n  min-height: 100vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \'Montserrat\', sans-serif;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: auto;\n  height: 300px;\n  width: 300px;\n  position: relative;\n  transform: scale(1);\n}\n\n.container.grow {\n  animation: grow 3s linear forwards;\n}\n\n.container.shrink {\n  animation: shrink 3s linear forwards;\n}\n\n.container .circle {\n  background-color: #010F1C;\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n}\n\n.container .gradient-circle {\n  background: conic-gradient(#55B7A4 0%, #4CA493 40%, #FFFFFF 40%, #FFFFFF 60%, #336D62 60%, #2A5B52 100%);\n  height: 320px;\n  width: 320px;\n  z-index: -2;\n  border-radius: 50%;\n  position: absolute;\n  top: -10px;\n  left: -10px;\n}\n\n.container .pointer-container {\n  position: absolute;\n  top: -40px;\n  left: 140px;\n  width: 20px;\n  height: 190px;\n  animation: rotate 7.5s linear forwards infinite;\n  transform-origin: bottom center;\n}\n\n.container .pointer-container .pointer {\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  display: block;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes grow {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.2);\n  }\n}\n\n@keyframes shrink {\n  from {\n    transform: scale(1.2);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n','']),a.exports=b},function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='.concat(e.sourceRoot||'').concat(a,' */')});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);return'/*# '.concat(c,' */')}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '.concat(c[2],' {').concat(d,'}'):d}).join('')},c.i=function(a,b,d){'string'==typeof a&&(a=[[null,a,'']]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(b&&(h[2]?h[2]=''.concat(b,' and ').concat(h[2]):h[2]=b),c.push(h))},c}},function(a){'use strict';a.exports=function(a,b){return(b||(b={}),a=a&&a.__esModule?a.default:a,'string'!=typeof a)?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),b.hash&&(a+=b.hash),/["'() \t\n]/.test(a)||b.needQuotes?'"'.concat(a.replace(/"/g,'\\"').replace(/\n/g,'\\n'),'"'):a)}},function(a,b,c){a.exports=c.p+'1875ec282c40d65da77c870918ccce5f.jpg'},function(){},function(a,b,c){'use strict';c.r(b);var d=c(0),e=document.getElementById('container'),f=document.getElementById('text'),g=7500,h=function(){f.innerText='Breathe In!',e.className='container grow',setTimeout(function(){f.innerText='Hold',setTimeout(function(){f.innerText='Breathe Out!',e.className='container shrink'},g/5)},2*(g/5))},i=function(){console.log('Event Listeners'),setInterval(h,g)},j=c(6);(function(){console.log('Relaxer App'),h(),i()})()}]);