webpackJsonp([3],{"8/c5":function(t,n,e){"use strict";var a=e("cVso"),o=e("NMGV"),c=e("VU/8"),u=c(a.a,o.a,!1,null,null,null);n.a=u.exports},"DP/h":function(t,n,e){"use strict";var a=e("7+uW"),o=e("/ocq"),c=e("8/c5");a.default.use(o.a),n.a=[{path:"/",component:c.a},{path:"/index",component:c.a}]},M93x:function(t,n,e){"use strict";function a(t){e("VMGc")}var o=e("xJD8"),c=e("gdtf"),u=e("VU/8"),s=a,r=u(o.a,c.a,!1,s,null,null);n.a=r.exports},NMGV:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t._v("欢迎，这里是首页\n    "),e("input",{staticClass:"base-btn",attrs:{type:"button",value:"退出登录"},on:{click:t.logout}})])},o=[],c={render:a,staticRenderFns:o};n.a=c},VMGc:function(t,n){},cVso:function(t,n,e){"use strict";var a=(e("TXMN"),e("mtWM")),o=e.n(a),c="//"+window.location.host+"/center/ajaxlogout";n.a={data:function(){return{}},computed:{},methods:{logout:function(){o.a.get(c).then(function(t){var n=t.data;1==n.status&&(window.location.href=n.data.go)})}},created:function(){document.title="登录"}}},gdtf:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;return(t._self._c||n)("router-view",{staticClass:"view",attrs:{"keep-alive":"",transition:"","transition-mode":"out-in"}})},o=[],c={render:a,staticRenderFns:o};n.a=c},vVJd:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7+uW"),o=e("/ocq"),c=e("M93x"),u=e("DP/h");a.default.use(o.a);var s=new o.a({mode:"history",routes:u.a});new a.default({el:"#app",router:s,template:"<App/>",components:{App:c.a}})},xJD8:function(t,n,e){"use strict";n.a={components:{}}}},["vVJd"]);
//# sourceMappingURL=indexApp.38b951a0358e9c13f5a8.js.map