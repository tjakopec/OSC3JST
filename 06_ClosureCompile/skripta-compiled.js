var $jscomp={scope:{},executeAsyncGenerator:function(a){function b(b){return a.next(b)}function c(b){return a["throw"](b)}return new Promise(function(d,e){function f(a){a.done?d(a.value):Promise.resolve(a.value).then(b,c).then(f,e)}f(a.next())})}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var b=0;return $jscomp.iteratorPrototype(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.makeIterator=function(a){$jscomp.initSymbolIterator();var b=a[Symbol.iterator];return b?b.call(a):$jscomp.arrayIterator(a)};
$jscomp.polyfill=function(a,b,c,d){if(b){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}};$jscomp.EXPOSE_ASYNC_EXECUTOR=!0;$jscomp.FORCE_POLYFILL_PROMISE=!1;var datoteka="datoteka.json";
(function(){return $jscomp.executeAsyncGenerator(function(){function a(a,g){for(;;)switch(b){case 0:try{return b=3,{value:fetch(datoteka),done:!1}}catch(h){b=1;break}case 3:try{if(void 0===g){b=4;break}b=-1;throw g;}catch(h){b=1;break}case 4:try{return e=f=a,b=5,{value:e.json(),done:!1}}catch(h){b=1;break}case 5:try{if(void 0===g){b=6;break}b=-1;throw g;}catch(h){b=1;break}case 6:try{c=d=a;console.log(c);b=2;break}catch(h){b=1;break}case 1:console.log("Gre\u0161ka");case 2:b=-1;default:return{value:void 0,
done:!0}}}var b=0,c,d,e,f,k={next:function(b){return a(b,void 0)},"throw":function(b){return a(void 0,b)},"return":function(a){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();k[Symbol.iterator]=function(){return this};return k}())})();
