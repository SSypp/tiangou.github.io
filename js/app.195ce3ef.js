(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bd9":function(t,e,n){"use strict";var a=n("1085"),r=n.n(a);r.a},1085:function(t,e,n){},"3b09":function(t,e,n){"use strict";var a=n("a07e"),r=n.n(a);r.a},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("66cf");var a=n("343b"),r=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("Header"),n("Swiper"),n("Date",{attrs:{date:t.date}}),n("van-pull-refresh",{staticClass:"wrapper",on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("div",{staticClass:"tg"},[t._v(t._s(t.tg_content))]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.tg_content&&t.tg_content.length>0,expression:"tg_content && tg_content.length > 0"}],staticClass:"tag-read",attrs:{"data-clipboard-text":t.tg_content},on:{click:t.copy}},[t._v("复制日记")])])],1)},s=[],u=(n("e7e5"),n("d399")),l=(n("96cf"),n("1da1")),p=(n("ab71"),n("58e6")),d=n("b311"),f=n.n(d),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"contant",on:{click:t.handleVconsole}},[n("p",[t._v("我看诸君皆舔狗，料诸君看我亦如是")]),n("p",[t._v("--来自知乎")])])])},b=[],m=n("3a34"),v=n.n(m),g={name:"myheader",data:function(){return{count:0}},methods:{handleVconsole:function(){if(this.count>=2&&this.count<5&&(Object(u["a"])("再点击"+(4-this.count)+"次就可以开启调试模式"),4===this.count)){Object(u["a"])("您已开启调试模式");new v.a}this.count++}}},w=g,y=(n("0bd9"),n("2877")),_=Object(y["a"])(w,h,b,!1,null,"6a298d44",null),j=_.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.images,(function(e,a){return n("van-swipe-item",{key:a,on:{click:function(n){return t.handleTodetail(e.link)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgUrl,expression:"img.imgUrl"}],attrs:{alt:""}})])})),1)],1)},x=[],O=(n("4b0a"),n("2bb1")),C=(n("7844"),n("5596")),T={name:"swiper",components:{VanSwipe:C["a"],VanSwipeItem:O["a"]},data:function(){return{images:[{imgUrl:"http://q81nj3xbk.bkt.clouddn.com/1.png",link:"https://www.zhihu.com/topic/20674003/intro"},{imgUrl:"http://q81nj3xbk.bkt.clouddn.com/2.png",link:"https://zhuanlan.zhihu.com/p/118112830"},{imgUrl:"http://q81nj3xbk.bkt.clouddn.com/3.png",link:"https://zhuanlan.zhihu.com/p/103003570"},{imgUrl:"http://q81nj3xbk.bkt.clouddn.com/4.png",link:"https://www.zhihu.com/question/379177337/answer/1100952824"}]}},methods:{handleTodetail:function(t){window.location.href=t}}},S=T,$=(n("3b09"),Object(y["a"])(S,k,x,!1,null,"03f131aa",null)),z=$.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"dateinfo"},[n("span",{staticClass:"day"},[t._v(t._s(t.date.day))]),n("span",{staticClass:"wth"},[t._v(t._s(t.date.wth))])])])},P=[],R={name:"date",props:{date:{type:Object,default:{}}}},U=R,q=(n("9e0c"),Object(y["a"])(U,G,P,!1,null,"acd3e1f0",null)),E=q.exports,H={name:"HelloWorld",components:{VanPullRefresh:p["a"],Header:j,Swiper:z,Date:E},data:function(){return{count:0,isLoading:!1,date:{day:"",wth:""},tg_content:""}},created:function(){this.handleGetTimeAndWth(),this.handleGetTianGou()},methods:{onRefresh:function(){var t=this;setTimeout((function(){t.handleGetTianGou(),t.isLoading=!1}),1e3)},handleGetTimeAndWth:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("http://api.k780.com/?app=weather.today&weaid=1&appkey=49685&sign=2731453be5c8386b4a1235899f823883&format=json");case 2:if(n=e.sent,a=n.data,"1"==a.success){e.next=6;break}return e.abrupt("return");case 6:t.date.day=a.result.days,t.date.wth=a.result.weather;case 8:case"end":return e.stop()}}),e)})))()},handleGetTianGou:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("http://api.03c3.cn/lowly/api/");case 2:if(n=e.sent,a=n.data,1==a.status){e.next=6;break}return e.abrupt("return",Object(u["a"])(a.msg));case 6:Object(u["a"])("获取成功"),t.tg_content=a.data.content.content;case 8:case"end":return e.stop()}}),e)})))()},copy:function(){var t=new f.a(".tag-read");t.on("success",(function(e){Object(u["a"])("复制成功"),t.destroy()})),t.on("error",(function(e){Object(u["a"])("复制成功"),t.destroy()}))}}},L=H,V=(n("7dc9"),Object(y["a"])(L,c,s,!1,null,"748f04bf",null)),W=V.exports,M={name:"App",components:{HelloWorld:W}},A=M,D=Object(y["a"])(A,o,i,!1,null,null,null),J=D.exports,N=(n("4ee2"),n("bc3a")),I=n.n(N);r["a"].use(a["a"]),r["a"].prototype.$http=I.a,r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(J)}}).$mount("#app")},5894:function(t,e,n){},"7dc9":function(t,e,n){"use strict";var a=n("8f5b"),r=n.n(a);r.a},"8f5b":function(t,e,n){},"9e0c":function(t,e,n){"use strict";var a=n("5894"),r=n.n(a);r.a},a07e:function(t,e,n){}});
//# sourceMappingURL=app.195ce3ef.js.map