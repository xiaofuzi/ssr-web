webpackJsonp([0],{149:function(t,e,n){n(175);var r=n(17)(n(162),n(190),null,null);t.exports=r.exports},157:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={baseUrl:"/nuxt-blog"};e.default={data:function(){return{}},props:{to:String},computed:{path:function(){return r.baseUrl+this.to}},mounted:function(){}}},158:function(t,e,n){var r=n(17)(n(157),n(159),null,null);t.exports=r.exports},159:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:t.path}},[t._t("default")],2)},staticRenderFns:[]}},161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(158),a=n.n(r);e.default={props:{navItems:{type:Array,required:!0},logo:{type:String}},components:{aLink:a.a}}},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(183),a=n.n(r),s=n(182),o=n.n(s);e.default={data:function(){return{navItems:[{text:"Home",url:"/"},{text:"Posts",url:"/page/1"},{text:"Ask",url:"/asks/1?currentPage=1"},{text:"About",url:"/about"}]}},components:{MyFooter:o.a,WebNav:a.a}}},171:function(t,e){},174:function(t,e){},175:function(t,e){},182:function(t,e,n){n(174);var r=n(17)(null,n(189),null,null);t.exports=r.exports},183:function(t,e,n){n(171);var r=n(17)(n(161),n(184),null,null);t.exports=r.exports},184:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-default main-menu"},[n("div",{staticClass:"container"},[n("div",{staticClass:"logo"},[n("a-link",{attrs:{to:"/"}},[n("h2",[t._v("ffe")])])],1),n("div",{staticClass:"nav-item"},[n("ul",{staticClass:"nav navbar-nav navbar-right"},t._l(t.navItems,function(e){return n("li",[n("a-link",{attrs:{to:e.url}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]}},189:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  Visit our website for more documentation : "),n("a",{attrs:{href:"https://nuxtjs.org",target:"_blank"}},[t._v("nuxtjs.org")])])}]}},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("web-nav",{attrs:{"nav-items":t.navItems}}),n("nuxt"),n("my-footer")],1)},staticRenderFns:[]}}});