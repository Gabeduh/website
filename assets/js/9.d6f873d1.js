(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{564:function(a,e,n){},565:function(a,e,n){"use strict";var t=n(310),i=n(312),m=n(11),s=n(32),r=n(566),o=n(313),v=n(18),l=n(311),u=n(115),N=n(2),c=[].push,h=Math.min,g=!N((function(){return!RegExp(4294967295,"y")}));t("split",2,(function(a,e,n){var t;return t="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(a,n){var t=String(s(this)),m=void 0===n?4294967295:n>>>0;if(0===m)return[];if(void 0===a)return[t];if(!i(a))return e.call(t,a,m);for(var r,o,v,l=[],N=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(a.sticky?"y":""),h=0,g=new RegExp(a.source,N+"g");(r=u.call(g,t))&&!((o=g.lastIndex)>h&&(l.push(t.slice(h,r.index)),r.length>1&&r.index<t.length&&c.apply(l,r.slice(1)),v=r[0].length,h=o,l.length>=m));)g.lastIndex===r.index&&g.lastIndex++;return h===t.length?!v&&g.test("")||l.push(""):l.push(t.slice(h)),l.length>m?l.slice(0,m):l}:"0".split(void 0,0).length?function(a,n){return void 0===a&&0===n?[]:e.call(this,a,n)}:e,[function(e,n){var i=s(this),m=null==e?void 0:e[a];return void 0!==m?m.call(e,i,n):t.call(String(i),e,n)},function(a,i){var s=n(t,a,this,i,t!==e);if(s.done)return s.value;var u=m(a),N=String(this),c=r(u,RegExp),d=u.unicode,k=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(g?"y":"g"),p=new c(g?u:"^(?:"+u.source+")",k),f=void 0===i?4294967295:i>>>0;if(0===f)return[];if(0===N.length)return null===l(p,N)?[N]:[];for(var b=0,y=0,w=[];y<N.length;){p.lastIndex=g?y:0;var x,C=l(p,g?N:N.slice(y));if(null===C||(x=h(v(p.lastIndex+(g?0:y)),N.length))===b)y=o(N,y,d);else{if(w.push(N.slice(b,y)),w.length===f)return w;for(var S=1;S<=C.length-1;S++)if(w.push(C[S]),w.length===f)return w;y=b=x}}return w.push(N.slice(b)),w}]}),!g)},566:function(a,e,n){var t=n(11),i=n(71),m=n(3)("species");a.exports=function(a,e){var n,s=t(a).constructor;return void 0===s||null==(n=t(s)[m])?e:i(n)}},567:function(a,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return m}));n(180);var t=n(575);function i(a){return"all"===a?"All":t.a.getName(a)}function m(a){return"all"===a?"All":"".concat(t.a.getName(a)," (").concat(t.a.getNativeName(a),")")}},571:function(a,e,n){},572:function(a,e,n){var t=n(1),i=n(573);t({target:"Array",proto:!0,forced:i!==[].lastIndexOf},{lastIndexOf:i})},573:function(a,e,n){"use strict";var t=n(19),i=n(75),m=n(18),s=n(73),r=Math.min,o=[].lastIndexOf,v=!!o&&1/[1].lastIndexOf(1,-0)<0,l=s("lastIndexOf"),u=v||!l;a.exports=u?function(a){if(v)return o.apply(this,arguments)||0;var e=t(this),n=m(e.length),s=n-1;for(arguments.length>1&&(s=r(s,i(arguments[1]))),s<0&&(s=n+s);s>=0;s--)if(s in e&&e[s]===a)return s||0;return-1}:o},574:function(a,e,n){"use strict";n(564)},575:function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t={aa:{name:"Afar",nativeName:"Afaraf"},ab:{name:"Abkhaz",nativeName:"аҧсуа бызшәа"},ae:{name:"Avestan",nativeName:"avesta"},af:{name:"Afrikaans",nativeName:"Afrikaans"},ak:{name:"Akan",nativeName:"Akan"},am:{name:"Amharic",nativeName:"አማርኛ"},an:{name:"Aragonese",nativeName:"aragonés"},ar:{name:"Arabic",nativeName:"اللغة العربية"},as:{name:"Assamese",nativeName:"অসমীয়া"},av:{name:"Avaric",nativeName:"авар мацӀ"},ay:{name:"Aymara",nativeName:"aymar aru"},az:{name:"Azerbaijani",nativeName:"azərbaycan dili"},ba:{name:"Bashkir",nativeName:"башҡорт теле"},be:{name:"Belarusian",nativeName:"беларуская мова"},bg:{name:"Bulgarian",nativeName:"български език"},bh:{name:"Bihari",nativeName:"भोजपुरी"},bi:{name:"Bislama",nativeName:"Bislama"},bm:{name:"Bambara",nativeName:"bamanankan"},bn:{name:"Bengali",nativeName:"বাংলা"},bo:{name:"Tibetan",nativeName:"བོད་ཡིག"},br:{name:"Breton",nativeName:"brezhoneg"},bs:{name:"Bosnian",nativeName:"bosanski jezik"},ca:{name:"Catalan",nativeName:"Català"},ce:{name:"Chechen",nativeName:"нохчийн мотт"},ch:{name:"Chamorro",nativeName:"Chamoru"},co:{name:"Corsican",nativeName:"corsu"},cr:{name:"Cree",nativeName:"ᓀᐦᐃᔭᐍᐏᐣ"},cs:{name:"Czech",nativeName:"čeština"},cu:{name:"Old Church Slavonic",nativeName:"ѩзыкъ словѣньскъ"},cv:{name:"Chuvash",nativeName:"чӑваш чӗлхи"},cy:{name:"Welsh",nativeName:"Cymraeg"},da:{name:"Danish",nativeName:"dansk"},de:{name:"German",nativeName:"Deutsch"},dv:{name:"Divehi",nativeName:"Dhivehi"},dz:{name:"Dzongkha",nativeName:"རྫོང་ཁ"},ee:{name:"Ewe",nativeName:"Eʋegbe"},el:{name:"Greek",nativeName:"Ελληνικά"},en:{name:"English",nativeName:"English"},eo:{name:"Esperanto",nativeName:"Esperanto"},es:{name:"Spanish",nativeName:"Español"},et:{name:"Estonian",nativeName:"eesti"},eu:{name:"Basque",nativeName:"euskara"},fa:{name:"Persian",nativeName:"فارسی"},ff:{name:"Fula",nativeName:"Fulfulde"},fi:{name:"Finnish",nativeName:"suomi"},fj:{name:"Fijian",nativeName:"Vakaviti"},fo:{name:"Faroese",nativeName:"føroyskt"},fr:{name:"French",nativeName:"Français"},fy:{name:"Western Frisian",nativeName:"Frysk"},ga:{name:"Irish",nativeName:"Gaeilge"},gd:{name:"Scottish Gaelic",nativeName:"Gàidhlig"},gl:{name:"Galician",nativeName:"galego"},gn:{name:"Guaraní",nativeName:"Avañe'ẽ"},gu:{name:"Gujarati",nativeName:"ગુજરાતી"},gv:{name:"Manx",nativeName:"Gaelg"},ha:{name:"Hausa",nativeName:"هَوُسَ"},he:{name:"Hebrew",nativeName:"עברית"},hi:{name:"Hindi",nativeName:"हिन्दी"},ho:{name:"Hiri Motu",nativeName:"Hiri Motu"},hr:{name:"Croatian",nativeName:"Hrvatski"},ht:{name:"Haitian",nativeName:"Kreyòl ayisyen"},hu:{name:"Hungarian",nativeName:"magyar"},hy:{name:"Armenian",nativeName:"Հայերեն"},hz:{name:"Herero",nativeName:"Otjiherero"},ia:{name:"Interlingua",nativeName:"Interlingua"},id:{name:"Indonesian",nativeName:"Bahasa Indonesia"},ie:{name:"Interlingue",nativeName:"Interlingue"},ig:{name:"Igbo",nativeName:"Asụsụ Igbo"},ii:{name:"Nuosu",nativeName:"ꆈꌠ꒿ Nuosuhxop"},ik:{name:"Inupiaq",nativeName:"Iñupiaq"},io:{name:"Ido",nativeName:"Ido"},is:{name:"Icelandic",nativeName:"Íslenska"},it:{name:"Italian",nativeName:"Italiano"},iu:{name:"Inuktitut",nativeName:"ᐃᓄᒃᑎᑐᑦ"},ja:{name:"Japanese",nativeName:"日本語"},jv:{name:"Javanese",nativeName:"basa Jawa"},ka:{name:"Georgian",nativeName:"ქართული"},kg:{name:"Kongo",nativeName:"Kikongo"},ki:{name:"Kikuyu",nativeName:"Gĩkũyũ"},kj:{name:"Kwanyama",nativeName:"Kuanyama"},kk:{name:"Kazakh",nativeName:"қазақ тілі"},kl:{name:"Kalaallisut",nativeName:"kalaallisut"},km:{name:"Khmer",nativeName:"ខេមរភាសា"},kn:{name:"Kannada",nativeName:"ಕನ್ನಡ"},ko:{name:"Korean",nativeName:"한국어"},kr:{name:"Kanuri",nativeName:"Kanuri"},ks:{name:"Kashmiri",nativeName:"कश्मीरी"},ku:{name:"Kurdish",nativeName:"Kurdî"},kv:{name:"Komi",nativeName:"коми кыв"},kw:{name:"Cornish",nativeName:"Kernewek"},ky:{name:"Kyrgyz",nativeName:"Кыргызча"},la:{name:"Latin",nativeName:"latine"},lb:{name:"Luxembourgish",nativeName:"Lëtzebuergesch"},lg:{name:"Ganda",nativeName:"Luganda"},li:{name:"Limburgish",nativeName:"Limburgs"},ln:{name:"Lingala",nativeName:"Lingála"},lo:{name:"Lao",nativeName:"ພາສາ"},lt:{name:"Lithuanian",nativeName:"lietuvių kalba"},lu:{name:"Luba-Katanga",nativeName:"Tshiluba"},lv:{name:"Latvian",nativeName:"latviešu valoda"},mg:{name:"Malagasy",nativeName:"fiteny malagasy"},mh:{name:"Marshallese",nativeName:"Kajin M̧ajeļ"},mi:{name:"Māori",nativeName:"te reo Māori"},mk:{name:"Macedonian",nativeName:"македонски јазик"},ml:{name:"Malayalam",nativeName:"മലയാളം"},mn:{name:"Mongolian",nativeName:"Монгол хэл"},mr:{name:"Marathi",nativeName:"मराठी"},ms:{name:"Malay",nativeName:"Bahasa Malaysia"},mt:{name:"Maltese",nativeName:"Malti"},my:{name:"Burmese",nativeName:"ဗမာစာ"},na:{name:"Nauru",nativeName:"Ekakairũ Naoero"},nb:{name:"Norwegian Bokmål",nativeName:"Norsk bokmål"},nd:{name:"Northern Ndebele",nativeName:"isiNdebele"},ne:{name:"Nepali",nativeName:"नेपाली"},ng:{name:"Ndonga",nativeName:"Owambo"},nl:{name:"Dutch",nativeName:"Nederlands"},nn:{name:"Norwegian Nynorsk",nativeName:"Norsk nynorsk"},no:{name:"Norwegian",nativeName:"Norsk"},nr:{name:"Southern Ndebele",nativeName:"isiNdebele"},nv:{name:"Navajo",nativeName:"Diné bizaad"},ny:{name:"Chichewa",nativeName:"chiCheŵa"},oc:{name:"Occitan",nativeName:"occitan"},oj:{name:"Ojibwe",nativeName:"ᐊᓂᔑᓈᐯᒧᐎᓐ"},om:{name:"Oromo",nativeName:"Afaan Oromoo"},or:{name:"Oriya",nativeName:"ଓଡ଼ିଆ"},os:{name:"Ossetian",nativeName:"ирон æвзаг"},pa:{name:"Panjabi",nativeName:"ਪੰਜਾਬੀ"},pi:{name:"Pāli",nativeName:"पाऴि"},pl:{name:"Polish",nativeName:"język polski"},ps:{name:"Pashto",nativeName:"پښتو"},pt:{name:"Portuguese",nativeName:"Português"},qu:{name:"Quechua",nativeName:"Runa Simi"},rm:{name:"Romansh",nativeName:"rumantsch grischun"},rn:{name:"Kirundi",nativeName:"Ikirundi"},ro:{name:"Romanian",nativeName:"Română"},ru:{name:"Russian",nativeName:"Русский"},rw:{name:"Kinyarwanda",nativeName:"Ikinyarwanda"},sa:{name:"Sanskrit",nativeName:"संस्कृतम्"},sc:{name:"Sardinian",nativeName:"sardu"},sd:{name:"Sindhi",nativeName:"सिन्धी"},se:{name:"Northern Sami",nativeName:"Davvisámegiella"},sg:{name:"Sango",nativeName:"yângâ tî sängö"},si:{name:"Sinhala",nativeName:"සිංහල"},sk:{name:"Slovak",nativeName:"slovenčina"},sl:{name:"Slovenian",nativeName:"slovenski jezik"},sm:{name:"Samoan",nativeName:"gagana fa'a Samoa"},sn:{name:"Shona",nativeName:"chiShona"},so:{name:"Somali",nativeName:"Soomaaliga"},sq:{name:"Albanian",nativeName:"Shqip"},sr:{name:"Serbian",nativeName:"српски језик"},ss:{name:"Swati",nativeName:"SiSwati"},st:{name:"Southern Sotho",nativeName:"Sesotho"},su:{name:"Sundanese",nativeName:"Basa Sunda"},sv:{name:"Swedish",nativeName:"Svenska"},sw:{name:"Swahili",nativeName:"Kiswahili"},ta:{name:"Tamil",nativeName:"தமிழ்"},te:{name:"Telugu",nativeName:"తెలుగు"},tg:{name:"Tajik",nativeName:"тоҷикӣ"},th:{name:"Thai",nativeName:"ไทย"},ti:{name:"Tigrinya",nativeName:"ትግርኛ"},tk:{name:"Turkmen",nativeName:"Türkmen"},tl:{name:"Tagalog",nativeName:"Wikang Tagalog"},tn:{name:"Tswana",nativeName:"Setswana"},to:{name:"Tonga",nativeName:"faka Tonga"},tr:{name:"Turkish",nativeName:"Türkçe"},ts:{name:"Tsonga",nativeName:"Xitsonga"},tt:{name:"Tatar",nativeName:"татар теле"},tw:{name:"Twi",nativeName:"Twi"},ty:{name:"Tahitian",nativeName:"Reo Tahiti"},ug:{name:"Uyghur",nativeName:"ئۇيغۇرچە‎"},uk:{name:"Ukrainian",nativeName:"Українська"},ur:{name:"Urdu",nativeName:"اردو"},uz:{name:"Uzbek",nativeName:"Ўзбек"},ve:{name:"Venda",nativeName:"Tshivenḓa"},vi:{name:"Vietnamese",nativeName:"Tiếng Việt"},vo:{name:"Volapük",nativeName:"Volapük"},wa:{name:"Walloon",nativeName:"walon"},wo:{name:"Wolof",nativeName:"Wollof"},xh:{name:"Xhosa",nativeName:"isiXhosa"},yi:{name:"Yiddish",nativeName:"ייִדיש"},yo:{name:"Yoruba",nativeName:"Yorùbá"},za:{name:"Zhuang",nativeName:"Saɯ cueŋƅ"},zh:{name:"Chinese",nativeName:"中文"},zu:{name:"Zulu",nativeName:"isiZulu"}};class i{static getLanguages(a=[]){return a.map(a=>({code:a,name:i.getName(a),nativeName:i.getNativeName(a)}))}static getName(a){return i.validate(a)?t[a].name:""}static getAllNames(){return Object.values(t).map(a=>a.name)}static getNativeName(a){return i.validate(a)?t[a].nativeName:""}static getAllNativeNames(){return Object.values(t).map(a=>a.nativeName)}static getCode(a){return Object.keys(t).find(e=>{const n=t[e];return n.name.toLowerCase()===a.toLowerCase()||n.nativeName.toLowerCase()===a.toLowerCase()})||""}static getAllCodes(){return Object.keys(t)}static validate(a){return t.hasOwnProperty(a)}}},576:function(a,e,n){"use strict";n.r(e);n(113),n(70),n(565),n(181),n(572);var t={props:["item"],computed:{pkgId:function(){return this.item.pkg.replace("eu.kanade.tachiyomi.extension.","")},pkgName:function(){return this.item.name.split(": ")[1]},pkgVersion:function(){return"v"+this.item.version},iconUrl:function(){var a=this.item.apk.substring(0,this.item.apk.lastIndexOf("."));return"https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/icon/".concat(a,".png")},apkUrl:function(){return"https://raw.githubusercontent.com/tachiyomiorg/tachiyomi-extensions/repo/apk/".concat(this.item.apk)}}},i=(n(574),n(29)),m=Object(i.a)(t,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return a.item?n("div",{staticClass:"extension"},[n("a",{staticClass:"header-anchor",attrs:{href:"#"+a.pkgId,"aria-hidden":"true"},on:{click:function(a){a.stopPropagation()}}},[a._v("#")]),a._v(" "),n("img",{staticClass:"extension-icon",attrs:{src:a.iconUrl,loading:"lazy",width:"42",height:"42"}}),a._v(" "),n("div",{staticClass:"extension-text"},[n("div",{staticClass:"upper"},[a._v("\n\t\t\t"+a._s(a.pkgName)+"\n\t\t\t"),n("Badge",{attrs:{text:a.pkgVersion}})],1),a._v(" "),n("div",{staticClass:"lower"},[a._v("\n\t\t\t"+a._s(a.pkgId)+"\n\t\t")])]),a._v(" "),n("a",{staticClass:"extension-download",attrs:{href:a.apkUrl,title:"Download APK",download:""}},[n("MaterialIcon",{attrs:{icon:"cloud_download"}}),a._v(" "),n("span",[a._v("Download")])],1)]):a._e()}),[],!1,null,null,null);e.default=m.exports},581:function(a,e,n){"use strict";n(571)},585:function(a,e,n){"use strict";n.r(e);var t=n(567),i={components:{ExtensionItem:n(576).default},props:["list","totalCount"],computed:{groupName:function(){var a=this.list[0];return"en"===a.lang?Object(t.b)(a.lang):Object(t.a)(a.lang)}},methods:{simpleLangName:t.b,langName:t.a}},m=(n(581),n(29)),s=Object(m.a)(i,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"extension-group"},[n("h3",[a._v("\n\t\t"+a._s(a.groupName)+"\n\n\t\t"),n("span",{staticClass:"extensions-total"},[a._v("\n\t\t\tTotal:\n\t\t\t"),n("span",{staticClass:"extensions-total-sum"},[a._v("\n\t\t\t\t"+a._s(a.totalCount)+"\n\t\t\t")])])]),a._v(" "),a._l(a.list,(function(a){return n("div",{key:a.apk,staticClass:"anchor",attrs:{id:a.pkg.replace("eu.kanade.tachiyomi.extension.","")}},[n("ExtensionItem",{attrs:{item:a}})],1)}))],2)}),[],!1,null,null,null);e.default=s.exports}}]);