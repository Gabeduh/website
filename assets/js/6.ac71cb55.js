(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{651:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));n(77),n(82),n(14),n(83),n(18),n(30),n(183);var t=n(108);function r(e,a){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(t.a)(e))||a&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,m=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){m=!0,o=e},f:function(){try{u||null==n.return||n.return()}finally{if(m)throw o}}}}},652:function(e,a,n){"use strict";var t=n(312),r=n(11),i=n(32),o=n(653),u=n(313);t("search",1,(function(e,a,n){return[function(a){var n=i(this),t=null==a?void 0:a[e];return void 0!==t?t.call(a,n):new RegExp(a)[e](String(n))},function(e){var t=n(a,e,this);if(t.done)return t.value;var i=r(e),m=String(this),s=i.lastIndex;o(s,0)||(i.lastIndex=0);var c=u(i,m);return o(i.lastIndex,s)||(i.lastIndex=s),null===c?-1:c.index}]}))},653:function(e,a){e.exports=Object.is||function(e,a){return e===a?0!==e||1/e==1/a:e!=e&&a!=a}},654:function(e,a,n){"use strict";var t=n(1),r=n(76),i=n(22),o=n(2),u=n(73),m=[],s=m.sort,c=o((function(){m.sort(void 0)})),v=o((function(){m.sort(null)})),l=u("sort");t({target:"Array",proto:!0,forced:c||!v||!l},{sort:function(e){return void 0===e?s.call(i(this)):s.call(i(this),r(e))}})},655:function(e,a,n){var t=n(1),r=n(656).values;t({target:"Object",stat:!0},{values:function(e){return r(e)}})},656:function(e,a,n){var t=n(8),r=n(117),i=n(21),o=n(185).f,u=function(e){return function(a){for(var n,u=i(a),m=r(u),s=m.length,c=0,v=[];s>c;)n=m[c++],t&&!o.call(u,n)||v.push(e?[n,u[n]]:u[n]);return v}};e.exports={entries:u(!0),values:u(!1)}},657:function(e,a,n){var t=n(1),r=n(658);t({target:"Array",proto:!0,forced:r!==[].lastIndexOf},{lastIndexOf:r})},658:function(e,a,n){"use strict";var t=n(21),r=n(80),i=n(20),o=n(73),u=Math.min,m=[].lastIndexOf,s=!!m&&1/[1].lastIndexOf(1,-0)<0,c=o("lastIndexOf"),v=s||!c;e.exports=v?function(e){if(s)return m.apply(this,arguments)||0;var a=t(this),n=i(a.length),o=n-1;for(arguments.length>1&&(o=u(o,r(arguments[1]))),o<0&&(o=n+o);o>=0;o--)if(o in a&&a[o]===e)return o||0;return-1}:m},659:function(e,a,n){(function(e){var n="[object Arguments]",t="[object Map]",r="[object Object]",i="[object Set]",o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,m=/^\./,s=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,c=/\\(\\)?/g,v=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,f={};f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f[n]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object Boolean]"]=f["[object DataView]"]=f["[object Date]"]=f["[object Error]"]=f["[object Function]"]=f[t]=f["[object Number]"]=f[r]=f["[object RegExp]"]=f[i]=f["[object String]"]=f["[object WeakMap]"]=!1;var h="object"==typeof global&&global&&global.Object===Object&&global,N="object"==typeof self&&self&&self.Object===Object&&self,g=h||N||Function("return this")(),d=a&&!a.nodeType&&a,b=d&&"object"==typeof e&&e&&!e.nodeType&&e,p=b&&b.exports===d&&h.process,y=function(){try{return p&&p.binding("util")}catch(e){}}(),_=y&&y.isTypedArray;function j(e,a,n,t){for(var r=-1,i=e?e.length:0;++r<i;){var o=e[r];a(t,o,n(o),e)}return t}function k(e,a){for(var n=-1,t=e?e.length:0;++n<t;)if(a(e[n],n,e))return!0;return!1}function w(e){var a=!1;if(null!=e&&"function"!=typeof e.toString)try{a=!!(e+"")}catch(e){}return a}function S(e){var a=-1,n=Array(e.size);return e.forEach((function(e,t){n[++a]=[t,e]})),n}function A(e){var a=-1,n=Array(e.size);return e.forEach((function(e){n[++a]=e})),n}var O,I,T,x=Array.prototype,C=Function.prototype,z=Object.prototype,K=g["__core-js_shared__"],M=(O=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",E=C.toString,B=z.hasOwnProperty,L=z.toString,F=RegExp("^"+E.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),D=g.Symbol,P=g.Uint8Array,G=z.propertyIsEnumerable,R=x.splice,V=(I=Object.keys,T=Object,function(e){return I(T(e))}),W=Se(g,"DataView"),$=Se(g,"Map"),H=Se(g,"Promise"),U=Se(g,"Set"),q=Se(g,"WeakMap"),J=Se(Object,"create"),X=Ke(W),Y=Ke($),Z=Ke(H),Q=Ke(U),ee=Ke(q),ae=D?D.prototype:void 0,ne=ae?ae.valueOf:void 0,te=ae?ae.toString:void 0;function re(e){var a=-1,n=e?e.length:0;for(this.clear();++a<n;){var t=e[a];this.set(t[0],t[1])}}function ie(e){var a=-1,n=e?e.length:0;for(this.clear();++a<n;){var t=e[a];this.set(t[0],t[1])}}function oe(e){var a=-1,n=e?e.length:0;for(this.clear();++a<n;){var t=e[a];this.set(t[0],t[1])}}function ue(e){var a=-1,n=e?e.length:0;for(this.__data__=new oe;++a<n;)this.add(e[a])}function me(e){this.__data__=new ie(e)}function se(e,a){var n=Pe(e)||De(e)?function(e,a){for(var n=-1,t=Array(e);++n<e;)t[n]=a(n);return t}(e.length,String):[],t=n.length,r=!!t;for(var i in e)!a&&!B.call(e,i)||r&&("length"==i||Oe(i,t))||n.push(i);return n}function ce(e,a){for(var n=e.length;n--;)if(Fe(e[n][0],a))return n;return-1}function ve(e,a,n,t){return he(e,(function(e,r,i){a(t,e,n(e),i)})),t}re.prototype.clear=function(){this.__data__=J?J(null):{}},re.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},re.prototype.get=function(e){var a=this.__data__;if(J){var n=a[e];return"__lodash_hash_undefined__"===n?void 0:n}return B.call(a,e)?a[e]:void 0},re.prototype.has=function(e){var a=this.__data__;return J?void 0!==a[e]:B.call(a,e)},re.prototype.set=function(e,a){return this.__data__[e]=J&&void 0===a?"__lodash_hash_undefined__":a,this},ie.prototype.clear=function(){this.__data__=[]},ie.prototype.delete=function(e){var a=this.__data__,n=ce(a,e);return!(n<0)&&(n==a.length-1?a.pop():R.call(a,n,1),!0)},ie.prototype.get=function(e){var a=this.__data__,n=ce(a,e);return n<0?void 0:a[n][1]},ie.prototype.has=function(e){return ce(this.__data__,e)>-1},ie.prototype.set=function(e,a){var n=this.__data__,t=ce(n,e);return t<0?n.push([e,a]):n[t][1]=a,this},oe.prototype.clear=function(){this.__data__={hash:new re,map:new($||ie),string:new re}},oe.prototype.delete=function(e){return we(this,e).delete(e)},oe.prototype.get=function(e){return we(this,e).get(e)},oe.prototype.has=function(e){return we(this,e).has(e)},oe.prototype.set=function(e,a){return we(this,e).set(e,a),this},ue.prototype.add=ue.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},ue.prototype.has=function(e){return this.__data__.has(e)},me.prototype.clear=function(){this.__data__=new ie},me.prototype.delete=function(e){return this.__data__.delete(e)},me.prototype.get=function(e){return this.__data__.get(e)},me.prototype.has=function(e){return this.__data__.has(e)},me.prototype.set=function(e,a){var n=this.__data__;if(n instanceof ie){var t=n.__data__;if(!$||t.length<199)return t.push([e,a]),this;n=this.__data__=new oe(t)}return n.set(e,a),this};var le,fe,he=(le=function(e,a){return e&&Ne(e,a,qe)},function(e,a){if(null==e)return e;if(!Ge(e))return le(e,a);for(var n=e.length,t=fe?n:-1,r=Object(e);(fe?t--:++t<n)&&!1!==a(r[t],t,r););return e}),Ne=function(e){return function(a,n,t){for(var r=-1,i=Object(a),o=t(a),u=o.length;u--;){var m=o[e?u:++r];if(!1===n(i[m],m,i))break}return a}}();function ge(e,a){for(var n=0,t=(a=Ie(a,e)?[a]:je(a)).length;null!=e&&n<t;)e=e[ze(a[n++])];return n&&n==t?e:void 0}function de(e,a){return null!=e&&a in Object(e)}function be(e,a,o,u,m){return e===a||(null==e||null==a||!We(e)&&!$e(a)?e!=e&&a!=a:function(e,a,o,u,m,s){var c=Pe(e),v=Pe(a),l="[object Array]",f="[object Array]";c||(l=(l=Ae(e))==n?r:l);v||(f=(f=Ae(a))==n?r:f);var h=l==r&&!w(e),N=f==r&&!w(a),g=l==f;if(g&&!h)return s||(s=new me),c||Ue(e)?ke(e,a,o,u,m,s):function(e,a,n,r,o,u,m){switch(n){case"[object DataView]":if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=a.byteLength||!r(new P(e),new P(a)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Fe(+e,+a);case"[object Error]":return e.name==a.name&&e.message==a.message;case"[object RegExp]":case"[object String]":return e==a+"";case t:var s=S;case i:var c=2&u;if(s||(s=A),e.size!=a.size&&!c)return!1;var v=m.get(e);if(v)return v==a;u|=1,m.set(e,a);var l=ke(s(e),s(a),r,o,u,m);return m.delete(e),l;case"[object Symbol]":if(ne)return ne.call(e)==ne.call(a)}return!1}(e,a,l,o,u,m,s);if(!(2&m)){var d=h&&B.call(e,"__wrapped__"),b=N&&B.call(a,"__wrapped__");if(d||b){var p=d?e.value():e,y=b?a.value():a;return s||(s=new me),o(p,y,u,m,s)}}if(!g)return!1;return s||(s=new me),function(e,a,n,t,r,i){var o=2&r,u=qe(e),m=u.length,s=qe(a).length;if(m!=s&&!o)return!1;var c=m;for(;c--;){var v=u[c];if(!(o?v in a:B.call(a,v)))return!1}var l=i.get(e);if(l&&i.get(a))return l==a;var f=!0;i.set(e,a),i.set(a,e);var h=o;for(;++c<m;){v=u[c];var N=e[v],g=a[v];if(t)var d=o?t(g,N,v,a,e,i):t(N,g,v,e,a,i);if(!(void 0===d?N===g||n(N,g,t,r,i):d)){f=!1;break}h||(h="constructor"==v)}if(f&&!h){var b=e.constructor,p=a.constructor;b==p||!("constructor"in e)||!("constructor"in a)||"function"==typeof b&&b instanceof b&&"function"==typeof p&&p instanceof p||(f=!1)}return i.delete(e),i.delete(a),f}(e,a,o,u,m,s)}(e,a,be,o,u,m))}function pe(e){return!(!We(e)||function(e){return!!M&&M in e}(e))&&(Re(e)||w(e)?F:v).test(Ke(e))}function ye(e){return"function"==typeof e?e:null==e?Je:"object"==typeof e?Pe(e)?function(e,a){if(Ie(e)&&Te(a))return xe(ze(e),a);return function(n){var t=function(e,a,n){var t=null==e?void 0:ge(e,a);return void 0===t?n:t}(n,e);return void 0===t&&t===a?function(e,a){return null!=e&&function(e,a,n){a=Ie(a,e)?[a]:je(a);var t,r=-1,i=a.length;for(;++r<i;){var o=ze(a[r]);if(!(t=null!=e&&n(e,o)))break;e=e[o]}if(t)return t;return!!(i=e?e.length:0)&&Ve(i)&&Oe(o,i)&&(Pe(e)||De(e))}(e,a,de)}(n,e):be(a,t,void 0,3)}}(e[0],e[1]):function(e){var a=function(e){var a=qe(e),n=a.length;for(;n--;){var t=a[n],r=e[t];a[n]=[t,r,Te(r)]}return a}(e);if(1==a.length&&a[0][2])return xe(a[0][0],a[0][1]);return function(n){return n===e||function(e,a,n,t){var r=n.length,i=r,o=!t;if(null==e)return!i;for(e=Object(e);r--;){var u=n[r];if(o&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++r<i;){var m=(u=n[r])[0],s=e[m],c=u[1];if(o&&u[2]){if(void 0===s&&!(m in e))return!1}else{var v=new me;if(t)var l=t(s,c,m,e,a,v);if(!(void 0===l?be(c,s,t,3,v):l))return!1}}return!0}(n,e,a)}}(e):Ie(a=e)?(n=ze(a),function(e){return null==e?void 0:e[n]}):function(e){return function(a){return ge(a,e)}}(a);var a,n}function _e(e){if(n=(a=e)&&a.constructor,t="function"==typeof n&&n.prototype||z,a!==t)return V(e);var a,n,t,r=[];for(var i in Object(e))B.call(e,i)&&"constructor"!=i&&r.push(i);return r}function je(e){return Pe(e)?e:Ce(e)}function ke(e,a,n,t,r,i){var o=2&r,u=e.length,m=a.length;if(u!=m&&!(o&&m>u))return!1;var s=i.get(e);if(s&&i.get(a))return s==a;var c=-1,v=!0,l=1&r?new ue:void 0;for(i.set(e,a),i.set(a,e);++c<u;){var f=e[c],h=a[c];if(t)var N=o?t(h,f,c,a,e,i):t(f,h,c,e,a,i);if(void 0!==N){if(N)continue;v=!1;break}if(l){if(!k(a,(function(e,a){if(!l.has(a)&&(f===e||n(f,e,t,r,i)))return l.add(a)}))){v=!1;break}}else if(f!==h&&!n(f,h,t,r,i)){v=!1;break}}return i.delete(e),i.delete(a),v}function we(e,a){var n,t,r=e.__data__;return("string"==(t=typeof(n=a))||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==n:null===n)?r["string"==typeof a?"string":"hash"]:r.map}function Se(e,a){var n=function(e,a){return null==e?void 0:e[a]}(e,a);return pe(n)?n:void 0}var Ae=function(e){return L.call(e)};function Oe(e,a){return!!(a=null==a?9007199254740991:a)&&("number"==typeof e||l.test(e))&&e>-1&&e%1==0&&e<a}function Ie(e,a){if(Pe(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!He(e))||(u.test(e)||!o.test(e)||null!=a&&e in Object(a))}function Te(e){return e==e&&!We(e)}function xe(e,a){return function(n){return null!=n&&(n[e]===a&&(void 0!==a||e in Object(n)))}}(W&&"[object DataView]"!=Ae(new W(new ArrayBuffer(1)))||$&&Ae(new $)!=t||H&&"[object Promise]"!=Ae(H.resolve())||U&&Ae(new U)!=i||q&&"[object WeakMap]"!=Ae(new q))&&(Ae=function(e){var a=L.call(e),n=a==r?e.constructor:void 0,o=n?Ke(n):void 0;if(o)switch(o){case X:return"[object DataView]";case Y:return t;case Z:return"[object Promise]";case Q:return i;case ee:return"[object WeakMap]"}return a});var Ce=Le((function(e){var a;e=null==(a=e)?"":function(e){if("string"==typeof e)return e;if(He(e))return te?te.call(e):"";var a=e+"";return"0"==a&&1/e==-1/0?"-0":a}(a);var n=[];return m.test(e)&&n.push(""),e.replace(s,(function(e,a,t,r){n.push(t?r.replace(c,"$1"):a||e)})),n}));function ze(e){if("string"==typeof e||He(e))return e;var a=e+"";return"0"==a&&1/e==-1/0?"-0":a}function Ke(e){if(null!=e){try{return E.call(e)}catch(e){}try{return e+""}catch(e){}}return""}var Me,Ee,Be=(Me=function(e,a,n){B.call(e,n)?e[n].push(a):e[n]=[a]},function(e,a){var n=Pe(e)?j:ve,t=Ee?Ee():{};return n(e,Me,ye(a),t)});function Le(e,a){if("function"!=typeof e||a&&"function"!=typeof a)throw new TypeError("Expected a function");var n=function(){var t=arguments,r=a?a.apply(this,t):t[0],i=n.cache;if(i.has(r))return i.get(r);var o=e.apply(this,t);return n.cache=i.set(r,o),o};return n.cache=new(Le.Cache||oe),n}function Fe(e,a){return e===a||e!=e&&a!=a}function De(e){return function(e){return $e(e)&&Ge(e)}(e)&&B.call(e,"callee")&&(!G.call(e,"callee")||L.call(e)==n)}Le.Cache=oe;var Pe=Array.isArray;function Ge(e){return null!=e&&Ve(e.length)&&!Re(e)}function Re(e){var a=We(e)?L.call(e):"";return"[object Function]"==a||"[object GeneratorFunction]"==a}function Ve(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function We(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function $e(e){return!!e&&"object"==typeof e}function He(e){return"symbol"==typeof e||$e(e)&&"[object Symbol]"==L.call(e)}var Ue=_?function(e){return function(a){return e(a)}}(_):function(e){return $e(e)&&Ve(e.length)&&!!f[L.call(e)]};function qe(e){return Ge(e)?se(e):_e(e)}function Je(e){return e}e.exports=Be}).call(this,n(120)(e))},675:function(e,a,n){"use strict";n.d(a,"a",(function(){return r}));var t={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"аҧсуа бызшәа"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"አማርኛ"},an:{name:"Aragonese",nativeName:"aragonés"},ar:{name:"Arabic",nativeName:"اللغة العربية"},as:{name:"Assamese",nativeName:"অসমীয়া"},av:{name:"Avaric",nativeName:"авар мацӀ"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"azərbaycan dili"},ba:{name:"Bashkir",nativeName:"башҡорт теле"},be:{name:"Belarusian",nativeName:"беларуская мова"},bg:{name:"Bulgarian",nativeName:"български език"},bh:{name:"Bihari",nativeName:"भोजपुरी"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"বাংলা"},bo:{name:"Tibetan",nativeName:"བོད་ཡིག"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"Català"},ce:{name:"Chechen",nativeName:"нохчийн мотт"},ch:{name:"Chamorro",nativeName:"Chamoru"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"ᓀᐦᐃᔭᐍᐏᐣ"},cs:{name:"Czech",nativeName:"čeština"},cu:{name:"Old Church Slavonic",nativeName:"ѩзыкъ словѣньскъ"},cv:{name:"Chuvash",nativeName:"чӑваш чӗлхи"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"Dhivehi"},dz:{name:"Dzongkha",nativeName:"རྫོང་ཁ"},ee:{name:"Ewe",nativeName:"Eʋegbe"},el:{name:"Greek",nativeName:"Ελληνικά"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Español"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"فارسی"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"Vakaviti"},fo:{name:"Faroese",nativeName:"føroyskt"},fr:{name:"French",nativeName:"Français"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"Gàidhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaraní",nativeName:"Avañe'ẽ"},gu:{name:"Gujarati",nativeName:"ગુજરાતી"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"هَوُسَ"},he:{name:"Hebrew",nativeName:"עברית"},hi:{name:"Hindi",nativeName:"हिन्दी"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"Hrvatski"},ht:{name:"Haitian",nativeName:"Kreyòl ayisyen"},hu:{name:"Hungarian",nativeName:"magyar"},hy:{name:"Armenian",nativeName:"Հայերեն"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Bahasa Indonesia"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"Asụsụ Igbo"},ii:{name:"Nuosu",nativeName:"ꆈꌠ꒿ Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"Iñupiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"Íslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"ᐃᓄᒃᑎᑐᑦ"},ja:{name:"Japanese",nativeName:"日本語"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"ქართული"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"Gĩkũyũ"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"қазақ тілі"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"ខេមរភាសា"},kn:{name:"Kannada",nativeName:"ಕನ್ನಡ"},ko:{name:"Korean",nativeName:"한국어"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"कश्मीरी"},ku:{name:"Kurdish",nativeName:"Kurdî"},kv:{name:"Komi",nativeName:"коми кыв"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"Кыргызча"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"Lëtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Lingála"},lo:{name:"Lao",nativeName:"ພາສາ"},lt:{name:"Lithuanian",nativeName:"lietuvių kalba"},lu:{name:"Luba-Katanga",nativeName:"Tshiluba"},lv:{name:"Latvian",nativeName:"latviešu valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M̧ajeļ"},mi:{name:"Māori",nativeName:"te reo Māori"},mk:{name:"Macedonian",nativeName:"македонски јазик"},ml:{name:"Malayalam",nativeName:"മലയാളം"},mn:{name:"Mongolian",nativeName:"Монгол хэл"},mr:{name:"Marathi",nativeName:"मराठी"},ms:{name:"Malay",nativeName:"Bahasa Malaysia"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"ဗမာစာ"},na:{name:"Nauru",nativeName:"Ekakairũ Naoero"},nb:{name:"Norwegian Bokmål",nativeName:"Norsk bokmål"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"नेपाली"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Diné bizaad"},ny:{name:"Chichewa",nativeName:"chiCheŵa"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"ᐊᓂᔑᓈᐯᒧᐎᓐ"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"ଓଡ଼ିଆ"},os:{name:"Ossetian",nativeName:"ирон æвзаг"},pa:{name:"Panjabi",nativeName:"ਪੰਜਾਬੀ"},pi:{name:"Pāli",nativeName:"पाऴि"},pl:{name:"Polish",nativeName:"język polski"},ps:{name:"Pashto",nativeName:"پښتو"},pt:{name:"Portuguese",nativeName:"Português"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"Română"},ru:{name:"Russian",nativeName:"Русский"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"संस्कृतम्"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"सिन्धी"},se:{name:"Northern Sami",nativeName:"Davvisámegiella"},sg:{name:"Sango",nativeName:"yângâ tî sängö"},si:{name:"Sinhala",nativeName:"සිංහල"},sk:{name:"Slovak",nativeName:"slovenčina"},sl:{name:"Slovenian",nativeName:"slovenski jezik"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"српски језик"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"Svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"தமிழ்"},te:{name:"Telugu",nativeName:"తెలుగు"},tg:{name:"Tajik",nativeName:"тоҷикӣ"},th:{name:"Thai",nativeName:"ไทย"},ti:{name:"Tigrinya",nativeName:"ትግርኛ"},tk:{name:"Turkmen",nativeName:"Türkmen"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"Türkçe"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"татар теле"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"ئۇيغۇرچە‎"},uk:{name:"Ukrainian",nativeName:"Українська"},ur:{name:"Urdu",nativeName:"اردو"},uz:{name:"Uzbek",nativeName:"Ўзбек"},ve:{name:"Venda",nativeName:"Tshivenḓa"},vi:{name:"Vietnamese",nativeName:"Tiếng Việt"},vo:{name:"Volapük",nativeName:"Volapük"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"ייִדיש"},yo:{name:"Yoruba",nativeName:"Yorùbá"},za:{name:"Zhuang",nativeName:"Saɯ cueŋƅ"},zh:{name:"Chinese",nativeName:"中文"},zu:{name:"Zulu",nativeName:"isiZulu"}};class r{static getLanguages(e=[]){return e.map(e=>({code:e,name:r.getName(e),nativeName:r.getNativeName(e)}))}static getName(e){return r.validate(e)?t[e].name:""}static getAllNames(){return Object.values(t).map(e=>e.name)}static getNativeName(e){return r.validate(e)?t[e].nativeName:""}static getAllNativeNames(){return Object.values(t).map(e=>e.nativeName)}static getCode(e){return Object.keys(t).find(a=>{const n=t[a];return n.name.toLowerCase()===e.toLowerCase()||n.nativeName.toLowerCase()===e.toLowerCase()})||""}static getAllCodes(){return Object.keys(t)}static validate(e){return t.hasOwnProperty(e)}}}}]);