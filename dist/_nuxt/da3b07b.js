(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(t,e,o){var n=o(8);e.f=n},263:function(t,e,o){"use strict";o(264),o(267),o(29),o(34),o(35),o(189);var n=o(136);e.a={head:function(){var t=this,e="https://example.com",o={ja:"***",en:"***"},head={meta:[],link:[]},r=this.$route.path.includes("/en");if(head.meta.push({hid:"og:site_name",property:"og:site_name",content:o[this.$i18n.locale]}),this.bodyAttrs&&(head.bodyAttrs=this.bodyAttrs),this.link&&(head.link=[].concat(Object(n.a)(head.link),Object(n.a)(this.link))),r?head.meta.push({hid:"og:site_name",property:"og:site_name",content:o.en}):head.meta.push({hid:"og:site_name",property:"og:site_name",content:o.ja}),this.meta.title&&"/"!==this.$route.path&&"/en"!==this.$route.path){var title=function(){var title=t.meta.title;return"".concat(title," | ").concat(o[t.$i18n.locale])}();head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}else{var c=o[t.$i18n.locale];head.title=c,head.meta.push({hid:"og:title",property:"og:title",content:c})}this.meta.description&&(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})),"/"===this.$route.path?head.meta.push({hid:"og:type",property:"og:type",content:"website"}):head.meta.push({hid:"og:type",property:"og:type",content:"article"});var l="".concat(e).concat(this.$router.history.base).concat(this.$route.path);if(head.meta.push({hid:"og:url",property:"og:url",content:l}),this.meta.image){var f="".concat(e).concat(this.$router.history.base).concat("/ogp").concat(this.meta.image);head.meta.push({hid:"og:image",property:"og:image",content:f})}else head.meta.push({hid:"og:image",property:"og:image",content:"".concat(e).concat("/ogp","/common1.jpg")});return head}}},264:function(t,e,o){"use strict";var n=o(4),r=o(7),c=o(36),l=o(31),f=o(16),d=o(135),h=o(188),m=o(5),y=o(15),v=o(94),_=o(12),w=o(9),x=o(26),k=o(33),C=o(90),S=o(51),O=o(67),P=o(69),$=o(132),j=o(265),T=o(134),H=o(50),B=o(21),N=o(91),E=o(25),L=o(19),I=o(133),A=o(92),F=o(68),J=o(93),M=o(8),W=o(262),D=o(266),Q=o(41),U=o(30),z=o(40).forEach,G=A("hidden"),K=M("toPrimitive"),R=U.set,V=U.getterFor("Symbol"),X=Object.prototype,Y=r.Symbol,Z=c("JSON","stringify"),tt=H.f,et=B.f,ot=j.f,nt=N.f,it=I("symbols"),st=I("op-symbols"),at=I("string-to-symbol-registry"),ct=I("symbol-to-string-registry"),lt=I("wks"),ut=r.QObject,pt=!ut||!ut.prototype||!ut.prototype.findChild,ft=f&&m((function(){return 7!=O(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,o){var n=tt(X,e);n&&delete X[e],et(t,e,o),n&&t!==X&&et(X,e,n)}:et,ht=function(t,e){var symbol=it[t]=O(Y.prototype);return R(symbol,{type:"Symbol",tag:t,description:e}),f||(symbol.description=e),symbol},mt=h?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},yt=function(t,e,o){t===X&&yt(st,e,o),w(t);var n=C(e,!0);return w(o),y(it,n)?(o.enumerable?(y(t,G)&&t[G][n]&&(t[G][n]=!1),o=O(o,{enumerable:S(0,!1)})):(y(t,G)||et(t,G,S(1,{})),t[G][n]=!0),ft(t,n,o)):et(t,n,o)},gt=function(t,e){w(t);var o=k(e),n=P(o).concat(wt(o));return z(n,(function(e){f&&!vt.call(o,e)||yt(t,e,o[e])})),t},vt=function(t){var e=C(t,!0),o=nt.call(this,e);return!(this===X&&y(it,e)&&!y(st,e))&&(!(o||!y(this,e)||!y(it,e)||y(this,G)&&this[G][e])||o)},_t=function(t,e){var o=k(t),n=C(e,!0);if(o!==X||!y(it,n)||y(st,n)){var r=tt(o,n);return!r||!y(it,n)||y(o,G)&&o[G][n]||(r.enumerable=!0),r}},bt=function(t){var e=ot(k(t)),o=[];return z(e,(function(t){y(it,t)||y(F,t)||o.push(t)})),o},wt=function(t){var e=t===X,o=ot(e?st:k(t)),n=[];return z(o,(function(t){!y(it,t)||e&&!y(X,t)||n.push(it[t])})),n};(d||(L((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=J(t),o=function(t){this===X&&o.call(st,t),y(this,G)&&y(this[G],e)&&(this[G][e]=!1),ft(this,e,S(1,t))};return f&&pt&&ft(X,e,{configurable:!0,set:o}),ht(e,t)}).prototype,"toString",(function(){return V(this).tag})),L(Y,"withoutSetter",(function(t){return ht(J(t),t)})),N.f=vt,B.f=yt,H.f=_t,$.f=j.f=bt,T.f=wt,W.f=function(t){return ht(M(t),t)},f&&(et(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),l||L(X,"propertyIsEnumerable",vt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),z(P(lt),(function(t){D(t)})),n({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=String(t);if(y(at,e))return at[e];var symbol=Y(e);return at[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!mt(t))throw TypeError(t+" is not a symbol");if(y(ct,t))return ct[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!f},{create:function(t,e){return void 0===e?O(t):gt(O(t),e)},defineProperty:yt,defineProperties:gt,getOwnPropertyDescriptor:_t}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:bt,getOwnPropertySymbols:wt}),n({target:"Object",stat:!0,forced:m((function(){T.f(1)}))},{getOwnPropertySymbols:function(t){return T.f(x(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!d||m((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,o){for(var n,r=[t],c=1;arguments.length>c;)r.push(arguments[c++]);if(n=e,(_(e)||void 0!==t)&&!mt(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!mt(e))return e}),r[1]=e,Z.apply(null,r)}});Y.prototype[K]||E(Y.prototype,K,Y.prototype.valueOf),Q(Y,"Symbol"),F[G]=!0},265:function(t,e,o){var n=o(33),r=o(132).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return r(t)}catch(t){return l.slice()}}(t):r(n(t))}},266:function(t,e,o){var path=o(187),n=o(15),r=o(262),c=o(21).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:r.f(t)})}},267:function(t,e,o){"use strict";var n=o(4),r=o(16),c=o(7),l=o(15),f=o(12),d=o(21).f,h=o(186),m=c.Symbol;if(r&&"function"==typeof m&&(!("description"in m.prototype)||void 0!==m().description)){var y={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new m(t):void 0===t?m():m(t);return""===t&&(y[e]=!0),e};h(v,m);var _=v.prototype=m.prototype;_.constructor=v;var w=_.toString,x="Symbol(test)"==String(m("test")),k=/^Symbol\((.*)\)[^)]+$/;d(_,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=w.call(symbol);if(l(y,symbol))return"";var desc=x?t.slice(7,-1):t.replace(k,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:v})}},269:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"いつか来る災害に備えよう","text01":"「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。","text02":"今すぐ備蓄を<br />始める！"},"en":{"title":"Prepare for the future disaster","text01":"For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles.","text02":"Start &quot;stockpiling&quot; NOW!"}}'),delete t.options._Ctor}},270:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"title":"自分に合った備蓄を調べてみよう","text01":"これから始まる3つの質問に答えるだけで、あなたのご家庭に合わせた備蓄品目と必要量のリストが表示されます。<br /> リストを参考にご家庭で必要なものを確認しながら、まずはできるところから始めましょう！","text02":"<span>あなたと、一緒に住んでいる人の</span> それぞれの性別・年代を教えてね","text03":"<span>{people}</span>人で住んでいる。","text04":"つぎへ"},"en":{"title":"Check the suitable emergency stockpiles for you","text01":"Answer these three questions below, and you can see the list of suitable emergency stockpiles for your family and the quantity needed.Use the list to find out what you need at home and start where you can!","text02":"Enter the gender and age of you and each person who you are living with.","text03":"There are <span>{people}</span> in my family.","text04":"Next"}}'),delete t.options._Ctor}},271:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ja":{"meta":{"description":"「災害に備えた備蓄」と聞いてもピンと来ない方や興味はあるけど何をどのくらい備蓄すれば良いか分からない方向けに、備蓄のイロハや備えておくと良い品目などをご紹介するサイトです。"}},"en":{"meta":{"description":"For some people, the words “stockpiling for possible disasters” do not ring a bell and, even those who are interested in stockpiling might find it difficult to figure out what and how much they should stockpile. Tokyo Stockpile Navi website provides an introductory explanation of stockpiling including items recommended for stockpiles."}}}'),delete t.options._Ctor}},286:function(t,e,o){"use strict";var n=o(269),r=o.n(n);e.default=r.a},287:function(t,e,o){"use strict";var n=o(270),r=o.n(n);e.default=r.a},288:function(t,e,o){"use strict";var n=o(271),r=o.n(n);e.default=r.a},305:function(t,e,o){"use strict";o.r(e);var head=o(263),n={name:"HomeLead"},r=o(10),c=o(286),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"HomeLead PageBlock"},[o("section",{staticClass:"Container -s"},[o("h1",{staticClass:"PageBlock__title"},[t._v(t._s(t.$t("title")))]),t._v(" "),o("div",{staticClass:"Container -xs"},[o("p",{staticClass:"PageBlock__text"},[t._v("\n        "+t._s(t.$t("text01"))+"\n      ")])]),t._v(" "),o("div",{staticClass:"HomeLead__button"},[o("div",{staticClass:"Button -yellow -l"},[o("nuxt-link",{staticClass:"Button__link",attrs:{to:t.localePath(t.$getPath("tool"))},domProps:{innerHTML:t._s(t.$t("text02"))}})],1)])])])}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(component);var l=component.exports,f={name:"HomeTool",data:function(){return{people:1}}},d=o(287),h=Object(r.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"HomeTool PageBlock"},[o("section",{staticClass:"Container -s"},[o("h1",{staticClass:"PageBlock__title"},[t._v(t._s(t.$t("title")))]),t._v(" "),o("div",{staticClass:"Container -xs"},[o("p",{staticClass:"PageBlock__text",domProps:{innerHTML:t._s(t.$t("text01"))}})]),t._v(" "),o("div",{staticClass:"HomeTool__input"},[o("div",{staticClass:"ToolInput ToolStep01"},[t._m(0),t._v(" "),o("div",{staticClass:"ToolInput__title",domProps:{innerHTML:t._s(t.$t("text02"))}}),t._v(" "),o("div",{staticClass:"ToolStep01__people",domProps:{innerHTML:t._s(t.$t("text03",{people:t.people}))}}),t._v(" "),o("ul",{staticClass:"ToolStep01__indexList"},[t._l(9,(function(e){return[o("li",{key:"homeTool"+e},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.people,expression:"people"}],attrs:{id:"count"+e,type:"radio"},domProps:{value:e,checked:t._q(t.people,e)},on:{change:function(o){t.people=e}}}),t._v(" "),o("label",{attrs:{tabindex:"0",for:"count"+e}},[t._v(t._s(e))])])]}))],2),t._v(" "),o("div",{staticClass:"ToolInput__button"},[o("div",{staticClass:"Button -aqua"},[o("nuxt-link",{staticClass:"Button__link",attrs:{to:{path:t.localePath(t.$getPath("tool")),query:{people:t.people},hash:"#toolStep01"}}},[t._v("\n              "+t._s(t.$t("text04"))+"\n            ")])],1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ToolInput__step"},[e("span",{staticClass:"ToolInput__stepCurrent"},[this._v("01")]),this._v(" "),e("span",{staticClass:"ToolInput__stepTotal"},[this._v("03")])])}],!1,null,null,null);"function"==typeof d.default&&Object(d.default)(h);var m={name:"PageHome",components:{HomeLead:l,HomeTool:h.exports},mixins:[head.a],data:function(){return{bodyAttrs:{class:"PageHome"},meta:{description:this.$i18n.t("meta.description")}}}},y=o(288),v=Object(r.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("home-lead"),this._v(" "),e("home-tool")],1)}),[],!1,null,null,null);"function"==typeof y.default&&Object(y.default)(v);e.default=v.exports}}]);